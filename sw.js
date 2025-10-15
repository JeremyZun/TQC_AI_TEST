// Service Worker for TQC AI Test - 完整推播通知系統
const CACHE_NAME = 'tqc-ai-test-v2.0';
const urlsToCache = [
  '/TQC_AI_TEST/',
  '/TQC_AI_TEST/index.html',
  '/TQC_AI_TEST/style.css',
  '/TQC_AI_TEST/script_rd.js'
  // 移除所有 icon 引用
];

// Firebase 配置
const firebaseConfig = {
  apiKey: "AIzaSyC4VlOe62VdS9v2J9Z6X7Q8WbRcM3N1B2C3D",
  authDomain: "tqc-ai-test.firebaseapp.com",
  projectId: "tqc-ai-test",
  storageBucket: "tqc-ai-test.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef123456"
};

// 安裝階段
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
      .catch(error => {
        console.log('緩存失敗，但繼續安裝:', error);
        return self.skipWaiting();
      })
  );
});

// 激活階段
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

// 攔截請求
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});

// 推播通知處理 - 增強版本
self.addEventListener('push', event => {
  console.log('收到推播通知:', event);
  
  let data = {};
  try {
    data = event.data ? event.data.json() : {};
  } catch (error) {
    console.log('解析推播數據失敗，使用默認數據');
    data = {
      title: 'TQC AI 學習提醒',
      body: '🔔 該回來練習 TQC AI 測驗了！保持學習節奏很重要！',
      // 移除 icon 相關設定
      tag: 'study-reminder',
      timestamp: new Date().toISOString(),
      data: {
        url: 'https://jeremyzun.github.io/TQC_AI_TEST/',
        type: 'study_reminder'
      }
    };
  }

  const options = {
    body: data.body || '🔔 該回來練習 TQC AI 測驗了！',
    // 移除 icon、badge、image 設定
    tag: data.tag || 'study-reminder',
    requireInteraction: true,
    vibrate: [200, 100, 200],
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
    data: data.data || {
      url: 'https://jeremyzun.github.io/TQC_AI_TEST/',
      timestamp: new Date().toISOString()
    }
  };

  event.waitUntil(
    self.registration.showNotification(data.title || 'TQC AI 學習提醒', options)
  );
});

// 通知點擊處理
self.addEventListener('notificationclick', event => {
  console.log('通知被點擊:', event);
  event.notification.close();

  const urlToOpen = event.notification.data?.url || 'https://jeremyzun.github.io/TQC_AI_TEST/';

  if (event.action === 'open') {
    // 點擊「開始練習」
    event.waitUntil(
      clients.openWindow(urlToOpen)
    );
  } else if (event.action === 'snooze') {
    // 點擊「稍後提醒」 - 設置 2 小時後再次提醒
    event.waitUntil(
      self.registration.showNotification('TQC AI 學習提醒', {
        body: '⏰ 我們會在 2 小時後再次提醒您',
        icon: '/TQC_AI_TEST/icon.png',
        tag: 'snooze-reminder'
      })
    );
  } else {
    // 直接點擊通知
    event.waitUntil(
      clients.matchAll({type: 'window'}).then(windowClients => {
        for (let client of windowClients) {
          if (client.url.includes('jeremyzun.github.io/TQC_AI_TEST') && 'focus' in client) {
            return client.focus();
          }
        }
        if (clients.openWindow) {
          return clients.openWindow(urlToOpen);
        }
      })
    );
  }

  // 發送點擊事件
  event.waitUntil(
    self.clients.matchAll().then(clients => {
      clients.forEach(client => {
        client.postMessage({
          type: 'NOTIFICATION_CLICKED',
          action: event.action || 'direct',
          data: event.notification.data
        });
      });
    })
  );
});

// 通知關閉處理
self.addEventListener('notificationclose', event => {
  console.log('通知被關閉:', event);
  
  // 發送關閉事件
  self.clients.matchAll().then(clients => {
    clients.forEach(client => {
      client.postMessage({
        type: 'NOTIFICATION_CLOSED',
        data: event.notification.data
      });
    });
  });
});

// 後台同步處理
self.addEventListener('sync', event => {
  console.log('後台同步事件:', event.tag);
  
  if (event.tag === 'background-sync') {
    event.waitUntil(
      doBackgroundSync()
    );
  }
});

async function doBackgroundSync() {
  try {
    // 檢查是否需要發送提醒
    const lastReminder = await getLastReminderTime();
    const now = new Date().getTime();
    const hoursSinceLastReminder = (now - lastReminder) / (1000 * 60 * 60);
    
    if (hoursSinceLastReminder > 6) {
      // 發送後台提醒
      await self.registration.showNotification('TQC AI 學習提醒', {
        body: '📚 距離上次學習已經一段時間了，回來繼續進步吧！',
        icon: '/TQC_AI_TEST/icon.png',
        tag: 'background-reminder'
      });
      
      // 更新最後提醒時間
      await setLastReminderTime(now);
    }
  } catch (error) {
    console.log('後台同步失敗:', error);
  }
}

// 工具函數
async function getLastReminderTime() {
  return new Promise((resolve) => {
    self.clients.matchAll().then(clients => {
      if (clients && clients.length > 0) {
        clients[0].postMessage({
          type: 'GET_LAST_REMINDER'
        });
      }
      resolve(0);
    });
  });
}

async function setLastReminderTime(time) {
  return new Promise((resolve) => {
    self.clients.matchAll().then(clients => {
      if (clients && clients.length > 0) {
        clients[0].postMessage({
          type: 'SET_LAST_REMINDER',
          time: time
        });
      }
      resolve();
    });
  });
}