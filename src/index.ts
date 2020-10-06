// Autogenerated. Do not edit.


/**
 * Website title and description.
 */
export interface MessageLinkPreview {
   /**
    * Website title or og:title content.
    */
   title: string;

   /**
    * Website description. Omitempty.
    */
   description: string;

}


/**
 * Checked message links. In short: "Click here: {link.Pattern}" => "Click here: <a href='{link.Url}'>{link.Text}</a>".
 */
export interface MessageLink {
   /**
    * Text fragment that should be replaced by link.
    */
   pattern: string;

   /**
    * Internal (tadateam://) or external link.
    */
   url: string;

   /**
    * Text replacement.
    */
   text: string;

   /**
    * Optional preview info, for websites. Nullable. Omitempty.
    */
   preview: MessageLinkPreview;

   /**
    * Optional upload info. Omitempty.
    */
   uploads: Upload[];

   /**
    * Website previews disabled. Omitempty.
    */
   noPreview: bool;

   /**
    * Optional youtube movie id. Omitempty.
    */
   youtubeId: string;

}


/**
 * Mimimal chat representaion.
 */
export interface ChatShort {
   /**
    * Group/Task/Contact id.
    */
   jid: JID;

   /**
    * Chat type.
    */
   chatType: ChatType;

   /**
    * Title.
    */
   displayName: string;

   /**
    * Icon data. Nullable.
    */
   icons: IconData;

}


/**
 * Mimimal chat representaion for deletion.
 */
export interface DeletedChat {
   /**
    * Group/Task/Contact id.
    */
   jid: JID;

   /**
    * Chat type.
    */
   chatType: ChatType;

   /**
    * Chat fields (related to concrete participan) changes indicator.
    */
   gentime: int64;

   /**
    * Archive flag. Always true for this structure.
    */
   isArchive: bool;

}


/**
 * Chat (direct, group, task) representaion.
 */
export interface Chat {
   /**
    * Group/Task/Contact id.
    */
   jid: JID;

   /**
    * Chat type.
    */
   chatType: ChatType;

   /**
    * Base fields (not related to concrete participant) changes indicator. Omitempty.
    */
   baseGentime: int64;

   /**
    * Chat fields (related to concrete participan) changes indicator.
    */
   gentime: int64;

   /**
    * Creation date, iso datetime.
    */
   created: string;

   /**
    * Title.
    */
   displayName: string;

   /**
    * Icons info. Nullable.
    */
   icons: IconData;

   /**
    * Include unread messages to counters. Omitempty.
    */
   countersEnabled: bool;

   /**
    * Can I call to this chat. Omitempty.
    */
   canCall: bool;

   /**
    * Can I send message to this chat. Omitempty.
    */
   canSendMessage: bool;

   /**
    * Why I can't send message to this chat (if can't). Omitempty.
    */
   cantSendMessageReason: string;

   /**
    * Description collapsed. Used for tasks only. Omitempty.
    */
   collapsed: bool;

   /**
    * Last message draft, if any. Omitempty.
    */
   draft: string;

   /**
    * Last message draft version , if any. Omitempty.
    */
   draftNum: int64;

   /**
    * Hidden chat. Omitempty.
    */
   hidden: bool;

   /**
    * Push notifications enabled. Omitempty.
    */
   notificationsEnabled: bool;

   /**
    * Number of importants messages. Omitempty.
    */
   numImportants: number;

   /**
    * Unreads conuter. Omitempty.
    */
   numUnread: number;

   /**
    * Mentions (@) counter. Omitempty.
    */
   numUnreadNotices: number;

   /**
    * Last message object. Nullable. Omitempty.
    */
   lastMessage: Message;

   /**
    * Last read message id, if any. Omitempty.
    */
   lastReadMessageId: string;

   /**
    * Project / section id, if any. Omitempty.
    */
   section: string;

   /**
    * List of editable fields. Omitempty.
    */
   changeableFields: string[];

