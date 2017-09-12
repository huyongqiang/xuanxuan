import Modal from '../../components/modal';
import App from '../../core';
import MemberProfileDialog from './member-profile-dialog';

const show = (callback) => {
    const user = App.user;
    if(user) {
        return MemberProfileDialog.show(user, callback);
    } else {
        callback && callback(false);
    }
};

export default {
    show,
};