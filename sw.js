// Service Worker for TQC AI Test - 推播通知
const CACHE_NAME = 'tqc-ai-test-v1.2';
const urlsToCache = [
  '/TQC_AI_TEST/',
  '/TQC_AI_TEST/index.html',
  '/TQC_AI_TEST/style.css',
  '/TQC_AI_TEST/script_rd.js'
];

// 安裝階段 - 緩存重要文件
self.addEventListener('install', event => {
  console.log('Service Worker 安裝中...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('緩存文件中...');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('所有文件已緩存，立即激活');
        return self.skipWaiting();
      })
  );
});

// 激活階段 - 清理舊緩存
self.addEventListener('activate', event => {
  console.log('Service Worker 激活中...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('刪除舊緩存:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('Service Worker 已激活');
      return self.clients.claim();
    })
  );
});

// 攔截請求 - 使用緩存或網絡
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // 返回緩存或網絡請求
        return response || fetch(event.request);
      }
    )
  );
});

// 🔔 推播通知處理
self.addEventListener('push', event => {
  console.log('收到推播通知:', event);
  
  if (!event.data) {
    console.log('推播通知沒有數據');
    return;
  }

  try {
    const data = event.data.json();
    const options = {
      body: data.body || '🔔 該回來練習 TQC AI 測驗了！',
      icon: '/TQC_AI_TEST/icon.png',
      badge: '/TQC_AI_TEST/badge.png',
      image: '/TQC_AI_TEST/notification-image.png',
      tag: 'study-reminder',
      requireInteraction: true, // 需要用戶互動
      actions: [
        {
          action: 'open',
          title: '開始練習'
        },
        {
          action: 'snooze',
          title: '稍後提醒'
        }
      ],
      data: {
        url: 'https://jeremyzun.github.io/TQC_AI_TEST/'
      }
    };

    event.waitUntil(
      self.registration.showNotification(data.title || 'TQC AI 學習提醒', options)
    );
    
    console.log('推播通知已顯示');
  } catch (error) {
    console.log('推播通知處理錯誤:', error);
    
    // 備用通知
    const options = {
      body: '🔔 該回來練習 TQC AI 測驗了！保持學習節奏很重要！',
      icon: '/TQC_AI_TEST/icon.png',
      tag: 'study-reminder'
    };
    
    event.waitUntil(
      self.registration.showNotification('TQC AI 學習提醒', options)
    );
  }
});

// 🔔 通知點擊處理
self.addEventListener('notificationclick', event => {
  console.log('通知被點擊:', event);
  event.notification.close();

  if (event.action === 'open') {
    // 點擊「開始練習」
    event.waitUntil(
      clients.openWindow('https://jeremyzun.github.io/TQC_AI_TEST/')
    );
  } else if (event.action === 'snooze') {
    // 點擊「稍後提醒」 - 可以設置延遲提醒
    console.log('用戶選擇稍後提醒');
  } else {
    // 直接點擊通知
    event.waitUntil(
      clients.matchAll({type: 'window'}).then(windowClients => {
        // 檢查是否已經有打開的窗口
        for (let client of windowClients) {
          if (client.url.includes('jeremyzun.github.io/TQC_AI_TEST') && 'focus' in client) {
            return client.focus();
          }
        }
        // 沒有打開的窗口，打開新窗口
        if (clients.openWindow) {
          return clients.openWindow('https://jeremyzun.github.io/TQC_AI_TEST/');
        }
      })
    );
  }
});

// 🔔 通知關閉處理
self.addEventListener('notificationclose', event => {
  console.log('通知被關閉:', event);
});