   /**
    * Is chat pinned on top. Omitempty.
    */
   pinned: bool;

   /**
    * Sort oreding for pinned chat. Omitempty.
    */
   pinnedSortOrdering: number;

   /**
    * Non-archive participants number. Nullable. Omitempty.
    */
   numMembers: number;

   /**
    * Can I delete this chat. Omitempty.
    */
   canDelete: bool;

   /**
    * Group or task description. Omitempty.
    */
   description: string;

   /**
    * Present in feed (main screen). Omitempty.
    */
   feed: bool;

   /**
    * Pinned message for this chat. Nullable. Omitempty.
    */
   pinnedMessage: Message;

   /**
    * Custom color index from table of colors. Tasks only. Nullable. Omitempty.
    */
   colorIndex: uint16;

   /**
    * Items in checklist. Tasks only. Nullable. Omitempty.
    */
   numItems: number;

   /**
    * Checked items in checklist. Tasks only. Nullable. Omitempty.
    */
   numCheckedItems: number;

   /**
    * Assignee contact id. Tasks only. Nullable. Omitempty.
    */
   assignee: JID;

   /**
    * Task number in this team. Omitempty.
    */
   num: number;

   /**
    * Task observers id's. Nullable. Omitempty.
    */
   observers: JID[];

   /**
    * Task creator. Nullable. Omitempty.
    */
   owner: JID;

   /**
    * Task status. May be custom. Omitempty.
    */
   taskStatus: string;

   /**
    * Task title. Generated from number and description. Omitempty.
    */
   title: string;

   /**
    * Task done date in iso format, if any. Omitempty.
    */
   done: string;

   /**
    * Task done reason, if any. Omitempty.
    */
   doneReason: string;

   /**
    * Task deadline in iso format, if any. Omitempty.
    */
   deadline: string;

   /**
    * Is task deadline expired. Omitempty.
    */
   deadlineExpired: bool;

   /**
    * Links in description. Omitempty.
    */
   links: MessageLinks;

   /**
    * Task tags list, if any. Omitempty.
    */
   tags: string[];

   /**
    * Task importance, if available in team. Nullable. Omitempty.
    */
   importance: number;

   /**
    * Task urgency, if available in team. Nullable. Omitempty.
    */
   urgency: number;

   /**
    * Task spent time, number. Nullable. Omitempty.
    */
   spentTime: number;

   /**
    * Task complexity, number. Nullable. Omitempty.
    */
   complexity: number;

   /**
    * Used for "Create task from messages...". Omitempty.
    */
   linkedMessages: interface{}[];

   /**
    * Checklist items. Task only. Omitempty.
    */
   items: TaskItem[];

   /**
    * Parent tasks. Omitempty.
    */
   parents: Subtask[];

   /**
    * Tab names. Nullable. Omitempty.
    */
   tabs: TaskTabKey[];

   /**
    * My status in group chat. Omitempty.
    */
   status: GroupStatus;

   /**
    * Group chat members. Omitempty.
    */
   members: GroupMembership[];

   /**
    * Can I add member to this group chat. Omitempty.
    */
   canAddMember: bool;

   /**
    * Can I remove member from this group chat. Omitempty.
    */
   canRemoveMember: bool;

   /**
    * Can I change member status in this group chat. Omitempty.
    */
   canChangeMemberStatus: bool;

   /**
    * deprecated: use changeable fields. Omitempty.
    */
   canChangeSettings: bool;

   /**
    * Any new team member will be added to this group chat. Omitempty.
    */
   defaultForAll: bool;

   /**
    * Readonly for non-admins group chat (Like Channels in Telegram bug switchable). Omitempty.
    */
   readonlyForMembers: bool;

   /**
    * Delete messages in this chat in seconds. Experemental function. Nullable. Omitempty.
    */
   autocleanupAge: number;

   /**
    * Can other team member see this task/group chat. Omitempty.
    */
   public: bool;

   /**
    * Can I join to this public group/task. Omitempty.
    */
   canJoin: bool;

