// Service Worker for TQC AI Test - 推播通知
const CACHE_NAME = 'tqc-ai-test-v1.2';
const urlsToCache = [
  '/TQC_AI_TEST/',
  '/TQC_AI_TEST/index.html',
  '/TQC_AI_TEST/style.css',
  '/TQC_AI_TEST/script_rd.js',
  '/TQC_AI_TEST/icon.png'
];

// 安裝 Service Worker
self.addEventListener('install', event => {
  console.log('Service Worker 安裝中...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('快取已開啟');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('所有資源已快取');
        return self.skipWaiting();
      })
  );
});

// 激活 Service Worker
self.addEventListener('activate', event => {
  console.log('Service Worker 激活中...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('刪除舊快取:', cacheName);
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

// 攔截請求
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // 返回快取版本或網路請求
        return response || fetch(event.request);
      }
    )
  );
});

// 處理推播通知
self.addEventListener('push', event => {
  console.log('收到推播通知:', event);
  
  if (!event.data) return;
  
  const data = event.data.json();
  const options = {
    body: data.body || '🔔 該回來練習 TQC AI 測驗了！',
    icon: '/TQC_AI_TEST/icon.png',
    badge: '/TQC_AI_TEST/icon.png',
    image: '/TQC_AI_TEST/icon.png',
    tag: 'study-reminder',
    requireInteraction: true,
    actions: [
      {
        action: 'open',
        title: '開始練習'
      },
      {
        action: 'dismiss',
        title: '稍後再說'
      }
    ],
    data: {
      url: 'https://jeremyzun.github.io/TQC_AI_TEST/'
    }
  };

  event.waitUntil(
    self.registration.showNotification(data.title || 'TQC AI 學習提醒', options)
  );
});

// 處理通知點擊
self.addEventListener('notificationclick', event => {
  console.log('通知被點擊:', event);
  event.notification.close();

  if (event.action === 'open') {
    // 用戶點擊「開始練習」
    event.waitUntil(
      clients.matchAll({ type: 'window' }).then(windowClients => {
        // 檢查是否已經有打開的窗口
        for (let client of windowClients) {
          if (client.url.includes('jeremyzun.github.io/TQC_AI_TEST') && 'focus' in client) {
            return client.focus();
          }
        }
        // 如果沒有打開的窗口，開啟新窗口
        if (clients.openWindow) {
          return clients.openWindow('https://jeremyzun.github.io/TQC_AI_TEST/');
        }
      })
    );
  } else if (event.action === 'dismiss') {
    // 用戶點擊「稍後再說」
    console.log('用戶選擇稍後再說');
  } else {
    // 用戶直接點擊通知主體
    event.waitUntil(
      clients.openWindow('https://jeremyzun.github.io/TQC_AI_TEST/')
    );
  }
});

// 處理通知關閉
self.addEventListener('notificationclose', event => {
  console.log('通知被關閉:', event);
});

// 後台同步功能（用於定期提醒）
self.addEventListener('sync', event => {
  console.log('後台同步事件:', event.tag);
  
  if (event.tag === 'study-reminder-sync') {
    event.waitUntil(
      // 這裡可以添加後台同步邏輯
      console.log('執行後台同步 - 發送學習提醒')
    );
  }
});