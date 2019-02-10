# Service Worker
[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)
### 1. Manifest
1. Generate `manifest.json` [here](https://app-manifest.firebaseapp.com/)
2. Add these lines to `index.html`
    ```
    <!-- Manifest Chrome -->
    <link rel="manifest" href="/manifest.json">
    <!-- Manifest Safari -->
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="apple-mobile-web-app-title" content="Service Worker">
    <link rel="apple-touch-icon" href="/apple-icon-57x57.png" sizes="57x57">
    <link rel="apple-touch-icon" href="/apple-icon-60x60.png" sizes="60x60">
    <link rel="apple-touch-icon" href="/apple-icon-72x72.png" sizes="72x72">
    <link rel="apple-touch-icon" href="/apple-icon-76x76.png" sizes="76x76">
    <link rel="apple-touch-icon" href="/apple-icon-114x114.png" sizes="114x114">
    <link rel="apple-touch-icon" href="/apple-icon-120x120.png" sizes="120x120">
    <link rel="apple-touch-icon" href="/apple-icon-144x144.png" sizes="144x144">
    <link rel="apple-touch-icon" href="/apple-icon-152x152.png" sizes="152x152">
    <link rel="apple-touch-icon" href="/apple-icon-180x180.png" sizes="180x180">
    <!--IE Manifest-->
    <meta name="msapplication-TileImage" content="/app-icon-144x144.png">
    <meta name="msapplication-TileColor" content="#fff">
    <meta name="theme-color" content="#3f51b5">
    ```
3. Install Banner (Ask `Add to Homescreen` on mobile) [here](https://developers.google.com/web/fundamentals/app-install-banners/#listen_for_beforeinstallprompt)

### 2. Service Worker Events (Listenable Events)
| Events | Source |
| -- | -- |
| Fetch | [Browser or page related Javascript initiates a Fetch (Http Request)](https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent) |
| Push Notification | [Service Worker receive Web Push Notification](https://developers.google.com/web/fundamentals/codelabs/push-notifications/) |
| Notification Interaction | [User interact with displayed notification](https://developers.google.com/web/fundamentals/push-notifications/notification-behaviour) |
| Background Sync| [Service Worker receives background sync event (internet connection was restore)](https://developers.google.com/web/updates/2015/12/background-sync) |
| Service Worker Lifecycle | [Lifecycle install, activation, ..](https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle)|

##### 2.1 Fetch
##### 2.2 Push Notification
- _Check Notification Supported & Request Permission_
    ```
    // check notification support
    if ('Notification' in window)
    // request permission
    window.Notification.requestPermission((result) => result !== 'granted' ? console.log('Not Allow') : console.log('Allowed'))
    ```
- _Display Notification_
    ```
    // display simple notification
    new Notification('displayed notification')
    // display custom notification
    var options = {
      body: 'Here is the body of notification',
      icon: './images/icons/apple-icon-72x72.png'
    };
    new Notification('displayed custom notification', options);
    // display notification via Service Worker
    if ( 'serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then(swregis => swregis.showNotification('Notification from SW', options))
    }
   ```
##### 2.3 Notification Interaction
##### 2.4 Background Sync
##### 2.5 [Service Worker Lifecycle](https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle)