   /**
    * Can I delete any message in this chat. Nullable. Omitempty.
    */
   canDeleteAnyMessage: bool;

   /**
    * Can I change Important flag in any message in this chat. Nullable. Omitempty.
    */
   canSetImportantAnyMessage: bool;

}


/**
 * Link to sub/sup task.
 */
export interface Subtask {
   /**
    * Task id.
    */
   jid: JID;

   /**
    * Assignee contact id. Tasks only.
    */
   assignee: JID;

   /**
    * Task title. Generated from number and description.
    */
   title: string;

   /**
    * Task number in this team.
    */
   num: number;

   /**
    * Title.
    */
   displayName: string;

   /**
    * Can other team member see this task/group chat. Omitempty.
    */
   public: bool;

}


/**
 * Task checklist item.
 */
export interface TaskItem {
   /**
    * Id. Omitempty.
    */
   uid: string;

   /**
    * Sort ordering. Omitempty.
    */
   sortOrdering: number;

   /**
    * Text or "#{OtherTaskNumber}".
    */
   text: string;

   /**
    * Item checked. Omitempty.
    */
   checked: bool;

   /**
    * Can I toggle this item. Omitempty.
    */
   canToggle: bool;

   /**
    * Link to subtask. Optional. Nullable. Omitempty.
    */
   subtask: Subtask;

}


/**
 * Group chat membership status.
 */
export interface GroupMembership {
   /**
    * Contact id. Nullable.
    */
   jid: JID;

   /**
    * Status in group.
    */
   status: GroupStatus;

   /**
    * Can I remove this member. Omitempty.
    */
   canRemove: bool;

}


/**
 * Small or large icon.
 */
export interface SingleIcon {
   /**
    * absolute url to icon.
    */
   url: string;

   /**
    * Icon width, in pixels.
    */
   width: number;

   /**
    * Icon height, in pixels.
    */
   height: number;

}


/**
 * Icon data. Contains sm+lg (for uploaded image) OR stub+letters+color (for icon generated from display name).
 */
export interface IconData {
   /**
    * Small icon. Nullable. Omitempty.
    */
   sm: SingleIcon;

   /**
    * Large image. Nullable. Omitempty.
    */
   lg: SingleIcon;

   /**
    * Generated image with 1-2 letters. Omitempty.
    */
   stub: string;

   /**
    * Letters from stub icon. Omitempty.
    */
   letters: string;

   /**
    * Stub icon background color. Omitempty.
    */
   color: string;

}


/**
 * {hostname}/features.js / {hostname}/features.json structure.
 */
export interface Features {
   /**
    * Current host.
    */
   host: string;

   /**
    * Build/revision of server side.
    */
   build: string;

   /**
    * Desktop application version.
    */
   desktopVersion: string;

   /**
    * Webclient version.
    */
   frontVersion: string;

   /**
    * Application title.
    */
   appTitle: string;

   /**
    * Static files server address.
    */
   userver: string;

   /**
    * Link to AppStore.
    */
   iOSApp: string;

   /**
    * Link to Google Play.
    */
   androidApp: string;

   /**
    * Default UI theme.
    */
   theme: string;

   /**
    * Minimal application version required for this server. Used for breaking changes.
    */
   minAppVersion: string;

   /**
    * Free registration allowed.
    */
   freeRegistration: bool;

   /**
    * Maximum size of user's upload.
    */
   maxUploadMb: number;

   /**
    * Maximum number of forwarded messages.
    */
   maxLinkedMessages: number;

   /**
    * Maximum chars for: family_name, given_name, patronymic if any.
    */
   maxUsernamePartLength: number;

   /**
    * Maximum chars for group chat name.
    */
   maxGroupTitleLength: number;

   /**
    * Maximum chars for role in team.
    */
   maxRoleLength: number;

   /**
    * Maximum chars for mood in team.
    */
   maxMoodLength: number;

   /**
    * Maximum chars for text message.
    */
   maxMessageLength: number;

