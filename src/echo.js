import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

window.Pusher = Pusher;

window.Echo = new Echo({
  broadcaster: 'pusher',
  key: '643e6d401bfff00bb236',
  cluster: 'us2',
  forceTLS: true,
});