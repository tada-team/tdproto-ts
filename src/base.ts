// TODO: generate enums from go code
declare namespace TdProto {    
    /**
     * Chat type
     */
    const enum ChatType {
        DIRECT = 'direct',
        GROUP = 'group',
        TASK = 'task',
    }
    
    /**
     * Contact status in team
     */
    const enum TeamStatus {
        OWNER = 'owner',
        ADMIN = 'admin',
        MEMBER = 'member',
        GUEST = 'guest',
    }

    /**
     * Contact status in group
     */
    const enum GroupStatus {
        ADMIN = 'admin',
        MEMBER = 'member',
    }
    
    /**
     * Message type
     */
    const enum Mediatype {
        PLAIN = 'plain',
        CHANGE = 'change',
        DELETED = 'deleted',
        FILE = 'file',
        IMAGE = 'image',
        VIDEO = 'video',
        AUDIOMSG = 'audiomsg',
        CONTACT = 'contact',
        PDF = 'pdf',
    }

    /**
     * Message type
     */
    const enum Mediasubtype {
        STICKER = 'sticker',
        NEWTASK = 'newtask',
    }

    /**
     * Contact id
     */
    type JID = string;

    /**
     * Task tab name
     */
    type TaskTabKey = string;
}
