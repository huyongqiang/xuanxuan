import Socket from './socket';
import clipboard from './clipboard';
import sound from '../common/sound'
import crypto from './crypto';
import EventEmitter from './event-emitter';
import env from './env';
import ui from './ui';
import dialog from './dialog';
import notify from './notify';
import config from '../common/config'
import net from './net';

const platform = {
    type: 'browser',
    Socket,
    clipboard,
    crypto,
    EventEmitter,
    env,
    ui,
    notify,
    config,
    sound,
    net,
    dialog,
};

if(DEBUG) {
    global.$.Platform = platform;
}

export default platform;