   /**
    * Maximum length for project and contact's sections names.
    */
   maxSectionLength: number;

   /**
    * Maximum length for tags.
    */
   maxTagLength: number;

   /**
    * Maximum length for task title.
    */
   maxTaskTitleLength: number;

   /**
    * Maximum teams for one account.
    */
   maxTeams: number;

   /**
    * Max inactivity seconds.
    */
   afkAge: number;

   /**
    * Password authentication enabled. Omitempty.
    */
   authByPassword: bool;

   /**
    * QR-code / link authentication enabled. Omitempty.
    */
   authByQrCode: bool;

   /**
    * SMS authentication enabled. Omitempty.
    */
   authBySms: bool;

   /**
    * ICE servers for WebRTC.
    */
   iCEServers: ICEServer[];

   /**
    * True for onpremise installation.
    */
   customServer: bool;

   /**
    * Name of instalation.
    */
   installationType: string;

   /**
    * Testing installation.
    */
   isTesting: bool;

   /**
    * Yandex metrika counter id.
    */
   metrika: string;

   /**
    * Minimal chars number for starting global search.
    */
   minSearchLength: number;

   /**
    * Resend message in n seconds if no confirmation from server given.
    */
   resendTimeout: number;

   /**
    * Frontent sentry.io settings.
    */
   sentryDsnJS: string;

   /**
    * Message drafts saved on server.
    */
   serverDrafts: bool;

   /**
    * Firebase application id for web-push notifacations.
    */
   firebaseAppId: string;

   /**
    * Firebase sender id for web-push notifacations.
    */
   firebaseSenderId: string;

   /**
    * Calls functions enabled.
    */
   calls: bool;

   /**
    * Calls functions enabled for mobile applications.
    */
   mobileCalls: bool;

   /**
    * Calls record enabled.
    */
   callsRecord: bool;

   /**
    * Disallow call from multiply devices. Experimental. Omitempty.
    */
   onlyOneDevicePerCall: bool;

   /**
    * Maximum number of participants per call. Omitempty.
    */
   maxParticipantsPerCall: number;

   /**
    * Safari push id for web-push notifacations.
    */
   safariPushId: string;

   /**
    * Team entity naming. Experimental.
    */
   terms: Terms;

   /**
    * Cross team communication. Experimental.
    */
   singleGroupTeams: bool;

   /**
    * Wiki pages in chats. Experimental.
    */
   wikiPages: bool;

   /**
    * Wiki pages in chats. Experimental. Omitempty.
    */
   allowAdminMute: bool;

   /**
    * Deprecated.
    */
   taskChecklist: bool;

   /**
    * Deprecated.
    */
   readonlyGroups: bool;

   /**
    * Deprecated.
    */
   taskDashboard: bool;

   /**
    * Deprecated.
    */
   taskMessages: bool;

   /**
    * Deprecated.
    */
   taskPublic: bool;

   /**
    * Deprecated.
    */
   taskTags: bool;

}


/**
 * Audiocall information.
 */
export interface CallEvent {
   /**
    * Call start, iso date. Nullable.
    */
   start: string;

   /**
    * Call finish, iso date. Nullable.
    */
   finish: string;

   /**
    * Call record enabled.
    */
   audiorecord: bool;

   /**
    * Call members.
    */
   onliners: CallOnliner[];

}


/**
 * Call participant.
 */
export interface CallOnliner {
   /**
    * Contact id.
    */
   jid: JID;

   /**
    * Contact name.
    */
   displayName: string;

   /**
    * Contact icon.
    */
   icon: string;

   /**
    * Microphone muted. Computed from devices muted states.
    */
   muted: bool;

   /**
    * Member devices, strictly one for now.
    */
   devices: CallDevice[];

}


/**
 * Call participant device.
 */
export interface CallDevice {
   /**
    * Device muted.
    */
   muted: bool;

   /**
    * Device description.
    */
   useragent: string;

}
