interface TDProtoClass<T> {
    readonly mappableFields: ReadonlyArray<keyof T>;
}
export declare type UiSettings = Record<string, any>;
export declare type UiSettingsData = Record<string, any>;
export declare type ActionType = 'contact_import' | 'task_import' | 'archive_unpacking' | 'generate_chat';
export declare type CallType = 'audio' | 'video' | 'video_multistream';
export declare type ChatType = 'direct' | 'group' | 'task' | 'meeting' | 'thread';
export declare type CounterpartyType = 'COUNTERPARTY_TYPE_UNSPECIFIED' | 'COUNTERPARTY_TYPE_PHYSICAL' | 'COUNTERPARTY_TYPE_SELFEMPLOYED' | 'COUNTERPARTY_TYPE_ENTREPRENEUR' | 'COUNTERPARTY_TYPE_JURIDICAL';
export declare type Currency = 'EUR' | 'RUB' | 'USD';
export declare type EnquiryPaymentStatus = 'ENQUIRY_PAYMENT_STATUS' | 'ENQUIRY_PAYMENT_STATUS_WAITING_CONFIRMATION' | 'ENQUIRY_PAYMENT_STATUS_WAITING_CREDITING' | 'ENQUIRY_PAYMENT_STATUS_PAID';
export declare type EnquiryStatus = 'ENQUIRY_STATUS_UNSPECIFIED' | 'ENQUIRY_STATUS_WAITING' | 'ENQUIRY_STATUS_CANCELLED' | 'ENQUIRY_STATUS_ACTIVE' | 'ENQUIRY_STATUS_EXPIRED' | 'ENQUIRY_STATUS_DONE';
export declare type EnquiryType = 'ENQUIRY_TYPE_UNSPECIFIED' | 'ENQUIRY_TYPE_RENEWAL' | 'ENQUIRY_TYPE_BASIC' | 'ENQUIRY_TYPE_EXTENSION';
export declare type GroupStatus = 'admin' | 'member';
export declare type ICETransportPolicy = 'relay' | 'all';
export declare type MarkupType = 'bold' | 'italic' | 'underscore' | 'strike' | 'code' | 'codeblock' | 'quote' | 'link' | 'time' | 'unsafe';
export declare type Mediasubtype = 'sticker' | 'newtask' | 'named';
export declare type Mediatype = 'plain' | 'change' | 'deleted' | 'file' | 'image' | 'video' | 'audiomsg' | 'contact' | 'pdf';
export declare type MeetingMemberStatus = 'MEETING_MEMBER_STATUS_OWNER' | 'MEETING_MEMBER_STATUS_ADMIN' | 'MEETING_MEMBER_STATUS_MEMBER' | 'MEETING_MEMBER_STATUS_OPTIONAL_MEMBER';
export declare type MeetingPresenceStatus = 'MEETING_PRESENCE_STATUS_ACCEPTED' | 'MEETING_PRESENCE_STATUS_REJECTED' | 'MEETING_PRESENCE_STATUS_DOUBTS' | 'MEETING_PRESENCE_STATUS_WAITING';
export declare type MeetingRecipientStatus = 'MEETING_RECIPIENT_STATUS_UNSPECIFIED' | 'MEETING_RECIPIENT_STATUS_MINE' | 'MEETING_RECIPIENT_STATUS_MINE_OTHER_TEAM' | 'MEETING_RECIPIENT_STATUS_MINE_OTHER' | 'MEETING_RECIPIENT_STATUS_ANOTHER' | 'MEETING_RECIPIENT_STATUS_ANOTHER_OTHER_TEAM' | 'MEETING_RECIPIENT_STATUS_ANOTHER_OTHER';
export declare type MeetingRepeatabilityType = 'MEETING_PRESENCE_STATUS_UNSPECIFIED' | 'MEETING_PRESENCE_STATUS_DAILY' | 'MEETING_PRESENCE_STATUS_WEEKLY' | 'MEETING_PRESENCE_STATUS_MONTHLY' | 'MEETING_PRESENCE_STATUS_NDOW' | 'MEETING_PRESENCE_STATUS_ANNUALLY';
export declare type MessengerType = 'telegram';
export declare type ParseState = 'not_found' | 'unpacking' | 'need_mapping' | 'generating';
export declare type PaymentType = 'PAYMENT_TYPE_UNSPECIFIED' | 'PAYMENT_TYPE_PAPER_DOCUMENT_MANAGEMENT' | 'PAYMENT_TYPE_ELECTRONIC_DOCUMENT_MANAGEMENT' | 'PAYMENT_TYPE_BANK_CARD' | 'PAYMENT_TYPE_TECHNICAL';
export declare type PersonalAccountStatus = 'PERSONAL_ACCOUNT_STATUS_ACTIVE' | 'PERSONAL_ACCOUNT_STATUS_SUSPENDED' | 'PERSONAL_ACCOUNT_STATUS_BLOCKED' | 'PERSONAL_ACCOUNT_STATUS_UNSPECIFIED';
export declare type PublicStatusType = 'none' | 'remote' | 'vacation' | 'sick' | 'commuting' | 'do_not_disturb' | 'lunch' | 'be_right_back';
export declare type TariffStatus = 'TARIFF_STATUS_ACTIVE' | 'TARIFF_STATUS_ARCHIVE' | 'TARIFF_STATUS_UNSPECIFIED';
export declare type TeamStatus = 'owner' | 'admin' | 'member' | 'guest';
export declare type UploadMediaType = 'file' | 'image' | 'video' | 'audio' | 'imagefile';
export declare type Err = string;
export declare type ISODateTimeString = string;
export declare type JID = string;
export declare type ParseErrCode = number;
export declare type PushDeviceType = number;
export declare type RGBColor = string;
export declare type TaskFilterKey = string;
export declare type TaskSortKey = string;
export declare type TaskTabKey = string;
export interface TeamUnreadJSON {
    direct: UnreadJSON;
    group: UnreadJSON;
    task: UnreadJSON;
    meeting: UnreadJSON;
}
export declare class TeamUnread implements TDProtoClass<TeamUnread> {
    #private;
    direct: Unread;
    group: Unread;
    task: Unread;
    meeting: Unread;
    constructor(direct: Unread, group: Unread, task: Unread, meeting: Unread);
    static fromJSON(raw: TeamUnreadJSON): TeamUnread;
    mappableFields: readonly ["direct", "group", "task", "meeting"];
    toJSON(): TeamUnreadJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<TeamUnreadJSON>;
}
export interface ActivatePersonalAccountResponseJSON {
    success: boolean;
}
export declare class ActivatePersonalAccountResponse implements TDProtoClass<ActivatePersonalAccountResponse> {
    #private;
    success: boolean;
    /**
     * ActivatePersonalAccountResponse response on activate suspended personal account
     * @param success DOCUMENTATION MISSING
     */
    constructor(success: boolean);
    static fromJSON(raw: ActivatePersonalAccountResponseJSON): ActivatePersonalAccountResponse;
    mappableFields: readonly ["success"];
    toJSON(): ActivatePersonalAccountResponseJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ActivatePersonalAccountResponseJSON>;
}
export interface ActivateWorkplacesOnPersonalAccountRequestJSON {
    count_workplaces: number;
}
export declare class ActivateWorkplacesOnPersonalAccountRequest implements TDProtoClass<ActivateWorkplacesOnPersonalAccountRequest> {
    #private;
    countWorkplaces: number;
    /**
     * ActivateWorkplacesOnPersonalAccountRequest request on activate workplace on personal account
     * @param countWorkplaces DOCUMENTATION MISSING
     */
    constructor(countWorkplaces: number);
    static fromJSON(raw: ActivateWorkplacesOnPersonalAccountRequestJSON): ActivateWorkplacesOnPersonalAccountRequest;
    mappableFields: readonly ["countWorkplaces"];
    toJSON(): ActivateWorkplacesOnPersonalAccountRequestJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ActivateWorkplacesOnPersonalAccountRequestJSON>;
}
export interface ActivateWorkplacesOnPersonalAccountResponseJSON {
    success?: boolean;
}
export declare class ActivateWorkplacesOnPersonalAccountResponse implements TDProtoClass<ActivateWorkplacesOnPersonalAccountResponse> {
    #private;
    success?: boolean | undefined;
    /**
     * ActivateWorkplacesOnPersonalAccountResponse response on activate workplace on personal account
     * @param success DOCUMENTATION MISSING
     */
    constructor(success?: boolean | undefined);
    static fromJSON(raw: ActivateWorkplacesOnPersonalAccountResponseJSON): ActivateWorkplacesOnPersonalAccountResponse;
    mappableFields: readonly ["success"];
    toJSON(): ActivateWorkplacesOnPersonalAccountResponseJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ActivateWorkplacesOnPersonalAccountResponseJSON>;
}
export interface ActiveUserDailyStatJSON {
    day: string;
    user_id: number;
    call_seconds_total?: number;
    calls_count?: number;
    family_name?: string;
    given_name?: string;
    messages_count?: number;
    patronymic?: string;
    phone?: string;
}
export declare class ActiveUserDailyStat implements TDProtoClass<ActiveUserDailyStat> {
    #private;
    day: string;
    userId: number;
    callSecondsTotal?: number | undefined;
    callsCount?: number | undefined;
    familyName?: string | undefined;
    givenName?: string | undefined;
    messagesCount?: number | undefined;
    patronymic?: string | undefined;
    phone?: string | undefined;
    /**
     * Active daily users statistics
     * @param day DOCUMENTATION MISSING
     * @param userId DOCUMENTATION MISSING
     * @param callSecondsTotal DOCUMENTATION MISSING
     * @param callsCount DOCUMENTATION MISSING
     * @param familyName DOCUMENTATION MISSING
     * @param givenName DOCUMENTATION MISSING
     * @param messagesCount DOCUMENTATION MISSING
     * @param patronymic DOCUMENTATION MISSING
     * @param phone DOCUMENTATION MISSING
     */
    constructor(day: string, userId: number, callSecondsTotal?: number | undefined, callsCount?: number | undefined, familyName?: string | undefined, givenName?: string | undefined, messagesCount?: number | undefined, patronymic?: string | undefined, phone?: string | undefined);
    static fromJSON(raw: ActiveUserDailyStatJSON): ActiveUserDailyStat;
    mappableFields: readonly ["day", "userId", "callSecondsTotal", "callsCount", "familyName", "givenName", "messagesCount", "patronymic", "phone"];
    toJSON(): ActiveUserDailyStatJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ActiveUserDailyStatJSON>;
}
export interface AddTeamOnPersonalAccountRequestJSON {
    delete_date?: string;
    team_uuid?: string;
}
export declare class AddTeamOnPersonalAccountRequest implements TDProtoClass<AddTeamOnPersonalAccountRequest> {
    #private;
    deleteDate?: string | undefined;
    teamUuid?: string | undefined;
    /**
     * AddTeamOnPersonalAccountRequest request on add team on personal account
     * @param deleteDate DOCUMENTATION MISSING
     * @param teamUuid DOCUMENTATION MISSING
     */
    constructor(deleteDate?: string | undefined, teamUuid?: string | undefined);
    static fromJSON(raw: AddTeamOnPersonalAccountRequestJSON): AddTeamOnPersonalAccountRequest;
    mappableFields: readonly ["deleteDate", "teamUuid"];
    toJSON(): AddTeamOnPersonalAccountRequestJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<AddTeamOnPersonalAccountRequestJSON>;
}
export interface AddTeamOnPersonalAccountResponseJSON {
    success?: boolean;
}
export declare class AddTeamOnPersonalAccountResponse implements TDProtoClass<AddTeamOnPersonalAccountResponse> {
    #private;
    success?: boolean | undefined;
    /**
     * AddTeamOnPersonalAccountResponse response on add team on personal account
     * @param success DOCUMENTATION MISSING
     */
    constructor(success?: boolean | undefined);
    static fromJSON(raw: AddTeamOnPersonalAccountResponseJSON): AddTeamOnPersonalAccountResponse;
    mappableFields: readonly ["success"];
    toJSON(): AddTeamOnPersonalAccountResponseJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<AddTeamOnPersonalAccountResponseJSON>;
}
export interface AddUserInWorkplaceByJidRequestJSON {
    contact_uuid?: string;
}
export declare class AddUserInWorkplaceByJidRequest implements TDProtoClass<AddUserInWorkplaceByJidRequest> {
    #private;
    contactUuid?: string | undefined;
    /**
     * AddUserInWorkplaceByJidRequest request on add user on workplace by contact JID
     * @param contactUuid DOCUMENTATION MISSING
     */
    constructor(contactUuid?: string | undefined);
    static fromJSON(raw: AddUserInWorkplaceByJidRequestJSON): AddUserInWorkplaceByJidRequest;
    mappableFields: readonly ["contactUuid"];
    toJSON(): AddUserInWorkplaceByJidRequestJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<AddUserInWorkplaceByJidRequestJSON>;
}
export interface AddUserInWorkplaceByJidResponseJSON {
    uuid: string;
    email?: string;
    full_name?: string;
    last_activity?: string;
    phone?: string;
}
export declare class AddUserInWorkplaceByJidResponse implements TDProtoClass<AddUserInWorkplaceByJidResponse> {
    #private;
    uuid: string;
    email?: string | undefined;
    fullName?: string | undefined;
    lastActivity?: string | undefined;
    phone?: string | undefined;
    /**
     * AddUserInWorkplaceByJidResponse response on add user on workplace by contact JID
     * @param uuid DOCUMENTATION MISSING
     * @param email DOCUMENTATION MISSING
     * @param fullName DOCUMENTATION MISSING
     * @param lastActivity DOCUMENTATION MISSING
     * @param phone DOCUMENTATION MISSING
     */
    constructor(uuid: string, email?: string | undefined, fullName?: string | undefined, lastActivity?: string | undefined, phone?: string | undefined);
    static fromJSON(raw: AddUserInWorkplaceByJidResponseJSON): AddUserInWorkplaceByJidResponse;
    mappableFields: readonly ["uuid", "email", "fullName", "lastActivity", "phone"];
    toJSON(): AddUserInWorkplaceByJidResponseJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<AddUserInWorkplaceByJidResponseJSON>;
}
export interface AddUserInWorkplaceRequestJSON {
    user_uuid: string;
}
export declare class AddUserInWorkplaceRequest implements TDProtoClass<AddUserInWorkplaceRequest> {
    #private;
    userUuid: string;
    /**
     * AddUserInWorkplaceRequest request on add user in workplace on personal account
     * @param userUuid DOCUMENTATION MISSING
     */
    constructor(userUuid: string);
    static fromJSON(raw: AddUserInWorkplaceRequestJSON): AddUserInWorkplaceRequest;
    mappableFields: readonly ["userUuid"];
    toJSON(): AddUserInWorkplaceRequestJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<AddUserInWorkplaceRequestJSON>;
}
export interface AddUserInWorkplaceResponseJSON {
    success?: boolean;
}
export declare class AddUserInWorkplaceResponse implements TDProtoClass<AddUserInWorkplaceResponse> {
    #private;
    success?: boolean | undefined;
    /**
     * AddUserInWorkplaceResponse response on add user in workplace on personal account
     * @param success DOCUMENTATION MISSING
     */
    constructor(success?: boolean | undefined);
    static fromJSON(raw: AddUserInWorkplaceResponseJSON): AddUserInWorkplaceResponse;
    mappableFields: readonly ["success"];
    toJSON(): AddUserInWorkplaceResponseJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<AddUserInWorkplaceResponseJSON>;
}
export interface AddWorkplacesOnPersonalAccountRequestJSON {
    workplaces_count: number;
}
export declare class AddWorkplacesOnPersonalAccountRequest implements TDProtoClass<AddWorkplacesOnPersonalAccountRequest> {
    #private;
    workplacesCount: number;
    /**
     * AddWorkplacesOnPersonalAccountRequest request on add workplace on personal account
     * @param workplacesCount DOCUMENTATION MISSING
     */
    constructor(workplacesCount: number);
    static fromJSON(raw: AddWorkplacesOnPersonalAccountRequestJSON): AddWorkplacesOnPersonalAccountRequest;
    mappableFields: readonly ["workplacesCount"];
    toJSON(): AddWorkplacesOnPersonalAccountRequestJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<AddWorkplacesOnPersonalAccountRequestJSON>;
}
export interface AddWorkplacesOnPersonalAccountResponseJSON {
    success?: boolean;
}
export declare class AddWorkplacesOnPersonalAccountResponse implements TDProtoClass<AddWorkplacesOnPersonalAccountResponse> {
    #private;
    success?: boolean | undefined;
    /**
     * AddWorkplacesOnPersonalAccountResponse response on add workplace on personal account
     * @param success DOCUMENTATION MISSING
     */
    constructor(success?: boolean | undefined);
    static fromJSON(raw: AddWorkplacesOnPersonalAccountResponseJSON): AddWorkplacesOnPersonalAccountResponse;
    mappableFields: readonly ["success"];
    toJSON(): AddWorkplacesOnPersonalAccountResponseJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<AddWorkplacesOnPersonalAccountResponseJSON>;
}
export interface AnyEventJSON {
    event: string;
    confirm_id?: string;
}
export declare class AnyEvent implements TDProtoClass<AnyEvent> {
    #private;
    event: string;
    confirmId?: string | undefined;
    /**
     * Generic event representation
     * @param event DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, confirmId?: string | undefined);
    static fromJSON(raw: AnyEventJSON): AnyEvent;
    mappableFields: readonly ["event", "confirmId"];
    toJSON(): AnyEventJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<AnyEventJSON>;
}
export interface AuthJSON {
    me: UserWithMeJSON;
    method2fa: string;
    recovery2fa: boolean;
    required2fa: boolean;
    token?: string;
}
export declare class Auth implements TDProtoClass<Auth> {
    #private;
    me: UserWithMe;
    method2fa: string;
    recovery2fa: boolean;
    required2fa: boolean;
    token?: string | undefined;
    /**
     * MISSING CLASS DOCUMENTATION
     * @param me DOCUMENTATION MISSING
     * @param method2fa DOCUMENTATION MISSING
     * @param recovery2fa DOCUMENTATION MISSING
     * @param required2fa DOCUMENTATION MISSING
     * @param token DOCUMENTATION MISSING
     */
    constructor(me: UserWithMe, method2fa: string, recovery2fa: boolean, required2fa: boolean, token?: string | undefined);
    static fromJSON(raw: AuthJSON): Auth;
    mappableFields: readonly ["me", "method2fa", "recovery2fa", "required2fa", "token"];
    toJSON(): AuthJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<AuthJSON>;
}
export interface AvatarColorsJSON {
    task_default: RGBColor;
}
export declare class AvatarColors implements TDProtoClass<AvatarColors> {
    #private;
    taskDefault: RGBColor;
    /**
     * AvatarColors avatar colors for app
     * @param taskDefault TaskDefault color
     */
    constructor(taskDefault: RGBColor);
    static fromJSON(raw: AvatarColorsJSON): AvatarColors;
    mappableFields: readonly ["taskDefault"];
    toJSON(): AvatarColorsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<AvatarColorsJSON>;
}
export interface BaseEventJSON {
    event: string;
    confirm_id?: string;
}
export declare class BaseEvent implements TDProtoClass<BaseEvent> {
    #private;
    event: string;
    confirmId?: string | undefined;
    /**
     * Base of all events
     * @param event DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, confirmId?: string | undefined);
    static fromJSON(raw: BaseEventJSON): BaseEvent;
    mappableFields: readonly ["event", "confirmId"];
    toJSON(): BaseEventJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<BaseEventJSON>;
}
export interface BgJSON {
    badge_background: RGBColor;
    fade: RGBColor;
}
export declare class Bg implements TDProtoClass<Bg> {
    #private;
    badgeBackground: RGBColor;
    fade: RGBColor;
    /**
     * Bg bg colors for app
     * @param badgeBackground BadgeBackground color
     * @param fade Fade color
     */
    constructor(badgeBackground: RGBColor, fade: RGBColor);
    static fromJSON(raw: BgJSON): Bg;
    mappableFields: readonly ["badgeBackground", "fade"];
    toJSON(): BgJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<BgJSON>;
}
export interface BlockPersonalAccountResponseJSON {
    success: boolean;
}
export declare class BlockPersonalAccountResponse implements TDProtoClass<BlockPersonalAccountResponse> {
    #private;
    success: boolean;
    /**
     * BlockPersonalAccountResponse response on block unblocked personal account
     * @param success DOCUMENTATION MISSING
     */
    constructor(success: boolean);
    static fromJSON(raw: BlockPersonalAccountResponseJSON): BlockPersonalAccountResponse;
    mappableFields: readonly ["success"];
    toJSON(): BlockPersonalAccountResponseJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<BlockPersonalAccountResponseJSON>;
}
export interface BotCommandJSON {
    args: string[];
    key: string;
    title: string;
}
export declare class BotCommand implements TDProtoClass<BotCommand> {
    #private;
    args: string[];
    key: string;
    title: string;
    /**
     * Bot commands information
     * @param args Command options, if any
     * @param key What should be inserted to the chat
     * @param title What should be visible by user
     */
    constructor(args: string[], key: string, title: string);
    static fromJSON(raw: BotCommandJSON): BotCommand;
    mappableFields: readonly ["args", "key", "title"];
    toJSON(): BotCommandJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<BotCommandJSON>;
}
export interface ButtonColorsJSON {
    brand_active: RGBColor;
    brand_disable: RGBColor;
    brand_static: RGBColor;
    simple_active: RGBColor;
    simple_disable: RGBColor;
    simple_static: RGBColor;
}
export declare class ButtonColors implements TDProtoClass<ButtonColors> {
    #private;
    brandActive: RGBColor;
    brandDisable: RGBColor;
    brandStatic: RGBColor;
    simpleActive: RGBColor;
    simpleDisable: RGBColor;
    simpleStatic: RGBColor;
    /**
     * ButtonColors button colors for app
     * @param brandActive Brand active color
     * @param brandDisable Brand disable color
     * @param brandStatic Brand static color
     * @param simpleActive Simple active color
     * @param simpleDisable Simple disable color
     * @param simpleStatic Simple static color
     */
    constructor(brandActive: RGBColor, brandDisable: RGBColor, brandStatic: RGBColor, simpleActive: RGBColor, simpleDisable: RGBColor, simpleStatic: RGBColor);
    static fromJSON(raw: ButtonColorsJSON): ButtonColors;
    mappableFields: readonly ["brandActive", "brandDisable", "brandStatic", "simpleActive", "simpleDisable", "simpleStatic"];
    toJSON(): ButtonColorsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ButtonColorsJSON>;
}
export interface CallColorsJSON {
    button_active: RGBColor;
    button_end_call: RGBColor;
    callbar_background: RGBColor;
    icon_callbar: RGBColor;
}
export declare class CallColors implements TDProtoClass<CallColors> {
    #private;
    buttonActive: RGBColor;
    buttonEndCall: RGBColor;
    callbarBackground: RGBColor;
    iconCallbar: RGBColor;
    /**
     * CallColors call colors for app
     * @param buttonActive ButtonActive color
     * @param buttonEndCall ButtonEndCall color
     * @param callbarBackground CallBarBackground color
     * @param iconCallbar IconCallBar color
     */
    constructor(buttonActive: RGBColor, buttonEndCall: RGBColor, callbarBackground: RGBColor, iconCallbar: RGBColor);
    static fromJSON(raw: CallColorsJSON): CallColors;
    mappableFields: readonly ["buttonActive", "buttonEndCall", "callbarBackground", "iconCallbar"];
    toJSON(): CallColorsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<CallColorsJSON>;
}
export interface CallDeviceJSON {
    muted: boolean;
    useragent: string;
}
export declare class CallDevice implements TDProtoClass<CallDevice> {
    #private;
    muted: boolean;
    useragent: string;
    /**
     * Call participant device
     * @param muted Device muted
     * @param useragent Device description
     */
    constructor(muted: boolean, useragent: string);
    static fromJSON(raw: CallDeviceJSON): CallDevice;
    mappableFields: readonly ["muted", "useragent"];
    toJSON(): CallDeviceJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<CallDeviceJSON>;
}
export interface CallEventJSON {
    audiorecord: boolean;
    created: ISODateTimeString;
    gentime: number;
    jid: JID;
    timestamp: number;
    uid: string;
    buzz?: boolean;
    finish?: ISODateTimeString;
    onliners?: CallOnlinerJSON[];
    start?: ISODateTimeString;
}
export declare class CallEvent implements TDProtoClass<CallEvent> {
    #private;
    audiorecord: boolean;
    created: ISODateTimeString;
    gentime: number;
    jid: JID;
    timestamp: number;
    uid: string;
    buzz?: boolean | undefined;
    finish?: string | undefined;
    onliners?: CallOnliner[] | undefined;
    start?: string | undefined;
    /**
     * Call information
     * @param audiorecord Call record enabled
     * @param created Creation date, iso datetime
     * @param gentime Version
     * @param jid Chat or contact id
     * @param timestamp Deprecated: use gentime or created
     * @param uid Call id
     * @param buzz Call buzzing
     * @param finish Call finish
     * @param onliners Call participants
     * @param start Call start. For direct calls can be empty when buzzing
     */
    constructor(audiorecord: boolean, created: ISODateTimeString, gentime: number, jid: JID, timestamp: number, uid: string, buzz?: boolean | undefined, finish?: string | undefined, onliners?: CallOnliner[] | undefined, start?: string | undefined);
    static fromJSON(raw: CallEventJSON): CallEvent;
    mappableFields: readonly ["audiorecord", "created", "gentime", "jid", "timestamp", "uid", "buzz", "finish", "onliners", "start"];
    toJSON(): CallEventJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<CallEventJSON>;
}
export interface CallOnlinerJSON {
    devices: CallDeviceJSON[];
    display_name: string;
    enabled_screenshare: boolean;
    enabled_video: boolean;
    icon: string;
    jid: JID;
    muted: boolean;
    role: string;
}
export declare class CallOnliner implements TDProtoClass<CallOnliner> {
    #private;
    devices: CallDevice[];
    displayName: string;
    enabledScreenshare: boolean;
    enabledVideo: boolean;
    icon: string;
    jid: JID;
    muted: boolean;
    role: string;
    /**
     * Call participant
     * @param devices Member devices, strictly one for now
     * @param displayName Contact name
     * @param enabledScreenshare Screenshare state
     * @param enabledVideo Video state
     * @param icon Contact icon
     * @param jid Contact id
     * @param muted Microphone muted. Computed from devices muted states
     * @param role Contact role
     */
    constructor(devices: CallDevice[], displayName: string, enabledScreenshare: boolean, enabledVideo: boolean, icon: string, jid: JID, muted: boolean, role: string);
    static fromJSON(raw: CallOnlinerJSON): CallOnliner;
    mappableFields: readonly ["devices", "displayName", "enabledScreenshare", "enabledVideo", "icon", "jid", "muted", "role"];
    toJSON(): CallOnlinerJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<CallOnlinerJSON>;
}
export interface ChangeTariffBillingJSON {
    tariff_id: string;
    close_date?: string;
    create_date?: string;
    open_date?: string;
}
export declare class ChangeTariffBilling implements TDProtoClass<ChangeTariffBilling> {
    #private;
    tariffId: string;
    closeDate?: string | undefined;
    createDate?: string | undefined;
    openDate?: string | undefined;
    /**
     * ChangeTariffBilling struct of changes tariffs by personal account
     * @param tariffId DOCUMENTATION MISSING
     * @param closeDate DOCUMENTATION MISSING
     * @param createDate DOCUMENTATION MISSING
     * @param openDate DOCUMENTATION MISSING
     */
    constructor(tariffId: string, closeDate?: string | undefined, createDate?: string | undefined, openDate?: string | undefined);
    static fromJSON(raw: ChangeTariffBillingJSON): ChangeTariffBilling;
    mappableFields: readonly ["tariffId", "closeDate", "createDate", "openDate"];
    toJSON(): ChangeTariffBillingJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ChangeTariffBillingJSON>;
}
export interface ChatJSON {
    chat_type: ChatType;
    created: ISODateTimeString;
    display_name: string;
    gentime: number;
    icons: IconDataJSON;
    jid: JID;
    assignee?: JID;
    autocleanup_age?: number;
    base_gentime?: number;
    can_add_member?: boolean;
    can_call?: boolean;
    can_change_member_status?: boolean;
    can_change_settings?: boolean;
    can_delete?: boolean;
    can_delete_any_message?: boolean;
    can_join?: boolean;
    can_mute_all?: boolean;
    can_remove_member?: boolean;
    can_send_message?: boolean;
    can_set_important_any_message?: boolean;
    cant_send_message_reason?: string;
    changeable_fields?: string[];
    collapsed?: boolean;
    color_index?: number;
    complexity?: number;
    counters_enabled?: boolean;
    deadline?: ISODateTimeString;
    deadline_expired?: boolean;
    default_for_all?: boolean;
    description?: string;
    done?: ISODateTimeString;
    done_reason?: string;
    draft?: string;
    draft_gentime?: number;
    draft_num?: number;
    draft_revision?: number;
    feed?: boolean;
    hidden?: boolean;
    importance?: number;
    public?: boolean;
    items?: TaskItemJSON[];
    last_activity?: ISODateTimeString;
    last_message?: MessageJSON;
    last_read_message_id?: string;
    linked_messages?: any[];
    links?: MessageLinkJSON[];
    markup?: MarkupEntityJSON[];
    meeting_duration?: number;
    meeting_freq?: boolean;
    meeting_start_at?: ISODateTimeString;
    members?: GroupMembershipJSON[];
    notifications_enabled?: boolean;
    num?: number;
    num_checked_items?: number;
    num_importants?: number;
    num_items?: number;
    num_members?: number;
    num_unread?: number;
    num_unread_notices?: number;
    observers?: JID[];
    owner?: JID;
    parent_chat_id?: JID;
    parent_message_id?: string;
    parents?: SubtaskJSON[];
    pinned?: boolean;
    pinned_message?: MessageJSON;
    pinned_sort_ordering?: number;
    readonly_for_members?: boolean;
    section?: string;
    spent_time?: number;
    status?: GroupStatus;
    tabs?: TaskTabKey[];
    tags?: string[];
    task_status?: string;
    title?: string;
    uploads?: UploadJSON[];
    urgency?: number;
}
export declare class Chat implements TDProtoClass<Chat> {
    #private;
    chatType: ChatType;
    created: ISODateTimeString;
    displayName: string;
    gentime: number;
    icons: IconData;
    jid: JID;
    assignee?: string | undefined;
    autocleanupAge?: number | undefined;
    baseGentime?: number | undefined;
    canAddMember?: boolean | undefined;
    canCall?: boolean | undefined;
    canChangeMemberStatus?: boolean | undefined;
    canChangeSettings?: boolean | undefined;
    canDelete?: boolean | undefined;
    canDeleteAnyMessage?: boolean | undefined;
    canJoin?: boolean | undefined;
    canMuteAll?: boolean | undefined;
    canRemoveMember?: boolean | undefined;
    canSendMessage?: boolean | undefined;
    canSetImportantAnyMessage?: boolean | undefined;
    cantSendMessageReason?: string | undefined;
    changeableFields?: string[] | undefined;
    collapsed?: boolean | undefined;
    colorIndex?: number | undefined;
    complexity?: number | undefined;
    countersEnabled?: boolean | undefined;
    deadline?: string | undefined;
    deadlineExpired?: boolean | undefined;
    defaultForAll?: boolean | undefined;
    description?: string | undefined;
    done?: string | undefined;
    doneReason?: string | undefined;
    draft?: string | undefined;
    draftGentime?: number | undefined;
    draftNum?: number | undefined;
    draftRevision?: number | undefined;
    feed?: boolean | undefined;
    hidden?: boolean | undefined;
    importance?: number | undefined;
    isPublic?: boolean | undefined;
    items?: TaskItem[] | undefined;
    lastActivity?: string | undefined;
    lastMessage?: Message | undefined;
    lastReadMessageId?: string | undefined;
    linkedMessages?: any[] | undefined;
    links?: MessageLink[] | undefined;
    readonly markup?: MarkupEntity[] | undefined;
    meetingDuration?: number | undefined;
    meetingFreq?: boolean | undefined;
    meetingStartAt?: string | undefined;
    members?: GroupMembership[] | undefined;
    notificationsEnabled?: boolean | undefined;
    num?: number | undefined;
    numCheckedItems?: number | undefined;
    numImportants?: number | undefined;
    numItems?: number | undefined;
    numMembers?: number | undefined;
    numUnread?: number | undefined;
    numUnreadNotices?: number | undefined;
    observers?: string[] | undefined;
    owner?: string | undefined;
    parentChatId?: string | undefined;
    parentMessageId?: string | undefined;
    parents?: Subtask[] | undefined;
    pinned?: boolean | undefined;
    pinnedMessage?: Message | undefined;
    pinnedSortOrdering?: number | undefined;
    readonlyForMembers?: boolean | undefined;
    section?: string | undefined;
    spentTime?: number | undefined;
    status?: GroupStatus | undefined;
    tabs?: string[] | undefined;
    tags?: string[] | undefined;
    taskStatus?: string | undefined;
    title?: string | undefined;
    uploads?: Upload[] | undefined;
    urgency?: number | undefined;
    /**
     * Chat (direct, group, task) representation
     * @param chatType Chat type
     * @param created Creation date, iso datetime
     * @param displayName Title
     * @param gentime Chat fields related to concrete participant) version
     * @param icons Icons info
     * @param jid Group/Task/Contact id
     * @param assignee Assignee contact id. Tasks only
     * @param autocleanupAge Delete messages in this chat in seconds. Experimental function
     * @param baseGentime Base fields (not related to concrete participant) version
     * @param canAddMember Can I add member to this group chat
     * @param canCall Can I call to this chat
     * @param canChangeMemberStatus Can I change member status in this group chat
     * @param canChangeSettings deprecated: use changeable fields
     * @param canDelete Can I delete this chat
     * @param canDeleteAnyMessage Can I delete any message in this chat
     * @param canJoin Can I join to this public group/task
     * @param canMuteAll Can I mute all in call
     * @param canRemoveMember Can I remove member from this group chat
     * @param canSendMessage Can I send message to this chat
     * @param canSetImportantAnyMessage Can I change Important flag in any message in this chat
     * @param cantSendMessageReason Why I can't send message to this chat (if can't)
     * @param changeableFields List of editable fields
     * @param collapsed Description collapsed. Used for tasks only
     * @param colorIndex Custom color index from table of colors. Tasks only
     * @param complexity Task complexity, number
     * @param countersEnabled Include unread messages to counters
     * @param deadline Task deadline in iso format, if any
     * @param deadlineExpired Is task deadline expired
     * @param defaultForAll Any new team member will be added to this group chat
     * @param description Group or task description
     * @param done Task done date in iso format, if any
     * @param doneReason Task done reason, if any
     * @param draft Last message draft, if any
     * @param draftGentime Deprecated: use DraftRevision instead. Last message draft version, if any
     * @param draftNum Deprecated: use DraftRevision instead
     * @param draftRevision Last message draft version, if any. unixtime(ms)
     * @param feed Present in feed (main screen)
     * @param hidden Hidden chat
     * @param importance Task importance, if available in team
     * @param isPublic Can other team member see this task/group chat
     * @param items Checklist items. Task only
     * @param lastActivity Date of the last message sent even if it was deleted
     * @param lastMessage Last message object
     * @param lastReadMessageId Last read message id, if any
     * @param linkedMessages Used for "Create task from messages..."
     * @param links Links in description
     * @param markup Markup entities for description field. Experimental
     * @param meetingDuration Meeting duration
     * @param meetingFreq Meeting has frequency
     * @param meetingStartAt Start date of meeting chat
     * @param members Group chat members
     * @param notificationsEnabled Push notifications enabled
     * @param num Task number in this team
     * @param numCheckedItems Checked items in checklist. Tasks only
     * @param numImportants Number of important messages
     * @param numItems Items in checklist. Tasks only
     * @param numMembers Non-archive participants number
     * @param numUnread Unread counter
     * @param numUnreadNotices Mentions (@) counter
     * @param observers Task followers id's. TODO: rename to "followers"
     * @param owner Task creator
     * @param parentChatId Parent chat uid for thread
     * @param parentMessageId Parent message uid for thread
     * @param parents Parent tasks
     * @param pinned Is chat pinned on top
     * @param pinnedMessage Pinned message for this chat
     * @param pinnedSortOrdering Sort ordering for pinned chat
     * @param readonlyForMembers Readonly for non-admins group chat (Like Channels in Telegram but switchable)
     * @param section Project / section id, if any
     * @param spentTime Task spent time, number
     * @param status My status in group chat
     * @param tabs Tab names
     * @param tags Task tags list, if any
     * @param taskStatus Task status. May be custom
     * @param title Task title. Generated from number and description
     * @param uploads Upload uids for request, upload objects for response
     * @param urgency Task urgency, if available in team
     */
    constructor(chatType: ChatType, created: ISODateTimeString, displayName: string, gentime: number, icons: IconData, jid: JID, assignee?: string | undefined, autocleanupAge?: number | undefined, baseGentime?: number | undefined, canAddMember?: boolean | undefined, canCall?: boolean | undefined, canChangeMemberStatus?: boolean | undefined, canChangeSettings?: boolean | undefined, canDelete?: boolean | undefined, canDeleteAnyMessage?: boolean | undefined, canJoin?: boolean | undefined, canMuteAll?: boolean | undefined, canRemoveMember?: boolean | undefined, canSendMessage?: boolean | undefined, canSetImportantAnyMessage?: boolean | undefined, cantSendMessageReason?: string | undefined, changeableFields?: string[] | undefined, collapsed?: boolean | undefined, colorIndex?: number | undefined, complexity?: number | undefined, countersEnabled?: boolean | undefined, deadline?: string | undefined, deadlineExpired?: boolean | undefined, defaultForAll?: boolean | undefined, description?: string | undefined, done?: string | undefined, doneReason?: string | undefined, draft?: string | undefined, draftGentime?: number | undefined, draftNum?: number | undefined, draftRevision?: number | undefined, feed?: boolean | undefined, hidden?: boolean | undefined, importance?: number | undefined, isPublic?: boolean | undefined, items?: TaskItem[] | undefined, lastActivity?: string | undefined, lastMessage?: Message | undefined, lastReadMessageId?: string | undefined, linkedMessages?: any[] | undefined, links?: MessageLink[] | undefined, markup?: MarkupEntity[] | undefined, meetingDuration?: number | undefined, meetingFreq?: boolean | undefined, meetingStartAt?: string | undefined, members?: GroupMembership[] | undefined, notificationsEnabled?: boolean | undefined, num?: number | undefined, numCheckedItems?: number | undefined, numImportants?: number | undefined, numItems?: number | undefined, numMembers?: number | undefined, numUnread?: number | undefined, numUnreadNotices?: number | undefined, observers?: string[] | undefined, owner?: string | undefined, parentChatId?: string | undefined, parentMessageId?: string | undefined, parents?: Subtask[] | undefined, pinned?: boolean | undefined, pinnedMessage?: Message | undefined, pinnedSortOrdering?: number | undefined, readonlyForMembers?: boolean | undefined, section?: string | undefined, spentTime?: number | undefined, status?: GroupStatus | undefined, tabs?: string[] | undefined, tags?: string[] | undefined, taskStatus?: string | undefined, title?: string | undefined, uploads?: Upload[] | undefined, urgency?: number | undefined);
    static fromJSON(raw: ChatJSON): Chat;
    mappableFields: readonly ["chatType", "created", "displayName", "gentime", "icons", "jid", "assignee", "autocleanupAge", "baseGentime", "canAddMember", "canCall", "canChangeMemberStatus", "canChangeSettings", "canDelete", "canDeleteAnyMessage", "canJoin", "canMuteAll", "canRemoveMember", "canSendMessage", "canSetImportantAnyMessage", "cantSendMessageReason", "changeableFields", "collapsed", "colorIndex", "complexity", "countersEnabled", "deadline", "deadlineExpired", "defaultForAll", "description", "done", "doneReason", "draft", "draftGentime", "draftNum", "draftRevision", "feed", "hidden", "importance", "isPublic", "items", "lastActivity", "lastMessage", "lastReadMessageId", "linkedMessages", "links", "markup", "meetingDuration", "meetingFreq", "meetingStartAt", "members", "notificationsEnabled", "num", "numCheckedItems", "numImportants", "numItems", "numMembers", "numUnread", "numUnreadNotices", "observers", "owner", "parentChatId", "parentMessageId", "parents", "pinned", "pinnedMessage", "pinnedSortOrdering", "readonlyForMembers", "section", "spentTime", "status", "tabs", "tags", "taskStatus", "title", "uploads", "urgency"];
    toJSON(): ChatJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ChatJSON>;
}
export interface ChatCountersJSON {
    chat_type: ChatType;
    gentime: number;
    jid: JID;
    last_read_message_id: string;
    num_unread: number;
    num_unread_notices: number;
    last_activity?: ISODateTimeString;
}
export declare class ChatCounters implements TDProtoClass<ChatCounters> {
    #private;
    chatType: ChatType;
    gentime: number;
    jid: JID;
    lastReadMessageId: string;
    numUnread: number;
    numUnreadNotices: number;
    lastActivity?: string | undefined;
    /**
     * Unread messages counter
     * @param chatType DOCUMENTATION MISSING
     * @param gentime DOCUMENTATION MISSING
     * @param jid DOCUMENTATION MISSING
     * @param lastReadMessageId DOCUMENTATION MISSING
     * @param numUnread DOCUMENTATION MISSING
     * @param numUnreadNotices DOCUMENTATION MISSING
     * @param lastActivity DOCUMENTATION MISSING
     */
    constructor(chatType: ChatType, gentime: number, jid: JID, lastReadMessageId: string, numUnread: number, numUnreadNotices: number, lastActivity?: string | undefined);
    static fromJSON(raw: ChatCountersJSON): ChatCounters;
    mappableFields: readonly ["chatType", "gentime", "jid", "lastReadMessageId", "numUnread", "numUnreadNotices", "lastActivity"];
    toJSON(): ChatCountersJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ChatCountersJSON>;
}
export interface ChatMessagesJSON {
    messages: MessageJSON[];
}
export declare class ChatMessages implements TDProtoClass<ChatMessages> {
    #private;
    messages: Message[];
    /**
     * Chat messages
     * @param messages DOCUMENTATION MISSING
     */
    constructor(messages: Message[]);
    static fromJSON(raw: ChatMessagesJSON): ChatMessages;
    mappableFields: readonly ["messages"];
    toJSON(): ChatMessagesJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ChatMessagesJSON>;
}
export interface ChatShortJSON {
    chat_type: ChatType;
    display_name: string;
    icons: IconDataJSON;
    jid: JID;
}
export declare class ChatShort implements TDProtoClass<ChatShort> {
    #private;
    chatType: ChatType;
    displayName: string;
    icons: IconData;
    jid: JID;
    /**
     * Minimal chat representation
     * @param chatType Chat type
     * @param displayName Title
     * @param icons Icon data
     * @param jid Group/Task/Contact id
     */
    constructor(chatType: ChatType, displayName: string, icons: IconData, jid: JID);
    static fromJSON(raw: ChatShortJSON): ChatShort;
    mappableFields: readonly ["chatType", "displayName", "icons", "jid"];
    toJSON(): ChatShortJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ChatShortJSON>;
}
export interface CheckActivePersonalAccountResponseJSON {
    success?: boolean;
}
export declare class CheckActivePersonalAccountResponse implements TDProtoClass<CheckActivePersonalAccountResponse> {
    #private;
    success?: boolean | undefined;
    /**
     * CheckActivePersonalAccountResponse response on check active personal account
     * @param success DOCUMENTATION MISSING
     */
    constructor(success?: boolean | undefined);
    static fromJSON(raw: CheckActivePersonalAccountResponseJSON): CheckActivePersonalAccountResponse;
    mappableFields: readonly ["success"];
    toJSON(): CheckActivePersonalAccountResponseJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<CheckActivePersonalAccountResponseJSON>;
}
export interface ClientActivityJSON {
    event: string;
    params: ClientActivityParamsJSON;
    confirm_id?: string;
}
export declare class ClientActivity implements TDProtoClass<ClientActivity> {
    #private;
    event: string;
    params: ClientActivityParams;
    confirmId?: string | undefined;
    /**
     * Change AFK (away from keyboard) status
     * @param event DOCUMENTATION MISSING
     * @param params DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, params: ClientActivityParams, confirmId?: string | undefined);
    static fromJSON(raw: ClientActivityJSON): ClientActivity;
    mappableFields: readonly ["event", "params", "confirmId"];
    toJSON(): ClientActivityJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ClientActivityJSON>;
}
export interface ClientActivityParamsJSON {
    afk: boolean;
}
export declare class ClientActivityParams implements TDProtoClass<ClientActivityParams> {
    #private;
    afk: boolean;
    /**
     * Params of the client.activity event
     * @param afk Is away from keyboard
     */
    constructor(afk: boolean);
    static fromJSON(raw: ClientActivityParamsJSON): ClientActivityParams;
    mappableFields: readonly ["afk"];
    toJSON(): ClientActivityParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ClientActivityParamsJSON>;
}
export interface ClientCallBuzzCancelJSON {
    event: string;
    params: ClientCallBuzzCancelParamsJSON;
    confirm_id?: string;
}
export declare class ClientCallBuzzCancel implements TDProtoClass<ClientCallBuzzCancel> {
    #private;
    event: string;
    params: ClientCallBuzzCancelParams;
    confirmId?: string | undefined;
    /**
     * Call buzzing cancelled
     * @param event DOCUMENTATION MISSING
     * @param params DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, params: ClientCallBuzzCancelParams, confirmId?: string | undefined);
    static fromJSON(raw: ClientCallBuzzCancelJSON): ClientCallBuzzCancel;
    mappableFields: readonly ["event", "params", "confirmId"];
    toJSON(): ClientCallBuzzCancelJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ClientCallBuzzCancelJSON>;
}
export interface ClientCallBuzzCancelParamsJSON {
    jid: JID;
}
export declare class ClientCallBuzzCancelParams implements TDProtoClass<ClientCallBuzzCancelParams> {
    #private;
    jid: JID;
    /**
     * Params of the client.call.buzzcancel event
     * @param jid Chat or contact id
     */
    constructor(jid: JID);
    static fromJSON(raw: ClientCallBuzzCancelParamsJSON): ClientCallBuzzCancelParams;
    mappableFields: readonly ["jid"];
    toJSON(): ClientCallBuzzCancelParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ClientCallBuzzCancelParamsJSON>;
}
export interface ClientCallBuzzParamsJSON {
    jid: JID;
    members?: JID[];
}
export declare class ClientCallBuzzParams implements TDProtoClass<ClientCallBuzzParams> {
    #private;
    jid: JID;
    members?: string[] | undefined;
    /**
     * Call buzzing
     * @param jid Chat or contact id
     * @param members List of call participants. Empty value means all participants in call
     */
    constructor(jid: JID, members?: string[] | undefined);
    static fromJSON(raw: ClientCallBuzzParamsJSON): ClientCallBuzzParams;
    mappableFields: readonly ["jid", "members"];
    toJSON(): ClientCallBuzzParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ClientCallBuzzParamsJSON>;
}
export interface ClientCallLeaveJSON {
    event: string;
    params: ClientCallLeaveParamsJSON;
    confirm_id?: string;
}
export declare class ClientCallLeave implements TDProtoClass<ClientCallLeave> {
    #private;
    event: string;
    params: ClientCallLeaveParams;
    confirmId?: string | undefined;
    /**
     * Leave call
     * @param event DOCUMENTATION MISSING
     * @param params DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, params: ClientCallLeaveParams, confirmId?: string | undefined);
    static fromJSON(raw: ClientCallLeaveJSON): ClientCallLeave;
    mappableFields: readonly ["event", "params", "confirmId"];
    toJSON(): ClientCallLeaveJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ClientCallLeaveJSON>;
}
export interface ClientCallLeaveParamsJSON {
    jid: JID;
    reason?: string;
}
export declare class ClientCallLeaveParams implements TDProtoClass<ClientCallLeaveParams> {
    #private;
    jid: JID;
    reason?: string | undefined;
    /**
     * Params of the client.call.leave event
     * @param jid Chat or contact id
     * @param reason Reason, if any
     */
    constructor(jid: JID, reason?: string | undefined);
    static fromJSON(raw: ClientCallLeaveParamsJSON): ClientCallLeaveParams;
    mappableFields: readonly ["jid", "reason"];
    toJSON(): ClientCallLeaveParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ClientCallLeaveParamsJSON>;
}
export interface ClientCallMuteAllJSON {
    event: string;
    params: ClientCallMuteAllParamsJSON;
    confirm_id?: string;
}
export declare class ClientCallMuteAll implements TDProtoClass<ClientCallMuteAll> {
    #private;
    event: string;
    params: ClientCallMuteAllParams;
    confirmId?: string | undefined;
    /**
     * Mute all other call participants
     * @param event DOCUMENTATION MISSING
     * @param params DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, params: ClientCallMuteAllParams, confirmId?: string | undefined);
    static fromJSON(raw: ClientCallMuteAllJSON): ClientCallMuteAll;
    mappableFields: readonly ["event", "params", "confirmId"];
    toJSON(): ClientCallMuteAllJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ClientCallMuteAllJSON>;
}
export interface ClientCallMuteAllParamsJSON {
    jid: JID;
}
export declare class ClientCallMuteAllParams implements TDProtoClass<ClientCallMuteAllParams> {
    #private;
    jid: JID;
    /**
     * Params of the client.call.muteall event
     * @param jid Chat or contact id
     */
    constructor(jid: JID);
    static fromJSON(raw: ClientCallMuteAllParamsJSON): ClientCallMuteAllParams;
    mappableFields: readonly ["jid"];
    toJSON(): ClientCallMuteAllParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ClientCallMuteAllParamsJSON>;
}
export interface ClientCallOfferJSON {
    event: string;
    params: ClientCallOfferParamsJSON;
    confirm_id?: string;
}
export declare class ClientCallOffer implements TDProtoClass<ClientCallOffer> {
    #private;
    event: string;
    params: ClientCallOfferParams;
    confirmId?: string | undefined;
    /**
     * Start a call
     * @param event DOCUMENTATION MISSING
     * @param params DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, params: ClientCallOfferParams, confirmId?: string | undefined);
    static fromJSON(raw: ClientCallOfferJSON): ClientCallOffer;
    mappableFields: readonly ["event", "params", "confirmId"];
    toJSON(): ClientCallOfferJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ClientCallOfferJSON>;
}
export interface ClientCallOfferParamsJSON {
    jid: JID;
    muted: boolean;
    sdp: string;
    trickle: boolean;
    call_type?: CallType;
    enabled_audio?: boolean;
    enabled_video?: boolean;
}
export declare class ClientCallOfferParams implements TDProtoClass<ClientCallOfferParams> {
    #private;
    jid: JID;
    muted: boolean;
    sdp: string;
    trickle: boolean;
    callType?: CallType | undefined;
    enabledAudio?: boolean | undefined;
    enabledVideo?: boolean | undefined;
    /**
     * Params of the client.call.offer event
     * @param jid Chat or contact id
     * @param muted Mute state Deprecated: use EnabledAudio
     * @param sdp SDP (session description protocol) data
     * @param trickle Is trickle mode enabled
     * @param callType CallType is a type of call("audio" - audio room, "video" - video room). default = "audio"
     * @param enabledAudio Audio state
     * @param enabledVideo Video state
     */
    constructor(jid: JID, muted: boolean, sdp: string, trickle: boolean, callType?: CallType | undefined, enabledAudio?: boolean | undefined, enabledVideo?: boolean | undefined);
    static fromJSON(raw: ClientCallOfferParamsJSON): ClientCallOfferParams;
    mappableFields: readonly ["jid", "muted", "sdp", "trickle", "callType", "enabledAudio", "enabledVideo"];
    toJSON(): ClientCallOfferParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ClientCallOfferParamsJSON>;
}
export interface ClientCallRejectJSON {
    event: string;
    params: ClientCallRejectParamsJSON;
    confirm_id?: string;
}
export declare class ClientCallReject implements TDProtoClass<ClientCallReject> {
    #private;
    event: string;
    params: ClientCallRejectParams;
    confirmId?: string | undefined;
    /**
     * Reject the call
     * @param event DOCUMENTATION MISSING
     * @param params DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, params: ClientCallRejectParams, confirmId?: string | undefined);
    static fromJSON(raw: ClientCallRejectJSON): ClientCallReject;
    mappableFields: readonly ["event", "params", "confirmId"];
    toJSON(): ClientCallRejectJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ClientCallRejectJSON>;
}
export interface ClientCallRejectParamsJSON {
    jid: JID;
    reason?: string;
}
export declare class ClientCallRejectParams implements TDProtoClass<ClientCallRejectParams> {
    #private;
    jid: JID;
    reason?: string | undefined;
    /**
     * Params of the client.call.reject event
     * @param jid Chat or contact id
     * @param reason Reason, if any
     */
    constructor(jid: JID, reason?: string | undefined);
    static fromJSON(raw: ClientCallRejectParamsJSON): ClientCallRejectParams;
    mappableFields: readonly ["jid", "reason"];
    toJSON(): ClientCallRejectParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ClientCallRejectParamsJSON>;
}
export interface ClientCallScreenShareJSON {
    event: string;
    params: ClientCallScreenShareParamsJSON;
    confirm_id?: string;
}
export declare class ClientCallScreenShare implements TDProtoClass<ClientCallScreenShare> {
    #private;
    event: string;
    params: ClientCallScreenShareParams;
    confirmId?: string | undefined;
    /**
     * ClientCallScreenShare event for enable/disable screen share
     * @param event DOCUMENTATION MISSING
     * @param params DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, params: ClientCallScreenShareParams, confirmId?: string | undefined);
    static fromJSON(raw: ClientCallScreenShareJSON): ClientCallScreenShare;
    mappableFields: readonly ["event", "params", "confirmId"];
    toJSON(): ClientCallScreenShareJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ClientCallScreenShareJSON>;
}
export interface ClientCallScreenShareParamsJSON {
    call_jid: JID;
    screenshare_enabled: boolean;
}
export declare class ClientCallScreenShareParams implements TDProtoClass<ClientCallScreenShareParams> {
    #private;
    callJid: JID;
    screenshareEnabled: boolean;
    /**
     * Params of the client.call.screenshare event
     * @param callJid CallJid Chat or contact id
     * @param screenshareEnabled ScreenShareEnabled enabled or disabled screen share
     */
    constructor(callJid: JID, screenshareEnabled: boolean);
    static fromJSON(raw: ClientCallScreenShareParamsJSON): ClientCallScreenShareParams;
    mappableFields: readonly ["callJid", "screenshareEnabled"];
    toJSON(): ClientCallScreenShareParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ClientCallScreenShareParamsJSON>;
}
export interface ClientCallSdpJSON {
    event: string;
    params: ClientCallSdpParamsJSON;
    confirm_id?: string;
}
export declare class ClientCallSdp implements TDProtoClass<ClientCallSdp> {
    #private;
    event: string;
    params: ClientCallSdpParams;
    confirmId?: string | undefined;
    /**
     * For exchange Session Description with server when client's Local Session Description is changed
     * @param event DOCUMENTATION MISSING
     * @param params DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, params: ClientCallSdpParams, confirmId?: string | undefined);
    static fromJSON(raw: ClientCallSdpJSON): ClientCallSdp;
    mappableFields: readonly ["event", "params", "confirmId"];
    toJSON(): ClientCallSdpJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ClientCallSdpJSON>;
}
export interface ClientCallSdpParamsJSON {
    jid: JID;
    jsep: JSEPJSON;
    uid: string;
}
export declare class ClientCallSdpParams implements TDProtoClass<ClientCallSdpParams> {
    #private;
    jid: JID;
    jsep: JSEP;
    uid: string;
    /**
     * Params of the client.call.sdp event
     * @param jid Chat or contact id
     * @param jsep SDP data
     * @param uid Call id
     */
    constructor(jid: JID, jsep: JSEP, uid: string);
    static fromJSON(raw: ClientCallSdpParamsJSON): ClientCallSdpParams;
    mappableFields: readonly ["jid", "jsep", "uid"];
    toJSON(): ClientCallSdpParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ClientCallSdpParamsJSON>;
}
export interface ClientCallSoundJSON {
    event: string;
    params: ClientCallSoundParamsJSON;
    confirm_id?: string;
}
export declare class ClientCallSound implements TDProtoClass<ClientCallSound> {
    #private;
    event: string;
    params: ClientCallSoundParams;
    confirmId?: string | undefined;
    /**
     * Change mute state in call
     * @param event DOCUMENTATION MISSING
     * @param params DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, params: ClientCallSoundParams, confirmId?: string | undefined);
    static fromJSON(raw: ClientCallSoundJSON): ClientCallSound;
    mappableFields: readonly ["event", "params", "confirmId"];
    toJSON(): ClientCallSoundJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ClientCallSoundJSON>;
}
export interface ClientCallSoundParamsJSON {
    jid: JID;
    muted: boolean;
}
export declare class ClientCallSoundParams implements TDProtoClass<ClientCallSoundParams> {
    #private;
    jid: JID;
    muted: boolean;
    /**
     * Params of the client.call.sound event
     * @param jid Chat or contact id
     * @param muted Mute state
     */
    constructor(jid: JID, muted: boolean);
    static fromJSON(raw: ClientCallSoundParamsJSON): ClientCallSoundParams;
    mappableFields: readonly ["jid", "muted"];
    toJSON(): ClientCallSoundParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ClientCallSoundParamsJSON>;
}
export interface ClientCallTrickleJSON {
    event: string;
    params: ClientCallTrickleParamsJSON;
    confirm_id?: string;
}
export declare class ClientCallTrickle implements TDProtoClass<ClientCallTrickle> {
    #private;
    event: string;
    params: ClientCallTrickleParams;
    confirmId?: string | undefined;
    /**
     * Send trickle candidate for webrtc connection
     * @param event DOCUMENTATION MISSING
     * @param params DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, params: ClientCallTrickleParams, confirmId?: string | undefined);
    static fromJSON(raw: ClientCallTrickleJSON): ClientCallTrickle;
    mappableFields: readonly ["event", "params", "confirmId"];
    toJSON(): ClientCallTrickleJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ClientCallTrickleJSON>;
}
export interface ClientCallTrickleParamsJSON {
    candidate: string;
    jid: JID;
    sdp_mid?: string;
    sdp_mline_index?: number;
}
export declare class ClientCallTrickleParams implements TDProtoClass<ClientCallTrickleParams> {
    #private;
    candidate: string;
    jid: JID;
    sdpMid?: string | undefined;
    sdpMlineIndex?: number | undefined;
    /**
     * Params of client.call.trickle event
     * @param candidate Trickle candidate
     * @param jid Chat or contact id
     * @param sdpMid SDP mid
     * @param sdpMlineIndex SDP index
     */
    constructor(candidate: string, jid: JID, sdpMid?: string | undefined, sdpMlineIndex?: number | undefined);
    static fromJSON(raw: ClientCallTrickleParamsJSON): ClientCallTrickleParams;
    mappableFields: readonly ["candidate", "jid", "sdpMid", "sdpMlineIndex"];
    toJSON(): ClientCallTrickleParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ClientCallTrickleParamsJSON>;
}
export interface ClientCallVideoJSON {
    event: string;
    params: ClientCallVideoParamsJSON;
    confirm_id?: string;
}
export declare class ClientCallVideo implements TDProtoClass<ClientCallVideo> {
    #private;
    event: string;
    params: ClientCallVideoParams;
    confirmId?: string | undefined;
    /**
     * Change video state in call
     * @param event DOCUMENTATION MISSING
     * @param params DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, params: ClientCallVideoParams, confirmId?: string | undefined);
    static fromJSON(raw: ClientCallVideoJSON): ClientCallVideo;
    mappableFields: readonly ["event", "params", "confirmId"];
    toJSON(): ClientCallVideoJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ClientCallVideoJSON>;
}
export interface ClientCallVideoParamsJSON {
    enabled: boolean;
    jid: JID;
}
export declare class ClientCallVideoParams implements TDProtoClass<ClientCallVideoParams> {
    #private;
    enabled: boolean;
    jid: JID;
    /**
     * Params of the client.call.video event
     * @param enabled Enable video state
     * @param jid Chat or contact id
     */
    constructor(enabled: boolean, jid: JID);
    static fromJSON(raw: ClientCallVideoParamsJSON): ClientCallVideoParams;
    mappableFields: readonly ["enabled", "jid"];
    toJSON(): ClientCallVideoParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ClientCallVideoParamsJSON>;
}
export interface ClientChatComposingJSON {
    event: string;
    params: ClientChatComposingParamsJSON;
    confirm_id?: string;
}
export declare class ClientChatComposing implements TDProtoClass<ClientChatComposing> {
    #private;
    event: string;
    params: ClientChatComposingParams;
    confirmId?: string | undefined;
    /**
     * Typing or recording audiomessage
     * @param event DOCUMENTATION MISSING
     * @param params DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, params: ClientChatComposingParams, confirmId?: string | undefined);
    static fromJSON(raw: ClientChatComposingJSON): ClientChatComposing;
    mappableFields: readonly ["event", "params", "confirmId"];
    toJSON(): ClientChatComposingJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ClientChatComposingJSON>;
}
export interface ClientChatComposingParamsJSON {
    jid: JID;
    composing?: boolean;
    draft?: string;
    is_audio?: boolean;
}
export declare class ClientChatComposingParams implements TDProtoClass<ClientChatComposingParams> {
    #private;
    jid: JID;
    composing?: boolean | undefined;
    draft?: string | undefined;
    isAudio?: boolean | undefined;
    /**
     * Params of the client.chat.composing event
     * @param jid Chat or contact id
     * @param composing true = start typing / audio recording, false = stop
     * @param draft Message draft data Deprecated
     * @param isAudio true = audiomessage, false = text typing
     */
    constructor(jid: JID, composing?: boolean | undefined, draft?: string | undefined, isAudio?: boolean | undefined);
    static fromJSON(raw: ClientChatComposingParamsJSON): ClientChatComposingParams;
    mappableFields: readonly ["jid", "composing", "draft", "isAudio"];
    toJSON(): ClientChatComposingParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ClientChatComposingParamsJSON>;
}
export interface ClientChatLastreadJSON {
    event: string;
    params: ClientChatLastreadParamsJSON;
    confirm_id?: string;
}
export declare class ClientChatLastread implements TDProtoClass<ClientChatLastread> {
    #private;
    event: string;
    params: ClientChatLastreadParams;
    confirmId?: string | undefined;
    /**
     * Last read message in chat changed
     * @param event DOCUMENTATION MISSING
     * @param params DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, params: ClientChatLastreadParams, confirmId?: string | undefined);
    static fromJSON(raw: ClientChatLastreadJSON): ClientChatLastread;
    mappableFields: readonly ["event", "params", "confirmId"];
    toJSON(): ClientChatLastreadJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ClientChatLastreadJSON>;
}
export interface ClientChatLastreadParamsJSON {
    jid: JID;
    last_read_message_id?: string;
}
export declare class ClientChatLastreadParams implements TDProtoClass<ClientChatLastreadParams> {
    #private;
    jid: JID;
    lastReadMessageId?: string | undefined;
    /**
     * Params of the client.chat.lastread event
     * @param jid Chat or contact id
     * @param lastReadMessageId Last read message id. Omitted = last message in chat
     */
    constructor(jid: JID, lastReadMessageId?: string | undefined);
    static fromJSON(raw: ClientChatLastreadParamsJSON): ClientChatLastreadParams;
    mappableFields: readonly ["jid", "lastReadMessageId"];
    toJSON(): ClientChatLastreadParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ClientChatLastreadParamsJSON>;
}
export interface ClientConfirmJSON {
    event: string;
    params: ClientConfirmParamsJSON;
    confirm_id?: string;
}
export declare class ClientConfirm implements TDProtoClass<ClientConfirm> {
    #private;
    event: string;
    params: ClientConfirmParams;
    confirmId?: string | undefined;
    /**
     * Client confirmed server message
     * @param event DOCUMENTATION MISSING
     * @param params DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, params: ClientConfirmParams, confirmId?: string | undefined);
    static fromJSON(raw: ClientConfirmJSON): ClientConfirm;
    mappableFields: readonly ["event", "params", "confirmId"];
    toJSON(): ClientConfirmJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ClientConfirmJSON>;
}
export interface ClientConfirmParamsJSON {
    confirm_id: string;
}
export declare class ClientConfirmParams implements TDProtoClass<ClientConfirmParams> {
    #private;
    confirmId: string;
    /**
     * Params of the client.confirm event
     * @param confirmId Unique identifier generated by client
     */
    constructor(confirmId: string);
    static fromJSON(raw: ClientConfirmParamsJSON): ClientConfirmParams;
    mappableFields: readonly ["confirmId"];
    toJSON(): ClientConfirmParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ClientConfirmParamsJSON>;
}
export interface ClientMessageDeletedJSON {
    event: string;
    params: ClientMessageDeletedParamsJSON;
    confirm_id?: string;
}
export declare class ClientMessageDeleted implements TDProtoClass<ClientMessageDeleted> {
    #private;
    event: string;
    params: ClientMessageDeletedParams;
    confirmId?: string | undefined;
    /**
     * Message deleted
     * @param event DOCUMENTATION MISSING
     * @param params DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, params: ClientMessageDeletedParams, confirmId?: string | undefined);
    static fromJSON(raw: ClientMessageDeletedJSON): ClientMessageDeleted;
    mappableFields: readonly ["event", "params", "confirmId"];
    toJSON(): ClientMessageDeletedJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ClientMessageDeletedJSON>;
}
export interface ClientMessageDeletedParamsJSON {
    message_id?: string;
}
export declare class ClientMessageDeletedParams implements TDProtoClass<ClientMessageDeletedParams> {
    #private;
    messageId?: string | undefined;
    /**
     * Params of the client.message.deleted event
     * @param messageId Message id
     */
    constructor(messageId?: string | undefined);
    static fromJSON(raw: ClientMessageDeletedParamsJSON): ClientMessageDeletedParams;
    mappableFields: readonly ["messageId"];
    toJSON(): ClientMessageDeletedParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ClientMessageDeletedParamsJSON>;
}
export interface ClientMessageUpdatedJSON {
    event: string;
    params: ClientMessageUpdatedParamsJSON;
    confirm_id?: string;
}
export declare class ClientMessageUpdated implements TDProtoClass<ClientMessageUpdated> {
    #private;
    event: string;
    params: ClientMessageUpdatedParams;
    confirmId?: string | undefined;
    /**
     * Message created or changed
     * @param event DOCUMENTATION MISSING
     * @param params DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, params: ClientMessageUpdatedParams, confirmId?: string | undefined);
    static fromJSON(raw: ClientMessageUpdatedJSON): ClientMessageUpdated;
    mappableFields: readonly ["event", "params", "confirmId"];
    toJSON(): ClientMessageUpdatedJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ClientMessageUpdatedJSON>;
}
export interface ClientMessageUpdatedParamsJSON {
    content: MessageContentJSON;
    to: JID;
    comment?: string;
    important?: boolean;
    linked_messages?: string[];
    message_id?: string;
    nopreview?: boolean;
    old_style_attachment?: boolean;
    reply_to?: string;
    uploads?: string[];
}
export declare class ClientMessageUpdatedParams implements TDProtoClass<ClientMessageUpdatedParams> {
    #private;
    content: MessageContent;
    to: JID;
    comment?: string | undefined;
    important?: boolean | undefined;
    linkedMessages?: string[] | undefined;
    messageId?: string | undefined;
    nopreview?: boolean | undefined;
    oldStyleAttachment?: boolean | undefined;
    replyTo?: string | undefined;
    uploads?: string[] | undefined;
    /**
     * Params of the client.message.updated event
     * @param content Message content. Required
     * @param to Chat, task or contact jid. Required
     * @param comment Deprecated
     * @param important Important flag. Not required. Default: false
     * @param linkedMessages Forwarded messages (previously was for reply too). Not required
     * @param messageId Uid created by client. Recommended
     * @param nopreview Disable links preview generation. Not required. Default: false
     * @param oldStyleAttachment Backward compatibility mode
     * @param replyTo Replied to message id. Not required
     * @param uploads Message attachments
     */
    constructor(content: MessageContent, to: JID, comment?: string | undefined, important?: boolean | undefined, linkedMessages?: string[] | undefined, messageId?: string | undefined, nopreview?: boolean | undefined, oldStyleAttachment?: boolean | undefined, replyTo?: string | undefined, uploads?: string[] | undefined);
    static fromJSON(raw: ClientMessageUpdatedParamsJSON): ClientMessageUpdatedParams;
    mappableFields: readonly ["content", "to", "comment", "important", "linkedMessages", "messageId", "nopreview", "oldStyleAttachment", "replyTo", "uploads"];
    toJSON(): ClientMessageUpdatedParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ClientMessageUpdatedParamsJSON>;
}
export interface ClientPingJSON {
    event: string;
    confirm_id?: string;
}
export declare class ClientPing implements TDProtoClass<ClientPing> {
    #private;
    event: string;
    confirmId?: string | undefined;
    /**
     * Empty message for checking server connection
     * @param event DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, confirmId?: string | undefined);
    static fromJSON(raw: ClientPingJSON): ClientPing;
    mappableFields: readonly ["event", "confirmId"];
    toJSON(): ClientPingJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ClientPingJSON>;
}
export interface ColorRuleJSON {
    color_index: number;
    priority: number;
    uid: string;
    description?: string;
    section?: string;
    section_enabled?: boolean;
    tags?: string[];
    tags_enabled?: boolean;
    task_importance?: number;
    task_importance_enabled?: boolean;
    task_status?: string;
    task_urgency?: number;
    task_urgency_enabled?: boolean;
}
export declare class ColorRule implements TDProtoClass<ColorRule> {
    #private;
    colorIndex: number;
    priority: number;
    uid: string;
    description?: string | undefined;
    section?: string | undefined;
    sectionEnabled?: boolean | undefined;
    tags?: string[] | undefined;
    tagsEnabled?: boolean | undefined;
    taskImportance?: number | undefined;
    taskImportanceEnabled?: boolean | undefined;
    taskStatus?: string | undefined;
    taskUrgency?: number | undefined;
    taskUrgencyEnabled?: boolean | undefined;
    /**
     * Set of rules to apply to tasks for coloring
     * @param colorIndex Color index
     * @param priority Rule priority
     * @param uid Rule id
     * @param description Rule description
     * @param section Project id if project filter enabled
     * @param sectionEnabled Project filter enabled
     * @param tags Tag ids if tags filter enabled
     * @param tagsEnabled Tags filter enabled
     * @param taskImportance Task importance if task importance filter enabled
     * @param taskImportanceEnabled Task importance filter enabled
     * @param taskStatus Task status
     * @param taskUrgency Task urgency if task urgency filter enabled
     * @param taskUrgencyEnabled Task urgency filter enabled
     */
    constructor(colorIndex: number, priority: number, uid: string, description?: string | undefined, section?: string | undefined, sectionEnabled?: boolean | undefined, tags?: string[] | undefined, tagsEnabled?: boolean | undefined, taskImportance?: number | undefined, taskImportanceEnabled?: boolean | undefined, taskStatus?: string | undefined, taskUrgency?: number | undefined, taskUrgencyEnabled?: boolean | undefined);
    static fromJSON(raw: ColorRuleJSON): ColorRule;
    mappableFields: readonly ["colorIndex", "priority", "uid", "description", "section", "sectionEnabled", "tags", "tagsEnabled", "taskImportance", "taskImportanceEnabled", "taskStatus", "taskUrgency", "taskUrgencyEnabled"];
    toJSON(): ColorRuleJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ColorRuleJSON>;
}
export interface ContactJSON {
    contact_email: string;
    contact_phone: string;
    display_name: string;
    gentime: number;
    icons: IconDataJSON;
    jid: JID;
    role: string;
    sections: string[];
    short_name: string;
    status: TeamStatus;
    alt_send?: boolean;
    always_send_pushes?: boolean;
    asterisk_mention?: boolean;
    auth_2fa_enabled?: boolean;
    auth_2fa_status?: string;
    botname?: string;
    can_add_to_group?: boolean;
    can_add_to_team?: boolean;
    can_call?: boolean;
    can_create_group?: boolean;
    can_create_meeting?: boolean;
    can_create_task?: boolean;
    can_create_team?: boolean;
    can_delete?: boolean;
    can_delete_any_message?: boolean;
    can_import_chats?: boolean;
    can_import_tasks?: boolean;
    can_join_public_groups?: boolean;
    can_join_public_tasks?: boolean;
    can_manage_color_rules?: boolean;
    can_manage_integrations?: boolean;
    can_manage_projects?: boolean;
    can_manage_sections?: boolean;
    can_manage_tags?: boolean;
    can_send_message?: boolean;
    cant_send_message_reason?: string;
    changeable_fields?: string[];
    contact_mshort_view?: boolean;
    contact_short_view?: boolean;
    contact_show_archived?: boolean;
    custom_fields?: ContactCustomFieldsJSON;
    debug_show_activity?: boolean;
    default_lang?: string;
    dropall_enabled?: boolean;
    family_name?: string;
    focus_until?: ISODateTimeString;
    given_name?: string;
    group_mshort_view?: boolean;
    group_notifications_enabled?: boolean;
    group_short_view?: boolean;
    hide_pushes_content?: boolean;
    is_archive?: boolean;
    last_activity?: ISODateTimeString;
    meeting_mshort_view?: boolean;
    meeting_notifications_enabled?: boolean;
    meeting_short_view?: boolean;
    mood?: string;
    munread_first?: boolean;
    node?: string;
    patronymic?: string;
    public_status?: ContactPublicStatusJSON;
    quiet_time_finish?: string;
    quiet_time_start?: string;
    reaction_notifications_enabled?: boolean;
    systembot_notifications_enabled?: boolean;
    task_mshort_view?: boolean;
    task_notifications_enabled?: boolean;
    task_short_view?: boolean;
    timezone?: string;
    unread_first?: boolean;
}
export declare class Contact implements TDProtoClass<Contact> {
    #private;
    contactEmail: string;
    contactPhone: string;
    displayName: string;
    gentime: number;
    icons: IconData;
    jid: JID;
    role: string;
    sections: string[];
    shortName: string;
    status: TeamStatus;
    altSend?: boolean | undefined;
    alwaysSendPushes?: boolean | undefined;
    asteriskMention?: boolean | undefined;
    auth2faEnabled?: boolean | undefined;
    auth2faStatus?: string | undefined;
    botname?: string | undefined;
    canAddToGroup?: boolean | undefined;
    canAddToTeam?: boolean | undefined;
    canCall?: boolean | undefined;
    canCreateGroup?: boolean | undefined;
    canCreateMeeting?: boolean | undefined;
    canCreateTask?: boolean | undefined;
    canCreateTeam?: boolean | undefined;
    canDelete?: boolean | undefined;
    canDeleteAnyMessage?: boolean | undefined;
    canImportChats?: boolean | undefined;
    canImportTasks?: boolean | undefined;
    canJoinPublicGroups?: boolean | undefined;
    canJoinPublicTasks?: boolean | undefined;
    canManageColorRules?: boolean | undefined;
    canManageIntegrations?: boolean | undefined;
    canManageProjects?: boolean | undefined;
    canManageSections?: boolean | undefined;
    canManageTags?: boolean | undefined;
    canSendMessage?: boolean | undefined;
    cantSendMessageReason?: string | undefined;
    changeableFields?: string[] | undefined;
    contactMshortView?: boolean | undefined;
    contactShortView?: boolean | undefined;
    contactShowArchived?: boolean | undefined;
    customFields?: ContactCustomFields | undefined;
    debugShowActivity?: boolean | undefined;
    defaultLang?: string | undefined;
    dropallEnabled?: boolean | undefined;
    familyName?: string | undefined;
    focusUntil?: string | undefined;
    givenName?: string | undefined;
    groupMshortView?: boolean | undefined;
    groupNotificationsEnabled?: boolean | undefined;
    groupShortView?: boolean | undefined;
    hidePushesContent?: boolean | undefined;
    isArchive?: boolean | undefined;
    lastActivity?: string | undefined;
    meetingMshortView?: boolean | undefined;
    meetingNotificationsEnabled?: boolean | undefined;
    meetingShortView?: boolean | undefined;
    mood?: string | undefined;
    munreadFirst?: boolean | undefined;
    node?: string | undefined;
    patronymic?: string | undefined;
    publicStatus?: ContactPublicStatus | undefined;
    quietTimeFinish?: string | undefined;
    quietTimeStart?: string | undefined;
    reactionNotificationsEnabled?: boolean | undefined;
    systembotNotificationsEnabled?: boolean | undefined;
    taskMshortView?: boolean | undefined;
    taskNotificationsEnabled?: boolean | undefined;
    taskShortView?: boolean | undefined;
    timezone?: string | undefined;
    unreadFirst?: boolean | undefined;
    /**
     * Contact
     * @param contactEmail Contact email in this team
     * @param contactPhone Contact phone in this team
     * @param displayName Full name in chats
     * @param gentime Object version
     * @param icons Icons data
     * @param jid Contact Id
     * @param role Role in this team
     * @param sections Section ids
     * @param shortName Short name in chats
     * @param status Status in this team
     * @param altSend Use Ctrl/Cmd + Enter instead Enter
     * @param alwaysSendPushes Send push notifications even contact is online
     * @param asteriskMention Use * as @ for mentions
     * @param auth2faEnabled Two-factor authentication is configured and confirmed
     * @param auth2faStatus Two-factor authentication status
     * @param botname Bot name. Empty for users
     * @param canAddToGroup Can I add this contact to group chats
     * @param canAddToTeam Can I add new members to this team
     * @param canCall Can I call to this contact
     * @param canCreateGroup Can I create group chats in this team
     * @param canCreateMeeting Can I create meetings in this team
     * @param canCreateTask Can I create task for this contact
     * @param canCreateTeam Can i create new team
     * @param canDelete Can I remove this contact from team
     * @param canDeleteAnyMessage Deprecated
     * @param canImportChats Can I import chats from external services (now its only telegram)
     * @param canImportTasks Can I import tasks in this team
     * @param canJoinPublicGroups Can I view/join public group in this team
     * @param canJoinPublicTasks Can I view/join public tasks in this team
     * @param canManageColorRules Can I manage color rules in this team
     * @param canManageIntegrations Can I manage integrations in this team
     * @param canManageProjects Can I manage task projects in this team
     * @param canManageSections Can I manage contact sections in this team
     * @param canManageTags Can I manage tags in this team
     * @param canSendMessage Can I send message to this contact
     * @param cantSendMessageReason Why I can't send message to this chat (if can't)
     * @param changeableFields Changeable fields
     * @param contactMshortView Short view in contact list in mobile app
     * @param contactShortView Short view in contact list
     * @param contactShowArchived Show archived contacts in contact list
     * @param customFields Extra contact fields
     * @param debugShowActivity Enable debug messages in UI
     * @param defaultLang Default language code
     * @param dropallEnabled Enable remove all messages experimental features
     * @param familyName Family name
     * @param focusUntil Focus mode enabled until
     * @param givenName Given name
     * @param groupMshortView Short view in group list in mobile app
     * @param groupNotificationsEnabled Push notifications for group chats
     * @param groupShortView Short view in group list
     * @param hidePushesContent Hide pushes body
     * @param isArchive Contact deleted
     * @param lastActivity Last activity in this team (iso datetime)
     * @param meetingMshortView Short view in meeting list in mobile app
     * @param meetingNotificationsEnabled Push notifications for meeting chats
     * @param meetingShortView Short view in meeting list
     * @param mood Mood in this team
     * @param munreadFirst Show unread chats first in feed in mobile app
     * @param node Node uid for external users
     * @param patronymic Patronymic, if any
     * @param publicStatus Public Status
     * @param quietTimeFinish Quiet time finish
     * @param quietTimeStart Quiet time start
     * @param reactionNotificationsEnabled Push notifications for reactions
     * @param systembotNotificationsEnabled Push notifications from systembot
     * @param taskMshortView Short view in task list in mobile app
     * @param taskNotificationsEnabled Push notifications for task chats
     * @param taskShortView Short view in task list
     * @param timezone Timezone, if any
     * @param unreadFirst Show unread chats first in feed
     */
    constructor(contactEmail: string, contactPhone: string, displayName: string, gentime: number, icons: IconData, jid: JID, role: string, sections: string[], shortName: string, status: TeamStatus, altSend?: boolean | undefined, alwaysSendPushes?: boolean | undefined, asteriskMention?: boolean | undefined, auth2faEnabled?: boolean | undefined, auth2faStatus?: string | undefined, botname?: string | undefined, canAddToGroup?: boolean | undefined, canAddToTeam?: boolean | undefined, canCall?: boolean | undefined, canCreateGroup?: boolean | undefined, canCreateMeeting?: boolean | undefined, canCreateTask?: boolean | undefined, canCreateTeam?: boolean | undefined, canDelete?: boolean | undefined, canDeleteAnyMessage?: boolean | undefined, canImportChats?: boolean | undefined, canImportTasks?: boolean | undefined, canJoinPublicGroups?: boolean | undefined, canJoinPublicTasks?: boolean | undefined, canManageColorRules?: boolean | undefined, canManageIntegrations?: boolean | undefined, canManageProjects?: boolean | undefined, canManageSections?: boolean | undefined, canManageTags?: boolean | undefined, canSendMessage?: boolean | undefined, cantSendMessageReason?: string | undefined, changeableFields?: string[] | undefined, contactMshortView?: boolean | undefined, contactShortView?: boolean | undefined, contactShowArchived?: boolean | undefined, customFields?: ContactCustomFields | undefined, debugShowActivity?: boolean | undefined, defaultLang?: string | undefined, dropallEnabled?: boolean | undefined, familyName?: string | undefined, focusUntil?: string | undefined, givenName?: string | undefined, groupMshortView?: boolean | undefined, groupNotificationsEnabled?: boolean | undefined, groupShortView?: boolean | undefined, hidePushesContent?: boolean | undefined, isArchive?: boolean | undefined, lastActivity?: string | undefined, meetingMshortView?: boolean | undefined, meetingNotificationsEnabled?: boolean | undefined, meetingShortView?: boolean | undefined, mood?: string | undefined, munreadFirst?: boolean | undefined, node?: string | undefined, patronymic?: string | undefined, publicStatus?: ContactPublicStatus | undefined, quietTimeFinish?: string | undefined, quietTimeStart?: string | undefined, reactionNotificationsEnabled?: boolean | undefined, systembotNotificationsEnabled?: boolean | undefined, taskMshortView?: boolean | undefined, taskNotificationsEnabled?: boolean | undefined, taskShortView?: boolean | undefined, timezone?: string | undefined, unreadFirst?: boolean | undefined);
    static fromJSON(raw: ContactJSON): Contact;
    mappableFields: readonly ["contactEmail", "contactPhone", "displayName", "gentime", "icons", "jid", "role", "sections", "shortName", "status", "altSend", "alwaysSendPushes", "asteriskMention", "auth2faEnabled", "auth2faStatus", "botname", "canAddToGroup", "canAddToTeam", "canCall", "canCreateGroup", "canCreateMeeting", "canCreateTask", "canCreateTeam", "canDelete", "canDeleteAnyMessage", "canImportChats", "canImportTasks", "canJoinPublicGroups", "canJoinPublicTasks", "canManageColorRules", "canManageIntegrations", "canManageProjects", "canManageSections", "canManageTags", "canSendMessage", "cantSendMessageReason", "changeableFields", "contactMshortView", "contactShortView", "contactShowArchived", "customFields", "debugShowActivity", "defaultLang", "dropallEnabled", "familyName", "focusUntil", "givenName", "groupMshortView", "groupNotificationsEnabled", "groupShortView", "hidePushesContent", "isArchive", "lastActivity", "meetingMshortView", "meetingNotificationsEnabled", "meetingShortView", "mood", "munreadFirst", "node", "patronymic", "publicStatus", "quietTimeFinish", "quietTimeStart", "reactionNotificationsEnabled", "systembotNotificationsEnabled", "taskMshortView", "taskNotificationsEnabled", "taskShortView", "timezone", "unreadFirst"];
    toJSON(): ContactJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ContactJSON>;
}
export interface ContactCustomFieldsJSON {
    ad_uid?: string;
    company?: string;
    department?: string;
    mobile_phone?: string;
    source?: string;
    title?: string;
}
export declare class ContactCustomFields implements TDProtoClass<ContactCustomFields> {
    #private;
    adUid?: string | undefined;
    company?: string | undefined;
    department?: string | undefined;
    mobilePhone?: string | undefined;
    source?: string | undefined;
    title?: string | undefined;
    /**
     * Extra contact fields
     * @param adUid User UUID in Active Directory
     * @param company Company
     * @param department Department
     * @param mobilePhone MobilePhone
     * @param source Import source
     * @param title Title
     */
    constructor(adUid?: string | undefined, company?: string | undefined, department?: string | undefined, mobilePhone?: string | undefined, source?: string | undefined, title?: string | undefined);
    static fromJSON(raw: ContactCustomFieldsJSON): ContactCustomFields;
    mappableFields: readonly ["adUid", "company", "department", "mobilePhone", "source", "title"];
    toJSON(): ContactCustomFieldsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ContactCustomFieldsJSON>;
}
export interface ContactPreviewJSON {
    family_name: string;
    given_name: string;
    phone: string;
    role: string;
    section: string;
    _error?: string;
    patronymic?: string;
}
export declare class ContactPreview implements TDProtoClass<ContactPreview> {
    #private;
    familyName: string;
    givenName: string;
    phone: string;
    role: string;
    section: string;
    _error?: string | undefined;
    patronymic?: string | undefined;
    /**
     * Contact preview
     * @param familyName DOCUMENTATION MISSING
     * @param givenName DOCUMENTATION MISSING
     * @param phone DOCUMENTATION MISSING
     * @param role DOCUMENTATION MISSING
     * @param section DOCUMENTATION MISSING
     * @param _error DOCUMENTATION MISSING
     * @param patronymic DOCUMENTATION MISSING
     */
    constructor(familyName: string, givenName: string, phone: string, role: string, section: string, _error?: string | undefined, patronymic?: string | undefined);
    static fromJSON(raw: ContactPreviewJSON): ContactPreview;
    mappableFields: readonly ["familyName", "givenName", "phone", "role", "section", "_error", "patronymic"];
    toJSON(): ContactPreviewJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ContactPreviewJSON>;
}
export interface ContactPublicStatusJSON {
    expires_at: ISODateTimeString;
    status: PublicStatusJSON;
}
export declare class ContactPublicStatus implements TDProtoClass<ContactPublicStatus> {
    #private;
    expiresAt: ISODateTimeString;
    status: PublicStatus;
    /**
     * MISSING CLASS DOCUMENTATION
     * @param expiresAt Expires at (iso datetime)
     * @param status Public Status
     */
    constructor(expiresAt: ISODateTimeString, status: PublicStatus);
    static fromJSON(raw: ContactPublicStatusJSON): ContactPublicStatus;
    mappableFields: readonly ["expiresAt", "status"];
    toJSON(): ContactPublicStatusJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ContactPublicStatusJSON>;
}
export interface ContactShortJSON {
    display_name: string;
    gentime: number;
    icons: IconDataJSON;
    jid: JID;
    short_name: string;
}
export declare class ContactShort implements TDProtoClass<ContactShort> {
    #private;
    displayName: string;
    gentime: number;
    icons: IconData;
    jid: JID;
    shortName: string;
    /**
     * Short contact representation
     * @param displayName Full name in chats
     * @param gentime Object version
     * @param icons Icons data
     * @param jid Contact Id
     * @param shortName Short name in chats
     */
    constructor(displayName: string, gentime: number, icons: IconData, jid: JID, shortName: string);
    static fromJSON(raw: ContactShortJSON): ContactShort;
    mappableFields: readonly ["displayName", "gentime", "icons", "jid", "shortName"];
    toJSON(): ContactShortJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ContactShortJSON>;
}
export interface ContactsSectionGetRequestJSON {
    IsArchived: boolean;
    IsBot: boolean;
    Limit: number;
    Offset: number;
    SectionUid: string;
}
export declare class ContactsSectionGetRequest implements TDProtoClass<ContactsSectionGetRequest> {
    #private;
    IsArchived: boolean;
    IsBot: boolean;
    Limit: number;
    Offset: number;
    SectionUid: string;
    /**
     * MISSING CLASS DOCUMENTATION
     * @param IsArchived * ?is_archived=
     * @param IsBot * ?is_bot=
     * @param Limit DOCUMENTATION MISSING
     * @param Offset DOCUMENTATION MISSING
     * @param SectionUid Team Section
     */
    constructor(IsArchived: boolean, IsBot: boolean, Limit: number, Offset: number, SectionUid: string);
    static fromJSON(raw: ContactsSectionGetRequestJSON): ContactsSectionGetRequest;
    mappableFields: readonly ["IsArchived", "IsBot", "Limit", "Offset", "SectionUid"];
    toJSON(): ContactsSectionGetRequestJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ContactsSectionGetRequestJSON>;
}
export interface CounterpartyJSON {
    counterparty_type: CounterpartyType;
    created_at: string;
    full_name: string;
    id: string;
    legal_address: string;
    personal_account_id: string;
    physical_address: string;
    taxpayer_identification_number: string;
    accounting_dictionary_code?: string;
    classifier_of_industrial_enterprises?: string;
    electronic_document_management_id?: string;
}
export declare class Counterparty implements TDProtoClass<Counterparty> {
    #private;
    counterpartyType: CounterpartyType;
    createdAt: string;
    fullName: string;
    id: string;
    legalAddress: string;
    personalAccountId: string;
    physicalAddress: string;
    taxpayerIdentificationNumber: string;
    accountingDictionaryCode?: string | undefined;
    classifierOfIndustrialEnterprises?: string | undefined;
    electronicDocumentManagementId?: string | undefined;
    /**
     * MISSING CLASS DOCUMENTATION
     * @param counterpartyType DOCUMENTATION MISSING
     * @param createdAt DOCUMENTATION MISSING
     * @param fullName DOCUMENTATION MISSING
     * @param id DOCUMENTATION MISSING
     * @param legalAddress DOCUMENTATION MISSING
     * @param personalAccountId DOCUMENTATION MISSING
     * @param physicalAddress DOCUMENTATION MISSING
     * @param taxpayerIdentificationNumber DOCUMENTATION MISSING
     * @param accountingDictionaryCode DOCUMENTATION MISSING
     * @param classifierOfIndustrialEnterprises DOCUMENTATION MISSING
     * @param electronicDocumentManagementId DOCUMENTATION MISSING
     */
    constructor(counterpartyType: CounterpartyType, createdAt: string, fullName: string, id: string, legalAddress: string, personalAccountId: string, physicalAddress: string, taxpayerIdentificationNumber: string, accountingDictionaryCode?: string | undefined, classifierOfIndustrialEnterprises?: string | undefined, electronicDocumentManagementId?: string | undefined);
    static fromJSON(raw: CounterpartyJSON): Counterparty;
    mappableFields: readonly ["counterpartyType", "createdAt", "fullName", "id", "legalAddress", "personalAccountId", "physicalAddress", "taxpayerIdentificationNumber", "accountingDictionaryCode", "classifierOfIndustrialEnterprises", "electronicDocumentManagementId"];
    toJSON(): CounterpartyJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<CounterpartyJSON>;
}
export interface CounterpartyCreateRequestJSON {
    counterparty_type: CounterpartyType;
    full_name: string;
    legal_address: string;
    personal_account_id: string;
    physical_address: string;
    taxpayer_identification_number: string;
    accounting_dictionary_code?: string;
    classifier_of_industrial_enterprises?: string;
    electronic_document_management_id?: string;
}
export declare class CounterpartyCreateRequest implements TDProtoClass<CounterpartyCreateRequest> {
    #private;
    counterpartyType: CounterpartyType;
    fullName: string;
    legalAddress: string;
    personalAccountId: string;
    physicalAddress: string;
    taxpayerIdentificationNumber: string;
    accountingDictionaryCode?: string | undefined;
    classifierOfIndustrialEnterprises?: string | undefined;
    electronicDocumentManagementId?: string | undefined;
    /**
     * MISSING CLASS DOCUMENTATION
     * @param counterpartyType DOCUMENTATION MISSING
     * @param fullName DOCUMENTATION MISSING
     * @param legalAddress DOCUMENTATION MISSING
     * @param personalAccountId DOCUMENTATION MISSING
     * @param physicalAddress DOCUMENTATION MISSING
     * @param taxpayerIdentificationNumber DOCUMENTATION MISSING
     * @param accountingDictionaryCode DOCUMENTATION MISSING
     * @param classifierOfIndustrialEnterprises DOCUMENTATION MISSING
     * @param electronicDocumentManagementId DOCUMENTATION MISSING
     */
    constructor(counterpartyType: CounterpartyType, fullName: string, legalAddress: string, personalAccountId: string, physicalAddress: string, taxpayerIdentificationNumber: string, accountingDictionaryCode?: string | undefined, classifierOfIndustrialEnterprises?: string | undefined, electronicDocumentManagementId?: string | undefined);
    static fromJSON(raw: CounterpartyCreateRequestJSON): CounterpartyCreateRequest;
    mappableFields: readonly ["counterpartyType", "fullName", "legalAddress", "personalAccountId", "physicalAddress", "taxpayerIdentificationNumber", "accountingDictionaryCode", "classifierOfIndustrialEnterprises", "electronicDocumentManagementId"];
    toJSON(): CounterpartyCreateRequestJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<CounterpartyCreateRequestJSON>;
}
export interface CounterpartyCreateResponseJSON {
    counterparty_type: CounterpartyType;
    created_at: string;
    full_name: string;
    id: string;
    legal_address: string;
    personal_account_id: string;
    physical_address: string;
    taxpayer_identification_number: string;
    accounting_dictionary_code?: string;
    classifier_of_industrial_enterprises?: string;
    electronic_document_management_id?: string;
}
export declare class CounterpartyCreateResponse implements TDProtoClass<CounterpartyCreateResponse> {
    #private;
    counterpartyType: CounterpartyType;
    createdAt: string;
    fullName: string;
    id: string;
    legalAddress: string;
    personalAccountId: string;
    physicalAddress: string;
    taxpayerIdentificationNumber: string;
    accountingDictionaryCode?: string | undefined;
    classifierOfIndustrialEnterprises?: string | undefined;
    electronicDocumentManagementId?: string | undefined;
    /**
     * MISSING CLASS DOCUMENTATION
     * @param counterpartyType DOCUMENTATION MISSING
     * @param createdAt DOCUMENTATION MISSING
     * @param fullName DOCUMENTATION MISSING
     * @param id DOCUMENTATION MISSING
     * @param legalAddress DOCUMENTATION MISSING
     * @param personalAccountId DOCUMENTATION MISSING
     * @param physicalAddress DOCUMENTATION MISSING
     * @param taxpayerIdentificationNumber DOCUMENTATION MISSING
     * @param accountingDictionaryCode DOCUMENTATION MISSING
     * @param classifierOfIndustrialEnterprises DOCUMENTATION MISSING
     * @param electronicDocumentManagementId DOCUMENTATION MISSING
     */
    constructor(counterpartyType: CounterpartyType, createdAt: string, fullName: string, id: string, legalAddress: string, personalAccountId: string, physicalAddress: string, taxpayerIdentificationNumber: string, accountingDictionaryCode?: string | undefined, classifierOfIndustrialEnterprises?: string | undefined, electronicDocumentManagementId?: string | undefined);
    static fromJSON(raw: CounterpartyCreateResponseJSON): CounterpartyCreateResponse;
    mappableFields: readonly ["counterpartyType", "createdAt", "fullName", "id", "legalAddress", "personalAccountId", "physicalAddress", "taxpayerIdentificationNumber", "accountingDictionaryCode", "classifierOfIndustrialEnterprises", "electronicDocumentManagementId"];
    toJSON(): CounterpartyCreateResponseJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<CounterpartyCreateResponseJSON>;
}
export interface CounterpartyGetRequestJSON {
    accounting_dictionary_code?: string;
    counterparty_ids?: string;
    limit?: number;
    offset?: number;
    personal_account_id?: string;
}
export declare class CounterpartyGetRequest implements TDProtoClass<CounterpartyGetRequest> {
    #private;
    accountingDictionaryCode?: string | undefined;
    counterpartyIds?: string | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    personalAccountId?: string | undefined;
    /**
     * MISSING CLASS DOCUMENTATION
     * @param accountingDictionaryCode DOCUMENTATION MISSING
     * @param counterpartyIds DOCUMENTATION MISSING
     * @param limit DOCUMENTATION MISSING
     * @param offset DOCUMENTATION MISSING
     * @param personalAccountId DOCUMENTATION MISSING
     */
    constructor(accountingDictionaryCode?: string | undefined, counterpartyIds?: string | undefined, limit?: number | undefined, offset?: number | undefined, personalAccountId?: string | undefined);
    static fromJSON(raw: CounterpartyGetRequestJSON): CounterpartyGetRequest;
    mappableFields: readonly ["accountingDictionaryCode", "counterpartyIds", "limit", "offset", "personalAccountId"];
    toJSON(): CounterpartyGetRequestJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<CounterpartyGetRequestJSON>;
}
export interface CounterpartyGetResponseJSON {
    counterparty_list: CounterpartyJSON[];
}
export declare class CounterpartyGetResponse implements TDProtoClass<CounterpartyGetResponse> {
    #private;
    counterpartyList: Counterparty[];
    /**
     * MISSING CLASS DOCUMENTATION
     * @param counterpartyList DOCUMENTATION MISSING
     */
    constructor(counterpartyList: Counterparty[]);
    static fromJSON(raw: CounterpartyGetResponseJSON): CounterpartyGetResponse;
    mappableFields: readonly ["counterpartyList"];
    toJSON(): CounterpartyGetResponseJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<CounterpartyGetResponseJSON>;
}
export interface CounterpartyUpdateRequestJSON {
    counterparty_type: CounterpartyType;
    full_name: string;
    legal_address: string;
    personal_account_id: string;
    physical_address: string;
    taxpayer_identification_number: string;
    accounting_dictionary_code?: string;
    classifier_of_industrial_enterprises?: string;
    electronic_document_management_id?: string;
}
export declare class CounterpartyUpdateRequest implements TDProtoClass<CounterpartyUpdateRequest> {
    #private;
    counterpartyType: CounterpartyType;
    fullName: string;
    legalAddress: string;
    personalAccountId: string;
    physicalAddress: string;
    taxpayerIdentificationNumber: string;
    accountingDictionaryCode?: string | undefined;
    classifierOfIndustrialEnterprises?: string | undefined;
    electronicDocumentManagementId?: string | undefined;
    /**
     * MISSING CLASS DOCUMENTATION
     * @param counterpartyType DOCUMENTATION MISSING
     * @param fullName DOCUMENTATION MISSING
     * @param legalAddress DOCUMENTATION MISSING
     * @param personalAccountId DOCUMENTATION MISSING
     * @param physicalAddress DOCUMENTATION MISSING
     * @param taxpayerIdentificationNumber DOCUMENTATION MISSING
     * @param accountingDictionaryCode DOCUMENTATION MISSING
     * @param classifierOfIndustrialEnterprises DOCUMENTATION MISSING
     * @param electronicDocumentManagementId DOCUMENTATION MISSING
     */
    constructor(counterpartyType: CounterpartyType, fullName: string, legalAddress: string, personalAccountId: string, physicalAddress: string, taxpayerIdentificationNumber: string, accountingDictionaryCode?: string | undefined, classifierOfIndustrialEnterprises?: string | undefined, electronicDocumentManagementId?: string | undefined);
    static fromJSON(raw: CounterpartyUpdateRequestJSON): CounterpartyUpdateRequest;
    mappableFields: readonly ["counterpartyType", "fullName", "legalAddress", "personalAccountId", "physicalAddress", "taxpayerIdentificationNumber", "accountingDictionaryCode", "classifierOfIndustrialEnterprises", "electronicDocumentManagementId"];
    toJSON(): CounterpartyUpdateRequestJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<CounterpartyUpdateRequestJSON>;
}
export interface CounterpartyUpdateResponseJSON {
    counterparty_type: CounterpartyType;
    created_at: string;
    full_name: string;
    id: string;
    legal_address: string;
    personal_account_id: string;
    physical_address: string;
    taxpayer_identification_number: string;
    accounting_dictionary_code?: string;
    classifier_of_industrial_enterprises?: string;
    electronic_document_management_id?: string;
}
export declare class CounterpartyUpdateResponse implements TDProtoClass<CounterpartyUpdateResponse> {
    #private;
    counterpartyType: CounterpartyType;
    createdAt: string;
    fullName: string;
    id: string;
    legalAddress: string;
    personalAccountId: string;
    physicalAddress: string;
    taxpayerIdentificationNumber: string;
    accountingDictionaryCode?: string | undefined;
    classifierOfIndustrialEnterprises?: string | undefined;
    electronicDocumentManagementId?: string | undefined;
    /**
     * MISSING CLASS DOCUMENTATION
     * @param counterpartyType DOCUMENTATION MISSING
     * @param createdAt DOCUMENTATION MISSING
     * @param fullName DOCUMENTATION MISSING
     * @param id DOCUMENTATION MISSING
     * @param legalAddress DOCUMENTATION MISSING
     * @param personalAccountId DOCUMENTATION MISSING
     * @param physicalAddress DOCUMENTATION MISSING
     * @param taxpayerIdentificationNumber DOCUMENTATION MISSING
     * @param accountingDictionaryCode DOCUMENTATION MISSING
     * @param classifierOfIndustrialEnterprises DOCUMENTATION MISSING
     * @param electronicDocumentManagementId DOCUMENTATION MISSING
     */
    constructor(counterpartyType: CounterpartyType, createdAt: string, fullName: string, id: string, legalAddress: string, personalAccountId: string, physicalAddress: string, taxpayerIdentificationNumber: string, accountingDictionaryCode?: string | undefined, classifierOfIndustrialEnterprises?: string | undefined, electronicDocumentManagementId?: string | undefined);
    static fromJSON(raw: CounterpartyUpdateResponseJSON): CounterpartyUpdateResponse;
    mappableFields: readonly ["counterpartyType", "createdAt", "fullName", "id", "legalAddress", "personalAccountId", "physicalAddress", "taxpayerIdentificationNumber", "accountingDictionaryCode", "classifierOfIndustrialEnterprises", "electronicDocumentManagementId"];
    toJSON(): CounterpartyUpdateResponseJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<CounterpartyUpdateResponseJSON>;
}
export interface CountryJSON {
    code: string;
    iso: string;
    name: string;
    default?: boolean;
    popular?: boolean;
}
export declare class Country implements TDProtoClass<Country> {
    #private;
    code: string;
    iso: string;
    name: string;
    isDefault?: boolean | undefined;
    popular?: boolean | undefined;
    /**
     * Country for phone numbers selection on login screen
     * @param code Phone code
     * @param iso Country ISO code
     * @param name Country name
     * @param isDefault Selected by default
     * @param popular Is popular, need to cache
     */
    constructor(code: string, iso: string, name: string, isDefault?: boolean | undefined, popular?: boolean | undefined);
    static fromJSON(raw: CountryJSON): Country;
    mappableFields: readonly ["code", "iso", "name", "isDefault", "popular"];
    toJSON(): CountryJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<CountryJSON>;
}
export interface CreateBillingContactRequestJSON {
    phone: string;
    family_name?: string;
    given_name?: string;
    patronymic?: string;
    role?: string;
    sections?: string[];
    status?: TeamStatus;
    user_uid?: string;
}
export declare class CreateBillingContactRequest implements TDProtoClass<CreateBillingContactRequest> {
    #private;
    phone: string;
    familyName?: string | undefined;
    givenName?: string | undefined;
    patronymic?: string | undefined;
    role?: string | undefined;
    sections?: string[] | undefined;
    status?: TeamStatus | undefined;
    userUid?: string | undefined;
    /**
     * MISSING CLASS DOCUMENTATION
     * @param phone DOCUMENTATION MISSING
     * @param familyName DOCUMENTATION MISSING
     * @param givenName DOCUMENTATION MISSING
     * @param patronymic DOCUMENTATION MISSING
     * @param role DOCUMENTATION MISSING
     * @param sections DOCUMENTATION MISSING
     * @param status DOCUMENTATION MISSING
     * @param userUid DOCUMENTATION MISSING
     */
    constructor(phone: string, familyName?: string | undefined, givenName?: string | undefined, patronymic?: string | undefined, role?: string | undefined, sections?: string[] | undefined, status?: TeamStatus | undefined, userUid?: string | undefined);
    static fromJSON(raw: CreateBillingContactRequestJSON): CreateBillingContactRequest;
    mappableFields: readonly ["phone", "familyName", "givenName", "patronymic", "role", "sections", "status", "userUid"];
    toJSON(): CreateBillingContactRequestJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<CreateBillingContactRequestJSON>;
}
export interface CreateChangeTariffOnPersonalAccountRequestJSON {
    tariff_id: string;
    open_date?: string;
}
export declare class CreateChangeTariffOnPersonalAccountRequest implements TDProtoClass<CreateChangeTariffOnPersonalAccountRequest> {
    #private;
    tariffId: string;
    openDate?: string | undefined;
    /**
     * CreateChangeTariffOnPersonalAccountRequest request on create change tariff on personal account
     * @param tariffId DOCUMENTATION MISSING
     * @param openDate DOCUMENTATION MISSING
     */
    constructor(tariffId: string, openDate?: string | undefined);
    static fromJSON(raw: CreateChangeTariffOnPersonalAccountRequestJSON): CreateChangeTariffOnPersonalAccountRequest;
    mappableFields: readonly ["tariffId", "openDate"];
    toJSON(): CreateChangeTariffOnPersonalAccountRequestJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<CreateChangeTariffOnPersonalAccountRequestJSON>;
}
export interface CreateChangeTariffOnPersonalAccountResponseJSON {
    success?: boolean;
}
export declare class CreateChangeTariffOnPersonalAccountResponse implements TDProtoClass<CreateChangeTariffOnPersonalAccountResponse> {
    #private;
    success?: boolean | undefined;
    /**
     * CreateChangeTariffOnPersonalAccountResponse response on create change tariff on personal account
     * @param success DOCUMENTATION MISSING
     */
    constructor(success?: boolean | undefined);
    static fromJSON(raw: CreateChangeTariffOnPersonalAccountResponseJSON): CreateChangeTariffOnPersonalAccountResponse;
    mappableFields: readonly ["success"];
    toJSON(): CreateChangeTariffOnPersonalAccountResponseJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<CreateChangeTariffOnPersonalAccountResponseJSON>;
}
export interface CreatePersonalAccountRequestJSON {
    owner_uuid: string;
    team_uuid: string;
    full_name?: string;
    phone?: string;
}
export declare class CreatePersonalAccountRequest implements TDProtoClass<CreatePersonalAccountRequest> {
    #private;
    ownerUuid: string;
    teamUuid: string;
    fullName?: string | undefined;
    phone?: string | undefined;
    /**
     * CreatePersonalAccountRequest request on create personal account
     * @param ownerUuid DOCUMENTATION MISSING
     * @param teamUuid DOCUMENTATION MISSING
     * @param fullName DOCUMENTATION MISSING
     * @param phone DOCUMENTATION MISSING
     */
    constructor(ownerUuid: string, teamUuid: string, fullName?: string | undefined, phone?: string | undefined);
    static fromJSON(raw: CreatePersonalAccountRequestJSON): CreatePersonalAccountRequest;
    mappableFields: readonly ["ownerUuid", "teamUuid", "fullName", "phone"];
    toJSON(): CreatePersonalAccountRequestJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<CreatePersonalAccountRequestJSON>;
}
export interface CreatePersonalAccountResponseJSON {
    empty_workplace_count: number;
    free_workplace_count: number;
    is_blocked: boolean;
    is_suspended: boolean;
    occupied_workplace_count: number;
    owner_id: string;
    owner_uuid: string;
    paid_workplace_count: number;
    personal_account_id: string;
    status: PersonalAccountStatus;
    tariff: TariffBillingJSON;
    teams_count: number;
    workplace_count: number;
    block_date?: string;
    next_billing_date?: string;
    owner?: ContactJSON;
    suspend_date?: string;
}
export declare class CreatePersonalAccountResponse implements TDProtoClass<CreatePersonalAccountResponse> {
    #private;
    emptyWorkplaceCount: number;
    freeWorkplaceCount: number;
    isBlocked: boolean;
    isSuspended: boolean;
    occupiedWorkplaceCount: number;
    ownerId: string;
    ownerUuid: string;
    paidWorkplaceCount: number;
    personalAccountId: string;
    status: PersonalAccountStatus;
    tariff: TariffBilling;
    teamsCount: number;
    workplaceCount: number;
    blockDate?: string | undefined;
    nextBillingDate?: string | undefined;
    owner?: Contact | undefined;
    suspendDate?: string | undefined;
    /**
     * CreatePersonalAccountResponse response on create personal account
     * @param emptyWorkplaceCount Count of empty workplaces on personal account
     * @param freeWorkplaceCount Count of free workplaces on personal account
     * @param isBlocked Is the account blocked
     * @param isSuspended Is the account suspended
     * @param occupiedWorkplaceCount Count of occupied workplaces on personal account
     * @param ownerId ID User who owns this personal account
     * @param ownerUuid UUID of User who owns this personal account
     * @param paidWorkplaceCount Count of paid workplaces on personal account
     * @param personalAccountId PersonalAccountBilling ID
     * @param status Status of personal account
     * @param tariff Tariff on this personal account
     * @param teamsCount Count of teams on personal account
     * @param workplaceCount Count of workplaces on personal account
     * @param blockDate Account blocking date
     * @param nextBillingDate Date of next debiting funds
     * @param owner Owner of this personal account
     * @param suspendDate Account suspending date
     */
    constructor(emptyWorkplaceCount: number, freeWorkplaceCount: number, isBlocked: boolean, isSuspended: boolean, occupiedWorkplaceCount: number, ownerId: string, ownerUuid: string, paidWorkplaceCount: number, personalAccountId: string, status: PersonalAccountStatus, tariff: TariffBilling, teamsCount: number, workplaceCount: number, blockDate?: string | undefined, nextBillingDate?: string | undefined, owner?: Contact | undefined, suspendDate?: string | undefined);
    static fromJSON(raw: CreatePersonalAccountResponseJSON): CreatePersonalAccountResponse;
    mappableFields: readonly ["emptyWorkplaceCount", "freeWorkplaceCount", "isBlocked", "isSuspended", "occupiedWorkplaceCount", "ownerId", "ownerUuid", "paidWorkplaceCount", "personalAccountId", "status", "tariff", "teamsCount", "workplaceCount", "blockDate", "nextBillingDate", "owner", "suspendDate"];
    toJSON(): CreatePersonalAccountResponseJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<CreatePersonalAccountResponseJSON>;
}
export interface CreateTariffRequestJSON {
    cost_workplace: string;
    currency: Currency;
    name: string;
    nomenclature_name: string;
    period_days: number;
    benefit?: string;
    description?: string;
    disk_space_quota_mb?: string;
    free_workplace_countt?: number;
    is_default?: boolean;
    is_free?: boolean;
    is_public?: boolean;
    max_video_user?: number;
    max_voice_user?: number;
    max_workplace_count?: number;
    min_workplace_count?: number;
    open_date?: string;
    priority?: number;
    step_increasing_workplaces?: number;
    video_call_bitrate?: number;
    video_sharing_bitrate?: number;
}
export declare class CreateTariffRequest implements TDProtoClass<CreateTariffRequest> {
    #private;
    costWorkplace: string;
    currency: Currency;
    name: string;
    nomenclatureName: string;
    periodDays: number;
    benefit?: string | undefined;
    description?: string | undefined;
    diskSpaceQuotaMb?: string | undefined;
    freeWorkplaceCountt?: number | undefined;
    isDefault?: boolean | undefined;
    isFree?: boolean | undefined;
    isPublic?: boolean | undefined;
    maxVideoUser?: number | undefined;
    maxVoiceUser?: number | undefined;
    maxWorkplaceCount?: number | undefined;
    minWorkplaceCount?: number | undefined;
    openDate?: string | undefined;
    priority?: number | undefined;
    stepIncreasingWorkplaces?: number | undefined;
    videoCallBitrate?: number | undefined;
    videoSharingBitrate?: number | undefined;
    /**
     * Request to create the tariff
     * @param costWorkplace Cost of one workplace
     * @param currency Currency of tariff
     * @param name Name of tariff
     * @param nomenclatureName Nomenclature name of tariff
     * @param periodDays Number of paid days
     * @param benefit Benefit of tariff
     * @param description Description of tariff
     * @param diskSpaceQuotaMb Disk space limit per user
     * @param freeWorkplaceCountt Count of free workspaces
     * @param isDefault Default tariff flag that is set when registering an account
     * @param isFree Flag of availability of free seats when exceeding FreeWorkplace
     * @param isPublic Flag of publicity
     * @param maxVideoUser Maximum count of users in video conference
     * @param maxVoiceUser Maximum count of users in voice conference
     * @param maxWorkplaceCount Count of maximum workspaces on tariff
     * @param minWorkplaceCount Count of minimum workspaces on tariff
     * @param openDate Date of opening tariff
     * @param priority Priority of tariff
     * @param stepIncreasingWorkplaces Minimum step of change count workspaces on tariff
     * @param videoCallBitrate Bitrate of video in video co
     * @param videoSharingBitrate Bitrate of video in video sharing
     */
    constructor(costWorkplace: string, currency: Currency, name: string, nomenclatureName: string, periodDays: number, benefit?: string | undefined, description?: string | undefined, diskSpaceQuotaMb?: string | undefined, freeWorkplaceCountt?: number | undefined, isDefault?: boolean | undefined, isFree?: boolean | undefined, isPublic?: boolean | undefined, maxVideoUser?: number | undefined, maxVoiceUser?: number | undefined, maxWorkplaceCount?: number | undefined, minWorkplaceCount?: number | undefined, openDate?: string | undefined, priority?: number | undefined, stepIncreasingWorkplaces?: number | undefined, videoCallBitrate?: number | undefined, videoSharingBitrate?: number | undefined);
    static fromJSON(raw: CreateTariffRequestJSON): CreateTariffRequest;
    mappableFields: readonly ["costWorkplace", "currency", "name", "nomenclatureName", "periodDays", "benefit", "description", "diskSpaceQuotaMb", "freeWorkplaceCountt", "isDefault", "isFree", "isPublic", "maxVideoUser", "maxVoiceUser", "maxWorkplaceCount", "minWorkplaceCount", "openDate", "priority", "stepIncreasingWorkplaces", "videoCallBitrate", "videoSharingBitrate"];
    toJSON(): CreateTariffRequestJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<CreateTariffRequestJSON>;
}
export interface DLPBasicDataJSON {
    description: string;
    name: string;
    number: number;
    uuid: string;
}
export declare class DLPBasicData implements TDProtoClass<DLPBasicData> {
    #private;
    description: string;
    name: string;
    number: number;
    uuid: string;
    /**
     * DLPBasicData structure for basic data (used for team, group, task, etc.)
     * @param description DOCUMENTATION MISSING
     * @param name DOCUMENTATION MISSING
     * @param number DOCUMENTATION MISSING
     * @param uuid DOCUMENTATION MISSING
     */
    constructor(description: string, name: string, number: number, uuid: string);
    static fromJSON(raw: DLPBasicDataJSON): DLPBasicData;
    mappableFields: readonly ["description", "name", "number", "uuid"];
    toJSON(): DLPBasicDataJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<DLPBasicDataJSON>;
}
export interface DLPEventJSON {
    direct_data: DLPUserDataJSON;
    event_channel: ChatType;
    event_time: string;
    file_data: DLPFileDataJSON;
    group_data: DLPBasicDataJSON;
    media_type: Mediatype;
    message_data: DLPMessageDataJSON;
    sender_data: DLPUserDataJSON;
    task_data: DLPBasicDataJSON;
    team_data: DLPBasicDataJSON;
    uuid: string;
}
export declare class DLPEvent implements TDProtoClass<DLPEvent> {
    #private;
    directData: DLPUserData;
    eventChannel: ChatType;
    eventTime: string;
    fileData: DLPFileData;
    groupData: DLPBasicData;
    mediaType: Mediatype;
    messageData: DLPMessageData;
    senderData: DLPUserData;
    taskData: DLPBasicData;
    teamData: DLPBasicData;
    uuid: string;
    /**
     * DLPEvent structure to store all information about event
     * @param directData DOCUMENTATION MISSING
     * @param eventChannel DOCUMENTATION MISSING
     * @param eventTime DOCUMENTATION MISSING
     * @param fileData DOCUMENTATION MISSING
     * @param groupData DOCUMENTATION MISSING
     * @param mediaType DOCUMENTATION MISSING
     * @param messageData DOCUMENTATION MISSING
     * @param senderData DOCUMENTATION MISSING
     * @param taskData DOCUMENTATION MISSING
     * @param teamData DOCUMENTATION MISSING
     * @param uuid DOCUMENTATION MISSING
     */
    constructor(directData: DLPUserData, eventChannel: ChatType, eventTime: string, fileData: DLPFileData, groupData: DLPBasicData, mediaType: Mediatype, messageData: DLPMessageData, senderData: DLPUserData, taskData: DLPBasicData, teamData: DLPBasicData, uuid: string);
    static fromJSON(raw: DLPEventJSON): DLPEvent;
    mappableFields: readonly ["directData", "eventChannel", "eventTime", "fileData", "groupData", "mediaType", "messageData", "senderData", "taskData", "teamData", "uuid"];
    toJSON(): DLPEventJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<DLPEventJSON>;
}
export interface DLPFileDataJSON {
    comment: string;
    link: string;
}
export declare class DLPFileData implements TDProtoClass<DLPFileData> {
    #private;
    comment: string;
    link: string;
    /**
     * DLPFileData structure to store information about file event
     * @param comment Content []byte `json:"content"` // TODO
     * @param link DOCUMENTATION MISSING
     */
    constructor(comment: string, link: string);
    static fromJSON(raw: DLPFileDataJSON): DLPFileData;
    mappableFields: readonly ["comment", "link"];
    toJSON(): DLPFileDataJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<DLPFileDataJSON>;
}
export interface DLPMessageDataJSON {
    comment: string;
    text: string;
}
export declare class DLPMessageData implements TDProtoClass<DLPMessageData> {
    #private;
    comment: string;
    text: string;
    /**
     * DLPMessageData structure to store information about message
     * @param comment DOCUMENTATION MISSING
     * @param text DOCUMENTATION MISSING
     */
    constructor(comment: string, text: string);
    static fromJSON(raw: DLPMessageDataJSON): DLPMessageData;
    mappableFields: readonly ["comment", "text"];
    toJSON(): DLPMessageDataJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<DLPMessageDataJSON>;
}
export interface DLPUserDataJSON {
    contact_email: string;
    contact_phone: string;
    contact_uuid: string;
    first_name: string;
    is_bot: boolean;
    last_name: string;
    middle_name: string;
    name: string;
    role: string;
    uuid: string;
}
export declare class DLPUserData implements TDProtoClass<DLPUserData> {
    #private;
    contactEmail: string;
    contactPhone: string;
    contactUuid: string;
    firstName: string;
    isBot: boolean;
    lastName: string;
    middleName: string;
    name: string;
    role: string;
    uuid: string;
    /**
     * DLPUserData structure to store sender/receiver user information
     * @param contactEmail DOCUMENTATION MISSING
     * @param contactPhone DOCUMENTATION MISSING
     * @param contactUuid DOCUMENTATION MISSING
     * @param firstName DOCUMENTATION MISSING
     * @param isBot DOCUMENTATION MISSING
     * @param lastName DOCUMENTATION MISSING
     * @param middleName DOCUMENTATION MISSING
     * @param name DOCUMENTATION MISSING
     * @param role DOCUMENTATION MISSING
     * @param uuid DOCUMENTATION MISSING
     */
    constructor(contactEmail: string, contactPhone: string, contactUuid: string, firstName: string, isBot: boolean, lastName: string, middleName: string, name: string, role: string, uuid: string);
    static fromJSON(raw: DLPUserDataJSON): DLPUserData;
    mappableFields: readonly ["contactEmail", "contactPhone", "contactUuid", "firstName", "isBot", "lastName", "middleName", "name", "role", "uuid"];
    toJSON(): DLPUserDataJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<DLPUserDataJSON>;
}
export interface DeleteChangeTariffOnPersonalAccountRequestJSON {
    tariff_id: string;
}
export declare class DeleteChangeTariffOnPersonalAccountRequest implements TDProtoClass<DeleteChangeTariffOnPersonalAccountRequest> {
    #private;
    tariffId: string;
    /**
     * DeleteChangeTariffOnPersonalAccountRequest request on delete change tariff on personal account
     * @param tariffId DOCUMENTATION MISSING
     */
    constructor(tariffId: string);
    static fromJSON(raw: DeleteChangeTariffOnPersonalAccountRequestJSON): DeleteChangeTariffOnPersonalAccountRequest;
    mappableFields: readonly ["tariffId"];
    toJSON(): DeleteChangeTariffOnPersonalAccountRequestJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<DeleteChangeTariffOnPersonalAccountRequestJSON>;
}
export interface DeleteChangeTariffOnPersonalAccountResponseJSON {
    success?: boolean;
}
export declare class DeleteChangeTariffOnPersonalAccountResponse implements TDProtoClass<DeleteChangeTariffOnPersonalAccountResponse> {
    #private;
    success?: boolean | undefined;
    /**
     * DeleteChangeTariffOnPersonalAccountResponse response on delete change tariff om personal account
     * @param success DOCUMENTATION MISSING
     */
    constructor(success?: boolean | undefined);
    static fromJSON(raw: DeleteChangeTariffOnPersonalAccountResponseJSON): DeleteChangeTariffOnPersonalAccountResponse;
    mappableFields: readonly ["success"];
    toJSON(): DeleteChangeTariffOnPersonalAccountResponseJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<DeleteChangeTariffOnPersonalAccountResponseJSON>;
}
export interface DeleteTeamFromPersonalAccountRequestJSON {
    delete_date?: string;
    team_uuid?: string;
}
export declare class DeleteTeamFromPersonalAccountRequest implements TDProtoClass<DeleteTeamFromPersonalAccountRequest> {
    #private;
    deleteDate?: string | undefined;
    teamUuid?: string | undefined;
    /**
     * DeleteTeamFromPersonalAccountRequest request on delete team from personal account
     * @param deleteDate DOCUMENTATION MISSING
     * @param teamUuid DOCUMENTATION MISSING
     */
    constructor(deleteDate?: string | undefined, teamUuid?: string | undefined);
    static fromJSON(raw: DeleteTeamFromPersonalAccountRequestJSON): DeleteTeamFromPersonalAccountRequest;
    mappableFields: readonly ["deleteDate", "teamUuid"];
    toJSON(): DeleteTeamFromPersonalAccountRequestJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<DeleteTeamFromPersonalAccountRequestJSON>;
}
export interface DeleteTeamFromPersonalAccountResponseJSON {
    success?: boolean;
}
export declare class DeleteTeamFromPersonalAccountResponse implements TDProtoClass<DeleteTeamFromPersonalAccountResponse> {
    #private;
    success?: boolean | undefined;
    /**
     * DeleteTeamFromPersonalAccountResponse response on delete team from personal account
     * @param success DOCUMENTATION MISSING
     */
    constructor(success?: boolean | undefined);
    static fromJSON(raw: DeleteTeamFromPersonalAccountResponseJSON): DeleteTeamFromPersonalAccountResponse;
    mappableFields: readonly ["success"];
    toJSON(): DeleteTeamFromPersonalAccountResponseJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<DeleteTeamFromPersonalAccountResponseJSON>;
}
export interface DeleteUserFromWorkplaceRequestJSON {
    user_uuid: string;
}
export declare class DeleteUserFromWorkplaceRequest implements TDProtoClass<DeleteUserFromWorkplaceRequest> {
    #private;
    userUuid: string;
    /**
     * DeleteUserFromWorkplaceRequest request on delete user from workplace on personal account
     * @param userUuid DOCUMENTATION MISSING
     */
    constructor(userUuid: string);
    static fromJSON(raw: DeleteUserFromWorkplaceRequestJSON): DeleteUserFromWorkplaceRequest;
    mappableFields: readonly ["userUuid"];
    toJSON(): DeleteUserFromWorkplaceRequestJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<DeleteUserFromWorkplaceRequestJSON>;
}
export interface DeleteUserFromWorkplaceResponseJSON {
    success?: boolean;
}
export declare class DeleteUserFromWorkplaceResponse implements TDProtoClass<DeleteUserFromWorkplaceResponse> {
    #private;
    success?: boolean | undefined;
    /**
     * DeleteUserFromWorkplaceResponse response on delete user from workplace on personal account
     * @param success DOCUMENTATION MISSING
     */
    constructor(success?: boolean | undefined);
    static fromJSON(raw: DeleteUserFromWorkplaceResponseJSON): DeleteUserFromWorkplaceResponse;
    mappableFields: readonly ["success"];
    toJSON(): DeleteUserFromWorkplaceResponseJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<DeleteUserFromWorkplaceResponseJSON>;
}
export interface DeleteWorkplacesOnPersonalAccountRequestJSON {
    count_workplaces: number;
}
export declare class DeleteWorkplacesOnPersonalAccountRequest implements TDProtoClass<DeleteWorkplacesOnPersonalAccountRequest> {
    #private;
    countWorkplaces: number;
    /**
     * DeleteWorkplacesOnPersonalAccountRequest request on delete workplace on personal account
     * @param countWorkplaces DOCUMENTATION MISSING
     */
    constructor(countWorkplaces: number);
    static fromJSON(raw: DeleteWorkplacesOnPersonalAccountRequestJSON): DeleteWorkplacesOnPersonalAccountRequest;
    mappableFields: readonly ["countWorkplaces"];
    toJSON(): DeleteWorkplacesOnPersonalAccountRequestJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<DeleteWorkplacesOnPersonalAccountRequestJSON>;
}
export interface DeleteWorkplacesOnPersonalAccountResponseJSON {
    success?: boolean;
}
export declare class DeleteWorkplacesOnPersonalAccountResponse implements TDProtoClass<DeleteWorkplacesOnPersonalAccountResponse> {
    #private;
    success?: boolean | undefined;
    /**
     * DeleteWorkplacesOnPersonalAccountResponse response on delete workplace on personal account
     * @param success DOCUMENTATION MISSING
     */
    constructor(success?: boolean | undefined);
    static fromJSON(raw: DeleteWorkplacesOnPersonalAccountResponseJSON): DeleteWorkplacesOnPersonalAccountResponse;
    mappableFields: readonly ["success"];
    toJSON(): DeleteWorkplacesOnPersonalAccountResponseJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<DeleteWorkplacesOnPersonalAccountResponseJSON>;
}
export interface DeletedChatJSON {
    chat_type: ChatType;
    gentime: number;
    is_archive: boolean;
    jid: JID;
}
export declare class DeletedChat implements TDProtoClass<DeletedChat> {
    #private;
    chatType: ChatType;
    gentime: number;
    isArchive: boolean;
    jid: JID;
    /**
     * Minimal chat representation for deletion
     * @param chatType Chat type
     * @param gentime Chat fields (related to concrete participant) version
     * @param isArchive Archive flag. Always true for this structure
     * @param jid Group/Task/Contact id
     */
    constructor(chatType: ChatType, gentime: number, isArchive: boolean, jid: JID);
    static fromJSON(raw: DeletedChatJSON): DeletedChat;
    mappableFields: readonly ["chatType", "gentime", "isArchive", "jid"];
    toJSON(): DeletedChatJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<DeletedChatJSON>;
}
export interface DeletedRemindJSON {
    uid: string;
}
export declare class DeletedRemind implements TDProtoClass<DeletedRemind> {
    #private;
    uid: string;
    /**
     * Remind deleted message
     * @param uid Remind id
     */
    constructor(uid: string);
    static fromJSON(raw: DeletedRemindJSON): DeletedRemind;
    mappableFields: readonly ["uid"];
    toJSON(): DeletedRemindJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<DeletedRemindJSON>;
}
export interface DeletedSectionJSON {
    gentime: number;
    uid: string;
}
export declare class DeletedSection implements TDProtoClass<DeletedSection> {
    #private;
    gentime: number;
    uid: string;
    /**
     * Deleted task project or contact section
     * @param gentime Object version
     * @param uid Section uid
     */
    constructor(gentime: number, uid: string);
    static fromJSON(raw: DeletedSectionJSON): DeletedSection;
    mappableFields: readonly ["gentime", "uid"];
    toJSON(): DeletedSectionJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<DeletedSectionJSON>;
}
export interface DeletedTagJSON {
    uid: string;
}
export declare class DeletedTag implements TDProtoClass<DeletedTag> {
    #private;
    uid: string;
    /**
     * Delete tag message
     * @param uid Tag id
     */
    constructor(uid: string);
    static fromJSON(raw: DeletedTagJSON): DeletedTag;
    mappableFields: readonly ["uid"];
    toJSON(): DeletedTagJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<DeletedTagJSON>;
}
export interface DeletedTeamJSON {
    gentime: number;
    is_archive: boolean;
    uid: string;
}
export declare class DeletedTeam implements TDProtoClass<DeletedTeam> {
    #private;
    gentime: number;
    isArchive: boolean;
    uid: string;
    /**
     * Team deletion message. Readonly
     * @param gentime Object version
     * @param isArchive Team deleted
     * @param uid Team id
     */
    constructor(gentime: number, isArchive: boolean, uid: string);
    static fromJSON(raw: DeletedTeamJSON): DeletedTeam;
    mappableFields: readonly ["gentime", "isArchive", "uid"];
    toJSON(): DeletedTeamJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<DeletedTeamJSON>;
}
export interface DistJSON {
    type: string;
    url: string;
}
export declare class Dist implements TDProtoClass<Dist> {
    #private;
    type: string;
    url: string;
    /**
     * Distribution information
     * @param type DOCUMENTATION MISSING
     * @param url DOCUMENTATION MISSING
     */
    constructor(type: string, url: string);
    static fromJSON(raw: DistJSON): Dist;
    mappableFields: readonly ["type", "url"];
    toJSON(): DistJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<DistJSON>;
}
export interface EasyApiMessageJSON {
    convert_linebreaks: boolean;
    important: boolean;
    key: string;
    message: string;
    message_id: string;
    nopreview: boolean;
    silently: boolean;
}
export declare class EasyApiMessage implements TDProtoClass<EasyApiMessage> {
    #private;
    convertLinebreaks: boolean;
    important: boolean;
    key: string;
    message: string;
    messageId: string;
    nopreview: boolean;
    silently: boolean;
    /**
     * Simple api for integrations /api/message or /tasks/[team]/[num]/message
     * @param convertLinebreaks Convert "\\n" to "\n"
     * @param important Mark message as important
     * @param key Comma separated api keys (for /api/message calls only)
     * @param message Message text. Required
     * @param messageId Message uuid. Optional
     * @param nopreview Disable links preview
     * @param silently Disable counters and push notifications
     */
    constructor(convertLinebreaks: boolean, important: boolean, key: string, message: string, messageId: string, nopreview: boolean, silently: boolean);
    static fromJSON(raw: EasyApiMessageJSON): EasyApiMessage;
    mappableFields: readonly ["convertLinebreaks", "important", "key", "message", "messageId", "nopreview", "silently"];
    toJSON(): EasyApiMessageJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<EasyApiMessageJSON>;
}
export interface EmojiJSON {
    char: string;
    key: string;
}
export declare class Emoji implements TDProtoClass<Emoji> {
    #private;
    char: string;
    key: string;
    /**
     * Emoji
     * @param char Unicode symbol
     * @param key Text representation
     */
    constructor(char: string, key: string);
    static fromJSON(raw: EmojiJSON): Emoji;
    mappableFields: readonly ["char", "key"];
    toJSON(): EmojiJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<EmojiJSON>;
}
export interface EnquiryJSON {
    amount: number;
    enquiry_type: EnquiryType;
    free_workplace_count: number;
    id: string;
    payment_status: EnquiryPaymentStatus;
    payment_type: PaymentType;
    period_days: number;
    personal_account_id: string;
    selectable_workplace_count: number;
    status: EnquiryStatus;
    tariff_name: string;
    workplace_price: number;
    activate_at?: string;
    activation_date?: string;
    actually_paid_at?: string;
    created_at?: string;
    credited_at?: string;
    deactivate_at?: string;
    deactivation_date?: string;
    expiration_date?: string;
    expired_at?: string;
    file_name?: string;
    fixation_paid_at?: string;
    media_url?: string;
}
export declare class Enquiry implements TDProtoClass<Enquiry> {
    #private;
    amount: number;
    enquiryType: EnquiryType;
    freeWorkplaceCount: number;
    id: string;
    paymentStatus: EnquiryPaymentStatus;
    paymentType: PaymentType;
    periodDays: number;
    personalAccountId: string;
    selectableWorkplaceCount: number;
    status: EnquiryStatus;
    tariffName: string;
    workplacePrice: number;
    activateAt?: string | undefined;
    activationDate?: string | undefined;
    actuallyPaidAt?: string | undefined;
    createdAt?: string | undefined;
    creditedAt?: string | undefined;
    deactivateAt?: string | undefined;
    deactivationDate?: string | undefined;
    expirationDate?: string | undefined;
    expiredAt?: string | undefined;
    fileName?: string | undefined;
    fixationPaidAt?: string | undefined;
    mediaUrl?: string | undefined;
    /**
     * MISSING CLASS DOCUMENTATION
     * @param amount DOCUMENTATION MISSING
     * @param enquiryType DOCUMENTATION MISSING
     * @param freeWorkplaceCount DOCUMENTATION MISSING
     * @param id DOCUMENTATION MISSING
     * @param paymentStatus DOCUMENTATION MISSING
     * @param paymentType DOCUMENTATION MISSING
     * @param periodDays DOCUMENTATION MISSING
     * @param personalAccountId DOCUMENTATION MISSING
     * @param selectableWorkplaceCount DOCUMENTATION MISSING
     * @param status DOCUMENTATION MISSING
     * @param tariffName DOCUMENTATION MISSING
     * @param workplacePrice DOCUMENTATION MISSING
     * @param activateAt DOCUMENTATION MISSING
     * @param activationDate DOCUMENTATION MISSING
     * @param actuallyPaidAt DOCUMENTATION MISSING
     * @param createdAt DOCUMENTATION MISSING
     * @param creditedAt DOCUMENTATION MISSING
     * @param deactivateAt DOCUMENTATION MISSING
     * @param deactivationDate DOCUMENTATION MISSING
     * @param expirationDate DOCUMENTATION MISSING
     * @param expiredAt DOCUMENTATION MISSING
     * @param fileName DOCUMENTATION MISSING
     * @param fixationPaidAt DOCUMENTATION MISSING
     * @param mediaUrl DOCUMENTATION MISSING
     */
    constructor(amount: number, enquiryType: EnquiryType, freeWorkplaceCount: number, id: string, paymentStatus: EnquiryPaymentStatus, paymentType: PaymentType, periodDays: number, personalAccountId: string, selectableWorkplaceCount: number, status: EnquiryStatus, tariffName: string, workplacePrice: number, activateAt?: string | undefined, activationDate?: string | undefined, actuallyPaidAt?: string | undefined, createdAt?: string | undefined, creditedAt?: string | undefined, deactivateAt?: string | undefined, deactivationDate?: string | undefined, expirationDate?: string | undefined, expiredAt?: string | undefined, fileName?: string | undefined, fixationPaidAt?: string | undefined, mediaUrl?: string | undefined);
    static fromJSON(raw: EnquiryJSON): Enquiry;
    mappableFields: readonly ["amount", "enquiryType", "freeWorkplaceCount", "id", "paymentStatus", "paymentType", "periodDays", "personalAccountId", "selectableWorkplaceCount", "status", "tariffName", "workplacePrice", "activateAt", "activationDate", "actuallyPaidAt", "createdAt", "creditedAt", "deactivateAt", "deactivationDate", "expirationDate", "expiredAt", "fileName", "fixationPaidAt", "mediaUrl"];
    toJSON(): EnquiryJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<EnquiryJSON>;
}
export interface EnquiryCreateRequestJSON {
    counterparty_id: string;
    selectable_tariff_id: string;
    selectable_workplace_count: number;
}
export declare class EnquiryCreateRequest implements TDProtoClass<EnquiryCreateRequest> {
    #private;
    counterpartyId: string;
    selectableTariffId: string;
    selectableWorkplaceCount: number;
    /**
     * MISSING CLASS DOCUMENTATION
     * @param counterpartyId DOCUMENTATION MISSING
     * @param selectableTariffId DOCUMENTATION MISSING
     * @param selectableWorkplaceCount DOCUMENTATION MISSING
     */
    constructor(counterpartyId: string, selectableTariffId: string, selectableWorkplaceCount: number);
    static fromJSON(raw: EnquiryCreateRequestJSON): EnquiryCreateRequest;
    mappableFields: readonly ["counterpartyId", "selectableTariffId", "selectableWorkplaceCount"];
    toJSON(): EnquiryCreateRequestJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<EnquiryCreateRequestJSON>;
}
export interface EnquiryCreateResponseJSON {
    amount: number;
    enquiry_type: EnquiryType;
    free_workplace_count: number;
    id: string;
    payment_status: EnquiryPaymentStatus;
    payment_type: PaymentType;
    period_days: number;
    personal_account_id: string;
    selectable_workplace_count: number;
    status: EnquiryStatus;
    tariff_name: string;
    workplace_price: number;
    activate_at?: string;
    activation_date?: string;
    actually_paid_at?: string;
    created_at?: string;
    credited_at?: string;
    deactivate_at?: string;
    deactivation_date?: string;
    expiration_date?: string;
    expired_at?: string;
    file_name?: string;
    fixation_paid_at?: string;
    media_url?: string;
}
export declare class EnquiryCreateResponse implements TDProtoClass<EnquiryCreateResponse> {
    #private;
    amount: number;
    enquiryType: EnquiryType;
    freeWorkplaceCount: number;
    id: string;
    paymentStatus: EnquiryPaymentStatus;
    paymentType: PaymentType;
    periodDays: number;
    personalAccountId: string;
    selectableWorkplaceCount: number;
    status: EnquiryStatus;
    tariffName: string;
    workplacePrice: number;
    activateAt?: string | undefined;
    activationDate?: string | undefined;
    actuallyPaidAt?: string | undefined;
    createdAt?: string | undefined;
    creditedAt?: string | undefined;
    deactivateAt?: string | undefined;
    deactivationDate?: string | undefined;
    expirationDate?: string | undefined;
    expiredAt?: string | undefined;
    fileName?: string | undefined;
    fixationPaidAt?: string | undefined;
    mediaUrl?: string | undefined;
    /**
     * MISSING CLASS DOCUMENTATION
     * @param amount DOCUMENTATION MISSING
     * @param enquiryType DOCUMENTATION MISSING
     * @param freeWorkplaceCount DOCUMENTATION MISSING
     * @param id DOCUMENTATION MISSING
     * @param paymentStatus DOCUMENTATION MISSING
     * @param paymentType DOCUMENTATION MISSING
     * @param periodDays DOCUMENTATION MISSING
     * @param personalAccountId DOCUMENTATION MISSING
     * @param selectableWorkplaceCount DOCUMENTATION MISSING
     * @param status DOCUMENTATION MISSING
     * @param tariffName DOCUMENTATION MISSING
     * @param workplacePrice DOCUMENTATION MISSING
     * @param activateAt DOCUMENTATION MISSING
     * @param activationDate DOCUMENTATION MISSING
     * @param actuallyPaidAt DOCUMENTATION MISSING
     * @param createdAt DOCUMENTATION MISSING
     * @param creditedAt DOCUMENTATION MISSING
     * @param deactivateAt DOCUMENTATION MISSING
     * @param deactivationDate DOCUMENTATION MISSING
     * @param expirationDate DOCUMENTATION MISSING
     * @param expiredAt DOCUMENTATION MISSING
     * @param fileName DOCUMENTATION MISSING
     * @param fixationPaidAt DOCUMENTATION MISSING
     * @param mediaUrl DOCUMENTATION MISSING
     */
    constructor(amount: number, enquiryType: EnquiryType, freeWorkplaceCount: number, id: string, paymentStatus: EnquiryPaymentStatus, paymentType: PaymentType, periodDays: number, personalAccountId: string, selectableWorkplaceCount: number, status: EnquiryStatus, tariffName: string, workplacePrice: number, activateAt?: string | undefined, activationDate?: string | undefined, actuallyPaidAt?: string | undefined, createdAt?: string | undefined, creditedAt?: string | undefined, deactivateAt?: string | undefined, deactivationDate?: string | undefined, expirationDate?: string | undefined, expiredAt?: string | undefined, fileName?: string | undefined, fixationPaidAt?: string | undefined, mediaUrl?: string | undefined);
    static fromJSON(raw: EnquiryCreateResponseJSON): EnquiryCreateResponse;
    mappableFields: readonly ["amount", "enquiryType", "freeWorkplaceCount", "id", "paymentStatus", "paymentType", "periodDays", "personalAccountId", "selectableWorkplaceCount", "status", "tariffName", "workplacePrice", "activateAt", "activationDate", "actuallyPaidAt", "createdAt", "creditedAt", "deactivateAt", "deactivationDate", "expirationDate", "expiredAt", "fileName", "fixationPaidAt", "mediaUrl"];
    toJSON(): EnquiryCreateResponseJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<EnquiryCreateResponseJSON>;
}
export interface EnquiryGetListRequestJSON {
    date_activate_to?: string;
    date_create_from?: string;
    date_create_to?: string;
    date_deactivate_to?: string;
    limit?: number;
    offset?: number;
    status?: EnquiryStatus;
}
export declare class EnquiryGetListRequest implements TDProtoClass<EnquiryGetListRequest> {
    #private;
    dateActivateTo?: string | undefined;
    dateCreateFrom?: string | undefined;
    dateCreateTo?: string | undefined;
    dateDeactivateTo?: string | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    status?: EnquiryStatus | undefined;
    /**
     * MISSING CLASS DOCUMENTATION
     * @param dateActivateTo DOCUMENTATION MISSING
     * @param dateCreateFrom DOCUMENTATION MISSING
     * @param dateCreateTo DOCUMENTATION MISSING
     * @param dateDeactivateTo DOCUMENTATION MISSING
     * @param limit DOCUMENTATION MISSING
     * @param offset DOCUMENTATION MISSING
     * @param status DOCUMENTATION MISSING
     */
    constructor(dateActivateTo?: string | undefined, dateCreateFrom?: string | undefined, dateCreateTo?: string | undefined, dateDeactivateTo?: string | undefined, limit?: number | undefined, offset?: number | undefined, status?: EnquiryStatus | undefined);
    static fromJSON(raw: EnquiryGetListRequestJSON): EnquiryGetListRequest;
    mappableFields: readonly ["dateActivateTo", "dateCreateFrom", "dateCreateTo", "dateDeactivateTo", "limit", "offset", "status"];
    toJSON(): EnquiryGetListRequestJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<EnquiryGetListRequestJSON>;
}
export interface EnquiryGetListResponseJSON {
    count: number;
    limit: number;
    objects: EnquiryJSON[];
    offset: number;
}
export declare class EnquiryGetListResponse implements TDProtoClass<EnquiryGetListResponse> {
    #private;
    count: number;
    limit: number;
    objects: Enquiry[];
    offset: number;
    /**
     * MISSING CLASS DOCUMENTATION
     * @param count DOCUMENTATION MISSING
     * @param limit DOCUMENTATION MISSING
     * @param objects DOCUMENTATION MISSING
     * @param offset DOCUMENTATION MISSING
     */
    constructor(count: number, limit: number, objects: Enquiry[], offset: number);
    static fromJSON(raw: EnquiryGetListResponseJSON): EnquiryGetListResponse;
    mappableFields: readonly ["count", "limit", "objects", "offset"];
    toJSON(): EnquiryGetListResponseJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<EnquiryGetListResponseJSON>;
}
export interface FeaturesJSON {
    afk_age: number;
    android_app: string;
    android_corp_app: string;
    app_schemes: string[];
    app_title: string;
    build: string;
    calls: boolean;
    calls_audio_enabled: boolean;
    calls_record: boolean;
    calls_version: number;
    calls_video_enabled: boolean;
    calls_video_multistream_enabled: boolean;
    custom_server: boolean;
    custom_theme: boolean;
    desktop_version: string;
    firebase_api_key: string;
    firebase_app_id: string;
    firebase_auth_domain: string;
    firebase_database_url: string;
    firebase_project_id: string;
    firebase_sender_id: string;
    firebase_storage_bucket: string;
    free_registration: boolean;
    front_version: string;
    host: string;
    ice_servers: ICEServerJSON[];
    installation_type: string;
    ios_app: string;
    ios_corp_app: string;
    is_pin_code_required: boolean;
    is_testing: boolean;
    max_color_rule_description_length: number;
    max_group_title_length: number;
    max_integration_comment_length: number;
    max_linked_messages: number;
    max_message_length: number;
    max_message_search_limit: number;
    max_message_uploads: number;
    max_mood_length: number;
    max_project_length: number;
    max_role_length: number;
    max_section_length: number;
    max_tag_length: number;
    max_task_title_length: number;
    max_team_title_length: number;
    max_teams: number;
    max_upload_mb: number;
    max_url_length: number;
    max_username_part_length: number;
    message_uploads: boolean;
    metrika: string;
    min_android_version: string;
    min_app_version: string;
    min_corp_android_version: string;
    min_corp_ios_version: string;
    min_ios_version: string;
    min_search_length: number;
    mobile_calls: boolean;
    pin_code_wrong_limit: number;
    readonly_groups: boolean;
    resend_timeout: number;
    rumarket_app: string;
    safari_push_id: string;
    sentry_dsn_js: string;
    server_drafts: boolean;
    single_group_teams: boolean;
    support_email: string;
    task_checklist: boolean;
    task_dashboard: boolean;
    task_messages: boolean;
    task_public: boolean;
    task_tags: boolean;
    terms: TermsJSON;
    theme: string;
    userver: string;
    vcs_enabled: boolean;
    wiki_pages: boolean;
    allow_admin_mute?: boolean;
    amplitude_api_key?: string;
    app_login_background?: string;
    auth_2fa?: boolean;
    auth_by_kerberos?: boolean;
    auth_by_password?: boolean;
    auth_by_qr_code?: boolean;
    auth_by_sms?: boolean;
    billing?: boolean;
    custom_app_icon_name?: string;
    default_wallpaper?: WallpaperJSON;
    file_extension_blacklist?: string[];
    file_extension_whitelist?: string[];
    file_extension_whitelist_priority?: boolean;
    ice_transport_policy?: ICETransportPolicy;
    installation_title?: string;
    is_recaptcha_enabled?: boolean;
    landing_url?: string;
    max_participants_per_call?: number;
    multi_nodes?: boolean;
    oauth_services?: OAuthServiceJSON[];
    only_one_device_per_call?: boolean;
    recaptcha_web_key_v2?: string;
    recaptcha_web_key_v3?: string;
    threads_enabled?: boolean;
    web_login_background?: string;
}
export declare class Features implements TDProtoClass<Features> {
    #private;
    afkAge: number;
    androidApp: string;
    androidCorpApp: string;
    appSchemes: string[];
    appTitle: string;
    build: string;
    calls: boolean;
    callsAudioEnabled: boolean;
    callsRecord: boolean;
    callsVersion: number;
    callsVideoEnabled: boolean;
    callsVideoMultistreamEnabled: boolean;
    customServer: boolean;
    customTheme: boolean;
    desktopVersion: string;
    firebaseApiKey: string;
    firebaseAppId: string;
    firebaseAuthDomain: string;
    firebaseDatabaseUrl: string;
    firebaseProjectId: string;
    firebaseSenderId: string;
    firebaseStorageBucket: string;
    freeRegistration: boolean;
    frontVersion: string;
    host: string;
    iceServers: ICEServer[];
    installationType: string;
    iosApp: string;
    iosCorpApp: string;
    isPinCodeRequired: boolean;
    isTesting: boolean;
    maxColorRuleDescriptionLength: number;
    maxGroupTitleLength: number;
    maxIntegrationCommentLength: number;
    maxLinkedMessages: number;
    maxMessageLength: number;
    maxMessageSearchLimit: number;
    maxMessageUploads: number;
    maxMoodLength: number;
    maxProjectLength: number;
    maxRoleLength: number;
    maxSectionLength: number;
    maxTagLength: number;
    maxTaskTitleLength: number;
    maxTeamTitleLength: number;
    maxTeams: number;
    maxUploadMb: number;
    maxUrlLength: number;
    maxUsernamePartLength: number;
    messageUploads: boolean;
    metrika: string;
    minAndroidVersion: string;
    minAppVersion: string;
    minCorpAndroidVersion: string;
    minCorpIosVersion: string;
    minIosVersion: string;
    minSearchLength: number;
    mobileCalls: boolean;
    pinCodeWrongLimit: number;
    readonlyGroups: boolean;
    resendTimeout: number;
    rumarketApp: string;
    safariPushId: string;
    sentryDsnJs: string;
    serverDrafts: boolean;
    singleGroupTeams: boolean;
    supportEmail: string;
    taskChecklist: boolean;
    taskDashboard: boolean;
    taskMessages: boolean;
    taskPublic: boolean;
    taskTags: boolean;
    terms: Terms;
    theme: string;
    userver: string;
    vcsEnabled: boolean;
    wikiPages: boolean;
    allowAdminMute?: boolean | undefined;
    amplitudeApiKey?: string | undefined;
    appLoginBackground?: string | undefined;
    auth2fa?: boolean | undefined;
    authByKerberos?: boolean | undefined;
    authByPassword?: boolean | undefined;
    authByQrCode?: boolean | undefined;
    authBySms?: boolean | undefined;
    billing?: boolean | undefined;
    customAppIconName?: string | undefined;
    defaultWallpaper?: Wallpaper | undefined;
    fileExtensionBlacklist?: string[] | undefined;
    fileExtensionWhitelist?: string[] | undefined;
    fileExtensionWhitelistPriority?: boolean | undefined;
    iceTransportPolicy?: ICETransportPolicy | undefined;
    installationTitle?: string | undefined;
    isRecaptchaEnabled?: boolean | undefined;
    landingUrl?: string | undefined;
    maxParticipantsPerCall?: number | undefined;
    multiNodes?: boolean | undefined;
    oauthServices?: OAuthService[] | undefined;
    onlyOneDevicePerCall?: boolean | undefined;
    recaptchaWebKeyV2?: string | undefined;
    recaptchaWebKeyV3?: string | undefined;
    threadsEnabled?: boolean | undefined;
    webLoginBackground?: string | undefined;
    /**
     * Server information. Readonly
     * @param afkAge Max inactivity seconds
     * @param androidApp Link to Google Play
     * @param androidCorpApp Link to Google Play for corporate app
     * @param appSchemes Local applications urls
     * @param appTitle Application title
     * @param build Build/revision of server side
     * @param calls Deprecated
     * @param callsAudioEnabled CallsAudioEnabled enabled or disabled audio calls
     * @param callsRecord Calls record enabled
     * @param callsVersion Calls version. 0 = disabled, 1 = audio only, 2 = audio+video Deprecated: use CallsAudioEnabled and CallsVideoEnabled
     * @param callsVideoEnabled CallsVideoEnabled enabled or disabled video calls
     * @param callsVideoMultistreamEnabled CallsVideoMultistreamEnabled enabled or disabled video in multistream mode (for janus)
     * @param customServer True for premise installation
     * @param customTheme True if server has custom theme
     * @param desktopVersion Desktop application version
     * @param firebaseApiKey Firebase settings for web-push notifications
     * @param firebaseAppId Firebase settings for web-push notifications
     * @param firebaseAuthDomain Firebase settings for web-push notifications
     * @param firebaseDatabaseUrl Firebase settings for web-push notifications
     * @param firebaseProjectId Firebase settings for web-push notifications
     * @param firebaseSenderId Firebase settings for web-push notifications
     * @param firebaseStorageBucket Firebase settings for web-push notifications
     * @param freeRegistration Free registration allowed
     * @param frontVersion Webclient version
     * @param host Current host
     * @param iceServers ICE servers for WebRTC
     * @param installationType Name of installation
     * @param iosApp Link to AppStore
     * @param iosCorpApp Link to AppStore for corporate app
     * @param isPinCodeRequired Mandatory setting of the pin code in the application
     * @param isTesting Testing installation
     * @param maxColorRuleDescriptionLength Maximum length for ColorRule description
     * @param maxGroupTitleLength Maximum chars for group chat name
     * @param maxIntegrationCommentLength Maximum length for Integration comment
     * @param maxLinkedMessages Maximum number of forwarded messages
     * @param maxMessageLength Maximum chars for text message
     * @param maxMessageSearchLimit Maximum search result
     * @param maxMessageUploads Maximum number of message uploads
     * @param maxMoodLength Maximum chars for mood in team
     * @param maxProjectLength Maximum length for project
     * @param maxRoleLength Maximum chars for role in team
     * @param maxSectionLength Maximum length for contact's sections names
     * @param maxTagLength Maximum length for tags
     * @param maxTaskTitleLength Maximum length for task title
     * @param maxTeamTitleLength Maximum chars for team name
     * @param maxTeams Maximum teams for one account
     * @param maxUploadMb Maximum size of user's upload
     * @param maxUrlLength Maximum length for urls
     * @param maxUsernamePartLength Maximum chars for: family_name, given_name, patronymic if any
     * @param messageUploads Multiple message uploads
     * @param metrika Yandex metrika counter id
     * @param minAndroidVersion Minimal android application version required for this server. Used for breaking changes
     * @param minAppVersion Deprecated
     * @param minCorpAndroidVersion Minimal android corp application version required for this server. Used for breaking changes
     * @param minCorpIosVersion Minimal iOS corp application version required for this server. Used for breaking changes
     * @param minIosVersion Minimal iOS application version required for this server. Used for breaking changes
     * @param minSearchLength Minimal chars number for starting global search
     * @param mobileCalls Calls functions enabled for mobile applications
     * @param pinCodeWrongLimit Max number of attempts to enter an invalid PIN code
     * @param readonlyGroups Deprecated
     * @param resendTimeout Resend message in n seconds if no confirmation from server given
     * @param rumarketApp Link to Rumarket store
     * @param safariPushId Safari push id for web-push notifications
     * @param sentryDsnJs Frontend sentry.io settings
     * @param serverDrafts Message drafts saved on server
     * @param singleGroupTeams Cross team communication. Experimental
     * @param supportEmail Support email
     * @param taskChecklist Deprecated
     * @param taskDashboard Deprecated
     * @param taskMessages Deprecated
     * @param taskPublic Deprecated
     * @param taskTags Deprecated
     * @param terms Team entity naming. Experimental
     * @param theme Default UI theme
     * @param userver Static files server address
     * @param vcsEnabled VcsEnabled enabled or disabled vcs
     * @param wikiPages Wiki pages in chats. Experimental
     * @param allowAdminMute Wiki pages in chats. Experimental Deprecated: this field is not used
     * @param amplitudeApiKey Amplitude api key
     * @param appLoginBackground AppBackground image url, if any
     * @param auth2fa Two-factor authentication (2FA) enabled
     * @param authByKerberos Kerberos authentication enabled
     * @param authByPassword Password authentication enabled
     * @param authByQrCode QR-code / link authentication enabled
     * @param authBySms SMS authentication enabled
     * @param billing Billing services integrations
     * @param customAppIconName Custom application icon name, if any
     * @param defaultWallpaper Default wallpaper url for mobile apps, if any
     * @param fileExtensionBlacklist File Extension Blacklist
     * @param fileExtensionWhitelist File Extension Whitelist
     * @param fileExtensionWhitelistPriority File Extension Whitelist Priority
     * @param iceTransportPolicy IceTransportPolicy a ice transport policy
     * @param installationTitle Installation title, used on login screen
     * @param isRecaptchaEnabled Captcha enabled
     * @param landingUrl Landing page address, if any
     * @param maxParticipantsPerCall Maximum number of participants per call
     * @param multiNodes Multi nodes mode (federation) enabled
     * @param oauthServices External services
     * @param onlyOneDevicePerCall Disallow call from multiple devices. Experimental
     * @param recaptchaWebKeyV2 ReCaptcha Web Key V2
     * @param recaptchaWebKeyV3 ReCaptcha Web Key V3
     * @param threadsEnabled Thread enabled flag
     * @param webLoginBackground WebBackground image url, if any
     */
    constructor(afkAge: number, androidApp: string, androidCorpApp: string, appSchemes: string[], appTitle: string, build: string, calls: boolean, callsAudioEnabled: boolean, callsRecord: boolean, callsVersion: number, callsVideoEnabled: boolean, callsVideoMultistreamEnabled: boolean, customServer: boolean, customTheme: boolean, desktopVersion: string, firebaseApiKey: string, firebaseAppId: string, firebaseAuthDomain: string, firebaseDatabaseUrl: string, firebaseProjectId: string, firebaseSenderId: string, firebaseStorageBucket: string, freeRegistration: boolean, frontVersion: string, host: string, iceServers: ICEServer[], installationType: string, iosApp: string, iosCorpApp: string, isPinCodeRequired: boolean, isTesting: boolean, maxColorRuleDescriptionLength: number, maxGroupTitleLength: number, maxIntegrationCommentLength: number, maxLinkedMessages: number, maxMessageLength: number, maxMessageSearchLimit: number, maxMessageUploads: number, maxMoodLength: number, maxProjectLength: number, maxRoleLength: number, maxSectionLength: number, maxTagLength: number, maxTaskTitleLength: number, maxTeamTitleLength: number, maxTeams: number, maxUploadMb: number, maxUrlLength: number, maxUsernamePartLength: number, messageUploads: boolean, metrika: string, minAndroidVersion: string, minAppVersion: string, minCorpAndroidVersion: string, minCorpIosVersion: string, minIosVersion: string, minSearchLength: number, mobileCalls: boolean, pinCodeWrongLimit: number, readonlyGroups: boolean, resendTimeout: number, rumarketApp: string, safariPushId: string, sentryDsnJs: string, serverDrafts: boolean, singleGroupTeams: boolean, supportEmail: string, taskChecklist: boolean, taskDashboard: boolean, taskMessages: boolean, taskPublic: boolean, taskTags: boolean, terms: Terms, theme: string, userver: string, vcsEnabled: boolean, wikiPages: boolean, allowAdminMute?: boolean | undefined, amplitudeApiKey?: string | undefined, appLoginBackground?: string | undefined, auth2fa?: boolean | undefined, authByKerberos?: boolean | undefined, authByPassword?: boolean | undefined, authByQrCode?: boolean | undefined, authBySms?: boolean | undefined, billing?: boolean | undefined, customAppIconName?: string | undefined, defaultWallpaper?: Wallpaper | undefined, fileExtensionBlacklist?: string[] | undefined, fileExtensionWhitelist?: string[] | undefined, fileExtensionWhitelistPriority?: boolean | undefined, iceTransportPolicy?: ICETransportPolicy | undefined, installationTitle?: string | undefined, isRecaptchaEnabled?: boolean | undefined, landingUrl?: string | undefined, maxParticipantsPerCall?: number | undefined, multiNodes?: boolean | undefined, oauthServices?: OAuthService[] | undefined, onlyOneDevicePerCall?: boolean | undefined, recaptchaWebKeyV2?: string | undefined, recaptchaWebKeyV3?: string | undefined, threadsEnabled?: boolean | undefined, webLoginBackground?: string | undefined);
    static fromJSON(raw: FeaturesJSON): Features;
    mappableFields: readonly ["afkAge", "androidApp", "androidCorpApp", "appSchemes", "appTitle", "build", "calls", "callsAudioEnabled", "callsRecord", "callsVersion", "callsVideoEnabled", "callsVideoMultistreamEnabled", "customServer", "customTheme", "desktopVersion", "firebaseApiKey", "firebaseAppId", "firebaseAuthDomain", "firebaseDatabaseUrl", "firebaseProjectId", "firebaseSenderId", "firebaseStorageBucket", "freeRegistration", "frontVersion", "host", "iceServers", "installationType", "iosApp", "iosCorpApp", "isPinCodeRequired", "isTesting", "maxColorRuleDescriptionLength", "maxGroupTitleLength", "maxIntegrationCommentLength", "maxLinkedMessages", "maxMessageLength", "maxMessageSearchLimit", "maxMessageUploads", "maxMoodLength", "maxProjectLength", "maxRoleLength", "maxSectionLength", "maxTagLength", "maxTaskTitleLength", "maxTeamTitleLength", "maxTeams", "maxUploadMb", "maxUrlLength", "maxUsernamePartLength", "messageUploads", "metrika", "minAndroidVersion", "minAppVersion", "minCorpAndroidVersion", "minCorpIosVersion", "minIosVersion", "minSearchLength", "mobileCalls", "pinCodeWrongLimit", "readonlyGroups", "resendTimeout", "rumarketApp", "safariPushId", "sentryDsnJs", "serverDrafts", "singleGroupTeams", "supportEmail", "taskChecklist", "taskDashboard", "taskMessages", "taskPublic", "taskTags", "terms", "theme", "userver", "vcsEnabled", "wikiPages", "allowAdminMute", "amplitudeApiKey", "appLoginBackground", "auth2fa", "authByKerberos", "authByPassword", "authByQrCode", "authBySms", "billing", "customAppIconName", "defaultWallpaper", "fileExtensionBlacklist", "fileExtensionWhitelist", "fileExtensionWhitelistPriority", "iceTransportPolicy", "installationTitle", "isRecaptchaEnabled", "landingUrl", "maxParticipantsPerCall", "multiNodes", "oauthServices", "onlyOneDevicePerCall", "recaptchaWebKeyV2", "recaptchaWebKeyV3", "threadsEnabled", "webLoginBackground"];
    toJSON(): FeaturesJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<FeaturesJSON>;
}
export interface FontColorsJSON {
    brand_button: RGBColor;
    bubble_received: RGBColor;
    bubble_sent: RGBColor;
    simple_button: RGBColor;
    sub: RGBColor;
    text: RGBColor;
    text_avatar: RGBColor;
    text_badge: RGBColor;
    title: RGBColor;
}
export declare class FontColors implements TDProtoClass<FontColors> {
    #private;
    brandButton: RGBColor;
    bubbleReceived: RGBColor;
    bubbleSent: RGBColor;
    simpleButton: RGBColor;
    sub: RGBColor;
    text: RGBColor;
    textAvatar: RGBColor;
    textBadge: RGBColor;
    title: RGBColor;
    /**
     * FontColors font colors for app
     * @param brandButton Brand button color
     * @param bubbleReceived Bubble received color
     * @param bubbleSent Bubble sent color
     * @param simpleButton Simple button color
     * @param sub Sub color
     * @param text Text color
     * @param textAvatar TextAvatar color
     * @param textBadge TextBadge color
     * @param title Title color
     */
    constructor(brandButton: RGBColor, bubbleReceived: RGBColor, bubbleSent: RGBColor, simpleButton: RGBColor, sub: RGBColor, text: RGBColor, textAvatar: RGBColor, textBadge: RGBColor, title: RGBColor);
    static fromJSON(raw: FontColorsJSON): FontColors;
    mappableFields: readonly ["brandButton", "bubbleReceived", "bubbleSent", "simpleButton", "sub", "text", "textAvatar", "textBadge", "title"];
    toJSON(): FontColorsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<FontColorsJSON>;
}
export interface FreqJSON {
    frequency: number;
    repeatability_type: MeetingRepeatabilityType;
    freq_days?: number[];
    repeatability_description?: string;
}
export declare class Freq implements TDProtoClass<Freq> {
    #private;
    frequency: number;
    repeatabilityType: MeetingRepeatabilityType;
    freqDays?: number[] | undefined;
    repeatabilityDescription?: string | undefined;
    /**
     * MISSING CLASS DOCUMENTATION
     * @param frequency DOCUMENTATION MISSING
     * @param repeatabilityType DOCUMENTATION MISSING
     * @param freqDays DOCUMENTATION MISSING
     * @param repeatabilityDescription DOCUMENTATION MISSING
     */
    constructor(frequency: number, repeatabilityType: MeetingRepeatabilityType, freqDays?: number[] | undefined, repeatabilityDescription?: string | undefined);
    static fromJSON(raw: FreqJSON): Freq;
    mappableFields: readonly ["frequency", "repeatabilityType", "freqDays", "repeatabilityDescription"];
    toJSON(): FreqJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<FreqJSON>;
}
export interface GetActiveTariffsListResponseJSON {
    tariff_list: TariffBillingJSON[];
}
export declare class GetActiveTariffsListResponse implements TDProtoClass<GetActiveTariffsListResponse> {
    #private;
    tariffList: TariffBilling[];
    /**
     * Response from getting a list of active tariffs
     * @param tariffList DOCUMENTATION MISSING
     */
    constructor(tariffList: TariffBilling[]);
    static fromJSON(raw: GetActiveTariffsListResponseJSON): GetActiveTariffsListResponse;
    mappableFields: readonly ["tariffList"];
    toJSON(): GetActiveTariffsListResponseJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<GetActiveTariffsListResponseJSON>;
}
export interface GetChangesTariffsByPersonalAccountResponseJSON {
    tariffs_changes?: ChangeTariffBillingJSON[];
}
export declare class GetChangesTariffsByPersonalAccountResponse implements TDProtoClass<GetChangesTariffsByPersonalAccountResponse> {
    #private;
    tariffsChanges?: ChangeTariffBilling[] | undefined;
    /**
     * GetChangesTariffsByPersonalAccountResponse response on get changes tariffs by personal account
     * @param tariffsChanges DOCUMENTATION MISSING
     */
    constructor(tariffsChanges?: ChangeTariffBilling[] | undefined);
    static fromJSON(raw: GetChangesTariffsByPersonalAccountResponseJSON): GetChangesTariffsByPersonalAccountResponse;
    mappableFields: readonly ["tariffsChanges"];
    toJSON(): GetChangesTariffsByPersonalAccountResponseJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<GetChangesTariffsByPersonalAccountResponseJSON>;
}
export interface GetPersonalAccountByIDResponseJSON {
    empty_workplace_count: number;
    free_workplace_count: number;
    is_blocked: boolean;
    is_suspended: boolean;
    occupied_workplace_count: number;
    owner_id: string;
    owner_uuid: string;
    paid_workplace_count: number;
    personal_account_id: string;
    status: PersonalAccountStatus;
    tariff: TariffBillingJSON;
    teams_count: number;
    workplace_count: number;
    block_date?: string;
    next_billing_date?: string;
    owner?: ContactJSON;
    suspend_date?: string;
}
export declare class GetPersonalAccountByIDResponse implements TDProtoClass<GetPersonalAccountByIDResponse> {
    #private;
    emptyWorkplaceCount: number;
    freeWorkplaceCount: number;
    isBlocked: boolean;
    isSuspended: boolean;
    occupiedWorkplaceCount: number;
    ownerId: string;
    ownerUuid: string;
    paidWorkplaceCount: number;
    personalAccountId: string;
    status: PersonalAccountStatus;
    tariff: TariffBilling;
    teamsCount: number;
    workplaceCount: number;
    blockDate?: string | undefined;
    nextBillingDate?: string | undefined;
    owner?: Contact | undefined;
    suspendDate?: string | undefined;
    /**
     * GetPersonalAccountByIDResponse response on get personal account by ID
     * @param emptyWorkplaceCount Count of empty workplaces on personal account
     * @param freeWorkplaceCount Count of free workplaces on personal account
     * @param isBlocked Is the account blocked
     * @param isSuspended Is the account suspended
     * @param occupiedWorkplaceCount Count of occupied workplaces on personal account
     * @param ownerId ID User who owns this personal account
     * @param ownerUuid UUID of User who owns this personal account
     * @param paidWorkplaceCount Count of paid workplaces on personal account
     * @param personalAccountId PersonalAccountBilling ID
     * @param status Status of personal account
     * @param tariff Tariff on this personal account
     * @param teamsCount Count of teams on personal account
     * @param workplaceCount Count of workplaces on personal account
     * @param blockDate Account blocking date
     * @param nextBillingDate Date of next debiting funds
     * @param owner Owner of this personal account
     * @param suspendDate Account suspending date
     */
    constructor(emptyWorkplaceCount: number, freeWorkplaceCount: number, isBlocked: boolean, isSuspended: boolean, occupiedWorkplaceCount: number, ownerId: string, ownerUuid: string, paidWorkplaceCount: number, personalAccountId: string, status: PersonalAccountStatus, tariff: TariffBilling, teamsCount: number, workplaceCount: number, blockDate?: string | undefined, nextBillingDate?: string | undefined, owner?: Contact | undefined, suspendDate?: string | undefined);
    static fromJSON(raw: GetPersonalAccountByIDResponseJSON): GetPersonalAccountByIDResponse;
    mappableFields: readonly ["emptyWorkplaceCount", "freeWorkplaceCount", "isBlocked", "isSuspended", "occupiedWorkplaceCount", "ownerId", "ownerUuid", "paidWorkplaceCount", "personalAccountId", "status", "tariff", "teamsCount", "workplaceCount", "blockDate", "nextBillingDate", "owner", "suspendDate"];
    toJSON(): GetPersonalAccountByIDResponseJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<GetPersonalAccountByIDResponseJSON>;
}
export interface GetPersonalAccountsListResponseJSON {
    personal_accounts?: PersonalAccountBillingJSON[];
}
export declare class GetPersonalAccountsListResponse implements TDProtoClass<GetPersonalAccountsListResponse> {
    #private;
    personalAccounts?: PersonalAccountBilling[] | undefined;
    /**
     * GetPersonalAccountsListResponse response on get list of personal accounts
     * @param personalAccounts DOCUMENTATION MISSING
     */
    constructor(personalAccounts?: PersonalAccountBilling[] | undefined);
    static fromJSON(raw: GetPersonalAccountsListResponseJSON): GetPersonalAccountsListResponse;
    mappableFields: readonly ["personalAccounts"];
    toJSON(): GetPersonalAccountsListResponseJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<GetPersonalAccountsListResponseJSON>;
}
export interface GetTariffsListResponseJSON {
    tariff_list: TariffBillingJSON[];
}
export declare class GetTariffsListResponse implements TDProtoClass<GetTariffsListResponse> {
    #private;
    tariffList: TariffBilling[];
    /**
     * Response from getting a list of tariffs
     * @param tariffList DOCUMENTATION MISSING
     */
    constructor(tariffList: TariffBilling[]);
    static fromJSON(raw: GetTariffsListResponseJSON): GetTariffsListResponse;
    mappableFields: readonly ["tariffList"];
    toJSON(): GetTariffsListResponseJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<GetTariffsListResponseJSON>;
}
export interface GetTeamOnPersonalAccountResponseJSON {
    open_date: string;
    personal_account_id: string;
    team_id: string;
    team_uuid: string;
    close_date?: string;
}
export declare class GetTeamOnPersonalAccountResponse implements TDProtoClass<GetTeamOnPersonalAccountResponse> {
    #private;
    openDate: string;
    personalAccountId: string;
    teamId: string;
    teamUuid: string;
    closeDate?: string | undefined;
    /**
     * MISSING CLASS DOCUMENTATION
     * @param openDate DOCUMENTATION MISSING
     * @param personalAccountId DOCUMENTATION MISSING
     * @param teamId DOCUMENTATION MISSING
     * @param teamUuid DOCUMENTATION MISSING
     * @param closeDate DOCUMENTATION MISSING
     */
    constructor(openDate: string, personalAccountId: string, teamId: string, teamUuid: string, closeDate?: string | undefined);
    static fromJSON(raw: GetTeamOnPersonalAccountResponseJSON): GetTeamOnPersonalAccountResponse;
    mappableFields: readonly ["openDate", "personalAccountId", "teamId", "teamUuid", "closeDate"];
    toJSON(): GetTeamOnPersonalAccountResponseJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<GetTeamOnPersonalAccountResponseJSON>;
}
export interface GetTeamsFilterJSON {
    status?: TeamStatus;
}
export declare class GetTeamsFilter implements TDProtoClass<GetTeamsFilter> {
    #private;
    status?: TeamStatus | undefined;
    /**
     * MISSING CLASS DOCUMENTATION
     * @param status DOCUMENTATION MISSING
     */
    constructor(status?: TeamStatus | undefined);
    static fromJSON(raw: GetTeamsFilterJSON): GetTeamsFilter;
    mappableFields: readonly ["status"];
    toJSON(): GetTeamsFilterJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<GetTeamsFilterJSON>;
}
export interface GetTeamsOnPersonalAccountResponseJSON {
    teams: GetTeamOnPersonalAccountResponseJSON[];
}
export declare class GetTeamsOnPersonalAccountResponse implements TDProtoClass<GetTeamsOnPersonalAccountResponse> {
    #private;
    teams: GetTeamOnPersonalAccountResponse[];
    /**
     * MISSING CLASS DOCUMENTATION
     * @param teams DOCUMENTATION MISSING
     */
    constructor(teams: GetTeamOnPersonalAccountResponse[]);
    static fromJSON(raw: GetTeamsOnPersonalAccountResponseJSON): GetTeamsOnPersonalAccountResponse;
    mappableFields: readonly ["teams"];
    toJSON(): GetTeamsOnPersonalAccountResponseJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<GetTeamsOnPersonalAccountResponseJSON>;
}
export interface GetUnpaidWorkplacesByPersonalAccountResponseJSON {
    count?: number;
}
export declare class GetUnpaidWorkplacesByPersonalAccountResponse implements TDProtoClass<GetUnpaidWorkplacesByPersonalAccountResponse> {
    #private;
    count?: number | undefined;
    /**
     * GetUnpaidWorkplacesByPersonalAccountResponse response on get count unpaid workplaces by personal account
     * @param count DOCUMENTATION MISSING
     */
    constructor(count?: number | undefined);
    static fromJSON(raw: GetUnpaidWorkplacesByPersonalAccountResponseJSON): GetUnpaidWorkplacesByPersonalAccountResponse;
    mappableFields: readonly ["count"];
    toJSON(): GetUnpaidWorkplacesByPersonalAccountResponseJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<GetUnpaidWorkplacesByPersonalAccountResponseJSON>;
}
export interface GetUsersInfoByUserUUIDArrayExcludingTeamMembersRequestJSON {
    team_uuid: string;
    user_uuid: string[];
    limit?: number;
    offset?: number;
}
export declare class GetUsersInfoByUserUUIDArrayExcludingTeamMembersRequest implements TDProtoClass<GetUsersInfoByUserUUIDArrayExcludingTeamMembersRequest> {
    #private;
    teamUuid: string;
    userUuid: string[];
    limit?: number | undefined;
    offset?: number | undefined;
    /**
     * GetUsersInfoByUserUUIDArrayExcludingTeamMembersRequest request on get user information by array of UUID's users excluding team members in uuid team
     * @param teamUuid DOCUMENTATION MISSING
     * @param userUuid DOCUMENTATION MISSING
     * @param limit DOCUMENTATION MISSING
     * @param offset DOCUMENTATION MISSING
     */
    constructor(teamUuid: string, userUuid: string[], limit?: number | undefined, offset?: number | undefined);
    static fromJSON(raw: GetUsersInfoByUserUUIDArrayExcludingTeamMembersRequestJSON): GetUsersInfoByUserUUIDArrayExcludingTeamMembersRequest;
    mappableFields: readonly ["teamUuid", "userUuid", "limit", "offset"];
    toJSON(): GetUsersInfoByUserUUIDArrayExcludingTeamMembersRequestJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<GetUsersInfoByUserUUIDArrayExcludingTeamMembersRequestJSON>;
}
export interface GetUsersInfoByUserUUIDArrayExcludingTeamMembersResponseJSON {
    user_info?: UserInfoJSON[];
}
export declare class GetUsersInfoByUserUUIDArrayExcludingTeamMembersResponse implements TDProtoClass<GetUsersInfoByUserUUIDArrayExcludingTeamMembersResponse> {
    #private;
    userInfo?: UserInfo[] | undefined;
    /**
     * GetUsersInfoByUserUUIDArrayExcludingTeamMembersResponse response on get user information by array of UUID's users excluding team members in uuid team
     * @param userInfo DOCUMENTATION MISSING
     */
    constructor(userInfo?: UserInfo[] | undefined);
    static fromJSON(raw: GetUsersInfoByUserUUIDArrayExcludingTeamMembersResponseJSON): GetUsersInfoByUserUUIDArrayExcludingTeamMembersResponse;
    mappableFields: readonly ["userInfo"];
    toJSON(): GetUsersInfoByUserUUIDArrayExcludingTeamMembersResponseJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<GetUsersInfoByUserUUIDArrayExcludingTeamMembersResponseJSON>;
}
export interface GetUsersInfoByUserUUIDArrayRequestJSON {
    user_uuid: string[];
    limit?: number;
    offset?: number;
}
export declare class GetUsersInfoByUserUUIDArrayRequest implements TDProtoClass<GetUsersInfoByUserUUIDArrayRequest> {
    #private;
    userUuid: string[];
    limit?: number | undefined;
    offset?: number | undefined;
    /**
     * GetUsersInfoByUserUUIDArrayRequest request on get user information by array of UUID's users
     * @param userUuid DOCUMENTATION MISSING
     * @param limit DOCUMENTATION MISSING
     * @param offset DOCUMENTATION MISSING
     */
    constructor(userUuid: string[], limit?: number | undefined, offset?: number | undefined);
    static fromJSON(raw: GetUsersInfoByUserUUIDArrayRequestJSON): GetUsersInfoByUserUUIDArrayRequest;
    mappableFields: readonly ["userUuid", "limit", "offset"];
    toJSON(): GetUsersInfoByUserUUIDArrayRequestJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<GetUsersInfoByUserUUIDArrayRequestJSON>;
}
export interface GetUsersInfoByUserUUIDArrayResponseJSON {
    user_list?: UserInfoJSON[];
}
export declare class GetUsersInfoByUserUUIDArrayResponse implements TDProtoClass<GetUsersInfoByUserUUIDArrayResponse> {
    #private;
    userList?: UserInfo[] | undefined;
    /**
     * GetUsersInfoByUserUUIDArrayResponse response on get user information by array of UUID's users
     * @param userList DOCUMENTATION MISSING
     */
    constructor(userList?: UserInfo[] | undefined);
    static fromJSON(raw: GetUsersInfoByUserUUIDArrayResponseJSON): GetUsersInfoByUserUUIDArrayResponse;
    mappableFields: readonly ["userList"];
    toJSON(): GetUsersInfoByUserUUIDArrayResponseJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<GetUsersInfoByUserUUIDArrayResponseJSON>;
}
export interface GetWorkplaceByPersonalAccountResponseJSON {
    user_id?: string;
    user_uuid?: string;
    workplace_id?: string;
}
export declare class GetWorkplaceByPersonalAccountResponse implements TDProtoClass<GetWorkplaceByPersonalAccountResponse> {
    #private;
    userId?: string | undefined;
    userUuid?: string | undefined;
    workplaceId?: string | undefined;
    /**
     * GetWorkplaceByPersonalAccountResponse response on get workplace by personal account
     * @param userId DOCUMENTATION MISSING
     * @param userUuid DOCUMENTATION MISSING
     * @param workplaceId DOCUMENTATION MISSING
     */
    constructor(userId?: string | undefined, userUuid?: string | undefined, workplaceId?: string | undefined);
    static fromJSON(raw: GetWorkplaceByPersonalAccountResponseJSON): GetWorkplaceByPersonalAccountResponse;
    mappableFields: readonly ["userId", "userUuid", "workplaceId"];
    toJSON(): GetWorkplaceByPersonalAccountResponseJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<GetWorkplaceByPersonalAccountResponseJSON>;
}
export interface GetWorkplacesByPersonalAccountRequestJSON {
    options?: WorkplaceOptionsJSON;
}
export declare class GetWorkplacesByPersonalAccountRequest implements TDProtoClass<GetWorkplacesByPersonalAccountRequest> {
    #private;
    options?: WorkplaceOptions | undefined;
    /**
     * GetWorkplacesByPersonalAccountRequest request on get workplaces by personal account
     * @param options DOCUMENTATION MISSING
     */
    constructor(options?: WorkplaceOptions | undefined);
    static fromJSON(raw: GetWorkplacesByPersonalAccountRequestJSON): GetWorkplacesByPersonalAccountRequest;
    mappableFields: readonly ["options"];
    toJSON(): GetWorkplacesByPersonalAccountRequestJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<GetWorkplacesByPersonalAccountRequestJSON>;
}
export interface GetWorkplacesByPersonalAccountResponseJSON {
    workplaces?: WorkplaceBillingJSON[];
}
export declare class GetWorkplacesByPersonalAccountResponse implements TDProtoClass<GetWorkplacesByPersonalAccountResponse> {
    #private;
    workplaces?: WorkplaceBilling[] | undefined;
    /**
     * GetWorkplacesByPersonalAccountResponse response on get workplaces by personal account
     * @param workplaces DOCUMENTATION MISSING
     */
    constructor(workplaces?: WorkplaceBilling[] | undefined);
    static fromJSON(raw: GetWorkplacesByPersonalAccountResponseJSON): GetWorkplacesByPersonalAccountResponse;
    mappableFields: readonly ["workplaces"];
    toJSON(): GetWorkplacesByPersonalAccountResponseJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<GetWorkplacesByPersonalAccountResponseJSON>;
}
export interface GroupAccessRequestJSON {
    created: ISODateTimeString;
    subject: JID;
    uid: string;
}
export declare class GroupAccessRequest implements TDProtoClass<GroupAccessRequest> {
    #private;
    created: ISODateTimeString;
    subject: JID;
    uid: string;
    /**
     * Group Access Request
     * @param created DOCUMENTATION MISSING
     * @param subject DOCUMENTATION MISSING
     * @param uid DOCUMENTATION MISSING
     */
    constructor(created: ISODateTimeString, subject: JID, uid: string);
    static fromJSON(raw: GroupAccessRequestJSON): GroupAccessRequest;
    mappableFields: readonly ["created", "subject", "uid"];
    toJSON(): GroupAccessRequestJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<GroupAccessRequestJSON>;
}
export interface GroupMembershipJSON {
    jid: JID;
    can_remove?: boolean;
    status?: GroupStatus;
}
export declare class GroupMembership implements TDProtoClass<GroupMembership> {
    #private;
    jid: JID;
    canRemove?: boolean | undefined;
    status?: GroupStatus | undefined;
    /**
     * Group chat membership status
     * @param jid Contact id
     * @param canRemove Can I remove this member
     * @param status Status in group
     */
    constructor(jid: JID, canRemove?: boolean | undefined, status?: GroupStatus | undefined);
    static fromJSON(raw: GroupMembershipJSON): GroupMembership;
    mappableFields: readonly ["jid", "canRemove", "status"];
    toJSON(): GroupMembershipJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<GroupMembershipJSON>;
}
export interface ICEServerJSON {
    urls: string;
    credential?: string;
    username?: string;
}
export declare class ICEServer implements TDProtoClass<ICEServer> {
    #private;
    urls: string;
    credential?: string | undefined;
    username?: string | undefined;
    /**
     * Interactive Connectivity Establishment Server for WEB Rtc connection. Readonly
     * @param urls Urls - STUN or TURN addresses
     * @param credential Credential - credential for TURN server
     * @param username UserName - username for TURN server
     */
    constructor(urls: string, credential?: string | undefined, username?: string | undefined);
    static fromJSON(raw: ICEServerJSON): ICEServer;
    mappableFields: readonly ["urls", "credential", "username"];
    toJSON(): ICEServerJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ICEServerJSON>;
}
export interface IVCSInfoJSON {
    conference_id?: string;
    invite_link?: string;
    join_token?: string;
}
export declare class IVCSInfo implements TDProtoClass<IVCSInfo> {
    #private;
    conferenceId?: string | undefined;
    inviteLink?: string | undefined;
    joinToken?: string | undefined;
    /**
     * MISSING CLASS DOCUMENTATION
     * @param conferenceId DOCUMENTATION MISSING
     * @param inviteLink DOCUMENTATION MISSING
     * @param joinToken DOCUMENTATION MISSING
     */
    constructor(conferenceId?: string | undefined, inviteLink?: string | undefined, joinToken?: string | undefined);
    static fromJSON(raw: IVCSInfoJSON): IVCSInfo;
    mappableFields: readonly ["conferenceId", "inviteLink", "joinToken"];
    toJSON(): IVCSInfoJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<IVCSInfoJSON>;
}
export interface IconColorsJSON {
    brand: RGBColor;
    other: RGBColor;
    title: RGBColor;
}
export declare class IconColors implements TDProtoClass<IconColors> {
    #private;
    brand: RGBColor;
    other: RGBColor;
    title: RGBColor;
    /**
     * IconColors icon colors for app
     * @param brand Brand color
     * @param other Other color
     * @param title Title color
     */
    constructor(brand: RGBColor, other: RGBColor, title: RGBColor);
    static fromJSON(raw: IconColorsJSON): IconColors;
    mappableFields: readonly ["brand", "other", "title"];
    toJSON(): IconColorsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<IconColorsJSON>;
}
export interface IconDataJSON {
    lg: SingleIconJSON;
    sm: SingleIconJSON;
    blurhash?: string;
    color?: string;
    letters?: string;
    stub?: string;
}
export declare class IconData implements TDProtoClass<IconData> {
    #private;
    lg: SingleIcon;
    sm: SingleIcon;
    blurhash?: string | undefined;
    color?: string | undefined;
    letters?: string | undefined;
    stub?: string | undefined;
    /**
     * Icon data. For icon generated from display name contains Letters + Color fields
     * @param lg Large image
     * @param sm Small icon
     * @param blurhash Compact representation of a placeholder for an image (experimental)
     * @param color Icon background color (only for stub icon)
     * @param letters Letters (only for stub icon)
     * @param stub Deprecated
     */
    constructor(lg: SingleIcon, sm: SingleIcon, blurhash?: string | undefined, color?: string | undefined, letters?: string | undefined, stub?: string | undefined);
    static fromJSON(raw: IconDataJSON): IconData;
    mappableFields: readonly ["lg", "sm", "blurhash", "color", "letters", "stub"];
    toJSON(): IconDataJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<IconDataJSON>;
}
export interface InputColorsJSON {
    active: RGBColor;
    disable: RGBColor;
    error: RGBColor;
    static: RGBColor;
    selection: RGBColor;
}
export declare class InputColors implements TDProtoClass<InputColors> {
    #private;
    active: RGBColor;
    disable: RGBColor;
    error: RGBColor;
    isStatic: RGBColor;
    selection: RGBColor;
    /**
     * InputColors input colors for app
     * @param active Active color
     * @param disable Disable color
     * @param error Error color
     * @param isStatic Static color
     * @param selection Selection color
     */
    constructor(active: RGBColor, disable: RGBColor, error: RGBColor, isStatic: RGBColor, selection: RGBColor);
    static fromJSON(raw: InputColorsJSON): InputColors;
    mappableFields: readonly ["active", "disable", "error", "isStatic", "selection"];
    toJSON(): InputColorsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<InputColorsJSON>;
}
export interface IntegrationJSON {
    comment: string;
    enabled: boolean;
    form: IntegrationFormJSON;
    group: JID;
    kind: string;
    created?: ISODateTimeString;
    help?: string;
    uid?: string;
}
export declare class Integration implements TDProtoClass<Integration> {
    #private;
    comment: string;
    enabled: boolean;
    form: IntegrationForm;
    group: JID;
    kind: string;
    created?: string | undefined;
    help?: string | undefined;
    uid?: string | undefined;
    /**
     * Integration for concrete chat
     * @param comment Comment, if any
     * @param enabled Integration enabled
     * @param form Integration form
     * @param group Chat id
     * @param kind Unique integration name
     * @param created Creation datetime, iso
     * @param help Full description
     * @param uid Id
     */
    constructor(comment: string, enabled: boolean, form: IntegrationForm, group: JID, kind: string, created?: string | undefined, help?: string | undefined, uid?: string | undefined);
    static fromJSON(raw: IntegrationJSON): Integration;
    mappableFields: readonly ["comment", "enabled", "form", "group", "kind", "created", "help", "uid"];
    toJSON(): IntegrationJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<IntegrationJSON>;
}
export interface IntegrationFieldJSON {
    label: string;
    readonly: boolean;
    value: string;
}
export declare class IntegrationField implements TDProtoClass<IntegrationField> {
    #private;
    label: string;
    readonly: boolean;
    value: string;
    /**
     * Integration form field
     * @param label Label
     * @param readonly Is field readonly
     * @param value Current value
     */
    constructor(label: string, readonly: boolean, value: string);
    static fromJSON(raw: IntegrationFieldJSON): IntegrationField;
    mappableFields: readonly ["label", "readonly", "value"];
    toJSON(): IntegrationFieldJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<IntegrationFieldJSON>;
}
export interface IntegrationFormJSON {
    api_key?: IntegrationFieldJSON;
    url?: IntegrationFieldJSON;
    webhook_url?: IntegrationFieldJSON;
}
export declare class IntegrationForm implements TDProtoClass<IntegrationForm> {
    #private;
    apiKey?: IntegrationField | undefined;
    url?: IntegrationField | undefined;
    webhookUrl?: IntegrationField | undefined;
    /**
     * Integration form
     * @param apiKey Api key field, if any
     * @param url Url, if any
     * @param webhookUrl Webhook url, if any
     */
    constructor(apiKey?: IntegrationField | undefined, url?: IntegrationField | undefined, webhookUrl?: IntegrationField | undefined);
    static fromJSON(raw: IntegrationFormJSON): IntegrationForm;
    mappableFields: readonly ["apiKey", "url", "webhookUrl"];
    toJSON(): IntegrationFormJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<IntegrationFormJSON>;
}
export interface IntegrationKindJSON {
    description: string;
    icon: string;
    kind: string;
    template: IntegrationJSON;
    title: string;
}
export declare class IntegrationKind implements TDProtoClass<IntegrationKind> {
    #private;
    description: string;
    icon: string;
    kind: string;
    template: Integration;
    title: string;
    /**
     * Integration kind
     * @param description Plugin description
     * @param icon Path to icon
     * @param kind Integration unique name
     * @param template Integration template
     * @param title Plugin title
     */
    constructor(description: string, icon: string, kind: string, template: Integration, title: string);
    static fromJSON(raw: IntegrationKindJSON): IntegrationKind;
    mappableFields: readonly ["description", "icon", "kind", "template", "title"];
    toJSON(): IntegrationKindJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<IntegrationKindJSON>;
}
export interface IntegrationsJSON {
    integrations: IntegrationJSON[];
    kinds: IntegrationKindJSON[];
}
export declare class Integrations implements TDProtoClass<Integrations> {
    #private;
    integrations: Integration[];
    kinds: IntegrationKind[];
    /**
     * Complete integrations data, as received from server
     * @param integrations Currently existing integrations
     * @param kinds Types of integrations available for setup
     */
    constructor(integrations: Integration[], kinds: IntegrationKind[]);
    static fromJSON(raw: IntegrationsJSON): Integrations;
    mappableFields: readonly ["integrations", "kinds"];
    toJSON(): IntegrationsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<IntegrationsJSON>;
}
export interface InvitableUserJSON {
    display_name: string;
    icons: IconDataJSON;
    uid: string;
    from_another_account?: boolean;
    node?: string;
    teams?: string[];
}
export declare class InvitableUser implements TDProtoClass<InvitableUser> {
    #private;
    displayName: string;
    icons: IconData;
    uid: string;
    fromAnotherAccount?: boolean | undefined;
    node?: string | undefined;
    teams?: string[] | undefined;
    /**
     * Account from other team, Active Directory or node
     * @param displayName Full name
     * @param icons Icons
     * @param uid Account id
     * @param fromAnotherAccount Флаг нахождения пользователя на другом аккаунте
     * @param node Node uid for external users
     * @param teams Common team uids, if any
     */
    constructor(displayName: string, icons: IconData, uid: string, fromAnotherAccount?: boolean | undefined, node?: string | undefined, teams?: string[] | undefined);
    static fromJSON(raw: InvitableUserJSON): InvitableUser;
    mappableFields: readonly ["displayName", "icons", "uid", "fromAnotherAccount", "node", "teams"];
    toJSON(): InvitableUserJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<InvitableUserJSON>;
}
export interface InvitationJSON {
    created: ISODateTimeString;
    qr: string;
    token: string;
    uid: string;
}
export declare class Invitation implements TDProtoClass<Invitation> {
    #private;
    created: ISODateTimeString;
    qr: string;
    token: string;
    uid: string;
    /**
     * Invitation to team
     * @param created DOCUMENTATION MISSING
     * @param qr DOCUMENTATION MISSING
     * @param token DOCUMENTATION MISSING
     * @param uid DOCUMENTATION MISSING
     */
    constructor(created: ISODateTimeString, qr: string, token: string, uid: string);
    static fromJSON(raw: InvitationJSON): Invitation;
    mappableFields: readonly ["created", "qr", "token", "uid"];
    toJSON(): InvitationJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<InvitationJSON>;
}
export interface InvitationToMeetingJSON {
    date_start: ISODateTimeString;
    description: string;
    meeting_jid: string;
}
export declare class InvitationToMeeting implements TDProtoClass<InvitationToMeeting> {
    #private;
    dateStart: ISODateTimeString;
    description: string;
    meetingJid: string;
    /**
     * InvitationToMeeting Preview
     * @param dateStart DOCUMENTATION MISSING
     * @param description DOCUMENTATION MISSING
     * @param meetingJid DOCUMENTATION MISSING
     */
    constructor(dateStart: ISODateTimeString, description: string, meetingJid: string);
    static fromJSON(raw: InvitationToMeetingJSON): InvitationToMeeting;
    mappableFields: readonly ["dateStart", "description", "meetingJid"];
    toJSON(): InvitationToMeetingJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<InvitationToMeetingJSON>;
}
export interface JSEPJSON {
    sdp: string;
    type: string;
}
export declare class JSEP implements TDProtoClass<JSEP> {
    #private;
    sdp: string;
    type: string;
    /**
     * JavaScript Session Establishment Protocol
     * @param sdp Session Description Protocol information
     * @param type See https://rtcweb-wg.github.io/jsep/#rfc.section.4.1.8
     */
    constructor(sdp: string, type: string);
    static fromJSON(raw: JSEPJSON): JSEP;
    mappableFields: readonly ["sdp", "type"];
    toJSON(): JSEPJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<JSEPJSON>;
}
export interface MappedUserJSON {
    external_user_id: string;
    external_user_name: string;
    is_admin: boolean;
    is_archive: boolean;
    is_deleted: boolean;
    contact?: ContactJSON;
}
export declare class MappedUser implements TDProtoClass<MappedUser> {
    #private;
    externalUserId: string;
    externalUserName: string;
    isAdmin: boolean;
    isArchive: boolean;
    isDeleted: boolean;
    contact?: Contact | undefined;
    /**
     * MappedUser struct for map internal user with external user
     * @param externalUserId ExternalUserID user id from messenger
     * @param externalUserName ExternalUserName user name from messenger
     * @param isAdmin IsAdmin group admin flag
     * @param isArchive IsArchive flag of archive user
     * @param isDeleted IsDeleted flag of deleted user from messenger
     * @param contact Contact tada contact data
     */
    constructor(externalUserId: string, externalUserName: string, isAdmin: boolean, isArchive: boolean, isDeleted: boolean, contact?: Contact | undefined);
    static fromJSON(raw: MappedUserJSON): MappedUser;
    mappableFields: readonly ["externalUserId", "externalUserName", "isAdmin", "isArchive", "isDeleted", "contact"];
    toJSON(): MappedUserJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<MappedUserJSON>;
}
export interface MarkupEntityJSON {
    cl: number;
    op: number;
    typ: MarkupType;
    childs?: MarkupEntityJSON[];
    cllen?: number;
    oplen?: number;
    repl?: string;
    time?: string;
    url?: string;
}
export declare class MarkupEntity implements TDProtoClass<MarkupEntity> {
    #private;
    cl: number;
    op: number;
    typ: MarkupType;
    childs?: MarkupEntity[] | undefined;
    cllen?: number | undefined;
    oplen?: number | undefined;
    repl?: string | undefined;
    time?: string | undefined;
    url?: string | undefined;
    /**
     * Markup entity. Experimental
     * @param cl Close marker offset
     * @param op Open marker offset
     * @param typ Marker type
     * @param childs List of internal markup entities
     * @param cllen Close marker length
     * @param oplen Open marker length
     * @param repl Text replacement
     * @param time Time, for Time type
     * @param url Url, for Link type
     */
    constructor(cl: number, op: number, typ: MarkupType, childs?: MarkupEntity[] | undefined, cllen?: number | undefined, oplen?: number | undefined, repl?: string | undefined, time?: string | undefined, url?: string | undefined);
    static fromJSON(raw: MarkupEntityJSON): MarkupEntity;
    mappableFields: readonly ["cl", "op", "typ", "childs", "cllen", "oplen", "repl", "time", "url"];
    toJSON(): MarkupEntityJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<MarkupEntityJSON>;
}
export interface MeetingJSON {
    chat_type: ChatType;
    created: ISODateTimeString;
    display_name: string;
    duration: number;
    end_at: ISODateTimeString;
    gentime: number;
    icons: IconDataJSON;
    id: string;
    jid: JID;
    meeting_recipient_status: MeetingRecipientStatus;
    start_at: ISODateTimeString;
    assignee?: JID;
    autocleanup_age?: number;
    base_gentime?: number;
    can_add_member?: boolean;
    can_call?: boolean;
    can_change_member_status?: boolean;
    can_change_settings?: boolean;
    can_delete?: boolean;
    can_delete_any_message?: boolean;
    can_edit?: boolean;
    can_join?: boolean;
    can_mute_all?: boolean;
    can_remove_member?: boolean;
    can_send_message?: boolean;
    can_set_important_any_message?: boolean;
    cant_send_message_reason?: string;
    changeable_fields?: string[];
    collapsed?: boolean;
    color_index?: number;
    complexity?: number;
    counters_enabled?: boolean;
    deadline?: ISODateTimeString;
    deadline_expired?: boolean;
    default_for_all?: boolean;
    description?: string;
    done?: ISODateTimeString;
    done_reason?: string;
    draft?: string;
    draft_gentime?: number;
    draft_num?: number;
    draft_revision?: number;
    feed?: boolean;
    freq?: FreqJSON;
    hidden?: boolean;
    importance?: number;
    is_archive?: boolean;
    is_outside?: boolean;
    public?: boolean;
    is_required?: boolean;
    items?: TaskItemJSON[];
    ivcs_info?: IVCSInfoJSON;
    last_activity?: ISODateTimeString;
    last_message?: MessageJSON;
    last_read_message_id?: string;
    linked_messages?: any[];
    links?: MessageLinkJSON[];
    markup?: MarkupEntityJSON[];
    meeting_duration?: number;
    meeting_freq?: boolean;
    meeting_members?: MeetingMemberJSON[];
    meeting_start_at?: ISODateTimeString;
    members?: GroupMembershipJSON[];
    notifications_enabled?: boolean;
    num?: number;
    num_checked_items?: number;
    num_importants?: number;
    num_items?: number;
    num_members?: number;
    num_unread?: number;
    num_unread_notices?: number;
    observers?: JID[];
    owner?: JID;
    owner_contact_uuid?: JID;
    owner_user_uuid?: string;
    parent_chat_id?: JID;
    parent_message_id?: string;
    parents?: SubtaskJSON[];
    personal_account_id?: string;
    pinned?: boolean;
    pinned_message?: MessageJSON;
    pinned_sort_ordering?: number;
    readonly_for_members?: boolean;
    section?: string;
    spent_time?: number;
    status?: GroupStatus;
    tabs?: TaskTabKey[];
    tags?: string[];
    task_status?: string;
    team_uuid?: string;
    title?: string;
    uploads?: UploadJSON[];
    urgency?: number;
    vcs_enabled?: boolean;
}
export declare class Meeting implements TDProtoClass<Meeting> {
    #private;
    chatType: ChatType;
    created: ISODateTimeString;
    displayName: string;
    duration: number;
    endAt: ISODateTimeString;
    gentime: number;
    icons: IconData;
    id: string;
    jid: JID;
    meetingRecipientStatus: MeetingRecipientStatus;
    startAt: ISODateTimeString;
    assignee?: string | undefined;
    autocleanupAge?: number | undefined;
    baseGentime?: number | undefined;
    canAddMember?: boolean | undefined;
    canCall?: boolean | undefined;
    canChangeMemberStatus?: boolean | undefined;
    canChangeSettings?: boolean | undefined;
    canDelete?: boolean | undefined;
    canDeleteAnyMessage?: boolean | undefined;
    canEdit?: boolean | undefined;
    canJoin?: boolean | undefined;
    canMuteAll?: boolean | undefined;
    canRemoveMember?: boolean | undefined;
    canSendMessage?: boolean | undefined;
    canSetImportantAnyMessage?: boolean | undefined;
    cantSendMessageReason?: string | undefined;
    changeableFields?: string[] | undefined;
    collapsed?: boolean | undefined;
    colorIndex?: number | undefined;
    complexity?: number | undefined;
    countersEnabled?: boolean | undefined;
    deadline?: string | undefined;
    deadlineExpired?: boolean | undefined;
    defaultForAll?: boolean | undefined;
    description?: string | undefined;
    done?: string | undefined;
    doneReason?: string | undefined;
    draft?: string | undefined;
    draftGentime?: number | undefined;
    draftNum?: number | undefined;
    draftRevision?: number | undefined;
    feed?: boolean | undefined;
    freq?: Freq | undefined;
    hidden?: boolean | undefined;
    importance?: number | undefined;
    isArchive?: boolean | undefined;
    isOutside?: boolean | undefined;
    isPublic?: boolean | undefined;
    isRequired?: boolean | undefined;
    items?: TaskItem[] | undefined;
    ivcsInfo?: IVCSInfo | undefined;
    lastActivity?: string | undefined;
    lastMessage?: Message | undefined;
    lastReadMessageId?: string | undefined;
    linkedMessages?: any[] | undefined;
    links?: MessageLink[] | undefined;
    readonly markup?: MarkupEntity[] | undefined;
    meetingDuration?: number | undefined;
    meetingFreq?: boolean | undefined;
    meetingMembers?: MeetingMember[] | undefined;
    meetingStartAt?: string | undefined;
    members?: GroupMembership[] | undefined;
    notificationsEnabled?: boolean | undefined;
    num?: number | undefined;
    numCheckedItems?: number | undefined;
    numImportants?: number | undefined;
    numItems?: number | undefined;
    numMembers?: number | undefined;
    numUnread?: number | undefined;
    numUnreadNotices?: number | undefined;
    observers?: string[] | undefined;
    owner?: string | undefined;
    ownerContactUuid?: string | undefined;
    ownerUserUuid?: string | undefined;
    parentChatId?: string | undefined;
    parentMessageId?: string | undefined;
    parents?: Subtask[] | undefined;
    personalAccountId?: string | undefined;
    pinned?: boolean | undefined;
    pinnedMessage?: Message | undefined;
    pinnedSortOrdering?: number | undefined;
    readonlyForMembers?: boolean | undefined;
    section?: string | undefined;
    spentTime?: number | undefined;
    status?: GroupStatus | undefined;
    tabs?: string[] | undefined;
    tags?: string[] | undefined;
    taskStatus?: string | undefined;
    teamUuid?: string | undefined;
    title?: string | undefined;
    uploads?: Upload[] | undefined;
    urgency?: number | undefined;
    vcsEnabled?: boolean | undefined;
    /**
     * MISSING CLASS DOCUMENTATION
     * @param chatType Chat type
     * @param created Creation date, iso datetime
     * @param displayName Title
     * @param duration DOCUMENTATION MISSING
     * @param endAt DOCUMENTATION MISSING
     * @param gentime Chat fields related to concrete participant) version
     * @param icons Icons info
     * @param id DOCUMENTATION MISSING
     * @param jid Group/Task/Contact id
     * @param meetingRecipientStatus DOCUMENTATION MISSING
     * @param startAt DOCUMENTATION MISSING
     * @param assignee Assignee contact id. Tasks only
     * @param autocleanupAge Delete messages in this chat in seconds. Experimental function
     * @param baseGentime Base fields (not related to concrete participant) version
     * @param canAddMember Can I add member to this group chat
     * @param canCall Can I call to this chat
     * @param canChangeMemberStatus Can I change member status in this group chat
     * @param canChangeSettings deprecated: use changeable fields
     * @param canDelete Can I delete this chat
     * @param canDeleteAnyMessage Can I delete any message in this chat
     * @param canEdit DOCUMENTATION MISSING
     * @param canJoin Can I join to this public group/task
     * @param canMuteAll Can I mute all in call
     * @param canRemoveMember Can I remove member from this group chat
     * @param canSendMessage Can I send message to this chat
     * @param canSetImportantAnyMessage Can I change Important flag in any message in this chat
     * @param cantSendMessageReason Why I can't send message to this chat (if can't)
     * @param changeableFields List of editable fields
     * @param collapsed Description collapsed. Used for tasks only
     * @param colorIndex Custom color index from table of colors. Tasks only
     * @param complexity Task complexity, number
     * @param countersEnabled Include unread messages to counters
     * @param deadline Task deadline in iso format, if any
     * @param deadlineExpired Is task deadline expired
     * @param defaultForAll Any new team member will be added to this group chat
     * @param description Group or task description
     * @param done Task done date in iso format, if any
     * @param doneReason Task done reason, if any
     * @param draft Last message draft, if any
     * @param draftGentime Deprecated: use DraftRevision instead. Last message draft version, if any
     * @param draftNum Deprecated: use DraftRevision instead
     * @param draftRevision Last message draft version, if any. unixtime(ms)
     * @param feed Present in feed (main screen)
     * @param freq DOCUMENTATION MISSING
     * @param hidden Hidden chat
     * @param importance Task importance, if available in team
     * @param isArchive DOCUMENTATION MISSING
     * @param isOutside DOCUMENTATION MISSING
     * @param isPublic Can other team member see this task/group chat
     * @param isRequired DOCUMENTATION MISSING
     * @param items Checklist items. Task only
     * @param ivcsInfo DOCUMENTATION MISSING
     * @param lastActivity Date of the last message sent even if it was deleted
     * @param lastMessage Last message object
     * @param lastReadMessageId Last read message id, if any
     * @param linkedMessages Used for "Create task from messages..."
     * @param links Links in description
     * @param markup Markup entities for description field. Experimental
     * @param meetingDuration Meeting duration
     * @param meetingFreq Meeting has frequency
     * @param meetingMembers DOCUMENTATION MISSING
     * @param meetingStartAt Start date of meeting chat
     * @param members Group chat members
     * @param notificationsEnabled Push notifications enabled
     * @param num Task number in this team
     * @param numCheckedItems Checked items in checklist. Tasks only
     * @param numImportants Number of important messages
     * @param numItems Items in checklist. Tasks only
     * @param numMembers Non-archive participants number
     * @param numUnread Unread counter
     * @param numUnreadNotices Mentions (@) counter
     * @param observers Task followers id's. TODO: rename to "followers"
     * @param owner Task creator
     * @param ownerContactUuid DOCUMENTATION MISSING
     * @param ownerUserUuid DOCUMENTATION MISSING
     * @param parentChatId Parent chat uid for thread
     * @param parentMessageId Parent message uid for thread
     * @param parents Parent tasks
     * @param personalAccountId DOCUMENTATION MISSING
     * @param pinned Is chat pinned on top
     * @param pinnedMessage Pinned message for this chat
     * @param pinnedSortOrdering Sort ordering for pinned chat
     * @param readonlyForMembers Readonly for non-admins group chat (Like Channels in Telegram but switchable)
     * @param section Project / section id, if any
     * @param spentTime Task spent time, number
     * @param status My status in group chat
     * @param tabs Tab names
     * @param tags Task tags list, if any
     * @param taskStatus Task status. May be custom
     * @param teamUuid DOCUMENTATION MISSING
     * @param title Task title. Generated from number and description
     * @param uploads Upload uids for request, upload objects for response
     * @param urgency Task urgency, if available in team
     * @param vcsEnabled DOCUMENTATION MISSING
     */
    constructor(chatType: ChatType, created: ISODateTimeString, displayName: string, duration: number, endAt: ISODateTimeString, gentime: number, icons: IconData, id: string, jid: JID, meetingRecipientStatus: MeetingRecipientStatus, startAt: ISODateTimeString, assignee?: string | undefined, autocleanupAge?: number | undefined, baseGentime?: number | undefined, canAddMember?: boolean | undefined, canCall?: boolean | undefined, canChangeMemberStatus?: boolean | undefined, canChangeSettings?: boolean | undefined, canDelete?: boolean | undefined, canDeleteAnyMessage?: boolean | undefined, canEdit?: boolean | undefined, canJoin?: boolean | undefined, canMuteAll?: boolean | undefined, canRemoveMember?: boolean | undefined, canSendMessage?: boolean | undefined, canSetImportantAnyMessage?: boolean | undefined, cantSendMessageReason?: string | undefined, changeableFields?: string[] | undefined, collapsed?: boolean | undefined, colorIndex?: number | undefined, complexity?: number | undefined, countersEnabled?: boolean | undefined, deadline?: string | undefined, deadlineExpired?: boolean | undefined, defaultForAll?: boolean | undefined, description?: string | undefined, done?: string | undefined, doneReason?: string | undefined, draft?: string | undefined, draftGentime?: number | undefined, draftNum?: number | undefined, draftRevision?: number | undefined, feed?: boolean | undefined, freq?: Freq | undefined, hidden?: boolean | undefined, importance?: number | undefined, isArchive?: boolean | undefined, isOutside?: boolean | undefined, isPublic?: boolean | undefined, isRequired?: boolean | undefined, items?: TaskItem[] | undefined, ivcsInfo?: IVCSInfo | undefined, lastActivity?: string | undefined, lastMessage?: Message | undefined, lastReadMessageId?: string | undefined, linkedMessages?: any[] | undefined, links?: MessageLink[] | undefined, markup?: MarkupEntity[] | undefined, meetingDuration?: number | undefined, meetingFreq?: boolean | undefined, meetingMembers?: MeetingMember[] | undefined, meetingStartAt?: string | undefined, members?: GroupMembership[] | undefined, notificationsEnabled?: boolean | undefined, num?: number | undefined, numCheckedItems?: number | undefined, numImportants?: number | undefined, numItems?: number | undefined, numMembers?: number | undefined, numUnread?: number | undefined, numUnreadNotices?: number | undefined, observers?: string[] | undefined, owner?: string | undefined, ownerContactUuid?: string | undefined, ownerUserUuid?: string | undefined, parentChatId?: string | undefined, parentMessageId?: string | undefined, parents?: Subtask[] | undefined, personalAccountId?: string | undefined, pinned?: boolean | undefined, pinnedMessage?: Message | undefined, pinnedSortOrdering?: number | undefined, readonlyForMembers?: boolean | undefined, section?: string | undefined, spentTime?: number | undefined, status?: GroupStatus | undefined, tabs?: string[] | undefined, tags?: string[] | undefined, taskStatus?: string | undefined, teamUuid?: string | undefined, title?: string | undefined, uploads?: Upload[] | undefined, urgency?: number | undefined, vcsEnabled?: boolean | undefined);
    static fromJSON(raw: MeetingJSON): Meeting;
    mappableFields: readonly ["chatType", "created", "displayName", "duration", "endAt", "gentime", "icons", "id", "jid", "meetingRecipientStatus", "startAt", "assignee", "autocleanupAge", "baseGentime", "canAddMember", "canCall", "canChangeMemberStatus", "canChangeSettings", "canDelete", "canDeleteAnyMessage", "canEdit", "canJoin", "canMuteAll", "canRemoveMember", "canSendMessage", "canSetImportantAnyMessage", "cantSendMessageReason", "changeableFields", "collapsed", "colorIndex", "complexity", "countersEnabled", "deadline", "deadlineExpired", "defaultForAll", "description", "done", "doneReason", "draft", "draftGentime", "draftNum", "draftRevision", "feed", "freq", "hidden", "importance", "isArchive", "isOutside", "isPublic", "isRequired", "items", "ivcsInfo", "lastActivity", "lastMessage", "lastReadMessageId", "linkedMessages", "links", "markup", "meetingDuration", "meetingFreq", "meetingMembers", "meetingStartAt", "members", "notificationsEnabled", "num", "numCheckedItems", "numImportants", "numItems", "numMembers", "numUnread", "numUnreadNotices", "observers", "owner", "ownerContactUuid", "ownerUserUuid", "parentChatId", "parentMessageId", "parents", "personalAccountId", "pinned", "pinnedMessage", "pinnedSortOrdering", "readonlyForMembers", "section", "spentTime", "status", "tabs", "tags", "taskStatus", "teamUuid", "title", "uploads", "urgency", "vcsEnabled"];
    toJSON(): MeetingJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<MeetingJSON>;
}
export interface MeetingMemberJSON {
    chat_uuid: string;
    contact: ContactJSON;
    meeting_id: string;
    presence: MeetingPresenceStatus;
    status: MeetingMemberStatus;
    can_change_presence?: boolean;
    can_change_status?: boolean;
    can_remove?: boolean;
}
export declare class MeetingMember implements TDProtoClass<MeetingMember> {
    #private;
    chatUuid: string;
    contact: Contact;
    meetingId: string;
    presence: MeetingPresenceStatus;
    status: MeetingMemberStatus;
    canChangePresence?: boolean | undefined;
    canChangeStatus?: boolean | undefined;
    canRemove?: boolean | undefined;
    /**
     * MISSING CLASS DOCUMENTATION
     * @param chatUuid DOCUMENTATION MISSING
     * @param contact DOCUMENTATION MISSING
     * @param meetingId DOCUMENTATION MISSING
     * @param presence DOCUMENTATION MISSING
     * @param status DOCUMENTATION MISSING
     * @param canChangePresence DOCUMENTATION MISSING
     * @param canChangeStatus DOCUMENTATION MISSING
     * @param canRemove DOCUMENTATION MISSING
     */
    constructor(chatUuid: string, contact: Contact, meetingId: string, presence: MeetingPresenceStatus, status: MeetingMemberStatus, canChangePresence?: boolean | undefined, canChangeStatus?: boolean | undefined, canRemove?: boolean | undefined);
    static fromJSON(raw: MeetingMemberJSON): MeetingMember;
    mappableFields: readonly ["chatUuid", "contact", "meetingId", "presence", "status", "canChangePresence", "canChangeStatus", "canRemove"];
    toJSON(): MeetingMemberJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<MeetingMemberJSON>;
}
export interface MeetingNewGuestJSON {
    full_name: string;
}
export declare class MeetingNewGuest implements TDProtoClass<MeetingNewGuest> {
    #private;
    fullName: string;
    /**
     * Guest Invitation Form
     * @param fullName DOCUMENTATION MISSING
     */
    constructor(fullName: string);
    static fromJSON(raw: MeetingNewGuestJSON): MeetingNewGuest;
    mappableFields: readonly ["fullName"];
    toJSON(): MeetingNewGuestJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<MeetingNewGuestJSON>;
}
export interface MeetingsCountResponseJSON {
    count_cells: number;
    count_meetings: number;
}
export declare class MeetingsCountResponse implements TDProtoClass<MeetingsCountResponse> {
    #private;
    countCells: number;
    countMeetings: number;
    /**
     * MISSING CLASS DOCUMENTATION
     * @param countCells DOCUMENTATION MISSING
     * @param countMeetings DOCUMENTATION MISSING
     */
    constructor(countCells: number, countMeetings: number);
    static fromJSON(raw: MeetingsCountResponseJSON): MeetingsCountResponse;
    mappableFields: readonly ["countCells", "countMeetings"];
    toJSON(): MeetingsCountResponseJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<MeetingsCountResponseJSON>;
}
export interface MeetingsCreateRequestJSON {
    duration: number;
    members: MeetingsMemberCreateParamsJSON[];
    owner_contact_uuid: JID;
    start_at: string;
    team_uuid: string;
    description?: string;
    freq?: FreqJSON;
    is_outside?: boolean;
    is_public?: boolean;
    title?: string;
    vcs_enabled?: boolean;
}
export declare class MeetingsCreateRequest implements TDProtoClass<MeetingsCreateRequest> {
    #private;
    duration: number;
    members: MeetingsMemberCreateParams[];
    ownerContactUuid: JID;
    startAt: string;
    teamUuid: string;
    description?: string | undefined;
    freq?: Freq | undefined;
    isOutside?: boolean | undefined;
    isPublic?: boolean | undefined;
    title?: string | undefined;
    vcsEnabled?: boolean | undefined;
    /**
     * MISSING CLASS DOCUMENTATION
     * @param duration DOCUMENTATION MISSING
     * @param members DOCUMENTATION MISSING
     * @param ownerContactUuid DOCUMENTATION MISSING
     * @param startAt DOCUMENTATION MISSING
     * @param teamUuid DOCUMENTATION MISSING
     * @param description DOCUMENTATION MISSING
     * @param freq DOCUMENTATION MISSING
     * @param isOutside DOCUMENTATION MISSING
     * @param isPublic DOCUMENTATION MISSING
     * @param title DOCUMENTATION MISSING
     * @param vcsEnabled DOCUMENTATION MISSING
     */
    constructor(duration: number, members: MeetingsMemberCreateParams[], ownerContactUuid: JID, startAt: string, teamUuid: string, description?: string | undefined, freq?: Freq | undefined, isOutside?: boolean | undefined, isPublic?: boolean | undefined, title?: string | undefined, vcsEnabled?: boolean | undefined);
    static fromJSON(raw: MeetingsCreateRequestJSON): MeetingsCreateRequest;
    mappableFields: readonly ["duration", "members", "ownerContactUuid", "startAt", "teamUuid", "description", "freq", "isOutside", "isPublic", "title", "vcsEnabled"];
    toJSON(): MeetingsCreateRequestJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<MeetingsCreateRequestJSON>;
}
export interface MeetingsDatesResponseJSON {
    dates: string[];
}
export declare class MeetingsDatesResponse implements TDProtoClass<MeetingsDatesResponse> {
    #private;
    dates: string[];
    /**
     * MISSING CLASS DOCUMENTATION
     * @param dates DOCUMENTATION MISSING
     */
    constructor(dates: string[]);
    static fromJSON(raw: MeetingsDatesResponseJSON): MeetingsDatesResponse;
    mappableFields: readonly ["dates"];
    toJSON(): MeetingsDatesResponseJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<MeetingsDatesResponseJSON>;
}
export interface MeetingsDeleteRequestParamsJSON {
    team_uuid: string;
    date?: ISODateTimeString;
}
export declare class MeetingsDeleteRequestParams implements TDProtoClass<MeetingsDeleteRequestParams> {
    #private;
    teamUuid: string;
    date?: string | undefined;
    /**
     * MISSING CLASS DOCUMENTATION
     * @param teamUuid DOCUMENTATION MISSING
     * @param date DOCUMENTATION MISSING
     */
    constructor(teamUuid: string, date?: string | undefined);
    static fromJSON(raw: MeetingsDeleteRequestParamsJSON): MeetingsDeleteRequestParams;
    mappableFields: readonly ["teamUuid", "date"];
    toJSON(): MeetingsDeleteRequestParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<MeetingsDeleteRequestParamsJSON>;
}
export interface MeetingsGetFrequencyDescriptionParamsJSON {
    frequency: number;
    repeatability_type: MeetingRepeatabilityType;
    freq_days?: string;
}
export declare class MeetingsGetFrequencyDescriptionParams implements TDProtoClass<MeetingsGetFrequencyDescriptionParams> {
    #private;
    frequency: number;
    repeatabilityType: MeetingRepeatabilityType;
    freqDays?: string | undefined;
    /**
     * MISSING CLASS DOCUMENTATION
     * @param frequency DOCUMENTATION MISSING
     * @param repeatabilityType DOCUMENTATION MISSING
     * @param freqDays DOCUMENTATION MISSING
     */
    constructor(frequency: number, repeatabilityType: MeetingRepeatabilityType, freqDays?: string | undefined);
    static fromJSON(raw: MeetingsGetFrequencyDescriptionParamsJSON): MeetingsGetFrequencyDescriptionParams;
    mappableFields: readonly ["frequency", "repeatabilityType", "freqDays"];
    toJSON(): MeetingsGetFrequencyDescriptionParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<MeetingsGetFrequencyDescriptionParamsJSON>;
}
export interface MeetingsGetRequestJSON {
    date_from: string;
    date_to: string;
    team_uuid: string;
    is_archive?: boolean;
    is_freq?: boolean;
    is_outside?: boolean;
    is_public?: boolean;
    is_required?: boolean;
    limit?: number;
    members_jids?: string;
    offset?: number;
}
export declare class MeetingsGetRequest implements TDProtoClass<MeetingsGetRequest> {
    #private;
    dateFrom: string;
    dateTo: string;
    teamUuid: string;
    isArchive?: boolean | undefined;
    isFreq?: boolean | undefined;
    isOutside?: boolean | undefined;
    isPublic?: boolean | undefined;
    isRequired?: boolean | undefined;
    limit?: number | undefined;
    membersJids?: string | undefined;
    offset?: number | undefined;
    /**
     * MISSING CLASS DOCUMENTATION
     * @param dateFrom DOCUMENTATION MISSING
     * @param dateTo DOCUMENTATION MISSING
     * @param teamUuid DOCUMENTATION MISSING
     * @param isArchive DOCUMENTATION MISSING
     * @param isFreq DOCUMENTATION MISSING
     * @param isOutside DOCUMENTATION MISSING
     * @param isPublic DOCUMENTATION MISSING
     * @param isRequired DOCUMENTATION MISSING
     * @param limit DOCUMENTATION MISSING
     * @param membersJids DOCUMENTATION MISSING
     * @param offset DOCUMENTATION MISSING
     */
    constructor(dateFrom: string, dateTo: string, teamUuid: string, isArchive?: boolean | undefined, isFreq?: boolean | undefined, isOutside?: boolean | undefined, isPublic?: boolean | undefined, isRequired?: boolean | undefined, limit?: number | undefined, membersJids?: string | undefined, offset?: number | undefined);
    static fromJSON(raw: MeetingsGetRequestJSON): MeetingsGetRequest;
    mappableFields: readonly ["dateFrom", "dateTo", "teamUuid", "isArchive", "isFreq", "isOutside", "isPublic", "isRequired", "limit", "membersJids", "offset"];
    toJSON(): MeetingsGetRequestJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<MeetingsGetRequestJSON>;
}
export interface MeetingsMemberCreateParamsJSON {
    jid: JID;
    status?: MeetingMemberStatus;
}
export declare class MeetingsMemberCreateParams implements TDProtoClass<MeetingsMemberCreateParams> {
    #private;
    jid: JID;
    status?: MeetingMemberStatus | undefined;
    /**
     * MISSING CLASS DOCUMENTATION
     * @param jid DOCUMENTATION MISSING
     * @param status DOCUMENTATION MISSING
     */
    constructor(jid: JID, status?: MeetingMemberStatus | undefined);
    static fromJSON(raw: MeetingsMemberCreateParamsJSON): MeetingsMemberCreateParams;
    mappableFields: readonly ["jid", "status"];
    toJSON(): MeetingsMemberCreateParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<MeetingsMemberCreateParamsJSON>;
}
export interface MeetingsMembersBatchDeleteRequestParamsJSON {
    members_jids: JID[];
    team_uuid: string;
}
export declare class MeetingsMembersBatchDeleteRequestParams implements TDProtoClass<MeetingsMembersBatchDeleteRequestParams> {
    #private;
    membersJids: JID[];
    teamUuid: string;
    /**
     * MISSING CLASS DOCUMENTATION
     * @param membersJids DOCUMENTATION MISSING
     * @param teamUuid DOCUMENTATION MISSING
     */
    constructor(membersJids: JID[], teamUuid: string);
    static fromJSON(raw: MeetingsMembersBatchDeleteRequestParamsJSON): MeetingsMembersBatchDeleteRequestParams;
    mappableFields: readonly ["membersJids", "teamUuid"];
    toJSON(): MeetingsMembersBatchDeleteRequestParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<MeetingsMembersBatchDeleteRequestParamsJSON>;
}
export interface MeetingsMembersCreateRequestJSON {
    members: MeetingsMemberCreateParamsJSON[];
    team_uuid: string;
}
export declare class MeetingsMembersCreateRequest implements TDProtoClass<MeetingsMembersCreateRequest> {
    #private;
    members: MeetingsMemberCreateParams[];
    teamUuid: string;
    /**
     * MISSING CLASS DOCUMENTATION
     * @param members DOCUMENTATION MISSING
     * @param teamUuid DOCUMENTATION MISSING
     */
    constructor(members: MeetingsMemberCreateParams[], teamUuid: string);
    static fromJSON(raw: MeetingsMembersCreateRequestJSON): MeetingsMembersCreateRequest;
    mappableFields: readonly ["members", "teamUuid"];
    toJSON(): MeetingsMembersCreateRequestJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<MeetingsMembersCreateRequestJSON>;
}
export interface MeetingsMembersCreateResponseJSON {
    errors?: string[];
    members?: MeetingMemberJSON[];
}
export declare class MeetingsMembersCreateResponse implements TDProtoClass<MeetingsMembersCreateResponse> {
    #private;
    errors?: string[] | undefined;
    members?: MeetingMember[] | undefined;
    /**
     * MISSING CLASS DOCUMENTATION
     * @param errors DOCUMENTATION MISSING
     * @param members DOCUMENTATION MISSING
     */
    constructor(errors?: string[] | undefined, members?: MeetingMember[] | undefined);
    static fromJSON(raw: MeetingsMembersCreateResponseJSON): MeetingsMembersCreateResponse;
    mappableFields: readonly ["errors", "members"];
    toJSON(): MeetingsMembersCreateResponseJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<MeetingsMembersCreateResponseJSON>;
}
export interface MeetingsMembersDeleteRequestParamsJSON {
    team_uuid: string;
}
export declare class MeetingsMembersDeleteRequestParams implements TDProtoClass<MeetingsMembersDeleteRequestParams> {
    #private;
    teamUuid: string;
    /**
     * MISSING CLASS DOCUMENTATION
     * @param teamUuid DOCUMENTATION MISSING
     */
    constructor(teamUuid: string);
    static fromJSON(raw: MeetingsMembersDeleteRequestParamsJSON): MeetingsMembersDeleteRequestParams;
    mappableFields: readonly ["teamUuid"];
    toJSON(): MeetingsMembersDeleteRequestParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<MeetingsMembersDeleteRequestParamsJSON>;
}
export interface MeetingsMembersGetRequestParamsJSON {
    meeting_id: string;
    team_uuid: string;
    limit?: number;
    offset?: number;
    presence?: MeetingPresenceStatus;
    status?: MeetingMemberStatus;
    uuid_sections?: string[];
}
export declare class MeetingsMembersGetRequestParams implements TDProtoClass<MeetingsMembersGetRequestParams> {
    #private;
    meetingId: string;
    teamUuid: string;
    limit?: number | undefined;
    offset?: number | undefined;
    presence?: MeetingPresenceStatus | undefined;
    status?: MeetingMemberStatus | undefined;
    uuidSections?: string[] | undefined;
    /**
     * MISSING CLASS DOCUMENTATION
     * @param meetingId DOCUMENTATION MISSING
     * @param teamUuid DOCUMENTATION MISSING
     * @param limit DOCUMENTATION MISSING
     * @param offset DOCUMENTATION MISSING
     * @param presence DOCUMENTATION MISSING
     * @param status DOCUMENTATION MISSING
     * @param uuidSections DOCUMENTATION MISSING
     */
    constructor(meetingId: string, teamUuid: string, limit?: number | undefined, offset?: number | undefined, presence?: MeetingPresenceStatus | undefined, status?: MeetingMemberStatus | undefined, uuidSections?: string[] | undefined);
    static fromJSON(raw: MeetingsMembersGetRequestParamsJSON): MeetingsMembersGetRequestParams;
    mappableFields: readonly ["meetingId", "teamUuid", "limit", "offset", "presence", "status", "uuidSections"];
    toJSON(): MeetingsMembersGetRequestParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<MeetingsMembersGetRequestParamsJSON>;
}
export interface MeetingsMembersResponseJSON {
    items: MeetingMemberJSON[];
    limit?: number;
    offset?: number;
    total?: number;
}
export declare class MeetingsMembersResponse implements TDProtoClass<MeetingsMembersResponse> {
    #private;
    items: MeetingMember[];
    limit?: number | undefined;
    offset?: number | undefined;
    total?: number | undefined;
    /**
     * MISSING CLASS DOCUMENTATION
     * @param items DOCUMENTATION MISSING
     * @param limit DOCUMENTATION MISSING
     * @param offset DOCUMENTATION MISSING
     * @param total DOCUMENTATION MISSING
     */
    constructor(items: MeetingMember[], limit?: number | undefined, offset?: number | undefined, total?: number | undefined);
    static fromJSON(raw: MeetingsMembersResponseJSON): MeetingsMembersResponse;
    mappableFields: readonly ["items", "limit", "offset", "total"];
    toJSON(): MeetingsMembersResponseJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<MeetingsMembersResponseJSON>;
}
export interface MeetingsMembersUpdateRequestJSON {
    team_uuid: string;
    status?: MeetingMemberStatus;
}
export declare class MeetingsMembersUpdateRequest implements TDProtoClass<MeetingsMembersUpdateRequest> {
    #private;
    teamUuid: string;
    status?: MeetingMemberStatus | undefined;
    /**
     * MISSING CLASS DOCUMENTATION
     * @param teamUuid DOCUMENTATION MISSING
     * @param status DOCUMENTATION MISSING
     */
    constructor(teamUuid: string, status?: MeetingMemberStatus | undefined);
    static fromJSON(raw: MeetingsMembersUpdateRequestJSON): MeetingsMembersUpdateRequest;
    mappableFields: readonly ["teamUuid", "status"];
    toJSON(): MeetingsMembersUpdateRequestJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<MeetingsMembersUpdateRequestJSON>;
}
export interface MeetingsResponseJSON {
    count: number;
    limit: number;
    objects: MeetingJSON[];
    offset: number;
}
export declare class MeetingsResponse implements TDProtoClass<MeetingsResponse> {
    #private;
    count: number;
    limit: number;
    objects: Meeting[];
    offset: number;
    /**
     * MISSING CLASS DOCUMENTATION
     * @param count DOCUMENTATION MISSING
     * @param limit DOCUMENTATION MISSING
     * @param objects DOCUMENTATION MISSING
     * @param offset DOCUMENTATION MISSING
     */
    constructor(count: number, limit: number, objects: Meeting[], offset: number);
    static fromJSON(raw: MeetingsResponseJSON): MeetingsResponse;
    mappableFields: readonly ["count", "limit", "objects", "offset"];
    toJSON(): MeetingsResponseJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<MeetingsResponseJSON>;
}
export interface MeetingsUpdateCellRequestJSON {
    cell_start_new_date: string;
    cell_start_old_date: string;
    duration: number;
    meeting_id: string;
    team_uuid: string;
}
export declare class MeetingsUpdateCellRequest implements TDProtoClass<MeetingsUpdateCellRequest> {
    #private;
    cellStartNewDate: string;
    cellStartOldDate: string;
    duration: number;
    meetingId: string;
    teamUuid: string;
    /**
     * MISSING CLASS DOCUMENTATION
     * @param cellStartNewDate DOCUMENTATION MISSING
     * @param cellStartOldDate DOCUMENTATION MISSING
     * @param duration DOCUMENTATION MISSING
     * @param meetingId DOCUMENTATION MISSING
     * @param teamUuid DOCUMENTATION MISSING
     */
    constructor(cellStartNewDate: string, cellStartOldDate: string, duration: number, meetingId: string, teamUuid: string);
    static fromJSON(raw: MeetingsUpdateCellRequestJSON): MeetingsUpdateCellRequest;
    mappableFields: readonly ["cellStartNewDate", "cellStartOldDate", "duration", "meetingId", "teamUuid"];
    toJSON(): MeetingsUpdateCellRequestJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<MeetingsUpdateCellRequestJSON>;
}
export interface MeetingsUpdateRequestJSON {
    meeting_id: string;
    team_uuid: string;
    add_members?: MeetingsMemberCreateParamsJSON[];
    counters_enabled?: boolean;
    description?: string;
    duration?: number;
    freq?: FreqJSON;
    is_outside?: boolean;
    is_public?: boolean;
    notifications_enabled?: boolean;
    remove_members?: JID[];
    start_at?: string;
    title?: string;
    vcs_enabled?: boolean;
}
export declare class MeetingsUpdateRequest implements TDProtoClass<MeetingsUpdateRequest> {
    #private;
    meetingId: string;
    teamUuid: string;
    addMembers?: MeetingsMemberCreateParams[] | undefined;
    countersEnabled?: boolean | undefined;
    description?: string | undefined;
    duration?: number | undefined;
    freq?: Freq | undefined;
    isOutside?: boolean | undefined;
    isPublic?: boolean | undefined;
    notificationsEnabled?: boolean | undefined;
    removeMembers?: string[] | undefined;
    startAt?: string | undefined;
    title?: string | undefined;
    vcsEnabled?: boolean | undefined;
    /**
     * MISSING CLASS DOCUMENTATION
     * @param meetingId DOCUMENTATION MISSING
     * @param teamUuid DOCUMENTATION MISSING
     * @param addMembers DOCUMENTATION MISSING
     * @param countersEnabled DOCUMENTATION MISSING
     * @param description DOCUMENTATION MISSING
     * @param duration DOCUMENTATION MISSING
     * @param freq DOCUMENTATION MISSING
     * @param isOutside DOCUMENTATION MISSING
     * @param isPublic DOCUMENTATION MISSING
     * @param notificationsEnabled DOCUMENTATION MISSING
     * @param removeMembers DOCUMENTATION MISSING
     * @param startAt DOCUMENTATION MISSING
     * @param title DOCUMENTATION MISSING
     * @param vcsEnabled DOCUMENTATION MISSING
     */
    constructor(meetingId: string, teamUuid: string, addMembers?: MeetingsMemberCreateParams[] | undefined, countersEnabled?: boolean | undefined, description?: string | undefined, duration?: number | undefined, freq?: Freq | undefined, isOutside?: boolean | undefined, isPublic?: boolean | undefined, notificationsEnabled?: boolean | undefined, removeMembers?: string[] | undefined, startAt?: string | undefined, title?: string | undefined, vcsEnabled?: boolean | undefined);
    static fromJSON(raw: MeetingsUpdateRequestJSON): MeetingsUpdateRequest;
    mappableFields: readonly ["meetingId", "teamUuid", "addMembers", "countersEnabled", "description", "duration", "freq", "isOutside", "isPublic", "notificationsEnabled", "removeMembers", "startAt", "title", "vcsEnabled"];
    toJSON(): MeetingsUpdateRequestJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<MeetingsUpdateRequestJSON>;
}
export interface MessageJSON {
    chat: JID;
    chat_type: ChatType;
    content: MessageContentJSON;
    created: ISODateTimeString;
    from: JID;
    gentime: number;
    message_id: string;
    to: JID;
    _debug?: string;
    drafted?: ISODateTimeString;
    editable_until?: ISODateTimeString;
    edited?: ISODateTimeString;
    has_previews?: boolean;
    important?: boolean;
    is_archive?: boolean;
    is_first?: boolean;
    is_last?: boolean;
    linked_messages?: MessageJSON[];
    links?: MessageLinkJSON[];
    markup?: MarkupEntityJSON[];
    nopreview?: boolean;
    notice?: boolean;
    num?: number;
    num_received?: number;
    prev?: string;
    push_text?: string;
    reactions?: MessageReactionJSON[];
    received?: boolean;
    reply_to?: MessageJSON;
    silently?: boolean;
    thread_jid?: JID;
    thread_messages_count?: number;
    uploads?: UploadJSON[];
}
export declare class Message implements TDProtoClass<Message> {
    #private;
    readonly chat: JID;
    readonly chatType: ChatType;
    content: MessageContent;
    readonly created: ISODateTimeString;
    readonly from: JID;
    readonly gentime: number;
    messageId: string;
    to: JID;
    readonly _debug?: string | undefined;
    readonly drafted?: string | undefined;
    readonly editableUntil?: string | undefined;
    readonly edited?: string | undefined;
    readonly hasPreviews?: boolean | undefined;
    important?: boolean | undefined;
    readonly isArchive?: boolean | undefined;
    readonly isFirst?: boolean | undefined;
    readonly isLast?: boolean | undefined;
    linkedMessages?: Message[] | undefined;
    readonly links?: MessageLink[] | undefined;
    readonly markup?: MarkupEntity[] | undefined;
    nopreview?: boolean | undefined;
    readonly notice?: boolean | undefined;
    readonly num?: number | undefined;
    readonly numReceived?: number | undefined;
    readonly prev?: string | undefined;
    readonly pushText?: string | undefined;
    readonly reactions?: MessageReaction[] | undefined;
    readonly received?: boolean | undefined;
    replyTo?: Message | undefined;
    readonly silently?: boolean | undefined;
    threadJid?: string | undefined;
    threadMessagesCount?: number | undefined;
    uploads?: Upload[] | undefined;
    /**
     * Chat message
     * @param chat Chat id
     * @param chatType Chat type
     * @param content Message content struct
     * @param created Message creation datetime (set by server side) or sending datetime in future for draft messages
     * @param from Sender contact id
     * @param gentime Object version
     * @param messageId Message uid
     * @param to Recipient id (group, task or contact)
     * @param _debug Debug information, if any
     * @param drafted Creation datetime for draft messages
     * @param editableUntil Author can change this message until date. Can be null
     * @param edited ISODateTimeString of message modification or deletion
     * @param hasPreviews Has link previews. True or null
     * @param important Importance flag
     * @param isArchive This message is archive. True or null
     * @param isFirst This message is first in this chat. True or null
     * @param isLast This message is last in this chat. True or null
     * @param linkedMessages Forwarded messages. Can be null. Also contains double of ReplyTo for backward compatibility
     * @param links External/internals links
     * @param markup Markup entities. Experimental
     * @param nopreview Disable link previews. True or null
     * @param notice Has mention (@). True or null
     * @param num Index number of this message. Starts from 0. Null for deleted messages. Changes when any previous message wad deleted
     * @param numReceived Unused yet
     * @param prev Previous message id in this chat. Uid or null
     * @param pushText Simple plaintext message representation
     * @param reactions Message reactions struct. Can be null
     * @param received Message was seen by anybody in chat. True or null
     * @param replyTo Message that was replied to, if any
     * @param silently Message has no pushes and did not affect any counters
     * @param threadJid ThreadJID
     * @param threadMessagesCount Thread Messages Count
     * @param uploads Message uploads
     */
    constructor(chat: JID, chatType: ChatType, content: MessageContent, created: ISODateTimeString, from: JID, gentime: number, messageId: string, to: JID, _debug?: string | undefined, drafted?: string | undefined, editableUntil?: string | undefined, edited?: string | undefined, hasPreviews?: boolean | undefined, important?: boolean | undefined, isArchive?: boolean | undefined, isFirst?: boolean | undefined, isLast?: boolean | undefined, linkedMessages?: Message[] | undefined, links?: MessageLink[] | undefined, markup?: MarkupEntity[] | undefined, nopreview?: boolean | undefined, notice?: boolean | undefined, num?: number | undefined, numReceived?: number | undefined, prev?: string | undefined, pushText?: string | undefined, reactions?: MessageReaction[] | undefined, received?: boolean | undefined, replyTo?: Message | undefined, silently?: boolean | undefined, threadJid?: string | undefined, threadMessagesCount?: number | undefined, uploads?: Upload[] | undefined);
    static fromJSON(raw: MessageJSON): Message;
    mappableFields: readonly ["chat", "chatType", "content", "created", "from", "gentime", "messageId", "to", "_debug", "drafted", "editableUntil", "edited", "hasPreviews", "important", "isArchive", "isFirst", "isLast", "linkedMessages", "links", "markup", "nopreview", "notice", "num", "numReceived", "prev", "pushText", "reactions", "received", "replyTo", "silently", "threadJid", "threadMessagesCount", "uploads"];
    toJSON(): MessageJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<MessageJSON>;
}
export interface MessageColorsJSON {
    allocated: RGBColor;
    bubble_important: RGBColor;
    bubble_received: RGBColor;
    bubble_sent: RGBColor;
    status_bubble: RGBColor;
    status_feed: RGBColor;
}
export declare class MessageColors implements TDProtoClass<MessageColors> {
    #private;
    allocated: RGBColor;
    bubbleImportant: RGBColor;
    bubbleReceived: RGBColor;
    bubbleSent: RGBColor;
    statusBubble: RGBColor;
    statusFeed: RGBColor;
    /**
     * MessageColors message colors for app
     * @param allocated Allocated color
     * @param bubbleImportant Bubble important color
     * @param bubbleReceived Bubble received color
     * @param bubbleSent Bubble sent color
     * @param statusBubble Status bubble color
     * @param statusFeed Status feed color
     */
    constructor(allocated: RGBColor, bubbleImportant: RGBColor, bubbleReceived: RGBColor, bubbleSent: RGBColor, statusBubble: RGBColor, statusFeed: RGBColor);
    static fromJSON(raw: MessageColorsJSON): MessageColors;
    mappableFields: readonly ["allocated", "bubbleImportant", "bubbleReceived", "bubbleSent", "statusBubble", "statusFeed"];
    toJSON(): MessageColorsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<MessageColorsJSON>;
}
export interface MessageContentJSON {
    text: string;
    type: Mediatype;
    actor?: JID;
    animated?: boolean;
    blurhash?: string;
    comment?: string;
    duration?: number;
    emails?: string[];
    family_name?: string;
    given_name?: string;
    new?: string;
    mediaURL?: string;
    name?: string;
    old?: string;
    patronymic?: string;
    pdf_version?: PdfVersionJSON;
    phones?: string[];
    preview2xURL?: string;
    previewHeight?: number;
    previewURL?: string;
    previewWidth?: number;
    processing?: boolean;
    size?: number;
    stickerpack?: string;
    subtype?: Mediasubtype;
    title?: string;
    upload?: string;
}
export declare class MessageContent implements TDProtoClass<MessageContent> {
    #private;
    text: string;
    type: Mediatype;
    actor?: string | undefined;
    animated?: boolean | undefined;
    blurhash?: string | undefined;
    comment?: string | undefined;
    duration?: number | undefined;
    emails?: string[] | undefined;
    familyName?: string | undefined;
    givenName?: string | undefined;
    isNew?: string | undefined;
    mediaURL?: string | undefined;
    name?: string | undefined;
    old?: string | undefined;
    patronymic?: string | undefined;
    pdfVersion?: PdfVersion | undefined;
    phones?: string[] | undefined;
    preview2xURL?: string | undefined;
    previewHeight?: number | undefined;
    previewURL?: string | undefined;
    previewWidth?: number | undefined;
    processing?: boolean | undefined;
    size?: number | undefined;
    stickerpack?: string | undefined;
    subtype?: Mediasubtype | undefined;
    title?: string | undefined;
    upload?: string | undefined;
    /**
     * Chat message content
     * @param text Text representation of message
     * @param type Message type
     * @param actor Change actor contact id (for "change" mediatype)
     * @param animated Upload is animated image, if any. Deprecated: use Uploads instead
     * @param blurhash Compact representation of a placeholder for an image. Deprecated: use Uploads instead
     * @param comment Comment (for "audiomsg" mediatype)
     * @param duration Upload duration, if any. Deprecated: use Uploads instead
     * @param emails Emails list (for "contact" mediatype)
     * @param familyName Family name (for "contact" mediatype)
     * @param givenName Given name (for "contact" mediatype)
     * @param isNew Change new value (for "change" mediatype)
     * @param mediaURL Upload url, if any. Deprecated: use Uploads instead
     * @param name Upload name, if any. Deprecated: use Uploads instead
     * @param old Change old value (for "change" mediatype)
     * @param patronymic Patronymic name (for "contact" mediatype)
     * @param pdfVersion Pdf version, if any
     * @param phones Contact phones list (for "contact" mediatype)
     * @param preview2xURL Upload high resolution preview absolute url, if any. Deprecated: use Uploads instead
     * @param previewHeight Upload preview height, in pixels, if any. Deprecated: use Uploads instead
     * @param previewURL Upload preview absolute url, if any. Deprecated: use Uploads instead
     * @param previewWidth Upload width, in pixels, if any. Deprecated: use Uploads instead
     * @param processing Upload still processing, if any. Deprecated: use Uploads instead
     * @param size Upload size, if any. Deprecated: use Uploads instead
     * @param stickerpack Stickerpack name (for "sticker" subtype)
     * @param subtype Message subtype, if any
     * @param title Change title (for "change" mediatype)
     * @param upload Upload id, if any. Deprecated: use Uploads instead
     */
    constructor(text: string, type: Mediatype, actor?: string | undefined, animated?: boolean | undefined, blurhash?: string | undefined, comment?: string | undefined, duration?: number | undefined, emails?: string[] | undefined, familyName?: string | undefined, givenName?: string | undefined, isNew?: string | undefined, mediaURL?: string | undefined, name?: string | undefined, old?: string | undefined, patronymic?: string | undefined, pdfVersion?: PdfVersion | undefined, phones?: string[] | undefined, preview2xURL?: string | undefined, previewHeight?: number | undefined, previewURL?: string | undefined, previewWidth?: number | undefined, processing?: boolean | undefined, size?: number | undefined, stickerpack?: string | undefined, subtype?: Mediasubtype | undefined, title?: string | undefined, upload?: string | undefined);
    static fromJSON(raw: MessageContentJSON): MessageContent;
    mappableFields: readonly ["text", "type", "actor", "animated", "blurhash", "comment", "duration", "emails", "familyName", "givenName", "isNew", "mediaURL", "name", "old", "patronymic", "pdfVersion", "phones", "preview2xURL", "previewHeight", "previewURL", "previewWidth", "processing", "size", "stickerpack", "subtype", "title", "upload"];
    toJSON(): MessageContentJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<MessageContentJSON>;
}
export interface MessageLinkJSON {
    pattern: string;
    text: string;
    url: string;
    nopreview?: boolean;
    preview?: MessageLinkPreviewJSON;
    uploads?: UploadJSON[];
    youtube_id?: string;
}
export declare class MessageLink implements TDProtoClass<MessageLink> {
    #private;
    pattern: string;
    text: string;
    url: string;
    nopreview?: boolean | undefined;
    preview?: MessageLinkPreview | undefined;
    uploads?: Upload[] | undefined;
    youtubeId?: string | undefined;
    /**
     * Checked message links. In short: "Click here: {link.Pattern}" => "Click here: <a href='{link.Url}'>{link.Text}</a>"
     * @param pattern Text fragment that should be replaced by link
     * @param text Text replacement
     * @param url Internal or external link
     * @param nopreview Website previews disabled
     * @param preview Optional preview info, for websites
     * @param uploads Optional upload info
     * @param youtubeId Optional youtube movie id
     */
    constructor(pattern: string, text: string, url: string, nopreview?: boolean | undefined, preview?: MessageLinkPreview | undefined, uploads?: Upload[] | undefined, youtubeId?: string | undefined);
    static fromJSON(raw: MessageLinkJSON): MessageLink;
    mappableFields: readonly ["pattern", "text", "url", "nopreview", "preview", "uploads", "youtubeId"];
    toJSON(): MessageLinkJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<MessageLinkJSON>;
}
export interface MessageLinkPreviewJSON {
    title: string;
    description?: string;
}
export declare class MessageLinkPreview implements TDProtoClass<MessageLinkPreview> {
    #private;
    title: string;
    description?: string | undefined;
    /**
     * Website title and description
     * @param title Website title or og:title content
     * @param description Website description
     */
    constructor(title: string, description?: string | undefined);
    static fromJSON(raw: MessageLinkPreviewJSON): MessageLinkPreview;
    mappableFields: readonly ["title", "description"];
    toJSON(): MessageLinkPreviewJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<MessageLinkPreviewJSON>;
}
export interface MessagePushJSON {
    chat: JID;
    click_action: string;
    created: ISODateTimeString;
    icon_url: string;
    message: string;
    message_id: string;
    sender: JID;
    subtitle: string;
    tag: string;
    team: string;
    title: string;
}
export declare class MessagePush implements TDProtoClass<MessagePush> {
    #private;
    chat: JID;
    clickAction: string;
    created: ISODateTimeString;
    iconUrl: string;
    message: string;
    messageId: string;
    sender: JID;
    subtitle: string;
    tag: string;
    team: string;
    title: string;
    /**
     * Push message over websockets. Readonly
     * @param chat Chat id
     * @param clickAction Url opened on click
     * @param created Message creation iso datetime
     * @param iconUrl Absolute url to push icon
     * @param message Push body
     * @param messageId Message id
     * @param sender Sender contact id
     * @param subtitle Push subtitle
     * @param tag Push tag (for join pushes)
     * @param team Team uid
     * @param title Push title
     */
    constructor(chat: JID, clickAction: string, created: ISODateTimeString, iconUrl: string, message: string, messageId: string, sender: JID, subtitle: string, tag: string, team: string, title: string);
    static fromJSON(raw: MessagePushJSON): MessagePush;
    mappableFields: readonly ["chat", "clickAction", "created", "iconUrl", "message", "messageId", "sender", "subtitle", "tag", "team", "title"];
    toJSON(): MessagePushJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<MessagePushJSON>;
}
export interface MessageReactionJSON {
    counter: number;
    details: MessageReactionDetailJSON[];
    name: string;
}
export declare class MessageReaction implements TDProtoClass<MessageReaction> {
    #private;
    counter: number;
    details: MessageReactionDetail[];
    name: string;
    /**
     * Message emoji reaction
     * @param counter Number of reactions
     * @param details Details
     * @param name Emoji
     */
    constructor(counter: number, details: MessageReactionDetail[], name: string);
    static fromJSON(raw: MessageReactionJSON): MessageReaction;
    mappableFields: readonly ["counter", "details", "name"];
    toJSON(): MessageReactionJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<MessageReactionJSON>;
}
export interface MessageReactionDetailJSON {
    created: ISODateTimeString;
    name: string;
    sender: JID;
}
export declare class MessageReactionDetail implements TDProtoClass<MessageReactionDetail> {
    #private;
    created: ISODateTimeString;
    name: string;
    sender: JID;
    /**
     * Message reaction detail
     * @param created When reaction added, iso datetime
     * @param name Reaction emoji
     * @param sender Reaction author
     */
    constructor(created: ISODateTimeString, name: string, sender: JID);
    static fromJSON(raw: MessageReactionDetailJSON): MessageReactionDetail;
    mappableFields: readonly ["created", "name", "sender"];
    toJSON(): MessageReactionDetailJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<MessageReactionDetailJSON>;
}
export interface MyReactionsJSON {
    all: ReactionJSON[];
    top: ReactionJSON[];
}
export declare class MyReactions implements TDProtoClass<MyReactions> {
    #private;
    all: Reaction[];
    top: Reaction[];
    /**
     * Reactions to messages: frequently used and all available
     * @param all All available reactions
     * @param top My frequently used reactions
     */
    constructor(all: Reaction[], top: Reaction[]);
    static fromJSON(raw: MyReactionsJSON): MyReactions;
    mappableFields: readonly ["all", "top"];
    toJSON(): MyReactionsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<MyReactionsJSON>;
}
export interface NodeJSON {
    enabled: boolean;
    title: string;
    uid: string;
}
export declare class Node implements TDProtoClass<Node> {
    #private;
    enabled: boolean;
    title: string;
    uid: string;
    /**
     * Node (for external users)
     * @param enabled Synchronization with node works
     * @param title Node title
     * @param uid Node uid
     */
    constructor(enabled: boolean, title: string, uid: string);
    static fromJSON(raw: NodeJSON): Node;
    mappableFields: readonly ["enabled", "title", "uid"];
    toJSON(): NodeJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<NodeJSON>;
}
export interface OAuthServiceJSON {
    name: string;
    url: string;
}
export declare class OAuthService implements TDProtoClass<OAuthService> {
    #private;
    name: string;
    url: string;
    /**
     * OAuth service
     * @param name Integration title
     * @param url Redirect url
     */
    constructor(name: string, url: string);
    static fromJSON(raw: OAuthServiceJSON): OAuthService;
    mappableFields: readonly ["name", "url"];
    toJSON(): OAuthServiceJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<OAuthServiceJSON>;
}
export interface OnlineCallJSON {
    call_type: CallType;
    jid: JID;
    uid: string;
    online_count?: number;
    start?: ISODateTimeString;
}
export declare class OnlineCall implements TDProtoClass<OnlineCall> {
    #private;
    callType: CallType;
    jid: JID;
    uid: string;
    onlineCount?: number | undefined;
    start?: string | undefined;
    /**
     * Active call status
     * @param callType CallType is a type of call("audio" - audio room, "video" - video room)
     * @param jid Chat or contact id
     * @param uid Call id
     * @param onlineCount Number participants in call
     * @param start Call start
     */
    constructor(callType: CallType, jid: JID, uid: string, onlineCount?: number | undefined, start?: string | undefined);
    static fromJSON(raw: OnlineCallJSON): OnlineCall;
    mappableFields: readonly ["callType", "jid", "uid", "onlineCount", "start"];
    toJSON(): OnlineCallJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<OnlineCallJSON>;
}
export interface OnlineContactJSON {
    jid: JID;
    mobile: boolean;
    afk?: boolean;
    focused?: boolean;
}
export declare class OnlineContact implements TDProtoClass<OnlineContact> {
    #private;
    jid: JID;
    mobile: boolean;
    afk?: boolean | undefined;
    focused?: boolean | undefined;
    /**
     * Contact online status
     * @param jid Contact id
     * @param mobile Is mobile client
     * @param afk Is away from keyboard
     * @param focused Focus mode enabled
     */
    constructor(jid: JID, mobile: boolean, afk?: boolean | undefined, focused?: boolean | undefined);
    static fromJSON(raw: OnlineContactJSON): OnlineContact;
    mappableFields: readonly ["jid", "mobile", "afk", "focused"];
    toJSON(): OnlineContactJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<OnlineContactJSON>;
}
export interface PaginatedBillingEnquiriesJSON {
    count: number;
    limit: number;
    objects: EnquiryJSON[];
    offset: number;
}
export declare class PaginatedBillingEnquiries implements TDProtoClass<PaginatedBillingEnquiries> {
    #private;
    count: number;
    limit: number;
    objects: Enquiry[];
    offset: number;
    /**
     * Paginated billing enquirires
     * @param count DOCUMENTATION MISSING
     * @param limit DOCUMENTATION MISSING
     * @param objects DOCUMENTATION MISSING
     * @param offset DOCUMENTATION MISSING
     */
    constructor(count: number, limit: number, objects: Enquiry[], offset: number);
    static fromJSON(raw: PaginatedBillingEnquiriesJSON): PaginatedBillingEnquiries;
    mappableFields: readonly ["count", "limit", "objects", "offset"];
    toJSON(): PaginatedBillingEnquiriesJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<PaginatedBillingEnquiriesJSON>;
}
export interface PaginatedChatsJSON {
    count: number;
    limit: number;
    objects: ChatJSON[];
    offset: number;
    contacts?: ContactJSON[];
}
export declare class PaginatedChats implements TDProtoClass<PaginatedChats> {
    #private;
    count: number;
    limit: number;
    objects: Chat[];
    offset: number;
    contacts?: Contact[] | undefined;
    /**
     * Paginated chats
     * @param count DOCUMENTATION MISSING
     * @param limit DOCUMENTATION MISSING
     * @param objects DOCUMENTATION MISSING
     * @param offset DOCUMENTATION MISSING
     * @param contacts DOCUMENTATION MISSING
     */
    constructor(count: number, limit: number, objects: Chat[], offset: number, contacts?: Contact[] | undefined);
    static fromJSON(raw: PaginatedChatsJSON): PaginatedChats;
    mappableFields: readonly ["count", "limit", "objects", "offset", "contacts"];
    toJSON(): PaginatedChatsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<PaginatedChatsJSON>;
}
export interface PaginatedContactsJSON {
    count: number;
    limit: number;
    objects: ContactJSON[];
    offset: number;
}
export declare class PaginatedContacts implements TDProtoClass<PaginatedContacts> {
    #private;
    count: number;
    limit: number;
    objects: Contact[];
    offset: number;
    /**
     * Paginated contacts
     * @param count DOCUMENTATION MISSING
     * @param limit DOCUMENTATION MISSING
     * @param objects DOCUMENTATION MISSING
     * @param offset DOCUMENTATION MISSING
     */
    constructor(count: number, limit: number, objects: Contact[], offset: number);
    static fromJSON(raw: PaginatedContactsJSON): PaginatedContacts;
    mappableFields: readonly ["count", "limit", "objects", "offset"];
    toJSON(): PaginatedContactsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<PaginatedContactsJSON>;
}
export interface PaginatedMeetingsJSON {
    count: number;
    limit: number;
    objects: MeetingJSON[];
    offset: number;
}
export declare class PaginatedMeetings implements TDProtoClass<PaginatedMeetings> {
    #private;
    count: number;
    limit: number;
    objects: Meeting[];
    offset: number;
    /**
     * Paginated meetings
     * @param count DOCUMENTATION MISSING
     * @param limit DOCUMENTATION MISSING
     * @param objects DOCUMENTATION MISSING
     * @param offset DOCUMENTATION MISSING
     */
    constructor(count: number, limit: number, objects: Meeting[], offset: number);
    static fromJSON(raw: PaginatedMeetingsJSON): PaginatedMeetings;
    mappableFields: readonly ["count", "limit", "objects", "offset"];
    toJSON(): PaginatedMeetingsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<PaginatedMeetingsJSON>;
}
export interface PaginatedMessagesJSON {
    count: number;
    limit: number;
    objects: MessageJSON[];
    offset: number;
}
export declare class PaginatedMessages implements TDProtoClass<PaginatedMessages> {
    #private;
    count: number;
    limit: number;
    objects: Message[];
    offset: number;
    /**
     * Paginated messages
     * @param count DOCUMENTATION MISSING
     * @param limit DOCUMENTATION MISSING
     * @param objects DOCUMENTATION MISSING
     * @param offset DOCUMENTATION MISSING
     */
    constructor(count: number, limit: number, objects: Message[], offset: number);
    static fromJSON(raw: PaginatedMessagesJSON): PaginatedMessages;
    mappableFields: readonly ["count", "limit", "objects", "offset"];
    toJSON(): PaginatedMessagesJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<PaginatedMessagesJSON>;
}
export interface PaginatedUploadShortMessagesJSON {
    count: number;
    limit: number;
    objects: UploadShortMessageJSON[];
    offset: number;
}
export declare class PaginatedUploadShortMessages implements TDProtoClass<PaginatedUploadShortMessages> {
    #private;
    count: number;
    limit: number;
    objects: UploadShortMessage[];
    offset: number;
    /**
     * Paginated UploadShortMessage
     * @param count DOCUMENTATION MISSING
     * @param limit DOCUMENTATION MISSING
     * @param objects DOCUMENTATION MISSING
     * @param offset DOCUMENTATION MISSING
     */
    constructor(count: number, limit: number, objects: UploadShortMessage[], offset: number);
    static fromJSON(raw: PaginatedUploadShortMessagesJSON): PaginatedUploadShortMessages;
    mappableFields: readonly ["count", "limit", "objects", "offset"];
    toJSON(): PaginatedUploadShortMessagesJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<PaginatedUploadShortMessagesJSON>;
}
export interface ParserGenerateChatsResponseJSON {
    action_type: ActionType;
    archive_name: string;
    processing_action: string;
}
export declare class ParserGenerateChatsResponse implements TDProtoClass<ParserGenerateChatsResponse> {
    #private;
    actionType: ActionType;
    archiveName: string;
    processingAction: string;
    /**
     * ParserGenerateChatsResponse ..
     * @param actionType ActionType must be generate_chat
     * @param archiveName ArchiveName name of archive
     * @param processingAction ProcessingAction action for background notifications about generation of chats and messages
     */
    constructor(actionType: ActionType, archiveName: string, processingAction: string);
    static fromJSON(raw: ParserGenerateChatsResponseJSON): ParserGenerateChatsResponse;
    mappableFields: readonly ["actionType", "archiveName", "processingAction"];
    toJSON(): ParserGenerateChatsResponseJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ParserGenerateChatsResponseJSON>;
}
export interface ParserGetMappedUsersResponseJSON {
    chat_name: string;
    users: MappedUserJSON[];
}
export declare class ParserGetMappedUsersResponse implements TDProtoClass<ParserGetMappedUsersResponse> {
    #private;
    chatName: string;
    users: MappedUser[];
    /**
     * ParserGetMappedUsersResponse ..
     * @param chatName ChatName ..
     * @param users Users ..
     */
    constructor(chatName: string, users: MappedUser[]);
    static fromJSON(raw: ParserGetMappedUsersResponseJSON): ParserGetMappedUsersResponse;
    mappableFields: readonly ["chatName", "users"];
    toJSON(): ParserGetMappedUsersResponseJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ParserGetMappedUsersResponseJSON>;
}
export interface ParserGetStateResponseJSON {
    archive_name: string;
    has_error: boolean;
    state: ParseState;
    action?: string;
    action_type?: ActionType;
    body?: string;
    message?: string;
    progress?: number;
}
export declare class ParserGetStateResponse implements TDProtoClass<ParserGetStateResponse> {
    #private;
    archiveName: string;
    hasError: boolean;
    state: ParseState;
    action?: string | undefined;
    actionType?: ActionType | undefined;
    body?: string | undefined;
    message?: string | undefined;
    progress?: number | undefined;
    /**
     * ParserGetStateResponse response structure for method GetArchiveState
     * @param archiveName ArchiveName name of archive
     * @param hasError Has error
     * @param state State of import chats
     * @param action Action name
     * @param actionType ActionType. Ex: [archive_unpacking || generate_chats]
     * @param body Localized Body
     * @param message Localized Message
     * @param progress Progress of archive unpacking
     */
    constructor(archiveName: string, hasError: boolean, state: ParseState, action?: string | undefined, actionType?: ActionType | undefined, body?: string | undefined, message?: string | undefined, progress?: number | undefined);
    static fromJSON(raw: ParserGetStateResponseJSON): ParserGetStateResponse;
    mappableFields: readonly ["archiveName", "hasError", "state", "action", "actionType", "body", "message", "progress"];
    toJSON(): ParserGetStateResponseJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ParserGetStateResponseJSON>;
}
export interface ParserMapUsersRequestJSON {
    users: MappedUserJSON[];
}
export declare class ParserMapUsersRequest implements TDProtoClass<ParserMapUsersRequest> {
    #private;
    users: MappedUser[];
    /**
     * ParserMapUsersRequest ..
     * @param users Users ..
     */
    constructor(users: MappedUser[]);
    static fromJSON(raw: ParserMapUsersRequestJSON): ParserMapUsersRequest;
    mappableFields: readonly ["users"];
    toJSON(): ParserMapUsersRequestJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ParserMapUsersRequestJSON>;
}
export interface ParserMapUsersResponseJSON {
    success: boolean;
}
export declare class ParserMapUsersResponse implements TDProtoClass<ParserMapUsersResponse> {
    #private;
    success: boolean;
    /**
     * ParserMapUsersResponse ..
     * @param success Success result
     */
    constructor(success: boolean);
    static fromJSON(raw: ParserMapUsersResponseJSON): ParserMapUsersResponse;
    mappableFields: readonly ["success"];
    toJSON(): ParserMapUsersResponseJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ParserMapUsersResponseJSON>;
}
export interface ParserUploadArchiveResponseJSON {
    action_type: ActionType;
    archive_name: string;
    processing_action: string;
    success: boolean;
}
export declare class ParserUploadArchiveResponse implements TDProtoClass<ParserUploadArchiveResponse> {
    #private;
    actionType: ActionType;
    archiveName: string;
    processingAction: string;
    success: boolean;
    /**
     * ParserUploadArchiveResponse response structure for method UploadArchive
     * @param actionType ActionType must be archive_unpacking
     * @param archiveName ArchiveName name of archive
     * @param processingAction ProcessingAction action for background notifications about archive unpacking
     * @param success Success result
     */
    constructor(actionType: ActionType, archiveName: string, processingAction: string, success: boolean);
    static fromJSON(raw: ParserUploadArchiveResponseJSON): ParserUploadArchiveResponse;
    mappableFields: readonly ["actionType", "archiveName", "processingAction", "success"];
    toJSON(): ParserUploadArchiveResponseJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ParserUploadArchiveResponseJSON>;
}
export interface PaymentJSON {
    confirmation_url: string;
    tariff_uid: string;
    team_uid: string;
    user_uid: string;
}
export declare class Payment implements TDProtoClass<Payment> {
    #private;
    confirmationUrl: string;
    tariffUid: string;
    teamUid: string;
    userUid: string;
    /**
     * MISSING CLASS DOCUMENTATION
     * @param confirmationUrl DOCUMENTATION MISSING
     * @param tariffUid DOCUMENTATION MISSING
     * @param teamUid DOCUMENTATION MISSING
     * @param userUid DOCUMENTATION MISSING
     */
    constructor(confirmationUrl: string, tariffUid: string, teamUid: string, userUid: string);
    static fromJSON(raw: PaymentJSON): Payment;
    mappableFields: readonly ["confirmationUrl", "tariffUid", "teamUid", "userUid"];
    toJSON(): PaymentJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<PaymentJSON>;
}
export interface PdfVersionJSON {
    url: string;
    text_preview?: string;
}
export declare class PdfVersion implements TDProtoClass<PdfVersion> {
    #private;
    url: string;
    textPreview?: string | undefined;
    /**
     * PDF preview of mediafile. Experimental
     * @param url Absolute url
     * @param textPreview First string of text content
     */
    constructor(url: string, textPreview?: string | undefined);
    static fromJSON(raw: PdfVersionJSON): PdfVersion;
    mappableFields: readonly ["url", "textPreview"];
    toJSON(): PdfVersionJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<PdfVersionJSON>;
}
export interface PersonalAccountBillingJSON {
    empty_workplace_count: number;
    free_workplace_count: number;
    is_blocked: boolean;
    is_suspended: boolean;
    occupied_workplace_count: number;
    owner_id: string;
    owner_uuid: string;
    paid_workplace_count: number;
    personal_account_id: string;
    status: PersonalAccountStatus;
    tariff: TariffBillingJSON;
    teams_count: number;
    workplace_count: number;
    block_date?: string;
    next_billing_date?: string;
    owner?: ContactJSON;
    suspend_date?: string;
}
export declare class PersonalAccountBilling implements TDProtoClass<PersonalAccountBilling> {
    #private;
    emptyWorkplaceCount: number;
    freeWorkplaceCount: number;
    isBlocked: boolean;
    isSuspended: boolean;
    occupiedWorkplaceCount: number;
    ownerId: string;
    ownerUuid: string;
    paidWorkplaceCount: number;
    personalAccountId: string;
    status: PersonalAccountStatus;
    tariff: TariffBilling;
    teamsCount: number;
    workplaceCount: number;
    blockDate?: string | undefined;
    nextBillingDate?: string | undefined;
    owner?: Contact | undefined;
    suspendDate?: string | undefined;
    /**
     * PersonalAccountBilling struct of billing api
     * @param emptyWorkplaceCount Count of empty workplaces on personal account
     * @param freeWorkplaceCount Count of free workplaces on personal account
     * @param isBlocked Is the account blocked
     * @param isSuspended Is the account suspended
     * @param occupiedWorkplaceCount Count of occupied workplaces on personal account
     * @param ownerId ID User who owns this personal account
     * @param ownerUuid UUID of User who owns this personal account
     * @param paidWorkplaceCount Count of paid workplaces on personal account
     * @param personalAccountId PersonalAccountBilling ID
     * @param status Status of personal account
     * @param tariff Tariff on this personal account
     * @param teamsCount Count of teams on personal account
     * @param workplaceCount Count of workplaces on personal account
     * @param blockDate Account blocking date
     * @param nextBillingDate Date of next debiting funds
     * @param owner Owner of this personal account
     * @param suspendDate Account suspending date
     */
    constructor(emptyWorkplaceCount: number, freeWorkplaceCount: number, isBlocked: boolean, isSuspended: boolean, occupiedWorkplaceCount: number, ownerId: string, ownerUuid: string, paidWorkplaceCount: number, personalAccountId: string, status: PersonalAccountStatus, tariff: TariffBilling, teamsCount: number, workplaceCount: number, blockDate?: string | undefined, nextBillingDate?: string | undefined, owner?: Contact | undefined, suspendDate?: string | undefined);
    static fromJSON(raw: PersonalAccountBillingJSON): PersonalAccountBilling;
    mappableFields: readonly ["emptyWorkplaceCount", "freeWorkplaceCount", "isBlocked", "isSuspended", "occupiedWorkplaceCount", "ownerId", "ownerUuid", "paidWorkplaceCount", "personalAccountId", "status", "tariff", "teamsCount", "workplaceCount", "blockDate", "nextBillingDate", "owner", "suspendDate"];
    toJSON(): PersonalAccountBillingJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<PersonalAccountBillingJSON>;
}
export interface PublicStatusJSON {
    duration_label: string;
    duration_seconds: number;
    emoji: string;
    status_en: string;
    status_ru: string;
    type: PublicStatusType;
}
export declare class PublicStatus implements TDProtoClass<PublicStatus> {
    #private;
    durationLabel: string;
    durationSeconds: number;
    emoji: string;
    statusEn: string;
    statusRu: string;
    type: PublicStatusType;
    /**
     * Public Status
     * @param durationLabel Duration Label
     * @param durationSeconds Duration in seconds
     * @param emoji Display emoji
     * @param statusEn Status Label English
     * @param statusRu Status Label Russian
     * @param type Public Status Type
     */
    constructor(durationLabel: string, durationSeconds: number, emoji: string, statusEn: string, statusRu: string, type: PublicStatusType);
    static fromJSON(raw: PublicStatusJSON): PublicStatus;
    mappableFields: readonly ["durationLabel", "durationSeconds", "emoji", "statusEn", "statusRu", "type"];
    toJSON(): PublicStatusJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<PublicStatusJSON>;
}
export interface PushDeviceJSON {
    allowed_notifications: boolean;
    data_badges: boolean;
    data_pushes: boolean;
    device_id: string;
    name: string;
    notification_token: string;
    type: string;
    voip_notification_token: string;
}
export declare class PushDevice implements TDProtoClass<PushDevice> {
    #private;
    allowedNotifications: boolean;
    dataBadges: boolean;
    dataPushes: boolean;
    deviceId: string;
    name: string;
    notificationToken: string;
    type: string;
    voipNotificationToken: string;
    /**
     * Push device info
     * @param allowedNotifications deprecated
     * @param dataBadges Send badge value as data. Experimental
     * @param dataPushes Send silently data pushes that must be fully processed by app. Must be true for modern mobile clients
     * @param deviceId Device id generated by client library
     * @param name Readable device name
     * @param notificationToken Notification token
     * @param type Type: android, ios, web, safari
     * @param voipNotificationToken Notification token for VOIP (iOS only)
     */
    constructor(allowedNotifications: boolean, dataBadges: boolean, dataPushes: boolean, deviceId: string, name: string, notificationToken: string, type: string, voipNotificationToken: string);
    static fromJSON(raw: PushDeviceJSON): PushDevice;
    mappableFields: readonly ["allowedNotifications", "dataBadges", "dataPushes", "deviceId", "name", "notificationToken", "type", "voipNotificationToken"];
    toJSON(): PushDeviceJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<PushDeviceJSON>;
}
export interface ReactionJSON {
    name: string;
}
export declare class Reaction implements TDProtoClass<Reaction> {
    #private;
    name: string;
    /**
     * Emoji reaction
     * @param name Unicode symbol
     */
    constructor(name: string);
    static fromJSON(raw: ReactionJSON): Reaction;
    mappableFields: readonly ["name"];
    toJSON(): ReactionJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ReactionJSON>;
}
export interface ReceivedMessageJSON {
    chat: JID;
    message_id: string;
    received: boolean;
    _debug?: string;
    num_received?: number;
}
export declare class ReceivedMessage implements TDProtoClass<ReceivedMessage> {
    #private;
    chat: JID;
    messageId: string;
    received: boolean;
    _debug?: string | undefined;
    numReceived?: number | undefined;
    /**
     * Message receiving status
     * @param chat Chat or contact id
     * @param messageId Message id
     * @param received Is received
     * @param _debug Debug message, if any
     * @param numReceived Number of contacts received this message. Experimental
     */
    constructor(chat: JID, messageId: string, received: boolean, _debug?: string | undefined, numReceived?: number | undefined);
    static fromJSON(raw: ReceivedMessageJSON): ReceivedMessage;
    mappableFields: readonly ["chat", "messageId", "received", "_debug", "numReceived"];
    toJSON(): ReceivedMessageJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ReceivedMessageJSON>;
}
export interface RemindJSON {
    chat: JID;
    fire_at: ISODateTimeString;
    uid: string;
    comment?: string;
}
export declare class Remind implements TDProtoClass<Remind> {
    #private;
    chat: JID;
    fireAt: ISODateTimeString;
    uid: string;
    comment?: string | undefined;
    /**
     * Remind
     * @param chat Chat id
     * @param fireAt Activation time, iso
     * @param uid Remind id
     * @param comment Comment, if any
     */
    constructor(chat: JID, fireAt: ISODateTimeString, uid: string, comment?: string | undefined);
    static fromJSON(raw: RemindJSON): Remind;
    mappableFields: readonly ["chat", "fireAt", "uid", "comment"];
    toJSON(): RemindJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<RemindJSON>;
}
export interface RespJSON {
    ok: boolean;
    _time?: string;
    details?: Record<string, string>;
    error?: Err;
    markup?: MarkupEntityJSON[];
    reason?: string;
    result?: any;
}
export declare class Resp implements TDProtoClass<Resp> {
    #private;
    ok: boolean;
    _time?: string | undefined;
    details?: Record<string, string> | undefined;
    error?: string | undefined;
    markup?: MarkupEntity[] | undefined;
    reason?: string | undefined;
    result?: any;
    /**
     * Server response
     * @param ok Request status
     * @param _time Server side work time
     * @param details Error (only if ok is false and Error is 'InvalidData')
     * @param error Error (only if ok is false)
     * @param markup Reason markup (only if ok is false and Error is `AccessDenied`)
     * @param reason Reason (only if ok is false and Error is `AccessDenied`)
     * @param result Result only if ok is true)
     */
    constructor(ok: boolean, _time?: string | undefined, details?: Record<string, string> | undefined, error?: string | undefined, markup?: MarkupEntity[] | undefined, reason?: string | undefined, result?: any);
    static fromJSON(raw: RespJSON): Resp;
    mappableFields: readonly ["ok", "_time", "details", "error", "markup", "reason", "result"];
    toJSON(): RespJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<RespJSON>;
}
export interface ResponsiblePersonJSON {
    display_name: string;
    email: string;
    first_name: string;
    id: string;
    last_name: string;
    phone: string;
    held_post?: string;
    patronymic?: string;
}
export declare class ResponsiblePerson implements TDProtoClass<ResponsiblePerson> {
    #private;
    displayName: string;
    email: string;
    firstName: string;
    id: string;
    lastName: string;
    phone: string;
    heldPost?: string | undefined;
    patronymic?: string | undefined;
    /**
     * MISSING CLASS DOCUMENTATION
     * @param displayName DOCUMENTATION MISSING
     * @param email DOCUMENTATION MISSING
     * @param firstName DOCUMENTATION MISSING
     * @param id DOCUMENTATION MISSING
     * @param lastName DOCUMENTATION MISSING
     * @param phone DOCUMENTATION MISSING
     * @param heldPost DOCUMENTATION MISSING
     * @param patronymic DOCUMENTATION MISSING
     */
    constructor(displayName: string, email: string, firstName: string, id: string, lastName: string, phone: string, heldPost?: string | undefined, patronymic?: string | undefined);
    static fromJSON(raw: ResponsiblePersonJSON): ResponsiblePerson;
    mappableFields: readonly ["displayName", "email", "firstName", "id", "lastName", "phone", "heldPost", "patronymic"];
    toJSON(): ResponsiblePersonJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ResponsiblePersonJSON>;
}
export interface ResponsiblePersonCreateRequestJSON {
    email: string;
    first_name: string;
    last_name: string;
    phone: string;
    held_post?: string;
    patronymic?: string;
}
export declare class ResponsiblePersonCreateRequest implements TDProtoClass<ResponsiblePersonCreateRequest> {
    #private;
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    heldPost?: string | undefined;
    patronymic?: string | undefined;
    /**
     * MISSING CLASS DOCUMENTATION
     * @param email DOCUMENTATION MISSING
     * @param firstName DOCUMENTATION MISSING
     * @param lastName DOCUMENTATION MISSING
     * @param phone DOCUMENTATION MISSING
     * @param heldPost DOCUMENTATION MISSING
     * @param patronymic DOCUMENTATION MISSING
     */
    constructor(email: string, firstName: string, lastName: string, phone: string, heldPost?: string | undefined, patronymic?: string | undefined);
    static fromJSON(raw: ResponsiblePersonCreateRequestJSON): ResponsiblePersonCreateRequest;
    mappableFields: readonly ["email", "firstName", "lastName", "phone", "heldPost", "patronymic"];
    toJSON(): ResponsiblePersonCreateRequestJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ResponsiblePersonCreateRequestJSON>;
}
export interface ResponsiblePersonCreateResponseJSON {
    display_name: string;
    email: string;
    first_name: string;
    id: string;
    last_name: string;
    phone: string;
    held_post?: string;
    patronymic?: string;
}
export declare class ResponsiblePersonCreateResponse implements TDProtoClass<ResponsiblePersonCreateResponse> {
    #private;
    displayName: string;
    email: string;
    firstName: string;
    id: string;
    lastName: string;
    phone: string;
    heldPost?: string | undefined;
    patronymic?: string | undefined;
    /**
     * MISSING CLASS DOCUMENTATION
     * @param displayName DOCUMENTATION MISSING
     * @param email DOCUMENTATION MISSING
     * @param firstName DOCUMENTATION MISSING
     * @param id DOCUMENTATION MISSING
     * @param lastName DOCUMENTATION MISSING
     * @param phone DOCUMENTATION MISSING
     * @param heldPost DOCUMENTATION MISSING
     * @param patronymic DOCUMENTATION MISSING
     */
    constructor(displayName: string, email: string, firstName: string, id: string, lastName: string, phone: string, heldPost?: string | undefined, patronymic?: string | undefined);
    static fromJSON(raw: ResponsiblePersonCreateResponseJSON): ResponsiblePersonCreateResponse;
    mappableFields: readonly ["displayName", "email", "firstName", "id", "lastName", "phone", "heldPost", "patronymic"];
    toJSON(): ResponsiblePersonCreateResponseJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ResponsiblePersonCreateResponseJSON>;
}
export interface ResponsiblePersonDeleteRequestJSON {
    id: string;
}
export declare class ResponsiblePersonDeleteRequest implements TDProtoClass<ResponsiblePersonDeleteRequest> {
    #private;
    id: string;
    /**
     * MISSING CLASS DOCUMENTATION
     * @param id DOCUMENTATION MISSING
     */
    constructor(id: string);
    static fromJSON(raw: ResponsiblePersonDeleteRequestJSON): ResponsiblePersonDeleteRequest;
    mappableFields: readonly ["id"];
    toJSON(): ResponsiblePersonDeleteRequestJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ResponsiblePersonDeleteRequestJSON>;
}
export interface ResponsiblePersonGetListRequestJSON {
    limit?: number;
    offset?: number;
}
export declare class ResponsiblePersonGetListRequest implements TDProtoClass<ResponsiblePersonGetListRequest> {
    #private;
    limit?: number | undefined;
    offset?: number | undefined;
    /**
     * MISSING CLASS DOCUMENTATION
     * @param limit DOCUMENTATION MISSING
     * @param offset DOCUMENTATION MISSING
     */
    constructor(limit?: number | undefined, offset?: number | undefined);
    static fromJSON(raw: ResponsiblePersonGetListRequestJSON): ResponsiblePersonGetListRequest;
    mappableFields: readonly ["limit", "offset"];
    toJSON(): ResponsiblePersonGetListRequestJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ResponsiblePersonGetListRequestJSON>;
}
export interface ResponsiblePersonGetRequestJSON {
    responsible_person_ids: string;
}
export declare class ResponsiblePersonGetRequest implements TDProtoClass<ResponsiblePersonGetRequest> {
    #private;
    responsiblePersonIds: string;
    /**
     * MISSING CLASS DOCUMENTATION
     * @param responsiblePersonIds DOCUMENTATION MISSING
     */
    constructor(responsiblePersonIds: string);
    static fromJSON(raw: ResponsiblePersonGetRequestJSON): ResponsiblePersonGetRequest;
    mappableFields: readonly ["responsiblePersonIds"];
    toJSON(): ResponsiblePersonGetRequestJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ResponsiblePersonGetRequestJSON>;
}
export interface ResponsiblePersonGetResponseJSON {
    responsible_person_list: ResponsiblePersonJSON[];
}
export declare class ResponsiblePersonGetResponse implements TDProtoClass<ResponsiblePersonGetResponse> {
    #private;
    responsiblePersonList: ResponsiblePerson[];
    /**
     * MISSING CLASS DOCUMENTATION
     * @param responsiblePersonList DOCUMENTATION MISSING
     */
    constructor(responsiblePersonList: ResponsiblePerson[]);
    static fromJSON(raw: ResponsiblePersonGetResponseJSON): ResponsiblePersonGetResponse;
    mappableFields: readonly ["responsiblePersonList"];
    toJSON(): ResponsiblePersonGetResponseJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ResponsiblePersonGetResponseJSON>;
}
export interface ResponsiblePersonUpdateRequestJSON {
    display_name: string;
    email: string;
    first_name: string;
    id: string;
    last_name: string;
    phone: string;
    held_post?: string;
    patronymic?: string;
}
export declare class ResponsiblePersonUpdateRequest implements TDProtoClass<ResponsiblePersonUpdateRequest> {
    #private;
    displayName: string;
    email: string;
    firstName: string;
    id: string;
    lastName: string;
    phone: string;
    heldPost?: string | undefined;
    patronymic?: string | undefined;
    /**
     * MISSING CLASS DOCUMENTATION
     * @param displayName DOCUMENTATION MISSING
     * @param email DOCUMENTATION MISSING
     * @param firstName DOCUMENTATION MISSING
     * @param id DOCUMENTATION MISSING
     * @param lastName DOCUMENTATION MISSING
     * @param phone DOCUMENTATION MISSING
     * @param heldPost DOCUMENTATION MISSING
     * @param patronymic DOCUMENTATION MISSING
     */
    constructor(displayName: string, email: string, firstName: string, id: string, lastName: string, phone: string, heldPost?: string | undefined, patronymic?: string | undefined);
    static fromJSON(raw: ResponsiblePersonUpdateRequestJSON): ResponsiblePersonUpdateRequest;
    mappableFields: readonly ["displayName", "email", "firstName", "id", "lastName", "phone", "heldPost", "patronymic"];
    toJSON(): ResponsiblePersonUpdateRequestJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ResponsiblePersonUpdateRequestJSON>;
}
export interface ResponsiblePersonUpdateResponseJSON {
    display_name: string;
    email: string;
    first_name: string;
    id: string;
    last_name: string;
    phone: string;
    held_post?: string;
    patronymic?: string;
}
export declare class ResponsiblePersonUpdateResponse implements TDProtoClass<ResponsiblePersonUpdateResponse> {
    #private;
    displayName: string;
    email: string;
    firstName: string;
    id: string;
    lastName: string;
    phone: string;
    heldPost?: string | undefined;
    patronymic?: string | undefined;
    /**
     * MISSING CLASS DOCUMENTATION
     * @param displayName DOCUMENTATION MISSING
     * @param email DOCUMENTATION MISSING
     * @param firstName DOCUMENTATION MISSING
     * @param id DOCUMENTATION MISSING
     * @param lastName DOCUMENTATION MISSING
     * @param phone DOCUMENTATION MISSING
     * @param heldPost DOCUMENTATION MISSING
     * @param patronymic DOCUMENTATION MISSING
     */
    constructor(displayName: string, email: string, firstName: string, id: string, lastName: string, phone: string, heldPost?: string | undefined, patronymic?: string | undefined);
    static fromJSON(raw: ResponsiblePersonUpdateResponseJSON): ResponsiblePersonUpdateResponse;
    mappableFields: readonly ["displayName", "email", "firstName", "id", "lastName", "phone", "heldPost", "patronymic"];
    toJSON(): ResponsiblePersonUpdateResponseJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ResponsiblePersonUpdateResponseJSON>;
}
export interface SectionJSON {
    gentime: number;
    name: string;
    sort_ordering: number;
    uid: string;
    description?: string;
    is_archive?: boolean;
}
export declare class Section implements TDProtoClass<Section> {
    #private;
    gentime: number;
    name: string;
    sortOrdering: number;
    uid: string;
    description?: string | undefined;
    isArchive?: boolean | undefined;
    /**
     * Task project or contact section
     * @param gentime Object version
     * @param name Name
     * @param sortOrdering Sort ordering
     * @param uid Section uid
     * @param description Description, if any
     * @param isArchive Is deleted
     */
    constructor(gentime: number, name: string, sortOrdering: number, uid: string, description?: string | undefined, isArchive?: boolean | undefined);
    static fromJSON(raw: SectionJSON): Section;
    mappableFields: readonly ["gentime", "name", "sortOrdering", "uid", "description", "isArchive"];
    toJSON(): SectionJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<SectionJSON>;
}
export interface ServerAccountUpdatedJSON {
    event: string;
    params: ServerAccountUpdatedParamsJSON;
    confirm_id?: string;
}
export declare class ServerAccountUpdated implements TDProtoClass<ServerAccountUpdated> {
    #private;
    event: string;
    params: ServerAccountUpdatedParams;
    confirmId?: string | undefined;
    /**
     * Personal Account created or updated
     * @param event DOCUMENTATION MISSING
     * @param params DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, params: ServerAccountUpdatedParams, confirmId?: string | undefined);
    static fromJSON(raw: ServerAccountUpdatedJSON): ServerAccountUpdated;
    mappableFields: readonly ["event", "params", "confirmId"];
    toJSON(): ServerAccountUpdatedJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerAccountUpdatedJSON>;
}
export interface ServerAccountUpdatedParamsJSON {
    account: PersonalAccountBillingJSON;
}
export declare class ServerAccountUpdatedParams implements TDProtoClass<ServerAccountUpdatedParams> {
    #private;
    account: PersonalAccountBilling;
    /**
     * Params of the server.account.updated event
     * @param account Personal Account info
     */
    constructor(account: PersonalAccountBilling);
    static fromJSON(raw: ServerAccountUpdatedParamsJSON): ServerAccountUpdatedParams;
    mappableFields: readonly ["account"];
    toJSON(): ServerAccountUpdatedParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerAccountUpdatedParamsJSON>;
}
export interface ServerCallAnswerJSON {
    event: string;
    params: ServerCallAnswerParamsJSON;
    confirm_id?: string;
}
export declare class ServerCallAnswer implements TDProtoClass<ServerCallAnswer> {
    #private;
    event: string;
    params: ServerCallAnswerParams;
    confirmId?: string | undefined;
    /**
     * Call parameters (deprecated: use `ServerCallSdp`)
     * @param event DOCUMENTATION MISSING
     * @param params DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, params: ServerCallAnswerParams, confirmId?: string | undefined);
    static fromJSON(raw: ServerCallAnswerJSON): ServerCallAnswer;
    mappableFields: readonly ["event", "params", "confirmId"];
    toJSON(): ServerCallAnswerJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerCallAnswerJSON>;
}
export interface ServerCallAnswerCandidateJSON {
    candidate: string;
    sdpMLineIndex: number;
}
export declare class ServerCallAnswerCandidate implements TDProtoClass<ServerCallAnswerCandidate> {
    #private;
    candidate: string;
    sdpMLineIndex: number;
    /**
     * ICE candidate for call answer
     * @param candidate DOCUMENTATION MISSING
     * @param sdpMLineIndex DOCUMENTATION MISSING
     */
    constructor(candidate: string, sdpMLineIndex: number);
    static fromJSON(raw: ServerCallAnswerCandidateJSON): ServerCallAnswerCandidate;
    mappableFields: readonly ["candidate", "sdpMLineIndex"];
    toJSON(): ServerCallAnswerCandidateJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerCallAnswerCandidateJSON>;
}
export interface ServerCallAnswerParamsJSON {
    jid: JID;
    jsep: JSEPJSON;
    uid: string;
    candidates?: ServerCallAnswerCandidateJSON[];
    onliners?: CallOnlinerJSON[];
}
export declare class ServerCallAnswerParams implements TDProtoClass<ServerCallAnswerParams> {
    #private;
    jid: JID;
    jsep: JSEP;
    uid: string;
    candidates?: ServerCallAnswerCandidate[] | undefined;
    onliners?: CallOnliner[] | undefined;
    /**
     * Params of the server.call.answer event
     * @param jid Chat or contact id
     * @param jsep SDP data
     * @param uid Call id
     * @param candidates List of ICE candidates (when trickle = false)
     * @param onliners Current call participants
     */
    constructor(jid: JID, jsep: JSEP, uid: string, candidates?: ServerCallAnswerCandidate[] | undefined, onliners?: CallOnliner[] | undefined);
    static fromJSON(raw: ServerCallAnswerParamsJSON): ServerCallAnswerParams;
    mappableFields: readonly ["jid", "jsep", "uid", "candidates", "onliners"];
    toJSON(): ServerCallAnswerParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerCallAnswerParamsJSON>;
}
export interface ServerCallBuzzJSON {
    event: string;
    params: ServerCallBuzzParamsJSON;
    confirm_id?: string;
}
export declare class ServerCallBuzz implements TDProtoClass<ServerCallBuzz> {
    #private;
    event: string;
    params: ServerCallBuzzParams;
    confirmId?: string | undefined;
    /**
     * Call buzzing
     * @param event DOCUMENTATION MISSING
     * @param params DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, params: ServerCallBuzzParams, confirmId?: string | undefined);
    static fromJSON(raw: ServerCallBuzzJSON): ServerCallBuzz;
    mappableFields: readonly ["event", "params", "confirmId"];
    toJSON(): ServerCallBuzzJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerCallBuzzJSON>;
}
export interface ServerCallBuzzParamsJSON {
    actor: ContactShortJSON;
    buzz_timeout: number;
    call_type: CallType;
    chat: ChatShortJSON;
    display_name: string;
    icons: IconDataJSON;
    jid: JID;
    team: string;
    teaminfo: TeamShortJSON;
    uid: string;
}
export declare class ServerCallBuzzParams implements TDProtoClass<ServerCallBuzzParams> {
    #private;
    actor: ContactShort;
    buzzTimeout: number;
    callType: CallType;
    chat: ChatShort;
    displayName: string;
    icons: IconData;
    jid: JID;
    team: string;
    teaminfo: TeamShort;
    uid: string;
    /**
     * Params of the server.call.buzz event
     * @param actor Short call creator information
     * @param buzzTimeout Number of seconds for stop buzzing
     * @param callType CallType is a type of call("audio" - audio room, "video" - video room)
     * @param chat Short chat information
     * @param displayName Chat title
     * @param icons Chat icons
     * @param jid Chat or contact id
     * @param team Deprecated
     * @param teaminfo Short team information
     * @param uid Call id
     */
    constructor(actor: ContactShort, buzzTimeout: number, callType: CallType, chat: ChatShort, displayName: string, icons: IconData, jid: JID, team: string, teaminfo: TeamShort, uid: string);
    static fromJSON(raw: ServerCallBuzzParamsJSON): ServerCallBuzzParams;
    mappableFields: readonly ["actor", "buzzTimeout", "callType", "chat", "displayName", "icons", "jid", "team", "teaminfo", "uid"];
    toJSON(): ServerCallBuzzParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerCallBuzzParamsJSON>;
}
export interface ServerCallBuzzcancelJSON {
    event: string;
    params: ServerCallBuzzcancelParamsJSON;
    confirm_id?: string;
}
export declare class ServerCallBuzzcancel implements TDProtoClass<ServerCallBuzzcancel> {
    #private;
    event: string;
    params: ServerCallBuzzcancelParams;
    confirmId?: string | undefined;
    /**
     * Call cancelled on buzzing
     * @param event DOCUMENTATION MISSING
     * @param params DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, params: ServerCallBuzzcancelParams, confirmId?: string | undefined);
    static fromJSON(raw: ServerCallBuzzcancelJSON): ServerCallBuzzcancel;
    mappableFields: readonly ["event", "params", "confirmId"];
    toJSON(): ServerCallBuzzcancelJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerCallBuzzcancelJSON>;
}
export interface ServerCallBuzzcancelParamsJSON {
    jid: JID;
    team: string;
    uid: string;
}
export declare class ServerCallBuzzcancelParams implements TDProtoClass<ServerCallBuzzcancelParams> {
    #private;
    jid: JID;
    team: string;
    uid: string;
    /**
     * Params of the server.call.buzzcancel event
     * @param jid Chat or contact id
     * @param team Team id
     * @param uid Call id
     */
    constructor(jid: JID, team: string, uid: string);
    static fromJSON(raw: ServerCallBuzzcancelParamsJSON): ServerCallBuzzcancelParams;
    mappableFields: readonly ["jid", "team", "uid"];
    toJSON(): ServerCallBuzzcancelParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerCallBuzzcancelParamsJSON>;
}
export interface ServerCallCheckFingerprintJSON {
    event: string;
    params: ServerCallCheckFingerprintParamsJSON;
    confirm_id?: string;
}
export declare class ServerCallCheckFingerprint implements TDProtoClass<ServerCallCheckFingerprint> {
    #private;
    event: string;
    params: ServerCallCheckFingerprintParams;
    confirmId?: string | undefined;
    /**
     * Experimental function
     * @param event DOCUMENTATION MISSING
     * @param params DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, params: ServerCallCheckFingerprintParams, confirmId?: string | undefined);
    static fromJSON(raw: ServerCallCheckFingerprintJSON): ServerCallCheckFingerprint;
    mappableFields: readonly ["event", "params", "confirmId"];
    toJSON(): ServerCallCheckFingerprintJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerCallCheckFingerprintJSON>;
}
export interface ServerCallCheckFingerprintParamsJSON {
    fingerprint: string;
}
export declare class ServerCallCheckFingerprintParams implements TDProtoClass<ServerCallCheckFingerprintParams> {
    #private;
    fingerprint: string;
    /**
     * Params of the server.call.checkfingerprint event
     * @param fingerprint DOCUMENTATION MISSING
     */
    constructor(fingerprint: string);
    static fromJSON(raw: ServerCallCheckFingerprintParamsJSON): ServerCallCheckFingerprintParams;
    mappableFields: readonly ["fingerprint"];
    toJSON(): ServerCallCheckFingerprintParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerCallCheckFingerprintParamsJSON>;
}
export interface ServerCallLeaveJSON {
    event: string;
    params: ServerCallLeaveParamsJSON;
    confirm_id?: string;
}
export declare class ServerCallLeave implements TDProtoClass<ServerCallLeave> {
    #private;
    event: string;
    params: ServerCallLeaveParams;
    confirmId?: string | undefined;
    /**
     * Participant leave a call
     * @param event DOCUMENTATION MISSING
     * @param params DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, params: ServerCallLeaveParams, confirmId?: string | undefined);
    static fromJSON(raw: ServerCallLeaveJSON): ServerCallLeave;
    mappableFields: readonly ["event", "params", "confirmId"];
    toJSON(): ServerCallLeaveJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerCallLeaveJSON>;
}
export interface ServerCallLeaveParamsJSON {
    jid: JID;
    uid: string;
}
export declare class ServerCallLeaveParams implements TDProtoClass<ServerCallLeaveParams> {
    #private;
    jid: JID;
    uid: string;
    /**
     * Params of the server.call.leave event
     * @param jid Chat or contact id
     * @param uid Call uid
     */
    constructor(jid: JID, uid: string);
    static fromJSON(raw: ServerCallLeaveParamsJSON): ServerCallLeaveParams;
    mappableFields: readonly ["jid", "uid"];
    toJSON(): ServerCallLeaveParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerCallLeaveParamsJSON>;
}
export interface ServerCallMuteallJSON {
    event: string;
    params: ServerCallMuteallParamsJSON;
    confirm_id?: string;
}
export declare class ServerCallMuteall implements TDProtoClass<ServerCallMuteall> {
    #private;
    event: string;
    params: ServerCallMuteallParams;
    confirmId?: string | undefined;
    /**
     * All participants in call muted
     * @param event DOCUMENTATION MISSING
     * @param params DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, params: ServerCallMuteallParams, confirmId?: string | undefined);
    static fromJSON(raw: ServerCallMuteallJSON): ServerCallMuteall;
    mappableFields: readonly ["event", "params", "confirmId"];
    toJSON(): ServerCallMuteallJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerCallMuteallJSON>;
}
export interface ServerCallMuteallParamsJSON {
    jid: JID;
    muted: boolean;
}
export declare class ServerCallMuteallParams implements TDProtoClass<ServerCallMuteallParams> {
    #private;
    jid: JID;
    muted: boolean;
    /**
     * Params of the server.call.muteall event
     * @param jid Chat or contact id
     * @param muted Mute state
     */
    constructor(jid: JID, muted: boolean);
    static fromJSON(raw: ServerCallMuteallParamsJSON): ServerCallMuteallParams;
    mappableFields: readonly ["jid", "muted"];
    toJSON(): ServerCallMuteallParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerCallMuteallParamsJSON>;
}
export interface ServerCallRejectJSON {
    event: string;
    params: ServerCallRejectParamsJSON;
    confirm_id?: string;
}
export declare class ServerCallReject implements TDProtoClass<ServerCallReject> {
    #private;
    event: string;
    params: ServerCallRejectParams;
    confirmId?: string | undefined;
    /**
     * Call rejected
     * @param event DOCUMENTATION MISSING
     * @param params DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, params: ServerCallRejectParams, confirmId?: string | undefined);
    static fromJSON(raw: ServerCallRejectJSON): ServerCallReject;
    mappableFields: readonly ["event", "params", "confirmId"];
    toJSON(): ServerCallRejectJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerCallRejectJSON>;
}
export interface ServerCallRejectParamsJSON {
    jid: JID;
    reason: string;
    uid: string;
}
export declare class ServerCallRejectParams implements TDProtoClass<ServerCallRejectParams> {
    #private;
    jid: JID;
    reason: string;
    uid: string;
    /**
     * Params of the server.call.reject event
     * @param jid Chat or contact id
     * @param reason Reason, if any
     * @param uid Call id
     */
    constructor(jid: JID, reason: string, uid: string);
    static fromJSON(raw: ServerCallRejectParamsJSON): ServerCallRejectParams;
    mappableFields: readonly ["jid", "reason", "uid"];
    toJSON(): ServerCallRejectParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerCallRejectParamsJSON>;
}
export interface ServerCallRestartJSON {
    event: string;
    params: ServerCallRestartParamsJSON;
    confirm_id?: string;
}
export declare class ServerCallRestart implements TDProtoClass<ServerCallRestart> {
    #private;
    event: string;
    params: ServerCallRestartParams;
    confirmId?: string | undefined;
    /**
     * Call restarted
     * @param event DOCUMENTATION MISSING
     * @param params DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, params: ServerCallRestartParams, confirmId?: string | undefined);
    static fromJSON(raw: ServerCallRestartJSON): ServerCallRestart;
    mappableFields: readonly ["event", "params", "confirmId"];
    toJSON(): ServerCallRestartJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerCallRestartJSON>;
}
export interface ServerCallRestartParamsJSON {
    jid: JID;
    team: string;
    uid: string;
}
export declare class ServerCallRestartParams implements TDProtoClass<ServerCallRestartParams> {
    #private;
    jid: JID;
    team: string;
    uid: string;
    /**
     * Params of the server.call.restart event
     * @param jid Chat or contact id
     * @param team Team id
     * @param uid Call id
     */
    constructor(jid: JID, team: string, uid: string);
    static fromJSON(raw: ServerCallRestartParamsJSON): ServerCallRestartParams;
    mappableFields: readonly ["jid", "team", "uid"];
    toJSON(): ServerCallRestartParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerCallRestartParamsJSON>;
}
export interface ServerCallScreenShareJSON {
    event: string;
    params: ServerCallScreenShareParamsJSON;
    confirm_id?: string;
}
export declare class ServerCallScreenShare implements TDProtoClass<ServerCallScreenShare> {
    #private;
    event: string;
    params: ServerCallScreenShareParams;
    confirmId?: string | undefined;
    /**
     * ServerCallScreenShare screen share event
     * @param event DOCUMENTATION MISSING
     * @param params DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, params: ServerCallScreenShareParams, confirmId?: string | undefined);
    static fromJSON(raw: ServerCallScreenShareJSON): ServerCallScreenShare;
    mappableFields: readonly ["event", "params", "confirmId"];
    toJSON(): ServerCallScreenShareJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerCallScreenShareJSON>;
}
export interface ServerCallScreenShareParamsJSON {
    actor_jid: JID;
    call_jid: JID;
    screenshare_enabled: boolean;
}
export declare class ServerCallScreenShareParams implements TDProtoClass<ServerCallScreenShareParams> {
    #private;
    actorJid: JID;
    callJid: JID;
    screenshareEnabled: boolean;
    /**
     * Params of the server.call.screenshare event
     * @param actorJid ActorJid - contact id which enable/disable screen sharing
     * @param callJid CallJid - Chat or contact id
     * @param screenshareEnabled ScreenShareEnabled enabled or disabled screen share
     */
    constructor(actorJid: JID, callJid: JID, screenshareEnabled: boolean);
    static fromJSON(raw: ServerCallScreenShareParamsJSON): ServerCallScreenShareParams;
    mappableFields: readonly ["actorJid", "callJid", "screenshareEnabled"];
    toJSON(): ServerCallScreenShareParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerCallScreenShareParamsJSON>;
}
export interface ServerCallSdpJSON {
    event: string;
    params: ServerCallSdpParamsJSON;
    confirm_id?: string;
}
export declare class ServerCallSdp implements TDProtoClass<ServerCallSdp> {
    #private;
    event: string;
    params: ServerCallSdpParams;
    confirmId?: string | undefined;
    /**
     * For exchange Session Description with client when server's Local Session Description is changed
     * @param event DOCUMENTATION MISSING
     * @param params DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, params: ServerCallSdpParams, confirmId?: string | undefined);
    static fromJSON(raw: ServerCallSdpJSON): ServerCallSdp;
    mappableFields: readonly ["event", "params", "confirmId"];
    toJSON(): ServerCallSdpJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerCallSdpJSON>;
}
export interface ServerCallSdpParamsJSON {
    jid: JID;
    jids: JID[];
    jsep: JSEPJSON;
    uid: string;
}
export declare class ServerCallSdpParams implements TDProtoClass<ServerCallSdpParams> {
    #private;
    jid: JID;
    jids: JID[];
    jsep: JSEP;
    uid: string;
    /**
     * Params of the server.call.sdp event
     * @param jid Chat or contact id in singlesteam mode
     * @param jids Jids for tracks in multistream mode
     * @param jsep SDP data
     * @param uid Call id
     */
    constructor(jid: JID, jids: JID[], jsep: JSEP, uid: string);
    static fromJSON(raw: ServerCallSdpParamsJSON): ServerCallSdpParams;
    mappableFields: readonly ["jid", "jids", "jsep", "uid"];
    toJSON(): ServerCallSdpParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerCallSdpParamsJSON>;
}
export interface ServerCallSoundJSON {
    event: string;
    params: ServerCallSoundParamsJSON;
    confirm_id?: string;
}
export declare class ServerCallSound implements TDProtoClass<ServerCallSound> {
    #private;
    event: string;
    params: ServerCallSoundParams;
    confirmId?: string | undefined;
    /**
     * Mute/unmute call participant
     * @param event DOCUMENTATION MISSING
     * @param params DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, params: ServerCallSoundParams, confirmId?: string | undefined);
    static fromJSON(raw: ServerCallSoundJSON): ServerCallSound;
    mappableFields: readonly ["event", "params", "confirmId"];
    toJSON(): ServerCallSoundJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerCallSoundJSON>;
}
export interface ServerCallSoundParamsJSON {
    jid: JID;
    muted: boolean;
}
export declare class ServerCallSoundParams implements TDProtoClass<ServerCallSoundParams> {
    #private;
    jid: JID;
    muted: boolean;
    /**
     * Params of the server.call.sound event
     * @param jid Chat or contact id
     * @param muted Mute state
     */
    constructor(jid: JID, muted: boolean);
    static fromJSON(raw: ServerCallSoundParamsJSON): ServerCallSoundParams;
    mappableFields: readonly ["jid", "muted"];
    toJSON(): ServerCallSoundParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerCallSoundParamsJSON>;
}
export interface ServerCallStateJSON {
    event: string;
    params: CallEventJSON;
    confirm_id?: string;
}
export declare class ServerCallState implements TDProtoClass<ServerCallState> {
    #private;
    event: string;
    params: CallEvent;
    confirmId?: string | undefined;
    /**
     * Call information
     * @param event DOCUMENTATION MISSING
     * @param params DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, params: CallEvent, confirmId?: string | undefined);
    static fromJSON(raw: ServerCallStateJSON): ServerCallState;
    mappableFields: readonly ["event", "params", "confirmId"];
    toJSON(): ServerCallStateJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerCallStateJSON>;
}
export interface ServerCallTalkingJSON {
    event: string;
    params: ServerCallTalkingParamsJSON;
    confirm_id?: string;
}
export declare class ServerCallTalking implements TDProtoClass<ServerCallTalking> {
    #private;
    event: string;
    params: ServerCallTalkingParams;
    confirmId?: string | undefined;
    /**
     * Someone talks in call
     * @param event DOCUMENTATION MISSING
     * @param params DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, params: ServerCallTalkingParams, confirmId?: string | undefined);
    static fromJSON(raw: ServerCallTalkingJSON): ServerCallTalking;
    mappableFields: readonly ["event", "params", "confirmId"];
    toJSON(): ServerCallTalkingJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerCallTalkingJSON>;
}
export interface ServerCallTalkingParamsJSON {
    actor: JID;
    jid: JID;
    talking: boolean;
}
export declare class ServerCallTalkingParams implements TDProtoClass<ServerCallTalkingParams> {
    #private;
    actor: JID;
    jid: JID;
    talking: boolean;
    /**
     * Params of the server.call.talking event
     * @param actor Actor id
     * @param jid Chat or contact id
     * @param talking Is talking
     */
    constructor(actor: JID, jid: JID, talking: boolean);
    static fromJSON(raw: ServerCallTalkingParamsJSON): ServerCallTalkingParams;
    mappableFields: readonly ["actor", "jid", "talking"];
    toJSON(): ServerCallTalkingParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerCallTalkingParamsJSON>;
}
export interface ServerChatComposingJSON {
    event: string;
    params: ServerChatComposingParamsJSON;
    confirm_id?: string;
}
export declare class ServerChatComposing implements TDProtoClass<ServerChatComposing> {
    #private;
    event: string;
    params: ServerChatComposingParams;
    confirmId?: string | undefined;
    /**
     * Someone typing or recording audiomessage in chat
     * @param event DOCUMENTATION MISSING
     * @param params DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, params: ServerChatComposingParams, confirmId?: string | undefined);
    static fromJSON(raw: ServerChatComposingJSON): ServerChatComposing;
    mappableFields: readonly ["event", "params", "confirmId"];
    toJSON(): ServerChatComposingJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerChatComposingJSON>;
}
export interface ServerChatComposingParamsJSON {
    actor: JID;
    composing: boolean;
    jid: JID;
    is_audio?: boolean;
    valid_until?: ISODateTimeString;
}
export declare class ServerChatComposingParams implements TDProtoClass<ServerChatComposingParams> {
    #private;
    actor: JID;
    composing: boolean;
    jid: JID;
    isAudio?: boolean | undefined;
    validUntil?: string | undefined;
    /**
     * Params of the server.chat.composing event
     * @param actor Actor id
     * @param composing true = start typing / audio recording, false = stop
     * @param jid Chat or contact id
     * @param isAudio true = audiomessage, false = text typing
     * @param validUntil Composing event max lifetime
     */
    constructor(actor: JID, composing: boolean, jid: JID, isAudio?: boolean | undefined, validUntil?: string | undefined);
    static fromJSON(raw: ServerChatComposingParamsJSON): ServerChatComposingParams;
    mappableFields: readonly ["actor", "composing", "jid", "isAudio", "validUntil"];
    toJSON(): ServerChatComposingParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerChatComposingParamsJSON>;
}
export interface ServerChatDeletedJSON {
    event: string;
    params: ServerChatDeletedParamsJSON;
    confirm_id?: string;
}
export declare class ServerChatDeleted implements TDProtoClass<ServerChatDeleted> {
    #private;
    event: string;
    params: ServerChatDeletedParams;
    confirmId?: string | undefined;
    /**
     * Chat deleted
     * @param event DOCUMENTATION MISSING
     * @param params DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, params: ServerChatDeletedParams, confirmId?: string | undefined);
    static fromJSON(raw: ServerChatDeletedJSON): ServerChatDeleted;
    mappableFields: readonly ["event", "params", "confirmId"];
    toJSON(): ServerChatDeletedJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerChatDeletedJSON>;
}
export interface ServerChatDeletedParamsJSON {
    badge: number;
    chats: DeletedChatJSON[];
    team_unread: TeamUnreadJSON;
}
export declare class ServerChatDeletedParams implements TDProtoClass<ServerChatDeletedParams> {
    #private;
    badge: number;
    chats: DeletedChat[];
    teamUnread: TeamUnread;
    /**
     * Params of the server.chat.deleted event
     * @param badge Total number of unreads
     * @param chats List of deleted chats
     * @param teamUnread Current team counters
     */
    constructor(badge: number, chats: DeletedChat[], teamUnread: TeamUnread);
    static fromJSON(raw: ServerChatDeletedParamsJSON): ServerChatDeletedParams;
    mappableFields: readonly ["badge", "chats", "teamUnread"];
    toJSON(): ServerChatDeletedParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerChatDeletedParamsJSON>;
}
export interface ServerChatDraftJSON {
    event: string;
    params: ServerChatDraftParamsJSON;
    confirm_id?: string;
}
export declare class ServerChatDraft implements TDProtoClass<ServerChatDraft> {
    #private;
    event: string;
    params: ServerChatDraftParams;
    confirmId?: string | undefined;
    /**
     * Changed draft message in chat
     * @param event DOCUMENTATION MISSING
     * @param params DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, params: ServerChatDraftParams, confirmId?: string | undefined);
    static fromJSON(raw: ServerChatDraftJSON): ServerChatDraft;
    mappableFields: readonly ["event", "params", "confirmId"];
    toJSON(): ServerChatDraftJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerChatDraftJSON>;
}
export interface ServerChatDraftParamsJSON {
    draft: string;
    draft_gentime: number;
    draft_num: number;
    jid: JID;
    revision: number;
}
export declare class ServerChatDraftParams implements TDProtoClass<ServerChatDraftParams> {
    #private;
    draft: string;
    draftGentime: number;
    draftNum: number;
    jid: JID;
    revision: number;
    /**
     * Params of the server.chat.draft event
     * @param draft Draft text
     * @param draftGentime Draft version Deprecated: use Revision instead
     * @param draftNum Deprecated: use Revision instead
     * @param jid Chat or contact id
     * @param revision Revision Unixtime(ms)
     */
    constructor(draft: string, draftGentime: number, draftNum: number, jid: JID, revision: number);
    static fromJSON(raw: ServerChatDraftParamsJSON): ServerChatDraftParams;
    mappableFields: readonly ["draft", "draftGentime", "draftNum", "jid", "revision"];
    toJSON(): ServerChatDraftParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerChatDraftParamsJSON>;
}
export interface ServerChatLastreadJSON {
    event: string;
    params: ServerChatLastreadParamsJSON;
    confirm_id?: string;
}
export declare class ServerChatLastread implements TDProtoClass<ServerChatLastread> {
    #private;
    event: string;
    params: ServerChatLastreadParams;
    confirmId?: string | undefined;
    /**
     * Changed last read message in chat
     * @param event DOCUMENTATION MISSING
     * @param params DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, params: ServerChatLastreadParams, confirmId?: string | undefined);
    static fromJSON(raw: ServerChatLastreadJSON): ServerChatLastread;
    mappableFields: readonly ["event", "params", "confirmId"];
    toJSON(): ServerChatLastreadJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerChatLastreadJSON>;
}
export interface ServerChatLastreadParamsJSON {
    badge: number;
    chats: ChatCountersJSON[];
    team_unread: TeamUnreadJSON;
}
export declare class ServerChatLastreadParams implements TDProtoClass<ServerChatLastreadParams> {
    #private;
    badge: number;
    chats: ChatCounters[];
    teamUnread: TeamUnread;
    /**
     * Params of the server.chat.lastread event
     * @param badge Total number of unreads
     * @param chats Chat counters
     * @param teamUnread Current team counters
     */
    constructor(badge: number, chats: ChatCounters[], teamUnread: TeamUnread);
    static fromJSON(raw: ServerChatLastreadParamsJSON): ServerChatLastreadParams;
    mappableFields: readonly ["badge", "chats", "teamUnread"];
    toJSON(): ServerChatLastreadParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerChatLastreadParamsJSON>;
}
export interface ServerChatUpdatedJSON {
    event: string;
    params: ServerChatUpdatedParamsJSON;
    confirm_id?: string;
}
export declare class ServerChatUpdated implements TDProtoClass<ServerChatUpdated> {
    #private;
    event: string;
    params: ServerChatUpdatedParams;
    confirmId?: string | undefined;
    /**
     * Chat created or updated
     * @param event DOCUMENTATION MISSING
     * @param params DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, params: ServerChatUpdatedParams, confirmId?: string | undefined);
    static fromJSON(raw: ServerChatUpdatedJSON): ServerChatUpdated;
    mappableFields: readonly ["event", "params", "confirmId"];
    toJSON(): ServerChatUpdatedJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerChatUpdatedJSON>;
}
export interface ServerChatUpdatedParamsJSON {
    badge: number;
    chats: ChatJSON[];
    team_unread: TeamUnreadJSON;
}
export declare class ServerChatUpdatedParams implements TDProtoClass<ServerChatUpdatedParams> {
    #private;
    badge: number;
    chats: Chat[];
    teamUnread: TeamUnread;
    /**
     * Params of the server.chat.updated event
     * @param badge Total number of unreads
     * @param chats Chat counters
     * @param teamUnread Current team counters
     */
    constructor(badge: number, chats: Chat[], teamUnread: TeamUnread);
    static fromJSON(raw: ServerChatUpdatedParamsJSON): ServerChatUpdatedParams;
    mappableFields: readonly ["badge", "chats", "teamUnread"];
    toJSON(): ServerChatUpdatedParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerChatUpdatedParamsJSON>;
}
export interface ServerConfirmJSON {
    event: string;
    params: ServerConfirmParamsJSON;
    confirm_id?: string;
}
export declare class ServerConfirm implements TDProtoClass<ServerConfirm> {
    #private;
    event: string;
    params: ServerConfirmParams;
    confirmId?: string | undefined;
    /**
     * Server confirmed client message
     * @param event DOCUMENTATION MISSING
     * @param params DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, params: ServerConfirmParams, confirmId?: string | undefined);
    static fromJSON(raw: ServerConfirmJSON): ServerConfirm;
    mappableFields: readonly ["event", "params", "confirmId"];
    toJSON(): ServerConfirmJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerConfirmJSON>;
}
export interface ServerConfirmParamsJSON {
    confirm_id: string;
}
export declare class ServerConfirmParams implements TDProtoClass<ServerConfirmParams> {
    #private;
    confirmId: string;
    /**
     * Params of the server.confirm event
     * @param confirmId Unique id generated by server
     */
    constructor(confirmId: string);
    static fromJSON(raw: ServerConfirmParamsJSON): ServerConfirmParams;
    mappableFields: readonly ["confirmId"];
    toJSON(): ServerConfirmParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerConfirmParamsJSON>;
}
export interface ServerContactUpdatedJSON {
    event: string;
    params: ServerContactUpdatedParamsJSON;
    confirm_id?: string;
}
export declare class ServerContactUpdated implements TDProtoClass<ServerContactUpdated> {
    #private;
    event: string;
    params: ServerContactUpdatedParams;
    confirmId?: string | undefined;
    /**
     * Contact created or updated
     * @param event DOCUMENTATION MISSING
     * @param params DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, params: ServerContactUpdatedParams, confirmId?: string | undefined);
    static fromJSON(raw: ServerContactUpdatedJSON): ServerContactUpdated;
    mappableFields: readonly ["event", "params", "confirmId"];
    toJSON(): ServerContactUpdatedJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerContactUpdatedJSON>;
}
export interface ServerContactUpdatedParamsJSON {
    contacts: ContactJSON[];
}
export declare class ServerContactUpdatedParams implements TDProtoClass<ServerContactUpdatedParams> {
    #private;
    contacts: Contact[];
    /**
     * Params of the server.contact.updated event
     * @param contacts Contact info
     */
    constructor(contacts: Contact[]);
    static fromJSON(raw: ServerContactUpdatedParamsJSON): ServerContactUpdatedParams;
    mappableFields: readonly ["contacts"];
    toJSON(): ServerContactUpdatedParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerContactUpdatedParamsJSON>;
}
export interface ServerDebugJSON {
    event: string;
    params: ServerDebugParamsJSON;
    confirm_id?: string;
}
export declare class ServerDebug implements TDProtoClass<ServerDebug> {
    #private;
    event: string;
    params: ServerDebugParams;
    confirmId?: string | undefined;
    /**
     * Debug message
     * @param event DOCUMENTATION MISSING
     * @param params DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, params: ServerDebugParams, confirmId?: string | undefined);
    static fromJSON(raw: ServerDebugJSON): ServerDebug;
    mappableFields: readonly ["event", "params", "confirmId"];
    toJSON(): ServerDebugJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerDebugJSON>;
}
export interface ServerDebugParamsJSON {
    text: string;
}
export declare class ServerDebugParams implements TDProtoClass<ServerDebugParams> {
    #private;
    text: string;
    /**
     * Params of the server.debug event
     * @param text Debug message
     */
    constructor(text: string);
    static fromJSON(raw: ServerDebugParamsJSON): ServerDebugParams;
    mappableFields: readonly ["text"];
    toJSON(): ServerDebugParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerDebugParamsJSON>;
}
export interface ServerLoginJSON {
    event: string;
    params: ServerLoginParamsJSON;
    confirm_id?: string;
}
export declare class ServerLogin implements TDProtoClass<ServerLogin> {
    #private;
    event: string;
    params: ServerLoginParams;
    confirmId?: string | undefined;
    /**
     * Login from other device
     * @param event DOCUMENTATION MISSING
     * @param params DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, params: ServerLoginParams, confirmId?: string | undefined);
    static fromJSON(raw: ServerLoginJSON): ServerLogin;
    mappableFields: readonly ["event", "params", "confirmId"];
    toJSON(): ServerLoginJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerLoginJSON>;
}
export interface ServerLoginParamsJSON {
    device_name: string;
}
export declare class ServerLoginParams implements TDProtoClass<ServerLoginParams> {
    #private;
    deviceName: string;
    /**
     * Params of the server.login event
     * @param deviceName Device name
     */
    constructor(deviceName: string);
    static fromJSON(raw: ServerLoginParamsJSON): ServerLoginParams;
    mappableFields: readonly ["deviceName"];
    toJSON(): ServerLoginParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerLoginParamsJSON>;
}
export interface ServerLogoutJSON {
    event: string;
    params: ServerLogoutParamsJSON;
    confirm_id?: string;
}
export declare class ServerLogout implements TDProtoClass<ServerLogout> {
    #private;
    event: string;
    params: ServerLogoutParams;
    confirmId?: string | undefined;
    /**
     * MISSING CLASS DOCUMENTATION
     * @param event DOCUMENTATION MISSING
     * @param params DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, params: ServerLogoutParams, confirmId?: string | undefined);
    static fromJSON(raw: ServerLogoutJSON): ServerLogout;
    mappableFields: readonly ["event", "params", "confirmId"];
    toJSON(): ServerLogoutJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerLogoutJSON>;
}
export interface ServerLogoutParamsJSON {
    reason: string;
}
export declare class ServerLogoutParams implements TDProtoClass<ServerLogoutParams> {
    #private;
    reason: string;
    /**
     * Params of the server.logout event
     * @param reason Reason
     */
    constructor(reason: string);
    static fromJSON(raw: ServerLogoutParamsJSON): ServerLogoutParams;
    mappableFields: readonly ["reason"];
    toJSON(): ServerLogoutParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerLogoutParamsJSON>;
}
export interface ServerMeetingCellUpdatedJSON {
    event: string;
    params: ServerMeetingCellUpdatedParamsJSON;
    confirm_id?: string;
}
export declare class ServerMeetingCellUpdated implements TDProtoClass<ServerMeetingCellUpdated> {
    #private;
    event: string;
    params: ServerMeetingCellUpdatedParams;
    confirmId?: string | undefined;
    /**
     * Meeting Cell updated
     * @param event DOCUMENTATION MISSING
     * @param params DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, params: ServerMeetingCellUpdatedParams, confirmId?: string | undefined);
    static fromJSON(raw: ServerMeetingCellUpdatedJSON): ServerMeetingCellUpdated;
    mappableFields: readonly ["event", "params", "confirmId"];
    toJSON(): ServerMeetingCellUpdatedJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerMeetingCellUpdatedJSON>;
}
export interface ServerMeetingCellUpdatedParamsJSON {
    duration: number;
    meeting_id: string;
    start_at_new: ISODateTimeString;
    start_at_old: ISODateTimeString;
}
export declare class ServerMeetingCellUpdatedParams implements TDProtoClass<ServerMeetingCellUpdatedParams> {
    #private;
    duration: number;
    meetingId: string;
    startAtNew: ISODateTimeString;
    startAtOld: ISODateTimeString;
    /**
     * Params of the server.meetingcell.updated event
     * @param duration DOCUMENTATION MISSING
     * @param meetingId Meeting Cell info
     * @param startAtNew DOCUMENTATION MISSING
     * @param startAtOld DOCUMENTATION MISSING
     */
    constructor(duration: number, meetingId: string, startAtNew: ISODateTimeString, startAtOld: ISODateTimeString);
    static fromJSON(raw: ServerMeetingCellUpdatedParamsJSON): ServerMeetingCellUpdatedParams;
    mappableFields: readonly ["duration", "meetingId", "startAtNew", "startAtOld"];
    toJSON(): ServerMeetingCellUpdatedParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerMeetingCellUpdatedParamsJSON>;
}
export interface ServerMeetingDeletedJSON {
    event: string;
    params: ServerMeetingDeletedParamsJSON;
    confirm_id?: string;
}
export declare class ServerMeetingDeleted implements TDProtoClass<ServerMeetingDeleted> {
    #private;
    event: string;
    params: ServerMeetingDeletedParams;
    confirmId?: string | undefined;
    /**
     * Meeting deleted
     * @param event DOCUMENTATION MISSING
     * @param params DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, params: ServerMeetingDeletedParams, confirmId?: string | undefined);
    static fromJSON(raw: ServerMeetingDeletedJSON): ServerMeetingDeleted;
    mappableFields: readonly ["event", "params", "confirmId"];
    toJSON(): ServerMeetingDeletedJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerMeetingDeletedJSON>;
}
export interface ServerMeetingDeletedParamsJSON {
    meeting_id: string[];
}
export declare class ServerMeetingDeletedParams implements TDProtoClass<ServerMeetingDeletedParams> {
    #private;
    meetingId: string[];
    /**
     * Params of the server.meeting.deleted event
     * @param meetingId Meeting info
     */
    constructor(meetingId: string[]);
    static fromJSON(raw: ServerMeetingDeletedParamsJSON): ServerMeetingDeletedParams;
    mappableFields: readonly ["meetingId"];
    toJSON(): ServerMeetingDeletedParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerMeetingDeletedParamsJSON>;
}
export interface ServerMeetingUpdatedJSON {
    event: string;
    params: ServerMeetingUpdatedParamsJSON;
    confirm_id?: string;
}
export declare class ServerMeetingUpdated implements TDProtoClass<ServerMeetingUpdated> {
    #private;
    event: string;
    params: ServerMeetingUpdatedParams;
    confirmId?: string | undefined;
    /**
     * Meeting created or updated
     * @param event DOCUMENTATION MISSING
     * @param params DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, params: ServerMeetingUpdatedParams, confirmId?: string | undefined);
    static fromJSON(raw: ServerMeetingUpdatedJSON): ServerMeetingUpdated;
    mappableFields: readonly ["event", "params", "confirmId"];
    toJSON(): ServerMeetingUpdatedJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerMeetingUpdatedJSON>;
}
export interface ServerMeetingUpdatedParamsJSON {
    meetings: MeetingJSON[];
    team_meetings_count: number;
    team_meetings_dates: string[];
    user_meetings_count: number;
    user_meetings_dates: string[];
}
export declare class ServerMeetingUpdatedParams implements TDProtoClass<ServerMeetingUpdatedParams> {
    #private;
    meetings: Meeting[];
    teamMeetingsCount: number;
    teamMeetingsDates: string[];
    userMeetingsCount: number;
    userMeetingsDates: string[];
    /**
     * Params of the server.meeting.updated event
     * @param meetings Meeting info
     * @param teamMeetingsCount Team Meetings count
     * @param teamMeetingsDates Dates of team meetings
     * @param userMeetingsCount User Meetings count
     * @param userMeetingsDates Dates of user meetings
     */
    constructor(meetings: Meeting[], teamMeetingsCount: number, teamMeetingsDates: string[], userMeetingsCount: number, userMeetingsDates: string[]);
    static fromJSON(raw: ServerMeetingUpdatedParamsJSON): ServerMeetingUpdatedParams;
    mappableFields: readonly ["meetings", "teamMeetingsCount", "teamMeetingsDates", "userMeetingsCount", "userMeetingsDates"];
    toJSON(): ServerMeetingUpdatedParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerMeetingUpdatedParamsJSON>;
}
export interface ServerMessagePushJSON {
    event: string;
    params: MessagePushJSON;
    confirm_id?: string;
}
export declare class ServerMessagePush implements TDProtoClass<ServerMessagePush> {
    #private;
    event: string;
    params: MessagePush;
    confirmId?: string | undefined;
    /**
     * Push replacement for desktop application
     * @param event DOCUMENTATION MISSING
     * @param params DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, params: MessagePush, confirmId?: string | undefined);
    static fromJSON(raw: ServerMessagePushJSON): ServerMessagePush;
    mappableFields: readonly ["event", "params", "confirmId"];
    toJSON(): ServerMessagePushJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerMessagePushJSON>;
}
export interface ServerMessageReceivedJSON {
    event: string;
    params: ServerMessageReceivedParamsJSON;
    confirm_id?: string;
}
export declare class ServerMessageReceived implements TDProtoClass<ServerMessageReceived> {
    #private;
    event: string;
    params: ServerMessageReceivedParams;
    confirmId?: string | undefined;
    /**
     * Message received by someone in chat
     * @param event DOCUMENTATION MISSING
     * @param params DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, params: ServerMessageReceivedParams, confirmId?: string | undefined);
    static fromJSON(raw: ServerMessageReceivedJSON): ServerMessageReceived;
    mappableFields: readonly ["event", "params", "confirmId"];
    toJSON(): ServerMessageReceivedJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerMessageReceivedJSON>;
}
export interface ServerMessageReceivedParamsJSON {
    messages: ReceivedMessageJSON[];
}
export declare class ServerMessageReceivedParams implements TDProtoClass<ServerMessageReceivedParams> {
    #private;
    messages: ReceivedMessage[];
    /**
     * Params of the server.message.received event
     * @param messages received message data
     */
    constructor(messages: ReceivedMessage[]);
    static fromJSON(raw: ServerMessageReceivedParamsJSON): ServerMessageReceivedParams;
    mappableFields: readonly ["messages"];
    toJSON(): ServerMessageReceivedParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerMessageReceivedParamsJSON>;
}
export interface ServerMessageUpdatedJSON {
    event: string;
    params: ServerMessageUpdatedParamsJSON;
    confirm_id?: string;
}
export declare class ServerMessageUpdated implements TDProtoClass<ServerMessageUpdated> {
    #private;
    event: string;
    params: ServerMessageUpdatedParams;
    confirmId?: string | undefined;
    /**
     * Chat message created, updated or deleted
     * @param event DOCUMENTATION MISSING
     * @param params DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, params: ServerMessageUpdatedParams, confirmId?: string | undefined);
    static fromJSON(raw: ServerMessageUpdatedJSON): ServerMessageUpdated;
    mappableFields: readonly ["event", "params", "confirmId"];
    toJSON(): ServerMessageUpdatedJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerMessageUpdatedJSON>;
}
export interface ServerMessageUpdatedParamsJSON {
    badge: number;
    chat_counters: ChatCountersJSON[];
    delayed: boolean;
    messages: MessageJSON[];
    team_unread: TeamUnreadJSON;
}
export declare class ServerMessageUpdatedParams implements TDProtoClass<ServerMessageUpdatedParams> {
    #private;
    badge: number;
    chatCounters: ChatCounters[];
    delayed: boolean;
    messages: Message[];
    teamUnread: TeamUnread;
    /**
     * Params of the server.message.updated event
     * @param badge Total number of unreads, if changed
     * @param chatCounters Chat counters
     * @param delayed true = silently message update, false = new message
     * @param messages Messages data
     * @param teamUnread Current team counters
     */
    constructor(badge: number, chatCounters: ChatCounters[], delayed: boolean, messages: Message[], teamUnread: TeamUnread);
    static fromJSON(raw: ServerMessageUpdatedParamsJSON): ServerMessageUpdatedParams;
    mappableFields: readonly ["badge", "chatCounters", "delayed", "messages", "teamUnread"];
    toJSON(): ServerMessageUpdatedParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerMessageUpdatedParamsJSON>;
}
export interface ServerOnlineJSON {
    event: string;
    params: ServerOnlineParamsJSON;
    confirm_id?: string;
}
export declare class ServerOnline implements TDProtoClass<ServerOnline> {
    #private;
    event: string;
    params: ServerOnlineParams;
    confirmId?: string | undefined;
    /**
     * Online team members and current active calls
     * @param event DOCUMENTATION MISSING
     * @param params DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, params: ServerOnlineParams, confirmId?: string | undefined);
    static fromJSON(raw: ServerOnlineJSON): ServerOnline;
    mappableFields: readonly ["event", "params", "confirmId"];
    toJSON(): ServerOnlineJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerOnlineJSON>;
}
export interface ServerOnlineParamsJSON {
    contacts: OnlineContactJSON[];
    calls?: OnlineCallJSON[];
}
export declare class ServerOnlineParams implements TDProtoClass<ServerOnlineParams> {
    #private;
    contacts: OnlineContact[];
    calls?: OnlineCall[] | undefined;
    /**
     * Params of the server.online event
     * @param contacts Online team members
     * @param calls Active calls
     */
    constructor(contacts: OnlineContact[], calls?: OnlineCall[] | undefined);
    static fromJSON(raw: ServerOnlineParamsJSON): ServerOnlineParams;
    mappableFields: readonly ["contacts", "calls"];
    toJSON(): ServerOnlineParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerOnlineParamsJSON>;
}
export interface ServerProcessingJSON {
    event: string;
    params: ServerProcessingParamsJSON;
    confirm_id?: string;
}
export declare class ServerProcessing implements TDProtoClass<ServerProcessing> {
    #private;
    event: string;
    params: ServerProcessingParams;
    confirmId?: string | undefined;
    /**
     * Status of background operation
     * @param event DOCUMENTATION MISSING
     * @param params DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, params: ServerProcessingParams, confirmId?: string | undefined);
    static fromJSON(raw: ServerProcessingJSON): ServerProcessing;
    mappableFields: readonly ["event", "params", "confirmId"];
    toJSON(): ServerProcessingJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerProcessingJSON>;
}
export interface ServerProcessingParamsJSON {
    action: string;
    has_error: boolean;
    message: string;
    num: number;
    total: number;
    action_type?: ActionType;
    body?: string;
}
export declare class ServerProcessingParams implements TDProtoClass<ServerProcessingParams> {
    #private;
    action: string;
    hasError: boolean;
    message: string;
    num: number;
    total: number;
    actionType?: ActionType | undefined;
    body?: string | undefined;
    /**
     * Params of the server.processing event
     * @param action Action name
     * @param hasError Has error
     * @param message Message
     * @param num Current processing item
     * @param total Total processing items
     * @param actionType ActionType. Ex: [contact_import || task_import || archive_unpacking || generate_chats]
     * @param body Body
     */
    constructor(action: string, hasError: boolean, message: string, num: number, total: number, actionType?: ActionType | undefined, body?: string | undefined);
    static fromJSON(raw: ServerProcessingParamsJSON): ServerProcessingParams;
    mappableFields: readonly ["action", "hasError", "message", "num", "total", "actionType", "body"];
    toJSON(): ServerProcessingParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerProcessingParamsJSON>;
}
export interface ServerRemindDeletedJSON {
    event: string;
    params: ServerRemindDeletedParamsJSON;
    confirm_id?: string;
}
export declare class ServerRemindDeleted implements TDProtoClass<ServerRemindDeleted> {
    #private;
    event: string;
    params: ServerRemindDeletedParams;
    confirmId?: string | undefined;
    /**
     * Task or group remind deleted
     * @param event DOCUMENTATION MISSING
     * @param params DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, params: ServerRemindDeletedParams, confirmId?: string | undefined);
    static fromJSON(raw: ServerRemindDeletedJSON): ServerRemindDeleted;
    mappableFields: readonly ["event", "params", "confirmId"];
    toJSON(): ServerRemindDeletedJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerRemindDeletedJSON>;
}
export interface ServerRemindDeletedParamsJSON {
    reminds: DeletedRemindJSON[];
}
export declare class ServerRemindDeletedParams implements TDProtoClass<ServerRemindDeletedParams> {
    #private;
    reminds: DeletedRemind[];
    /**
     * Params of the server.remind.deleted event
     * @param reminds Remind information
     */
    constructor(reminds: DeletedRemind[]);
    static fromJSON(raw: ServerRemindDeletedParamsJSON): ServerRemindDeletedParams;
    mappableFields: readonly ["reminds"];
    toJSON(): ServerRemindDeletedParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerRemindDeletedParamsJSON>;
}
export interface ServerRemindFiredJSON {
    event: string;
    params: ServerRemindFiredParamsJSON;
    confirm_id?: string;
}
export declare class ServerRemindFired implements TDProtoClass<ServerRemindFired> {
    #private;
    event: string;
    params: ServerRemindFiredParams;
    confirmId?: string | undefined;
    /**
     * Task or group remind fired
     * @param event DOCUMENTATION MISSING
     * @param params DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, params: ServerRemindFiredParams, confirmId?: string | undefined);
    static fromJSON(raw: ServerRemindFiredJSON): ServerRemindFired;
    mappableFields: readonly ["event", "params", "confirmId"];
    toJSON(): ServerRemindFiredJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerRemindFiredJSON>;
}
export interface ServerRemindFiredParamsJSON {
    reminds: RemindJSON[];
}
export declare class ServerRemindFiredParams implements TDProtoClass<ServerRemindFiredParams> {
    #private;
    reminds: Remind[];
    /**
     * Params of the server.remind.fired event
     * @param reminds Remind information
     */
    constructor(reminds: Remind[]);
    static fromJSON(raw: ServerRemindFiredParamsJSON): ServerRemindFiredParams;
    mappableFields: readonly ["reminds"];
    toJSON(): ServerRemindFiredParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerRemindFiredParamsJSON>;
}
export interface ServerRemindUpdatedJSON {
    event: string;
    params: ServerRemindUpdatedParamsJSON;
    confirm_id?: string;
}
export declare class ServerRemindUpdated implements TDProtoClass<ServerRemindUpdated> {
    #private;
    event: string;
    params: ServerRemindUpdatedParams;
    confirmId?: string | undefined;
    /**
     * Task/group remind created or changed
     * @param event DOCUMENTATION MISSING
     * @param params DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, params: ServerRemindUpdatedParams, confirmId?: string | undefined);
    static fromJSON(raw: ServerRemindUpdatedJSON): ServerRemindUpdated;
    mappableFields: readonly ["event", "params", "confirmId"];
    toJSON(): ServerRemindUpdatedJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerRemindUpdatedJSON>;
}
export interface ServerRemindUpdatedParamsJSON {
    reminds: RemindJSON[];
}
export declare class ServerRemindUpdatedParams implements TDProtoClass<ServerRemindUpdatedParams> {
    #private;
    reminds: Remind[];
    /**
     * Params of the server.remind.updated event
     * @param reminds Remind information
     */
    constructor(reminds: Remind[]);
    static fromJSON(raw: ServerRemindUpdatedParamsJSON): ServerRemindUpdatedParams;
    mappableFields: readonly ["reminds"];
    toJSON(): ServerRemindUpdatedParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerRemindUpdatedParamsJSON>;
}
export interface ServerSectionDeletedJSON {
    event: string;
    params: ServerSectionDeletedParamsJSON;
    confirm_id?: string;
}
export declare class ServerSectionDeleted implements TDProtoClass<ServerSectionDeleted> {
    #private;
    event: string;
    params: ServerSectionDeletedParams;
    confirmId?: string | undefined;
    /**
     * Contact section or task project deleted
     * @param event DOCUMENTATION MISSING
     * @param params DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, params: ServerSectionDeletedParams, confirmId?: string | undefined);
    static fromJSON(raw: ServerSectionDeletedJSON): ServerSectionDeleted;
    mappableFields: readonly ["event", "params", "confirmId"];
    toJSON(): ServerSectionDeletedJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerSectionDeletedJSON>;
}
export interface ServerSectionDeletedParamsJSON {
    chat_type: ChatType;
    gentime: number;
    sections: DeletedSectionJSON[];
}
export declare class ServerSectionDeletedParams implements TDProtoClass<ServerSectionDeletedParams> {
    #private;
    chatType: ChatType;
    gentime: number;
    sections: DeletedSection[];
    /**
     * Params of the server.section.deleted event
     * @param chatType Chat type
     * @param gentime Deprecated
     * @param sections Section/project info
     */
    constructor(chatType: ChatType, gentime: number, sections: DeletedSection[]);
    static fromJSON(raw: ServerSectionDeletedParamsJSON): ServerSectionDeletedParams;
    mappableFields: readonly ["chatType", "gentime", "sections"];
    toJSON(): ServerSectionDeletedParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerSectionDeletedParamsJSON>;
}
export interface ServerSectionUpdatedJSON {
    event: string;
    params: ServerSectionUpdatedParamsJSON;
    confirm_id?: string;
}
export declare class ServerSectionUpdated implements TDProtoClass<ServerSectionUpdated> {
    #private;
    event: string;
    params: ServerSectionUpdatedParams;
    confirmId?: string | undefined;
    /**
     * Contact section or task project created or changed
     * @param event DOCUMENTATION MISSING
     * @param params DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, params: ServerSectionUpdatedParams, confirmId?: string | undefined);
    static fromJSON(raw: ServerSectionUpdatedJSON): ServerSectionUpdated;
    mappableFields: readonly ["event", "params", "confirmId"];
    toJSON(): ServerSectionUpdatedJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerSectionUpdatedJSON>;
}
export interface ServerSectionUpdatedParamsJSON {
    chat_type: ChatType;
    gentime: number;
    sections: SectionJSON[];
}
export declare class ServerSectionUpdatedParams implements TDProtoClass<ServerSectionUpdatedParams> {
    #private;
    chatType: ChatType;
    gentime: number;
    sections: Section[];
    /**
     * Params of the server.section.updated event
     * @param chatType Chat type
     * @param gentime deprecated
     * @param sections Section/project info
     */
    constructor(chatType: ChatType, gentime: number, sections: Section[]);
    static fromJSON(raw: ServerSectionUpdatedParamsJSON): ServerSectionUpdatedParams;
    mappableFields: readonly ["chatType", "gentime", "sections"];
    toJSON(): ServerSectionUpdatedParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerSectionUpdatedParamsJSON>;
}
export interface ServerTagDeletedJSON {
    event: string;
    params: ServerTagDeletedParamsJSON;
    confirm_id?: string;
}
export declare class ServerTagDeleted implements TDProtoClass<ServerTagDeleted> {
    #private;
    event: string;
    params: ServerTagDeletedParams;
    confirmId?: string | undefined;
    /**
     * Tag deleted
     * @param event DOCUMENTATION MISSING
     * @param params DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, params: ServerTagDeletedParams, confirmId?: string | undefined);
    static fromJSON(raw: ServerTagDeletedJSON): ServerTagDeleted;
    mappableFields: readonly ["event", "params", "confirmId"];
    toJSON(): ServerTagDeletedJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerTagDeletedJSON>;
}
export interface ServerTagDeletedParamsJSON {
    tags: DeletedTagJSON[];
}
export declare class ServerTagDeletedParams implements TDProtoClass<ServerTagDeletedParams> {
    #private;
    tags: DeletedTag[];
    /**
     * Params of the server.tag.deleted event
     * @param tags Tags info
     */
    constructor(tags: DeletedTag[]);
    static fromJSON(raw: ServerTagDeletedParamsJSON): ServerTagDeletedParams;
    mappableFields: readonly ["tags"];
    toJSON(): ServerTagDeletedParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerTagDeletedParamsJSON>;
}
export interface ServerTagUpdatedJSON {
    event: string;
    params: ServerTagUpdatedParamsJSON;
    confirm_id?: string;
}
export declare class ServerTagUpdated implements TDProtoClass<ServerTagUpdated> {
    #private;
    event: string;
    params: ServerTagUpdatedParams;
    confirmId?: string | undefined;
    /**
     * Tag created or changed
     * @param event DOCUMENTATION MISSING
     * @param params DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, params: ServerTagUpdatedParams, confirmId?: string | undefined);
    static fromJSON(raw: ServerTagUpdatedJSON): ServerTagUpdated;
    mappableFields: readonly ["event", "params", "confirmId"];
    toJSON(): ServerTagUpdatedJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerTagUpdatedJSON>;
}
export interface ServerTagUpdatedParamsJSON {
    tags: TagJSON[];
}
export declare class ServerTagUpdatedParams implements TDProtoClass<ServerTagUpdatedParams> {
    #private;
    tags: Tag[];
    /**
     * Params of the server.tag.updated event
     * @param tags Tags info
     */
    constructor(tags: Tag[]);
    static fromJSON(raw: ServerTagUpdatedParamsJSON): ServerTagUpdatedParams;
    mappableFields: readonly ["tags"];
    toJSON(): ServerTagUpdatedParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerTagUpdatedParamsJSON>;
}
export interface ServerTeamCountersJSON {
    event: string;
    params: ServerTeamCountersParamsJSON;
    confirm_id?: string;
}
export declare class ServerTeamCounters implements TDProtoClass<ServerTeamCounters> {
    #private;
    event: string;
    params: ServerTeamCountersParams;
    confirmId?: string | undefined;
    /**
     * Counters form other teams
     * @param event DOCUMENTATION MISSING
     * @param params DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, params: ServerTeamCountersParams, confirmId?: string | undefined);
    static fromJSON(raw: ServerTeamCountersJSON): ServerTeamCounters;
    mappableFields: readonly ["event", "params", "confirmId"];
    toJSON(): ServerTeamCountersJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerTeamCountersJSON>;
}
export interface ServerTeamCountersParamsJSON {
    badge: number;
    teams: TeamCounterJSON[];
}
export declare class ServerTeamCountersParams implements TDProtoClass<ServerTeamCountersParams> {
    #private;
    badge: number;
    teams: TeamCounter[];
    /**
     * Params of the server.team.counters event
     * @param badge Total number of unreads
     * @param teams Counters
     */
    constructor(badge: number, teams: TeamCounter[]);
    static fromJSON(raw: ServerTeamCountersParamsJSON): ServerTeamCountersParams;
    mappableFields: readonly ["badge", "teams"];
    toJSON(): ServerTeamCountersParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerTeamCountersParamsJSON>;
}
export interface ServerTeamDeletedJSON {
    event: string;
    params: ServerTeamDeletedParamsJSON;
    confirm_id?: string;
}
export declare class ServerTeamDeleted implements TDProtoClass<ServerTeamDeleted> {
    #private;
    event: string;
    params: ServerTeamDeletedParams;
    confirmId?: string | undefined;
    /**
     * Team archived
     * @param event DOCUMENTATION MISSING
     * @param params DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, params: ServerTeamDeletedParams, confirmId?: string | undefined);
    static fromJSON(raw: ServerTeamDeletedJSON): ServerTeamDeleted;
    mappableFields: readonly ["event", "params", "confirmId"];
    toJSON(): ServerTeamDeletedJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerTeamDeletedJSON>;
}
export interface ServerTeamDeletedParamsJSON {
    teams: DeletedTeamJSON[];
}
export declare class ServerTeamDeletedParams implements TDProtoClass<ServerTeamDeletedParams> {
    #private;
    teams: DeletedTeam[];
    /**
     * Params of the server.team.deleted event
     * @param teams Teams info
     */
    constructor(teams: DeletedTeam[]);
    static fromJSON(raw: ServerTeamDeletedParamsJSON): ServerTeamDeletedParams;
    mappableFields: readonly ["teams"];
    toJSON(): ServerTeamDeletedParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerTeamDeletedParamsJSON>;
}
export interface ServerTeamUpdatedJSON {
    event: string;
    params: ServerTeamUpdatedParamsJSON;
    confirm_id?: string;
}
export declare class ServerTeamUpdated implements TDProtoClass<ServerTeamUpdated> {
    #private;
    event: string;
    params: ServerTeamUpdatedParams;
    confirmId?: string | undefined;
    /**
     * Team created or changed
     * @param event DOCUMENTATION MISSING
     * @param params DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, params: ServerTeamUpdatedParams, confirmId?: string | undefined);
    static fromJSON(raw: ServerTeamUpdatedJSON): ServerTeamUpdated;
    mappableFields: readonly ["event", "params", "confirmId"];
    toJSON(): ServerTeamUpdatedJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerTeamUpdatedJSON>;
}
export interface ServerTeamUpdatedParamsJSON {
    teams: TeamJSON[];
}
export declare class ServerTeamUpdatedParams implements TDProtoClass<ServerTeamUpdatedParams> {
    #private;
    teams: Team[];
    /**
     * Params of the server.team.updated event
     * @param teams DOCUMENTATION MISSING
     */
    constructor(teams: Team[]);
    static fromJSON(raw: ServerTeamUpdatedParamsJSON): ServerTeamUpdatedParams;
    mappableFields: readonly ["teams"];
    toJSON(): ServerTeamUpdatedParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerTeamUpdatedParamsJSON>;
}
export interface ServerTimeJSON {
    event: string;
    params: ServerTimeParamsJSON;
    confirm_id?: string;
}
export declare class ServerTime implements TDProtoClass<ServerTime> {
    #private;
    event: string;
    params: ServerTimeParams;
    confirmId?: string | undefined;
    /**
     * Current server time
     * @param event DOCUMENTATION MISSING
     * @param params DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, params: ServerTimeParams, confirmId?: string | undefined);
    static fromJSON(raw: ServerTimeJSON): ServerTime;
    mappableFields: readonly ["event", "params", "confirmId"];
    toJSON(): ServerTimeJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerTimeJSON>;
}
export interface ServerTimeParamsJSON {
    time: ISODateTimeString;
}
export declare class ServerTimeParams implements TDProtoClass<ServerTimeParams> {
    #private;
    time: ISODateTimeString;
    /**
     * Params of the server.time event
     * @param time Current time
     */
    constructor(time: ISODateTimeString);
    static fromJSON(raw: ServerTimeParamsJSON): ServerTimeParams;
    mappableFields: readonly ["time"];
    toJSON(): ServerTimeParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerTimeParamsJSON>;
}
export interface ServerUiSettingsJSON {
    event: string;
    params: ServerUiSettingsParamsJSON;
    confirm_id?: string;
}
export declare class ServerUiSettings implements TDProtoClass<ServerUiSettings> {
    #private;
    event: string;
    params: ServerUiSettingsParams;
    confirmId?: string | undefined;
    /**
     * Part of UI settings changed
     * @param event DOCUMENTATION MISSING
     * @param params DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, params: ServerUiSettingsParams, confirmId?: string | undefined);
    static fromJSON(raw: ServerUiSettingsJSON): ServerUiSettings;
    mappableFields: readonly ["event", "params", "confirmId"];
    toJSON(): ServerUiSettingsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerUiSettingsJSON>;
}
export interface ServerUiSettingsParamsJSON {
    data: UiSettingsData;
    namespace: string;
}
export declare class ServerUiSettingsParams implements TDProtoClass<ServerUiSettingsParams> {
    #private;
    data: UiSettingsData;
    namespace: string;
    /**
     * MISSING CLASS DOCUMENTATION
     * @param data UiSettingsData
     * @param namespace Namespace. For example: web, app
     */
    constructor(data: UiSettingsData, namespace: string);
    static fromJSON(raw: ServerUiSettingsParamsJSON): ServerUiSettingsParams;
    mappableFields: readonly ["data", "namespace"];
    toJSON(): ServerUiSettingsParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerUiSettingsParamsJSON>;
}
export interface ServerUploadUpdatedJSON {
    event: string;
    params: ServerUploadUpdatedParamsJSON;
    confirm_id?: string;
}
export declare class ServerUploadUpdated implements TDProtoClass<ServerUploadUpdated> {
    #private;
    event: string;
    params: ServerUploadUpdatedParams;
    confirmId?: string | undefined;
    /**
     * Upload object created or changed
     * @param event DOCUMENTATION MISSING
     * @param params DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, params: ServerUploadUpdatedParams, confirmId?: string | undefined);
    static fromJSON(raw: ServerUploadUpdatedJSON): ServerUploadUpdated;
    mappableFields: readonly ["event", "params", "confirmId"];
    toJSON(): ServerUploadUpdatedJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerUploadUpdatedJSON>;
}
export interface ServerUploadUpdatedParamsJSON {
    uploads: UploadJSON[];
}
export declare class ServerUploadUpdatedParams implements TDProtoClass<ServerUploadUpdatedParams> {
    #private;
    uploads: Upload[];
    /**
     * Params of the server.upload.updated event
     * @param uploads Uploads data
     */
    constructor(uploads: Upload[]);
    static fromJSON(raw: ServerUploadUpdatedParamsJSON): ServerUploadUpdatedParams;
    mappableFields: readonly ["uploads"];
    toJSON(): ServerUploadUpdatedParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerUploadUpdatedParamsJSON>;
}
export interface ServerWarningJSON {
    event: string;
    params: ServerWarningParamsJSON;
    confirm_id?: string;
}
export declare class ServerWarning implements TDProtoClass<ServerWarning> {
    #private;
    event: string;
    params: ServerWarningParams;
    confirmId?: string | undefined;
    /**
     * Something went wrong with client message
     * @param event DOCUMENTATION MISSING
     * @param params DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, params: ServerWarningParams, confirmId?: string | undefined);
    static fromJSON(raw: ServerWarningJSON): ServerWarning;
    mappableFields: readonly ["event", "params", "confirmId"];
    toJSON(): ServerWarningJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerWarningJSON>;
}
export interface ServerWarningParamsJSON {
    message: string;
    orig: any;
}
export declare class ServerWarningParams implements TDProtoClass<ServerWarningParams> {
    #private;
    message: string;
    orig: any;
    /**
     * Params of the server.warning event
     * @param message Message
     * @param orig Debug information
     */
    constructor(message: string, orig: any);
    static fromJSON(raw: ServerWarningParamsJSON): ServerWarningParams;
    mappableFields: readonly ["message", "orig"];
    toJSON(): ServerWarningParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerWarningParamsJSON>;
}
export interface ServerWorkplaceUpdatedJSON {
    event: string;
    params: ServerWorkplaceUpdatedParamsJSON;
    confirm_id?: string;
}
export declare class ServerWorkplaceUpdated implements TDProtoClass<ServerWorkplaceUpdated> {
    #private;
    event: string;
    params: ServerWorkplaceUpdatedParams;
    confirmId?: string | undefined;
    /**
     * ServerWorkplaceUpdated Workplace created or updated
     * @param event DOCUMENTATION MISSING
     * @param params DOCUMENTATION MISSING
     * @param confirmId DOCUMENTATION MISSING
     */
    constructor(event: string, params: ServerWorkplaceUpdatedParams, confirmId?: string | undefined);
    static fromJSON(raw: ServerWorkplaceUpdatedJSON): ServerWorkplaceUpdated;
    mappableFields: readonly ["event", "params", "confirmId"];
    toJSON(): ServerWorkplaceUpdatedJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerWorkplaceUpdatedJSON>;
}
export interface ServerWorkplaceUpdatedParamsJSON {
    workplaces: UserInfoJSON[];
}
export declare class ServerWorkplaceUpdatedParams implements TDProtoClass<ServerWorkplaceUpdatedParams> {
    #private;
    workplaces: UserInfo[];
    /**
     * Params of the server.workplace.updated event
     * @param workplaces Workplaces info
     */
    constructor(workplaces: UserInfo[]);
    static fromJSON(raw: ServerWorkplaceUpdatedParamsJSON): ServerWorkplaceUpdatedParams;
    mappableFields: readonly ["workplaces"];
    toJSON(): ServerWorkplaceUpdatedParamsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ServerWorkplaceUpdatedParamsJSON>;
}
export interface SessionJSON {
    created: ISODateTimeString;
    uid: string;
    addr?: string;
    afk?: boolean;
    is_mobile?: boolean;
    lang?: string;
    team?: string;
    useragent?: string;
}
export declare class Session implements TDProtoClass<Session> {
    #private;
    created: ISODateTimeString;
    uid: string;
    addr?: string | undefined;
    afk?: boolean | undefined;
    isMobile?: boolean | undefined;
    lang?: string | undefined;
    team?: string | undefined;
    useragent?: string | undefined;
    /**
     * Websocket session
     * @param created Creation datetime
     * @param uid Session id
     * @param addr IP address
     * @param afk Away from keyboard
     * @param isMobile Mobile
     * @param lang Language code
     * @param team Team id
     * @param useragent User agent
     */
    constructor(created: ISODateTimeString, uid: string, addr?: string | undefined, afk?: boolean | undefined, isMobile?: boolean | undefined, lang?: string | undefined, team?: string | undefined, useragent?: string | undefined);
    static fromJSON(raw: SessionJSON): Session;
    mappableFields: readonly ["created", "uid", "addr", "afk", "isMobile", "lang", "team", "useragent"];
    toJSON(): SessionJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<SessionJSON>;
}
export interface SharpLinkJSON {
    key: string;
    meta: SharpLinkMetaJSON;
    title: string;
    icons?: IconDataJSON;
}
export declare class SharpLink implements TDProtoClass<SharpLink> {
    #private;
    key: string;
    meta: SharpLinkMeta;
    title: string;
    icons?: IconData | undefined;
    /**
     * #-link autocomplete information
     * @param key What should be inserted to the chat
     * @param meta Internal details
     * @param title What should be visible by user
     * @param icons Icon data, if any
     */
    constructor(key: string, meta: SharpLinkMeta, title: string, icons?: IconData | undefined);
    static fromJSON(raw: SharpLinkJSON): SharpLink;
    mappableFields: readonly ["key", "meta", "title", "icons"];
    toJSON(): SharpLinkJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<SharpLinkJSON>;
}
export interface SharpLinkMetaJSON {
    chat_type: ChatType;
    jid: JID;
    done?: boolean;
    public?: boolean;
    num?: number;
    task_status?: string;
}
export declare class SharpLinkMeta implements TDProtoClass<SharpLinkMeta> {
    #private;
    chatType: ChatType;
    jid: JID;
    done?: boolean | undefined;
    isPublic?: boolean | undefined;
    num?: number | undefined;
    taskStatus?: string | undefined;
    /**
     * #-link autocomplete details
     * @param chatType Chat type
     * @param jid Chat id
     * @param done Deprecated: use `TaskStatus == "done"` comparsion
     * @param isPublic Is task or group public for non-guests
     * @param num Task number (for tasks)
     * @param taskStatus Task status (for tasks)
     */
    constructor(chatType: ChatType, jid: JID, done?: boolean | undefined, isPublic?: boolean | undefined, num?: number | undefined, taskStatus?: string | undefined);
    static fromJSON(raw: SharpLinkMetaJSON): SharpLinkMeta;
    mappableFields: readonly ["chatType", "jid", "done", "isPublic", "num", "taskStatus"];
    toJSON(): SharpLinkMetaJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<SharpLinkMetaJSON>;
}
export interface ShortMessageJSON {
    chat: JID;
    chat_type: ChatType;
    created: ISODateTimeString;
    from: JID;
    gentime: number;
    message_id: string;
    to: JID;
    is_archive?: boolean;
}
export declare class ShortMessage implements TDProtoClass<ShortMessage> {
    #private;
    readonly chat: JID;
    readonly chatType: ChatType;
    readonly created: ISODateTimeString;
    readonly from: JID;
    readonly gentime: number;
    messageId: string;
    to: JID;
    readonly isArchive?: boolean | undefined;
    /**
     * Short message based on chat message
     * @param chat Chat id
     * @param chatType Chat type
     * @param created Message creation datetime (set by server side) or sending datetime in future for draft messages
     * @param from Sender contact id
     * @param gentime Object version
     * @param messageId Message uid
     * @param to Recipient id (group, task or contact)
     * @param isArchive This message is archive. True or null
     */
    constructor(chat: JID, chatType: ChatType, created: ISODateTimeString, from: JID, gentime: number, messageId: string, to: JID, isArchive?: boolean | undefined);
    static fromJSON(raw: ShortMessageJSON): ShortMessage;
    mappableFields: readonly ["chat", "chatType", "created", "from", "gentime", "messageId", "to", "isArchive"];
    toJSON(): ShortMessageJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ShortMessageJSON>;
}
export interface SingleIconJSON {
    height: number;
    url: string;
    width: number;
}
export declare class SingleIcon implements TDProtoClass<SingleIcon> {
    #private;
    height: number;
    url: string;
    width: number;
    /**
     * Small or large icon
     * @param height Icon height, in pixels
     * @param url absolute url to icon
     * @param width Icon width, in pixels
     */
    constructor(height: number, url: string, width: number);
    static fromJSON(raw: SingleIconJSON): SingleIcon;
    mappableFields: readonly ["height", "url", "width"];
    toJSON(): SingleIconJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<SingleIconJSON>;
}
export interface StickerJSON {
    icon100: string;
    icon128: string;
    icon200: string;
    icon64: string;
    message_content: MessageContentJSON;
    uid: string;
}
export declare class Sticker implements TDProtoClass<Sticker> {
    #private;
    icon100: string;
    icon128: string;
    icon200: string;
    icon64: string;
    messageContent: MessageContent;
    uid: string;
    /**
     * Single sticker
     * @param icon100 DOCUMENTATION MISSING
     * @param icon128 DOCUMENTATION MISSING
     * @param icon200 DOCUMENTATION MISSING
     * @param icon64 DOCUMENTATION MISSING
     * @param messageContent DOCUMENTATION MISSING
     * @param uid DOCUMENTATION MISSING
     */
    constructor(icon100: string, icon128: string, icon200: string, icon64: string, messageContent: MessageContent, uid: string);
    static fromJSON(raw: StickerJSON): Sticker;
    mappableFields: readonly ["icon100", "icon128", "icon200", "icon64", "messageContent", "uid"];
    toJSON(): StickerJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<StickerJSON>;
}
export interface StickerpackJSON {
    name: string;
    stickers: StickerJSON[];
    title: string;
    uid: string;
    author?: string;
    author_link?: string;
}
export declare class Stickerpack implements TDProtoClass<Stickerpack> {
    #private;
    name: string;
    stickers: Sticker[];
    title: string;
    uid: string;
    author?: string | undefined;
    authorLink?: string | undefined;
    /**
     * Collection of stickers
     * @param name DOCUMENTATION MISSING
     * @param stickers DOCUMENTATION MISSING
     * @param title DOCUMENTATION MISSING
     * @param uid DOCUMENTATION MISSING
     * @param author DOCUMENTATION MISSING
     * @param authorLink DOCUMENTATION MISSING
     */
    constructor(name: string, stickers: Sticker[], title: string, uid: string, author?: string | undefined, authorLink?: string | undefined);
    static fromJSON(raw: StickerpackJSON): Stickerpack;
    mappableFields: readonly ["name", "stickers", "title", "uid", "author", "authorLink"];
    toJSON(): StickerpackJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<StickerpackJSON>;
}
export interface SubscriptionJSON {
    uid: string;
    activated?: string;
    empty_workplace_count?: number;
    expires?: string;
    tariff_uid?: string;
    user_uid?: string;
}
export declare class Subscription implements TDProtoClass<Subscription> {
    #private;
    uid: string;
    activated?: string | undefined;
    emptyWorkplaceCount?: number | undefined;
    expires?: string | undefined;
    tariffUid?: string | undefined;
    userUid?: string | undefined;
    /**
     * Subscription - an entity that signifies the fact of subscribing to the tariff of any team for a certain period (not defined, in the case of the default tariff)
     * @param uid Subscription id
     * @param activated Subscription activation time
     * @param emptyWorkplaceCount EmptyWorkplaceCount empty workplace count
     * @param expires Subscription expiration time
     * @param tariffUid ID of the tariff for which the subscription is valid
     * @param userUid ID of the user who subscribed
     */
    constructor(uid: string, activated?: string | undefined, emptyWorkplaceCount?: number | undefined, expires?: string | undefined, tariffUid?: string | undefined, userUid?: string | undefined);
    static fromJSON(raw: SubscriptionJSON): Subscription;
    mappableFields: readonly ["uid", "activated", "emptyWorkplaceCount", "expires", "tariffUid", "userUid"];
    toJSON(): SubscriptionJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<SubscriptionJSON>;
}
export interface SubtaskJSON {
    assignee: JID;
    display_name: string;
    jid: JID;
    num: number;
    title: string;
    complexity?: number;
    deadline?: ISODateTimeString;
    deadline_expired?: boolean;
    importance?: number;
    public?: boolean;
    task_status?: string;
}
export declare class Subtask implements TDProtoClass<Subtask> {
    #private;
    assignee: JID;
    displayName: string;
    jid: JID;
    num: number;
    title: string;
    complexity?: number | undefined;
    deadline?: string | undefined;
    deadlineExpired?: boolean | undefined;
    importance?: number | undefined;
    isPublic?: boolean | undefined;
    taskStatus?: string | undefined;
    /**
     * Link to sub/sup task
     * @param assignee Assignee contact id. Tasks only
     * @param displayName Title
     * @param jid Task id
     * @param num Task number in this team
     * @param title Task title. Generated from number and description
     * @param complexity Subtask complexity, number
     * @param deadline Subtask deadline in iso format, if any
     * @param deadlineExpired Is subtask deadline expired
     * @param importance Subtask importance, if available in team
     * @param isPublic Is task or group public for non-guests
     * @param taskStatus Subtask task status
     */
    constructor(assignee: JID, displayName: string, jid: JID, num: number, title: string, complexity?: number | undefined, deadline?: string | undefined, deadlineExpired?: boolean | undefined, importance?: number | undefined, isPublic?: boolean | undefined, taskStatus?: string | undefined);
    static fromJSON(raw: SubtaskJSON): Subtask;
    mappableFields: readonly ["assignee", "displayName", "jid", "num", "title", "complexity", "deadline", "deadlineExpired", "importance", "isPublic", "taskStatus"];
    toJSON(): SubtaskJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<SubtaskJSON>;
}
export interface SuspendPersonalAccountResponseJSON {
    success: boolean;
}
export declare class SuspendPersonalAccountResponse implements TDProtoClass<SuspendPersonalAccountResponse> {
    #private;
    success: boolean;
    /**
     * SuspendPersonalAccountResponse response on suspend active personal account
     * @param success DOCUMENTATION MISSING
     */
    constructor(success: boolean);
    static fromJSON(raw: SuspendPersonalAccountResponseJSON): SuspendPersonalAccountResponse;
    mappableFields: readonly ["success"];
    toJSON(): SuspendPersonalAccountResponseJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<SuspendPersonalAccountResponseJSON>;
}
export interface SwipeColorsJSON {
    call: RGBColor;
    end_call: RGBColor;
    hide: RGBColor;
    message: RGBColor;
    notification: RGBColor;
    pin: RGBColor;
}
export declare class SwipeColors implements TDProtoClass<SwipeColors> {
    #private;
    call: RGBColor;
    endCall: RGBColor;
    hide: RGBColor;
    message: RGBColor;
    notification: RGBColor;
    pin: RGBColor;
    /**
     * SwipeColors swipe colors for app
     * @param call Call color
     * @param endCall EndCall
     * @param hide Hide color
     * @param message Message color
     * @param notification Notification color
     * @param pin Pin color
     */
    constructor(call: RGBColor, endCall: RGBColor, hide: RGBColor, message: RGBColor, notification: RGBColor, pin: RGBColor);
    static fromJSON(raw: SwipeColorsJSON): SwipeColors;
    mappableFields: readonly ["call", "endCall", "hide", "message", "notification", "pin"];
    toJSON(): SwipeColorsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<SwipeColorsJSON>;
}
export interface SwitcherColorsJSON {
    off: RGBColor;
    on: RGBColor;
}
export declare class SwitcherColors implements TDProtoClass<SwitcherColors> {
    #private;
    off: RGBColor;
    on: RGBColor;
    /**
     * SwitcherColors switcher colors for app
     * @param off Off color
     * @param on On color
     */
    constructor(off: RGBColor, on: RGBColor);
    static fromJSON(raw: SwitcherColorsJSON): SwitcherColors;
    mappableFields: readonly ["off", "on"];
    toJSON(): SwitcherColorsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<SwitcherColorsJSON>;
}
export interface TagJSON {
    name: string;
    uid: string;
}
export declare class Tag implements TDProtoClass<Tag> {
    #private;
    name: string;
    uid: string;
    /**
     * Task tag
     * @param name Tag name
     * @param uid Tag id
     */
    constructor(name: string, uid: string);
    static fromJSON(raw: TagJSON): Tag;
    mappableFields: readonly ["name", "uid"];
    toJSON(): TagJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<TagJSON>;
}
export interface TariffJSON {
    title_en: string;
    title_ru: string;
    uid: string;
    cloud_space?: number;
    max_members_in_team?: number;
    max_participants_per_call?: number;
    max_upload_filesize?: number;
    price?: string;
}
export declare class Tariff implements TDProtoClass<Tariff> {
    #private;
    titleEn: string;
    titleRu: string;
    uid: string;
    cloudSpace?: number | undefined;
    maxMembersInTeam?: number | undefined;
    maxParticipantsPerCall?: number | undefined;
    maxUploadFilesize?: number | undefined;
    price?: string | undefined;
    /**
     * Tariff for teams
     * @param titleEn Title of tariff in enlish
     * @param titleRu Title of tariff in russian
     * @param uid Tariff id
     * @param cloudSpace Cloud space reserved for storing team users uploads in megabytes
     * @param maxMembersInTeam Maximum allowed number of members in a team
     * @param maxParticipantsPerCall Maximum number of participants per call
     * @param maxUploadFilesize maximum file size for uploading
     * @param price Price of tariff
     */
    constructor(titleEn: string, titleRu: string, uid: string, cloudSpace?: number | undefined, maxMembersInTeam?: number | undefined, maxParticipantsPerCall?: number | undefined, maxUploadFilesize?: number | undefined, price?: string | undefined);
    static fromJSON(raw: TariffJSON): Tariff;
    mappableFields: readonly ["titleEn", "titleRu", "uid", "cloudSpace", "maxMembersInTeam", "maxParticipantsPerCall", "maxUploadFilesize", "price"];
    toJSON(): TariffJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<TariffJSON>;
}
export interface TariffBillingJSON {
    cost_workplace: number;
    currency: Currency;
    description: string;
    disk_space_quota_mb: number;
    free_workplace_count: number;
    id: string;
    is_default: boolean;
    is_free: boolean;
    is_public: boolean;
    max_video_user: number;
    max_voice_user: number;
    name: string;
    nomenclature_name: string;
    open_date: string;
    period_days: number;
    status: TariffStatus;
    step_increasing_workplaces: number;
    video_call_bitrate: number;
    video_sharing_bitrate: number;
    benefit?: string;
    close_date?: string;
    max_workplace_count?: number;
    min_workplace_count?: number;
    priority?: number;
}
export declare class TariffBilling implements TDProtoClass<TariffBilling> {
    #private;
    costWorkplace: number;
    currency: Currency;
    description: string;
    diskSpaceQuotaMb: number;
    freeWorkplaceCount: number;
    id: string;
    isDefault: boolean;
    isFree: boolean;
    isPublic: boolean;
    maxVideoUser: number;
    maxVoiceUser: number;
    name: string;
    nomenclatureName: string;
    openDate: string;
    periodDays: number;
    status: TariffStatus;
    stepIncreasingWorkplaces: number;
    videoCallBitrate: number;
    videoSharingBitrate: number;
    benefit?: string | undefined;
    closeDate?: string | undefined;
    maxWorkplaceCount?: number | undefined;
    minWorkplaceCount?: number | undefined;
    priority?: number | undefined;
    /**
     * Tariff struct of billing API
     * @param costWorkplace Cost of one workplace
     * @param currency Currency of tariff
     * @param description Description of tariff
     * @param diskSpaceQuotaMb Disk space limit per user
     * @param freeWorkplaceCount Count of free workspaces
     * @param id Tariff id
     * @param isDefault Default tariff flag that is set when registering an account
     * @param isFree Flag of availability of free seats when exceeding FreeWorkplace
     * @param isPublic Flag of publicity
     * @param maxVideoUser Maximum count of users in video conference
     * @param maxVoiceUser Maximum count of users in voice conference
     * @param name Name of tariff
     * @param nomenclatureName Nomenclature name of tariff
     * @param openDate Date of opening tariff
     * @param periodDays Number of paid days
     * @param status Status of tariff
     * @param stepIncreasingWorkplaces Minimum step of change count workspaces on tariff
     * @param videoCallBitrate Bitrate of video in video co
     * @param videoSharingBitrate Bitrate of video in video sharing
     * @param benefit Benefit of tariff
     * @param closeDate Date of closing tariff
     * @param maxWorkplaceCount Count of maximum workspaces on tariff
     * @param minWorkplaceCount Count of minimum workspaces on tariff
     * @param priority Priority of tariff
     */
    constructor(costWorkplace: number, currency: Currency, description: string, diskSpaceQuotaMb: number, freeWorkplaceCount: number, id: string, isDefault: boolean, isFree: boolean, isPublic: boolean, maxVideoUser: number, maxVoiceUser: number, name: string, nomenclatureName: string, openDate: string, periodDays: number, status: TariffStatus, stepIncreasingWorkplaces: number, videoCallBitrate: number, videoSharingBitrate: number, benefit?: string | undefined, closeDate?: string | undefined, maxWorkplaceCount?: number | undefined, minWorkplaceCount?: number | undefined, priority?: number | undefined);
    static fromJSON(raw: TariffBillingJSON): TariffBilling;
    mappableFields: readonly ["costWorkplace", "currency", "description", "diskSpaceQuotaMb", "freeWorkplaceCount", "id", "isDefault", "isFree", "isPublic", "maxVideoUser", "maxVoiceUser", "name", "nomenclatureName", "openDate", "periodDays", "status", "stepIncreasingWorkplaces", "videoCallBitrate", "videoSharingBitrate", "benefit", "closeDate", "maxWorkplaceCount", "minWorkplaceCount", "priority"];
    toJSON(): TariffBillingJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<TariffBillingJSON>;
}
export interface TaskJSON {
    assignee?: JID;
    complexity?: number;
    custom_color_index?: number;
    deadline?: ISODateTimeString;
    description?: string;
    importance?: number;
    public?: boolean;
    items?: string[];
    linked_messages?: string[];
    observers?: JID[];
    remind_at?: ISODateTimeString;
    section?: string;
    spent_time?: number;
    tags?: string[];
    task_status?: string;
    uploads?: string[];
    urgency?: number;
}
export declare class Task implements TDProtoClass<Task> {
    #private;
    assignee?: string | undefined;
    complexity?: number | undefined;
    customColorIndex?: number | undefined;
    deadline?: string | undefined;
    description?: string | undefined;
    importance?: number | undefined;
    isPublic?: boolean | undefined;
    items?: string[] | undefined;
    linkedMessages?: string[] | undefined;
    observers?: string[] | undefined;
    remindAt?: string | undefined;
    section?: string | undefined;
    spentTime?: number | undefined;
    tags?: string[] | undefined;
    taskStatus?: string | undefined;
    uploads?: string[] | undefined;
    urgency?: number | undefined;
    /**
     * Task
     * @param assignee User who was assigned the task
     * @param complexity Task complexity
     * @param customColorIndex Custom task color
     * @param deadline Deadline time, if any
     * @param description Task description
     * @param importance Task importance
     * @param isPublic Is task or group public for non-guests
     * @param items Items of the task
     * @param linkedMessages Linked messages
     * @param observers User who follow the task
     * @param remindAt Fire a reminder at this time
     * @param section Task section UID
     * @param spentTime Time spent
     * @param tags Task tags
     * @param taskStatus Task status
     * @param uploads Task uploads
     * @param urgency Task urgency
     */
    constructor(assignee?: string | undefined, complexity?: number | undefined, customColorIndex?: number | undefined, deadline?: string | undefined, description?: string | undefined, importance?: number | undefined, isPublic?: boolean | undefined, items?: string[] | undefined, linkedMessages?: string[] | undefined, observers?: string[] | undefined, remindAt?: string | undefined, section?: string | undefined, spentTime?: number | undefined, tags?: string[] | undefined, taskStatus?: string | undefined, uploads?: string[] | undefined, urgency?: number | undefined);
    static fromJSON(raw: TaskJSON): Task;
    mappableFields: readonly ["assignee", "complexity", "customColorIndex", "deadline", "description", "importance", "isPublic", "items", "linkedMessages", "observers", "remindAt", "section", "spentTime", "tags", "taskStatus", "uploads", "urgency"];
    toJSON(): TaskJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<TaskJSON>;
}
export interface TaskColorJSON {
    dark: RGBColor;
    light: RGBColor;
    regular: RGBColor;
}
export declare class TaskColor implements TDProtoClass<TaskColor> {
    #private;
    dark: RGBColor;
    light: RGBColor;
    regular: RGBColor;
    /**
     * Task color rules color
     * @param dark Dark color
     * @param light Light color
     * @param regular Regular color
     */
    constructor(dark: RGBColor, light: RGBColor, regular: RGBColor);
    static fromJSON(raw: TaskColorJSON): TaskColor;
    mappableFields: readonly ["dark", "light", "regular"];
    toJSON(): TaskColorJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<TaskColorJSON>;
}
export interface TaskCountersJSON {
    jid: JID;
    num_unread?: number;
    num_unread_notices?: number;
}
export declare class TaskCounters implements TDProtoClass<TaskCounters> {
    #private;
    jid: JID;
    numUnread?: number | undefined;
    numUnreadNotices?: number | undefined;
    /**
     * Tasks counters
     * @param jid Task jid
     * @param numUnread Unreads counter
     * @param numUnreadNotices Mentions (@) counter
     */
    constructor(jid: JID, numUnread?: number | undefined, numUnreadNotices?: number | undefined);
    static fromJSON(raw: TaskCountersJSON): TaskCounters;
    mappableFields: readonly ["jid", "numUnread", "numUnreadNotices"];
    toJSON(): TaskCountersJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<TaskCountersJSON>;
}
export interface TaskFilterJSON {
    field: TaskFilterKey;
    title: string;
}
export declare class TaskFilter implements TDProtoClass<TaskFilter> {
    #private;
    field: TaskFilterKey;
    title: string;
    /**
     * Task filter
     * @param field Task filter field
     * @param title Filter title
     */
    constructor(field: TaskFilterKey, title: string);
    static fromJSON(raw: TaskFilterJSON): TaskFilter;
    mappableFields: readonly ["field", "title"];
    toJSON(): TaskFilterJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<TaskFilterJSON>;
}
export interface TaskItemJSON {
    gentime: number;
    text: string;
    can_change?: boolean;
    can_toggle?: boolean;
    checked?: boolean;
    sort_ordering?: number;
    subtask?: SubtaskJSON;
    uid?: string;
}
export declare class TaskItem implements TDProtoClass<TaskItem> {
    #private;
    readonly gentime: number;
    text: string;
    canChange?: boolean | undefined;
    canToggle?: boolean | undefined;
    checked?: boolean | undefined;
    sortOrdering?: number | undefined;
    subtask?: Subtask | undefined;
    uid?: string | undefined;
    /**
     * Task checklist item
     * @param gentime Object version
     * @param text Text or "#{OtherTaskNumber}"
     * @param canChange Can I change this item
     * @param canToggle Can I toggle this item
     * @param checked Item checked
     * @param sortOrdering Sort ordering
     * @param subtask Link to subtask. Optional
     * @param uid Id
     */
    constructor(gentime: number, text: string, canChange?: boolean | undefined, canToggle?: boolean | undefined, checked?: boolean | undefined, sortOrdering?: number | undefined, subtask?: Subtask | undefined, uid?: string | undefined);
    static fromJSON(raw: TaskItemJSON): TaskItem;
    mappableFields: readonly ["gentime", "text", "canChange", "canToggle", "checked", "sortOrdering", "subtask", "uid"];
    toJSON(): TaskItemJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<TaskItemJSON>;
}
export interface TaskItemsJSON {
    checked: boolean;
    name: string;
}
export declare class TaskItems implements TDProtoClass<TaskItems> {
    #private;
    checked: boolean;
    name: string;
    /**
     * Task item
     * @param checked DOCUMENTATION MISSING
     * @param name DOCUMENTATION MISSING
     */
    constructor(checked: boolean, name: string);
    static fromJSON(raw: TaskItemsJSON): TaskItems;
    mappableFields: readonly ["checked", "name"];
    toJSON(): TaskItemsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<TaskItemsJSON>;
}
export interface TaskPreviewJSON {
    assignee: JID;
    deadline: string;
    description: string;
    public: boolean;
    items: TaskItemsJSON[];
    section: string;
    tags: string[];
    _error?: string;
}
export declare class TaskPreview implements TDProtoClass<TaskPreview> {
    #private;
    assignee: JID;
    deadline: string;
    description: string;
    isPublic: boolean;
    items: TaskItems[];
    section: string;
    tags: string[];
    _error?: string | undefined;
    /**
     * Task Preview
     * @param assignee DOCUMENTATION MISSING
     * @param deadline DOCUMENTATION MISSING
     * @param description DOCUMENTATION MISSING
     * @param isPublic DOCUMENTATION MISSING
     * @param items DOCUMENTATION MISSING
     * @param section DOCUMENTATION MISSING
     * @param tags DOCUMENTATION MISSING
     * @param _error DOCUMENTATION MISSING
     */
    constructor(assignee: JID, deadline: string, description: string, isPublic: boolean, items: TaskItems[], section: string, tags: string[], _error?: string | undefined);
    static fromJSON(raw: TaskPreviewJSON): TaskPreview;
    mappableFields: readonly ["assignee", "deadline", "description", "isPublic", "items", "section", "tags", "_error"];
    toJSON(): TaskPreviewJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<TaskPreviewJSON>;
}
export interface TaskSortJSON {
    key: TaskSortKey;
    title: string;
}
export declare class TaskSort implements TDProtoClass<TaskSort> {
    #private;
    key: TaskSortKey;
    title: string;
    /**
     * Task sort type
     * @param key Field
     * @param title Sort title
     */
    constructor(key: TaskSortKey, title: string);
    static fromJSON(raw: TaskSortJSON): TaskSort;
    mappableFields: readonly ["key", "title"];
    toJSON(): TaskSortJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<TaskSortJSON>;
}
export interface TaskStatusJSON {
    name: string;
    sort_ordering: number;
    title: string;
    is_archive?: boolean;
    uid?: string;
}
export declare class TaskStatus implements TDProtoClass<TaskStatus> {
    #private;
    name: string;
    sortOrdering: number;
    title: string;
    isArchive?: boolean | undefined;
    uid?: string | undefined;
    /**
     * Custom task status
     * @param name Status internal name
     * @param sortOrdering Status sort ordering
     * @param title Status localized name
     * @param isArchive Status not used anymore
     * @param uid Status id
     */
    constructor(name: string, sortOrdering: number, title: string, isArchive?: boolean | undefined, uid?: string | undefined);
    static fromJSON(raw: TaskStatusJSON): TaskStatus;
    mappableFields: readonly ["name", "sortOrdering", "title", "isArchive", "uid"];
    toJSON(): TaskStatusJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<TaskStatusJSON>;
}
export interface TaskTabJSON {
    filters: TaskFilterJSON[];
    hide_empty: boolean;
    key: TaskTabKey;
    pagination: boolean;
    show_counter: boolean;
    sort: TaskSortJSON[];
    title: string;
    unread_tasks: TaskCountersJSON[];
}
export declare class TaskTab implements TDProtoClass<TaskTab> {
    #private;
    filters: TaskFilter[];
    hideEmpty: boolean;
    key: TaskTabKey;
    pagination: boolean;
    showCounter: boolean;
    sort: TaskSort[];
    title: string;
    unreadTasks: TaskCounters[];
    /**
     * Task tab
     * @param filters Filters inside tab
     * @param hideEmpty Disable this tab when it has no contents
     * @param key Tab name
     * @param pagination Enable pagination
     * @param showCounter Show unread badge
     * @param sort Sort available in tab
     * @param title Tab title
     * @param unreadTasks Unread tasks with jid and counters
     */
    constructor(filters: TaskFilter[], hideEmpty: boolean, key: TaskTabKey, pagination: boolean, showCounter: boolean, sort: TaskSort[], title: string, unreadTasks: TaskCounters[]);
    static fromJSON(raw: TaskTabJSON): TaskTab;
    mappableFields: readonly ["filters", "hideEmpty", "key", "pagination", "showCounter", "sort", "title", "unreadTasks"];
    toJSON(): TaskTabJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<TaskTabJSON>;
}
export interface TeamJSON {
    account_status: PersonalAccountStatus;
    gentime: number;
    icons: IconDataJSON;
    last_active: boolean;
    max_message_update_age: number;
    me: ContactJSON;
    name: string;
    need_confirmation: boolean;
    uid: string;
    unread: TeamUnreadJSON;
    user_fields: string[];
    available_tariffs?: string[];
    bad_profile?: boolean;
    changeable_statuses?: TeamStatus[];
    contacts?: ContactJSON[];
    default_task_deadline?: string;
    display_family_name_first?: boolean;
    hide_archived_users?: boolean;
    is_archive?: boolean;
    notebot?: JID;
    owner?: ContactJSON;
    pinned?: boolean;
    pinned_sort_ordering?: number;
    single_group?: JID;
    subscription?: SubscriptionJSON;
    task_importance_max?: number;
    task_importance_min?: number;
    task_importance_rev?: boolean;
    theme?: ThemeJSON;
    uploads_size?: number;
    uploads_size_limit?: number;
    use_patronymic?: boolean;
    use_task_complexity?: boolean;
    use_task_importance?: boolean;
    use_task_spent_time?: boolean;
    use_task_urgency?: boolean;
}
export declare class Team implements TDProtoClass<Team> {
    #private;
    readonly accountStatus: PersonalAccountStatus;
    readonly gentime: number;
    readonly icons: IconData;
    readonly lastActive: boolean;
    maxMessageUpdateAge: number;
    me: Contact;
    name: string;
    readonly needConfirmation: boolean;
    readonly uid: string;
    unread: TeamUnread;
    readonly userFields: string[];
    availableTariffs?: string[] | undefined;
    readonly badProfile?: boolean | undefined;
    readonly changeableStatuses?: TeamStatus[] | undefined;
    readonly contacts?: Contact[] | undefined;
    defaultTaskDeadline?: string | undefined;
    displayFamilyNameFirst?: boolean | undefined;
    hideArchivedUsers?: boolean | undefined;
    readonly isArchive?: boolean | undefined;
    readonly notebot?: string | undefined;
    owner?: Contact | undefined;
    pinned?: boolean | undefined;
    pinnedSortOrdering?: number | undefined;
    readonly singleGroup?: string | undefined;
    subscription?: Subscription | undefined;
    taskImportanceMax?: number | undefined;
    taskImportanceMin?: number | undefined;
    taskImportanceRev?: boolean | undefined;
    readonly theme?: Theme | undefined;
    readonly uploadsSize?: number | undefined;
    readonly uploadsSizeLimit?: number | undefined;
    usePatronymic?: boolean | undefined;
    useTaskComplexity?: boolean | undefined;
    useTaskImportance?: boolean | undefined;
    useTaskSpentTime?: boolean | undefined;
    useTaskUrgency?: boolean | undefined;
    /**
     * Team
     * @param accountStatus Personal account status for current team
     * @param gentime Object version
     * @param icons Team icons
     * @param lastActive User last activity was in this team
     * @param maxMessageUpdateAge Max message update/deletion age, in seconds
     * @param me My profile in this team
     * @param name Team name
     * @param needConfirmation Need confirmation after invite to this team
     * @param uid Team id
     * @param unread Unread message counters
     * @param userFields Username fields ordering. Possible values: "family_name", "given_name", "patronymic"
     * @param availableTariffs Team's available tariff by includig archive ones
     * @param badProfile My profile in this team isn't full
     * @param changeableStatuses What status I can set to other team members
     * @param contacts Team contacts. Used only for team creation
     * @param defaultTaskDeadline Default task deadline
     * @param displayFamilyNameFirst Family name should be first in display name
     * @param hideArchivedUsers Don't show archived users by default
     * @param isArchive Team deleted
     * @param notebot Сurrent team favorites bot, jid of chat
     * @param owner Team owner
     * @param pinned Team pinned
     * @param pinnedSortOrdering Sort ordering for pinned team
     * @param singleGroup For single group teams, jid of chat
     * @param subscription Сurrent team subscription
     * @param taskImportanceMax Maximum value of task importance. Default is 5
     * @param taskImportanceMin Minimal value of task importance. Default is 1
     * @param taskImportanceRev Bigger number = bigger importance. Default: lower number = bigger importance
     * @param theme Color theme, if any
     * @param uploadsSize Total uploads size, bytes
     * @param uploadsSizeLimit Maximum uploads size, bytes, if any
     * @param usePatronymic Patronymic in usernames for this team
     * @param useTaskComplexity Use complexity field in task
     * @param useTaskImportance Use importance field in task
     * @param useTaskSpentTime Use spent time field in task
     * @param useTaskUrgency Use urgency field in task
     */
    constructor(accountStatus: PersonalAccountStatus, gentime: number, icons: IconData, lastActive: boolean, maxMessageUpdateAge: number, me: Contact, name: string, needConfirmation: boolean, uid: string, unread: TeamUnread, userFields: string[], availableTariffs?: string[] | undefined, badProfile?: boolean | undefined, changeableStatuses?: TeamStatus[] | undefined, contacts?: Contact[] | undefined, defaultTaskDeadline?: string | undefined, displayFamilyNameFirst?: boolean | undefined, hideArchivedUsers?: boolean | undefined, isArchive?: boolean | undefined, notebot?: string | undefined, owner?: Contact | undefined, pinned?: boolean | undefined, pinnedSortOrdering?: number | undefined, singleGroup?: string | undefined, subscription?: Subscription | undefined, taskImportanceMax?: number | undefined, taskImportanceMin?: number | undefined, taskImportanceRev?: boolean | undefined, theme?: Theme | undefined, uploadsSize?: number | undefined, uploadsSizeLimit?: number | undefined, usePatronymic?: boolean | undefined, useTaskComplexity?: boolean | undefined, useTaskImportance?: boolean | undefined, useTaskSpentTime?: boolean | undefined, useTaskUrgency?: boolean | undefined);
    static fromJSON(raw: TeamJSON): Team;
    mappableFields: readonly ["accountStatus", "gentime", "icons", "lastActive", "maxMessageUpdateAge", "me", "name", "needConfirmation", "uid", "unread", "userFields", "availableTariffs", "badProfile", "changeableStatuses", "contacts", "defaultTaskDeadline", "displayFamilyNameFirst", "hideArchivedUsers", "isArchive", "notebot", "owner", "pinned", "pinnedSortOrdering", "singleGroup", "subscription", "taskImportanceMax", "taskImportanceMin", "taskImportanceRev", "theme", "uploadsSize", "uploadsSizeLimit", "usePatronymic", "useTaskComplexity", "useTaskImportance", "useTaskSpentTime", "useTaskUrgency"];
    toJSON(): TeamJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<TeamJSON>;
}
export interface TeamBillingJSON {
    delete_date?: string;
    team_uuid?: string;
}
export declare class TeamBilling implements TDProtoClass<TeamBilling> {
    #private;
    deleteDate?: string | undefined;
    teamUuid?: string | undefined;
    /**
     * TeamBilling struct of billing api
     * @param deleteDate DOCUMENTATION MISSING
     * @param teamUuid DOCUMENTATION MISSING
     */
    constructor(deleteDate?: string | undefined, teamUuid?: string | undefined);
    static fromJSON(raw: TeamBillingJSON): TeamBilling;
    mappableFields: readonly ["deleteDate", "teamUuid"];
    toJSON(): TeamBillingJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<TeamBillingJSON>;
}
export interface TeamCounterJSON {
    uid: string;
    unread: TeamUnreadJSON;
}
export declare class TeamCounter implements TDProtoClass<TeamCounter> {
    #private;
    uid: string;
    unread: TeamUnread;
    /**
     * Unread message counters
     * @param uid Team id
     * @param unread Unread message counters
     */
    constructor(uid: string, unread: TeamUnread);
    static fromJSON(raw: TeamCounterJSON): TeamCounter;
    mappableFields: readonly ["uid", "unread"];
    toJSON(): TeamCounterJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<TeamCounterJSON>;
}
export interface TeamShortJSON {
    icons: IconDataJSON;
    name: string;
    uid: string;
}
export declare class TeamShort implements TDProtoClass<TeamShort> {
    #private;
    icons: IconData;
    name: string;
    uid: string;
    /**
     * Short team representation. For invites, push notifications, etc. Readonly
     * @param icons Team icons
     * @param name Team name
     * @param uid Team id
     */
    constructor(icons: IconData, name: string, uid: string);
    static fromJSON(raw: TeamShortJSON): TeamShort;
    mappableFields: readonly ["icons", "name", "uid"];
    toJSON(): TeamShortJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<TeamShortJSON>;
}
export interface TermsJSON {
    EnInTeam: string;
    EnTeam: string;
    EnTeamAccess: string;
    EnTeamAdmin: string;
    EnTeamAdmins: string;
    EnTeamGuest: string;
    EnTeamMember: string;
    EnTeamMembers: string;
    EnTeamOwner: string;
    EnTeamSettings: string;
    EnTeams: string;
    EnToTeam: string;
    RuInTeam: string;
    RuTeam: string;
    RuTeamAccess: string;
    RuTeamAdmin: string;
    RuTeamAdmins: string;
    RuTeamD: string;
    RuTeamGuest: string;
    RuTeamMember: string;
    RuTeamMembers: string;
    RuTeamOwner: string;
    RuTeamP: string;
    RuTeamR: string;
    RuTeamSettings: string;
    RuTeamT: string;
    RuTeamV: string;
    RuTeams: string;
    RuTeamsD: string;
    RuTeamsP: string;
    RuTeamsR: string;
    RuTeamsT: string;
    RuTeamsV: string;
    RuToTeam: string;
}
export declare class Terms implements TDProtoClass<Terms> {
    #private;
    EnInTeam: string;
    EnTeam: string;
    EnTeamAccess: string;
    EnTeamAdmin: string;
    EnTeamAdmins: string;
    EnTeamGuest: string;
    EnTeamMember: string;
    EnTeamMembers: string;
    EnTeamOwner: string;
    EnTeamSettings: string;
    EnTeams: string;
    EnToTeam: string;
    RuInTeam: string;
    RuTeam: string;
    RuTeamAccess: string;
    RuTeamAdmin: string;
    RuTeamAdmins: string;
    RuTeamD: string;
    RuTeamGuest: string;
    RuTeamMember: string;
    RuTeamMembers: string;
    RuTeamOwner: string;
    RuTeamP: string;
    RuTeamR: string;
    RuTeamSettings: string;
    RuTeamT: string;
    RuTeamV: string;
    RuTeams: string;
    RuTeamsD: string;
    RuTeamsP: string;
    RuTeamsR: string;
    RuTeamsT: string;
    RuTeamsV: string;
    RuToTeam: string;
    /**
     * Experimental translation fields for "team" entity renaming. Readonly
     * @param EnInTeam "in team"
     * @param EnTeam "team"
     * @param EnTeamAccess "access to team"
     * @param EnTeamAdmin "team admin"
     * @param EnTeamAdmins "team admins"
     * @param EnTeamGuest "team guest"
     * @param EnTeamMember "team member"
     * @param EnTeamMembers "team members"
     * @param EnTeamOwner "team owner",
     * @param EnTeamSettings "team settings"
     * @param EnTeams "teams"
     * @param EnToTeam "to team"
     * @param RuInTeam "в команде"
     * @param RuTeam "команда"
     * @param RuTeamAccess "доступ к команде"
     * @param RuTeamAdmin "администратор команды"
     * @param RuTeamAdmins "администраторы команды"
     * @param RuTeamD "команде"
     * @param RuTeamGuest "гость команды"
     * @param RuTeamMember "участник команды"
     * @param RuTeamMembers "участники команды"
     * @param RuTeamOwner "владелец команды"
     * @param RuTeamP "команде"
     * @param RuTeamR "команды"
     * @param RuTeamSettings "настройки команды"
     * @param RuTeamT "командой"
     * @param RuTeamV "команду"
     * @param RuTeams "команды"
     * @param RuTeamsD "командам"
     * @param RuTeamsP "командах"
     * @param RuTeamsR "команд"
     * @param RuTeamsT "командами"
     * @param RuTeamsV "команды"
     * @param RuToTeam "в команду"
     */
    constructor(EnInTeam: string, EnTeam: string, EnTeamAccess: string, EnTeamAdmin: string, EnTeamAdmins: string, EnTeamGuest: string, EnTeamMember: string, EnTeamMembers: string, EnTeamOwner: string, EnTeamSettings: string, EnTeams: string, EnToTeam: string, RuInTeam: string, RuTeam: string, RuTeamAccess: string, RuTeamAdmin: string, RuTeamAdmins: string, RuTeamD: string, RuTeamGuest: string, RuTeamMember: string, RuTeamMembers: string, RuTeamOwner: string, RuTeamP: string, RuTeamR: string, RuTeamSettings: string, RuTeamT: string, RuTeamV: string, RuTeams: string, RuTeamsD: string, RuTeamsP: string, RuTeamsR: string, RuTeamsT: string, RuTeamsV: string, RuToTeam: string);
    static fromJSON(raw: TermsJSON): Terms;
    mappableFields: readonly ["EnInTeam", "EnTeam", "EnTeamAccess", "EnTeamAdmin", "EnTeamAdmins", "EnTeamGuest", "EnTeamMember", "EnTeamMembers", "EnTeamOwner", "EnTeamSettings", "EnTeams", "EnToTeam", "RuInTeam", "RuTeam", "RuTeamAccess", "RuTeamAdmin", "RuTeamAdmins", "RuTeamD", "RuTeamGuest", "RuTeamMember", "RuTeamMembers", "RuTeamOwner", "RuTeamP", "RuTeamR", "RuTeamSettings", "RuTeamT", "RuTeamV", "RuTeams", "RuTeamsD", "RuTeamsP", "RuTeamsR", "RuTeamsT", "RuTeamsV", "RuToTeam"];
    toJSON(): TermsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<TermsJSON>;
}
export interface ThemeJSON {
    AccentColor: RGBColor;
    AccentHoverColor: RGBColor;
    AppAccentColor: RGBColor;
    AppPrimaryColor: RGBColor;
    BgColor: RGBColor;
    BgHoverColor: RGBColor;
    MainAccent: RGBColor;
    MainAccentHover: RGBColor;
    MainLightAccent: RGBColor;
    MainLink: RGBColor;
    MutedTextColor: RGBColor;
    TextColor: RGBColor;
    TextOnAccentHoverColor: RGBColor;
    attention: RGBColor;
    attention_light: RGBColor;
    avatar: AvatarColorsJSON;
    back: RGBColor;
    back_dark: RGBColor;
    back_light: RGBColor;
    background: RGBColor;
    bg: BgJSON;
    brand: RGBColor;
    brand_dark: RGBColor;
    brand_light: RGBColor;
    button: ButtonColorsJSON;
    call: CallColorsJSON;
    chat_input_background: RGBColor;
    error: RGBColor;
    error_light: RGBColor;
    font: FontColorsJSON;
    ic: IconColorsJSON;
    input: InputColorsJSON;
    message: MessageColorsJSON;
    modal_background: RGBColor;
    substrate_background: RGBColor;
    success: RGBColor;
    success_light: RGBColor;
    swipe: SwipeColorsJSON;
    switcher: SwitcherColorsJSON;
    tab_background: RGBColor;
    title_background: RGBColor;
    web_base: WebBaseJSON;
}
export declare class Theme implements TDProtoClass<Theme> {
    #private;
    AccentColor: RGBColor;
    AccentHoverColor: RGBColor;
    AppAccentColor: RGBColor;
    AppPrimaryColor: RGBColor;
    BgColor: RGBColor;
    BgHoverColor: RGBColor;
    MainAccent: RGBColor;
    MainAccentHover: RGBColor;
    MainLightAccent: RGBColor;
    MainLink: RGBColor;
    MutedTextColor: RGBColor;
    TextColor: RGBColor;
    TextOnAccentHoverColor: RGBColor;
    attention: RGBColor;
    attentionLight: RGBColor;
    avatar: AvatarColors;
    back: RGBColor;
    backDark: RGBColor;
    backLight: RGBColor;
    background: RGBColor;
    bg: Bg;
    brand: RGBColor;
    brandDark: RGBColor;
    brandLight: RGBColor;
    button: ButtonColors;
    call: CallColors;
    chatInputBackground: RGBColor;
    error: RGBColor;
    errorLight: RGBColor;
    font: FontColors;
    ic: IconColors;
    input: InputColors;
    message: MessageColors;
    modalBackground: RGBColor;
    substrateBackground: RGBColor;
    success: RGBColor;
    successLight: RGBColor;
    swipe: SwipeColors;
    switcher: SwitcherColors;
    tabBackground: RGBColor;
    titleBackground: RGBColor;
    webBase: WebBase;
    /**
     * Color theme
     * @param AccentColor AccentColor for web
     * @param AccentHoverColor AccentHoverColor for web
     * @param AppAccentColor Deprecated
     * @param AppPrimaryColor Deprecated
     * @param BgColor BgColor for web
     * @param BgHoverColor BgHoverColor for web
     * @param MainAccent MainAccent for web
     * @param MainAccentHover MainAccentHover for web
     * @param MainLightAccent MainLightAccent for web
     * @param MainLink MainLink for web
     * @param MutedTextColor MutedTextColor for web
     * @param TextColor TextColor for web
     * @param TextOnAccentHoverColor TextOnAccentHoverColor for web
     * @param attention Attention color for app
     * @param attentionLight Attention light color for app
     * @param avatar Avatar colors for app
     * @param back Back light color for app
     * @param backDark Back dark color for app
     * @param backLight Back light color for app
     * @param background Background color for app
     * @param bg Bg colors for app
     * @param brand Brand color for app
     * @param brandDark BrandDark color for app
     * @param brandLight Brand light color for app
     * @param button Button colors for app
     * @param call Call colors for app
     * @param chatInputBackground Chat input background color for app
     * @param error Error color for app
     * @param errorLight Error light color for app
     * @param font Font colors for app
     * @param ic Icon colors for app
     * @param input Input colors for app
     * @param message Message colors for app
     * @param modalBackground Modal background color for app
     * @param substrateBackground Substrate background color for app
     * @param success Success color for app
     * @param successLight Success light color for app
     * @param swipe Swipe colors for app
     * @param switcher Switcher colors for app
     * @param tabBackground Tab background color for app
     * @param titleBackground Title background color for app
     * @param webBase WebBase colors for web
     */
    constructor(AccentColor: RGBColor, AccentHoverColor: RGBColor, AppAccentColor: RGBColor, AppPrimaryColor: RGBColor, BgColor: RGBColor, BgHoverColor: RGBColor, MainAccent: RGBColor, MainAccentHover: RGBColor, MainLightAccent: RGBColor, MainLink: RGBColor, MutedTextColor: RGBColor, TextColor: RGBColor, TextOnAccentHoverColor: RGBColor, attention: RGBColor, attentionLight: RGBColor, avatar: AvatarColors, back: RGBColor, backDark: RGBColor, backLight: RGBColor, background: RGBColor, bg: Bg, brand: RGBColor, brandDark: RGBColor, brandLight: RGBColor, button: ButtonColors, call: CallColors, chatInputBackground: RGBColor, error: RGBColor, errorLight: RGBColor, font: FontColors, ic: IconColors, input: InputColors, message: MessageColors, modalBackground: RGBColor, substrateBackground: RGBColor, success: RGBColor, successLight: RGBColor, swipe: SwipeColors, switcher: SwitcherColors, tabBackground: RGBColor, titleBackground: RGBColor, webBase: WebBase);
    static fromJSON(raw: ThemeJSON): Theme;
    mappableFields: readonly ["AccentColor", "AccentHoverColor", "AppAccentColor", "AppPrimaryColor", "BgColor", "BgHoverColor", "MainAccent", "MainAccentHover", "MainLightAccent", "MainLink", "MutedTextColor", "TextColor", "TextOnAccentHoverColor", "attention", "attentionLight", "avatar", "back", "backDark", "backLight", "background", "bg", "brand", "brandDark", "brandLight", "button", "call", "chatInputBackground", "error", "errorLight", "font", "ic", "input", "message", "modalBackground", "substrateBackground", "success", "successLight", "swipe", "switcher", "tabBackground", "titleBackground", "webBase"];
    toJSON(): ThemeJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<ThemeJSON>;
}
export interface UnblockPersonalAccountResponseJSON {
    success: boolean;
}
export declare class UnblockPersonalAccountResponse implements TDProtoClass<UnblockPersonalAccountResponse> {
    #private;
    success: boolean;
    /**
     * UnblockPersonalAccountResponse response on unblock blocked personal account
     * @param success DOCUMENTATION MISSING
     */
    constructor(success: boolean);
    static fromJSON(raw: UnblockPersonalAccountResponseJSON): UnblockPersonalAccountResponse;
    mappableFields: readonly ["success"];
    toJSON(): UnblockPersonalAccountResponseJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<UnblockPersonalAccountResponseJSON>;
}
export interface UnreadJSON {
    chats: number;
    messages: number;
    notice_messages: number;
}
export declare class Unread implements TDProtoClass<Unread> {
    #private;
    chats: number;
    messages: number;
    noticeMessages: number;
    /**
     * Unread message counters
     * @param chats Total chats with unread messages
     * @param messages Total unread messages
     * @param noticeMessages Total unread messages with mentions
     */
    constructor(chats: number, messages: number, noticeMessages: number);
    static fromJSON(raw: UnreadJSON): Unread;
    mappableFields: readonly ["chats", "messages", "noticeMessages"];
    toJSON(): UnreadJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<UnreadJSON>;
}
export interface UpdatePersonalAccountRequestJSON {
    full_name?: string;
    phone?: string;
}
export declare class UpdatePersonalAccountRequest implements TDProtoClass<UpdatePersonalAccountRequest> {
    #private;
    fullName?: string | undefined;
    phone?: string | undefined;
    /**
     * UpdatePersonalAccountRequest request on update personal account
     * @param fullName DOCUMENTATION MISSING
     * @param phone DOCUMENTATION MISSING
     */
    constructor(fullName?: string | undefined, phone?: string | undefined);
    static fromJSON(raw: UpdatePersonalAccountRequestJSON): UpdatePersonalAccountRequest;
    mappableFields: readonly ["fullName", "phone"];
    toJSON(): UpdatePersonalAccountRequestJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<UpdatePersonalAccountRequestJSON>;
}
export interface UpdatePersonalAccountResponseJSON {
    success?: boolean;
}
export declare class UpdatePersonalAccountResponse implements TDProtoClass<UpdatePersonalAccountResponse> {
    #private;
    success?: boolean | undefined;
    /**
     * UpdatePersonalAccountResponse response on update personal account
     * @param success DOCUMENTATION MISSING
     */
    constructor(success?: boolean | undefined);
    static fromJSON(raw: UpdatePersonalAccountResponseJSON): UpdatePersonalAccountResponse;
    mappableFields: readonly ["success"];
    toJSON(): UpdatePersonalAccountResponseJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<UpdatePersonalAccountResponseJSON>;
}
export interface UpdateTariffRequestJSON {
    tariff_id: string;
    close_date?: string;
    is_default?: boolean;
    status?: TariffStatus;
}
export declare class UpdateTariffRequest implements TDProtoClass<UpdateTariffRequest> {
    #private;
    tariffId: string;
    closeDate?: string | undefined;
    isDefault?: boolean | undefined;
    status?: TariffStatus | undefined;
    /**
     * Request to update the tariff
     * @param tariffId Tariff id
     * @param closeDate Date of closing tariff
     * @param isDefault Default tariff flag that is set when registering an account
     * @param status Status of tariff
     */
    constructor(tariffId: string, closeDate?: string | undefined, isDefault?: boolean | undefined, status?: TariffStatus | undefined);
    static fromJSON(raw: UpdateTariffRequestJSON): UpdateTariffRequest;
    mappableFields: readonly ["tariffId", "closeDate", "isDefault", "status"];
    toJSON(): UpdateTariffRequestJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<UpdateTariffRequestJSON>;
}
export interface UploadJSON {
    content_type: string;
    created: ISODateTimeString;
    name: string;
    size: number;
    type: UploadMediaType;
    uid: string;
    url: string;
    animated?: boolean;
    blurhash?: string;
    duration?: number;
    pdf_version?: PdfVersionJSON;
    preview?: UploadPreviewJSON;
    processing?: boolean;
}
export declare class Upload implements TDProtoClass<Upload> {
    #private;
    contentType: string;
    created: ISODateTimeString;
    name: string;
    size: number;
    type: UploadMediaType;
    uid: string;
    url: string;
    animated?: boolean | undefined;
    blurhash?: string | undefined;
    duration?: number | undefined;
    pdfVersion?: PdfVersion | undefined;
    preview?: UploadPreview | undefined;
    processing?: boolean | undefined;
    /**
     * Uploaded media
     * @param contentType Content type
     * @param created Uploaded at
     * @param name Filename
     * @param size Upload size in bytes
     * @param type ?type=file,image,audio,video
     * @param uid Upload id
     * @param url Absolute url
     * @param animated Is animated (images only)
     * @param blurhash Compact representation of a placeholder for an image (images only)
     * @param duration Mediafile duration (for audio/video only)
     * @param pdfVersion PDF version of file. Experimental
     * @param preview Preview details
     * @param processing File still processing (video only)
     */
    constructor(contentType: string, created: ISODateTimeString, name: string, size: number, type: UploadMediaType, uid: string, url: string, animated?: boolean | undefined, blurhash?: string | undefined, duration?: number | undefined, pdfVersion?: PdfVersion | undefined, preview?: UploadPreview | undefined, processing?: boolean | undefined);
    static fromJSON(raw: UploadJSON): Upload;
    mappableFields: readonly ["contentType", "created", "name", "size", "type", "uid", "url", "animated", "blurhash", "duration", "pdfVersion", "preview", "processing"];
    toJSON(): UploadJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<UploadJSON>;
}
export interface UploadPreviewJSON {
    height: number;
    url: string;
    url_2x: string;
    width: number;
}
export declare class UploadPreview implements TDProtoClass<UploadPreview> {
    #private;
    height: number;
    url: string;
    url2x: string;
    width: number;
    /**
     * Upload preview
     * @param height Height in pixels
     * @param url Absolute url to image
     * @param url2x Absolute url to high resolution image (retina)
     * @param width Width in pixels
     */
    constructor(height: number, url: string, url2x: string, width: number);
    static fromJSON(raw: UploadPreviewJSON): UploadPreview;
    mappableFields: readonly ["height", "url", "url2x", "width"];
    toJSON(): UploadPreviewJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<UploadPreviewJSON>;
}
export interface UploadShortMessageJSON {
    message: ShortMessageJSON;
    upload: UploadJSON;
}
export declare class UploadShortMessage implements TDProtoClass<UploadShortMessage> {
    #private;
    message: ShortMessage;
    upload: Upload;
    /**
     * Upload + ShortMessage
     * @param message Short message information
     * @param upload Upload information
     */
    constructor(message: ShortMessage, upload: Upload);
    static fromJSON(raw: UploadShortMessageJSON): UploadShortMessage;
    mappableFields: readonly ["message", "upload"];
    toJSON(): UploadShortMessageJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<UploadShortMessageJSON>;
}
export interface UserJSON {
    alt_send: boolean;
    always_send_pushes: boolean;
    asterisk_mention: boolean;
    hide_pushes_content: boolean;
    icons: IconDataJSON;
    munread_first: boolean;
    quiet_time_finish: string;
    quiet_time_start: string;
    timezone: string;
    unread_first: boolean;
    default_lang?: string;
    email?: string;
    family_name?: string;
    given_name?: string;
    patronymic?: string;
    phone?: string;
}
export declare class User implements TDProtoClass<User> {
    #private;
    altSend: boolean;
    alwaysSendPushes: boolean;
    asteriskMention: boolean;
    hidePushesContent: boolean;
    icons: IconData;
    munreadFirst: boolean;
    quietTimeFinish: string;
    quietTimeStart: string;
    timezone: string;
    unreadFirst: boolean;
    defaultLang?: string | undefined;
    email?: string | undefined;
    familyName?: string | undefined;
    givenName?: string | undefined;
    patronymic?: string | undefined;
    phone?: string | undefined;
    /**
     * Account data
     * @param altSend Use Ctrl/Cmd + Enter instead Enter
     * @param alwaysSendPushes Send pushes even user is online
     * @param asteriskMention Use * as @ for mentions
     * @param hidePushesContent Hide pushes body
     * @param icons Icon data
     * @param munreadFirst Show unread chats in chat list first on mobiles
     * @param quietTimeFinish Finish silently time (no pushes, no sounds)
     * @param quietTimeStart Start silently time (no pushes, no sounds)
     * @param timezone Timezone
     * @param unreadFirst Show unread chats in chat list first
     * @param defaultLang Default language code
     * @param email Email for login
     * @param familyName Family name
     * @param givenName Given name
     * @param patronymic Patronymic, if any
     * @param phone Phone for login
     */
    constructor(altSend: boolean, alwaysSendPushes: boolean, asteriskMention: boolean, hidePushesContent: boolean, icons: IconData, munreadFirst: boolean, quietTimeFinish: string, quietTimeStart: string, timezone: string, unreadFirst: boolean, defaultLang?: string | undefined, email?: string | undefined, familyName?: string | undefined, givenName?: string | undefined, patronymic?: string | undefined, phone?: string | undefined);
    static fromJSON(raw: UserJSON): User;
    mappableFields: readonly ["altSend", "alwaysSendPushes", "asteriskMention", "hidePushesContent", "icons", "munreadFirst", "quietTimeFinish", "quietTimeStart", "timezone", "unreadFirst", "defaultLang", "email", "familyName", "givenName", "patronymic", "phone"];
    toJSON(): UserJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<UserJSON>;
}
export interface UserAuthJSON {
    created: string;
    kind: string;
    uid: string;
    _age?: number;
    addr?: string;
    country?: string;
    device?: PushDeviceJSON;
    last_access?: string;
    region?: string;
    user_agent?: string;
}
export declare class UserAuth implements TDProtoClass<UserAuth> {
    #private;
    created: string;
    kind: string;
    uid: string;
    _age?: number | undefined;
    addr?: string | undefined;
    country?: string | undefined;
    device?: PushDevice | undefined;
    lastAccess?: string | undefined;
    region?: string | undefined;
    userAgent?: string | undefined;
    /**
     * User authentication
     * @param created DOCUMENTATION MISSING
     * @param kind type of auth
     * @param uid DOCUMENTATION MISSING
     * @param _age DOCUMENTATION MISSING
     * @param addr ip address
     * @param country name of country
     * @param device info about device (struct)
     * @param lastAccess DOCUMENTATION MISSING
     * @param region name of region
     * @param userAgent info about useragent
     */
    constructor(created: string, kind: string, uid: string, _age?: number | undefined, addr?: string | undefined, country?: string | undefined, device?: PushDevice | undefined, lastAccess?: string | undefined, region?: string | undefined, userAgent?: string | undefined);
    static fromJSON(raw: UserAuthJSON): UserAuth;
    mappableFields: readonly ["created", "kind", "uid", "_age", "addr", "country", "device", "lastAccess", "region", "userAgent"];
    toJSON(): UserAuthJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<UserAuthJSON>;
}
export interface UserInfoJSON {
    uuid: string;
    email?: string;
    full_name?: string;
    last_activity?: string;
    phone?: string;
}
export declare class UserInfo implements TDProtoClass<UserInfo> {
    #private;
    uuid: string;
    email?: string | undefined;
    fullName?: string | undefined;
    lastActivity?: string | undefined;
    phone?: string | undefined;
    /**
     * UserInfo user information
     * @param uuid DOCUMENTATION MISSING
     * @param email DOCUMENTATION MISSING
     * @param fullName DOCUMENTATION MISSING
     * @param lastActivity DOCUMENTATION MISSING
     * @param phone DOCUMENTATION MISSING
     */
    constructor(uuid: string, email?: string | undefined, fullName?: string | undefined, lastActivity?: string | undefined, phone?: string | undefined);
    static fromJSON(raw: UserInfoJSON): UserInfo;
    mappableFields: readonly ["uuid", "email", "fullName", "lastActivity", "phone"];
    toJSON(): UserInfoJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<UserInfoJSON>;
}
export interface UserWithMeJSON {
    alt_send: boolean;
    always_send_pushes: boolean;
    asterisk_mention: boolean;
    devices: PushDeviceJSON[];
    hide_pushes_content: boolean;
    icons: IconDataJSON;
    munread_first: boolean;
    quiet_time_finish: string;
    quiet_time_start: string;
    teams: TeamJSON[];
    timezone: string;
    unread_first: boolean;
    account?: PersonalAccountBillingJSON;
    default_lang?: string;
    email?: string;
    family_name?: string;
    given_name?: string;
    inviter?: JID;
    patronymic?: string;
    phone?: string;
}
export declare class UserWithMe implements TDProtoClass<UserWithMe> {
    #private;
    altSend: boolean;
    alwaysSendPushes: boolean;
    asteriskMention: boolean;
    devices: PushDevice[];
    hidePushesContent: boolean;
    icons: IconData;
    munreadFirst: boolean;
    quietTimeFinish: string;
    quietTimeStart: string;
    teams: Team[];
    timezone: string;
    unreadFirst: boolean;
    account?: PersonalAccountBilling | undefined;
    defaultLang?: string | undefined;
    email?: string | undefined;
    familyName?: string | undefined;
    givenName?: string | undefined;
    inviter?: string | undefined;
    patronymic?: string | undefined;
    phone?: string | undefined;
    /**
     * Account data with extra information
     * @param altSend Use Ctrl/Cmd + Enter instead Enter
     * @param alwaysSendPushes Send pushes even user is online
     * @param asteriskMention Use * as @ for mentions
     * @param devices Registered push devices
     * @param hidePushesContent Hide pushes body
     * @param icons Icon data
     * @param munreadFirst Show unread chats in chat list first on mobiles
     * @param quietTimeFinish Finish silently time (no pushes, no sounds)
     * @param quietTimeStart Start silently time (no pushes, no sounds)
     * @param teams Available teams
     * @param timezone Timezone
     * @param unreadFirst Show unread chats in chat list first
     * @param account Personal account from billing
     * @param defaultLang Default language code
     * @param email Email for login
     * @param familyName Family name
     * @param givenName Given name
     * @param inviter Inviter id, if any
     * @param patronymic Patronymic, if any
     * @param phone Phone for login
     */
    constructor(altSend: boolean, alwaysSendPushes: boolean, asteriskMention: boolean, devices: PushDevice[], hidePushesContent: boolean, icons: IconData, munreadFirst: boolean, quietTimeFinish: string, quietTimeStart: string, teams: Team[], timezone: string, unreadFirst: boolean, account?: PersonalAccountBilling | undefined, defaultLang?: string | undefined, email?: string | undefined, familyName?: string | undefined, givenName?: string | undefined, inviter?: string | undefined, patronymic?: string | undefined, phone?: string | undefined);
    static fromJSON(raw: UserWithMeJSON): UserWithMe;
    mappableFields: readonly ["altSend", "alwaysSendPushes", "asteriskMention", "devices", "hidePushesContent", "icons", "munreadFirst", "quietTimeFinish", "quietTimeStart", "teams", "timezone", "unreadFirst", "account", "defaultLang", "email", "familyName", "givenName", "inviter", "patronymic", "phone"];
    toJSON(): UserWithMeJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<UserWithMeJSON>;
}
export interface WallpaperJSON {
    key: string;
    name: string;
    url: string;
}
export declare class Wallpaper implements TDProtoClass<Wallpaper> {
    #private;
    key: string;
    name: string;
    url: string;
    /**
     * Chat wallpaper
     * @param key Unique identifier
     * @param name Localized description
     * @param url Url to jpg or png
     */
    constructor(key: string, name: string, url: string);
    static fromJSON(raw: WallpaperJSON): Wallpaper;
    mappableFields: readonly ["key", "name", "url"];
    toJSON(): WallpaperJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<WallpaperJSON>;
}
export interface WebBaseJSON {
    attention: RGBColor;
    attention_light: RGBColor;
    back_light: RGBColor;
    brand: RGBColor;
    brand_dark: RGBColor;
    brand_light: RGBColor;
    error: RGBColor;
    error_light: RGBColor;
    fade: RGBColor;
    success: RGBColor;
    success_light: RGBColor;
}
export declare class WebBase implements TDProtoClass<WebBase> {
    #private;
    attention: RGBColor;
    attentionLight: RGBColor;
    backLight: RGBColor;
    brand: RGBColor;
    brandDark: RGBColor;
    brandLight: RGBColor;
    error: RGBColor;
    errorLight: RGBColor;
    fade: RGBColor;
    success: RGBColor;
    successLight: RGBColor;
    /**
     * WebBase base colors for web
     * @param attention Attention color
     * @param attentionLight AttentionLight color
     * @param backLight BackLight color
     * @param brand Brand color
     * @param brandDark BrandDark color
     * @param brandLight BrandLight color
     * @param error Error color
     * @param errorLight ErrorLight color
     * @param fade Fade color
     * @param success Success color
     * @param successLight SuccessLight color
     */
    constructor(attention: RGBColor, attentionLight: RGBColor, backLight: RGBColor, brand: RGBColor, brandDark: RGBColor, brandLight: RGBColor, error: RGBColor, errorLight: RGBColor, fade: RGBColor, success: RGBColor, successLight: RGBColor);
    static fromJSON(raw: WebBaseJSON): WebBase;
    mappableFields: readonly ["attention", "attentionLight", "backLight", "brand", "brandDark", "brandLight", "error", "errorLight", "fade", "success", "successLight"];
    toJSON(): WebBaseJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<WebBaseJSON>;
}
export interface WorkplaceBillingJSON {
    user_id?: string;
    user_uuid?: string;
    workplace_id?: string;
}
export declare class WorkplaceBilling implements TDProtoClass<WorkplaceBilling> {
    #private;
    userId?: string | undefined;
    userUuid?: string | undefined;
    workplaceId?: string | undefined;
    /**
     * WorkplaceBilling struct of workplace on personal account
     * @param userId DOCUMENTATION MISSING
     * @param userUuid DOCUMENTATION MISSING
     * @param workplaceId DOCUMENTATION MISSING
     */
    constructor(userId?: string | undefined, userUuid?: string | undefined, workplaceId?: string | undefined);
    static fromJSON(raw: WorkplaceBillingJSON): WorkplaceBilling;
    mappableFields: readonly ["userId", "userUuid", "workplaceId"];
    toJSON(): WorkplaceBillingJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<WorkplaceBillingJSON>;
}
export interface WorkplaceOptionsJSON {
    limit?: number;
    offset?: number;
}
export declare class WorkplaceOptions implements TDProtoClass<WorkplaceOptions> {
    #private;
    limit?: number | undefined;
    offset?: number | undefined;
    /**
     * WorkplaceOptions struct for pagination
     * @param limit DOCUMENTATION MISSING
     * @param offset DOCUMENTATION MISSING
     */
    constructor(limit?: number | undefined, offset?: number | undefined);
    static fromJSON(raw: WorkplaceOptionsJSON): WorkplaceOptions;
    mappableFields: readonly ["limit", "offset"];
    toJSON(): WorkplaceOptionsJSON;
    toJSON(fields: Array<this['mappableFields'][number]>): Partial<WorkplaceOptionsJSON>;
}
export {};
//# sourceMappingURL=index.d.ts.map