/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */

interface TDProtoClass<T> {
  readonly mappableFields: ReadonlyArray<keyof T>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type UiSettings = Record<string, any>
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type UiSettingsData = Record<string, any>

export type ChatType =
   | 'direct'
   | 'group'
   | 'task'

export type GroupStatus =
   | 'admin'
   | 'member'

export type MarkupType =
   | 'bold'
   | 'italic'
   | 'underscore'
   | 'strike'
   | 'code'
   | 'codeblock'
   | 'quote'
   | 'link'
   | 'time'
   | 'unsafe'

export type Mediasubtype =
   | 'sticker'
   | 'newtask'

export type Mediatype =
   | 'plain'
   | 'change'
   | 'deleted'
   | 'file'
   | 'image'
   | 'video'
   | 'audiomsg'
   | 'contact'
   | 'pdf'

export type TeamStatus =
   | 'owner'
   | 'admin'
   | 'member'
   | 'guest'

export type UploadMediaType =
   | 'file'
   | 'image'
   | 'video'
   | 'audio'
   | 'imagefile'

export type Err = string

export type ISODateTimeString = string

export type JID = string

export type PushDeviceType = number

export type RGBColor = string

export type TaskFilterKey = string

export type TaskSortKey = string

export type TaskTabKey = string

export interface TeamUnreadJSON {
   /* eslint-disable camelcase */
   direct: UnreadJSON;
   group: UnreadJSON;
   task: UnreadJSON;
   /* eslint-enable camelcase */
}

export class TeamUnread implements TDProtoClass<TeamUnread> {
  constructor (
    public direct: Unread,
    public group: Unread,
    public task: Unread
  ) {}

  public static fromJSON (raw: TeamUnreadJSON): TeamUnread {
    return new TeamUnread(
      Unread.fromJSON(raw.direct),
      Unread.fromJSON(raw.group),
      Unread.fromJSON(raw.task),
    )
  }

  public mappableFields = [
    'direct',
    'group',
    'task',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    direct: () => ({ direct: this.direct.toJSON() }),
    group: () => ({ group: this.group.toJSON() }),
    task: () => ({ task: this.task.toJSON() }),
    /* eslint-enable camelcase */
  }

  public toJSON (): TeamUnreadJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<TeamUnreadJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ActiveUserDailyStatJSON {
  /* eslint-disable camelcase */
  day: string;
  user_id: number;
  call_seconds_total?: number;
  calls_count?: number;
  family_name?: string;
  given_name?: string;
  messages_count?: number;
  patronymic?: string;
  phone?: string;
  /* eslint-enable camelcase */
}

export class ActiveUserDailyStat implements TDProtoClass<ActiveUserDailyStat> {
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
  constructor (
    public day: string,
    public userId: number,
    public callSecondsTotal?: number,
    public callsCount?: number,
    public familyName?: string,
    public givenName?: string,
    public messagesCount?: number,
    public patronymic?: string,
    public phone?: string,
  ) {}

  public static fromJSON (raw: ActiveUserDailyStatJSON): ActiveUserDailyStat {
    return new ActiveUserDailyStat(
      raw.day,
      raw.user_id,
      raw.call_seconds_total,
      raw.calls_count,
      raw.family_name,
      raw.given_name,
      raw.messages_count,
      raw.patronymic,
      raw.phone,
    )
  }

  public mappableFields = [
    'day',
    'userId',
    'callSecondsTotal',
    'callsCount',
    'familyName',
    'givenName',
    'messagesCount',
    'patronymic',
    'phone',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    day: () => ({ day: this.day }),
    userId: () => ({ user_id: this.userId }),
    callSecondsTotal: () => ({ call_seconds_total: this.callSecondsTotal }),
    callsCount: () => ({ calls_count: this.callsCount }),
    familyName: () => ({ family_name: this.familyName }),
    givenName: () => ({ given_name: this.givenName }),
    messagesCount: () => ({ messages_count: this.messagesCount }),
    patronymic: () => ({ patronymic: this.patronymic }),
    phone: () => ({ phone: this.phone }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ActiveUserDailyStatJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ActiveUserDailyStatJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface AnyEventJSON {
  /* eslint-disable camelcase */
  event: string;
  confirm_id?: string;
  /* eslint-enable camelcase */
}

export class AnyEvent implements TDProtoClass<AnyEvent> {
  /**
   * Generic event representation
   * @param event DOCUMENTATION MISSING
   * @param confirmId DOCUMENTATION MISSING
   */
  constructor (
    public event: string,
    public confirmId?: string,
  ) {}

  public static fromJSON (raw: AnyEventJSON): AnyEvent {
    return new AnyEvent(
      raw.event,
      raw.confirm_id,
    )
  }

  public mappableFields = [
    'event',
    'confirmId',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    event: () => ({ event: this.event }),
    confirmId: () => ({ confirm_id: this.confirmId }),
    /* eslint-enable camelcase */
  }

  public toJSON (): AnyEventJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<AnyEventJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface BaseEventJSON {
  /* eslint-disable camelcase */
  event: string;
  confirm_id?: string;
  /* eslint-enable camelcase */
}

export class BaseEvent implements TDProtoClass<BaseEvent> {
  /**
   * Base of all events
   * @param event DOCUMENTATION MISSING
   * @param confirmId DOCUMENTATION MISSING
   */
  constructor (
    public event: string,
    public confirmId?: string,
  ) {}

  public static fromJSON (raw: BaseEventJSON): BaseEvent {
    return new BaseEvent(
      raw.event,
      raw.confirm_id,
    )
  }

  public mappableFields = [
    'event',
    'confirmId',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    event: () => ({ event: this.event }),
    confirmId: () => ({ confirm_id: this.confirmId }),
    /* eslint-enable camelcase */
  }

  public toJSON (): BaseEventJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<BaseEventJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface BotCommandJSON {
  /* eslint-disable camelcase */
  args: string[];
  key: string;
  title: string;
  /* eslint-enable camelcase */
}

export class BotCommand implements TDProtoClass<BotCommand> {
  /**
   * Bot commands information
   * @param args Command options, if any
   * @param key What should be inserted to the chat
   * @param title What should be visible by user
   */
  constructor (
    public args: string[],
    public key: string,
    public title: string,
  ) {}

  public static fromJSON (raw: BotCommandJSON): BotCommand {
    return new BotCommand(
      raw.args,
      raw.key,
      raw.title,
    )
  }

  public mappableFields = [
    'args',
    'key',
    'title',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    args: () => ({ args: this.args }),
    key: () => ({ key: this.key }),
    title: () => ({ title: this.title }),
    /* eslint-enable camelcase */
  }

  public toJSON (): BotCommandJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<BotCommandJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ButtonColorsJSON {
  /* eslint-disable camelcase */
  brand_active: RGBColor;
  brand_disable: RGBColor;
  brand_static: RGBColor;
  simple_active: RGBColor;
  simple_disable: RGBColor;
  simple_static: RGBColor;
  /* eslint-enable camelcase */
}

export class ButtonColors implements TDProtoClass<ButtonColors> {
  /**
   * ButtonColors button colors for app
   * @param brandActive Brand active color
   * @param brandDisable Brand disable color
   * @param brandStatic Brand static color
   * @param simpleActive Simple active color
   * @param simpleDisable Simple disable color
   * @param simpleStatic Simple static color
   */
  constructor (
    public brandActive: RGBColor,
    public brandDisable: RGBColor,
    public brandStatic: RGBColor,
    public simpleActive: RGBColor,
    public simpleDisable: RGBColor,
    public simpleStatic: RGBColor,
  ) {}

  public static fromJSON (raw: ButtonColorsJSON): ButtonColors {
    return new ButtonColors(
      raw.brand_active,
      raw.brand_disable,
      raw.brand_static,
      raw.simple_active,
      raw.simple_disable,
      raw.simple_static,
    )
  }

  public mappableFields = [
    'brandActive',
    'brandDisable',
    'brandStatic',
    'simpleActive',
    'simpleDisable',
    'simpleStatic',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    brandActive: () => ({ brand_active: this.brandActive }),
    brandDisable: () => ({ brand_disable: this.brandDisable }),
    brandStatic: () => ({ brand_static: this.brandStatic }),
    simpleActive: () => ({ simple_active: this.simpleActive }),
    simpleDisable: () => ({ simple_disable: this.simpleDisable }),
    simpleStatic: () => ({ simple_static: this.simpleStatic }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ButtonColorsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ButtonColorsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface CallDeviceJSON {
  /* eslint-disable camelcase */
  muted: boolean;
  useragent: string;
  /* eslint-enable camelcase */
}

export class CallDevice implements TDProtoClass<CallDevice> {
  /**
   * Call participant device
   * @param muted Device muted
   * @param useragent Device description
   */
  constructor (
    public muted: boolean,
    public useragent: string,
  ) {}

  public static fromJSON (raw: CallDeviceJSON): CallDevice {
    return new CallDevice(
      raw.muted,
      raw.useragent,
    )
  }

  public mappableFields = [
    'muted',
    'useragent',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    muted: () => ({ muted: this.muted }),
    useragent: () => ({ useragent: this.useragent }),
    /* eslint-enable camelcase */
  }

  public toJSON (): CallDeviceJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<CallDeviceJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface CallEventJSON {
  /* eslint-disable camelcase */
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
  /* eslint-enable camelcase */
}

export class CallEvent implements TDProtoClass<CallEvent> {
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
  constructor (
    public audiorecord: boolean,
    public created: ISODateTimeString,
    public gentime: number,
    public jid: JID,
    public timestamp: number,
    public uid: string,
    public buzz?: boolean,
    public finish?: ISODateTimeString,
    public onliners?: CallOnliner[],
    public start?: ISODateTimeString,
  ) {}

  public static fromJSON (raw: CallEventJSON): CallEvent {
    return new CallEvent(
      raw.audiorecord,
      raw.created,
      raw.gentime,
      raw.jid,
      raw.timestamp,
      raw.uid,
      raw.buzz,
      raw.finish,
      raw.onliners && raw.onliners.map(CallOnliner.fromJSON),
      raw.start,
    )
  }

  public mappableFields = [
    'audiorecord',
    'created',
    'gentime',
    'jid',
    'timestamp',
    'uid',
    'buzz',
    'finish',
    'onliners',
    'start',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    audiorecord: () => ({ audiorecord: this.audiorecord }),
    created: () => ({ created: this.created }),
    gentime: () => ({ gentime: this.gentime }),
    jid: () => ({ jid: this.jid }),
    timestamp: () => ({ timestamp: this.timestamp }),
    uid: () => ({ uid: this.uid }),
    buzz: () => ({ buzz: this.buzz }),
    finish: () => ({ finish: this.finish }),
    onliners: () => ({ onliners: this.onliners?.map(u => u.toJSON()) }),
    start: () => ({ start: this.start }),
    /* eslint-enable camelcase */
  }

  public toJSON (): CallEventJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<CallEventJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface CallOnlinerJSON {
  /* eslint-disable camelcase */
  devices: CallDeviceJSON[];
  display_name: string;
  icon: string;
  jid: JID;
  muted: boolean;
  role: string;
  /* eslint-enable camelcase */
}

export class CallOnliner implements TDProtoClass<CallOnliner> {
  /**
   * Call participant
   * @param devices Member devices, strictly one for now
   * @param displayName Contact name
   * @param icon Contact icon
   * @param jid Contact id
   * @param muted Microphone muted. Computed from devices muted states
   * @param role Contact role
   */
  constructor (
    public devices: CallDevice[],
    public displayName: string,
    public icon: string,
    public jid: JID,
    public muted: boolean,
    public role: string,
  ) {}

  public static fromJSON (raw: CallOnlinerJSON): CallOnliner {
    return new CallOnliner(
      raw.devices.map(CallDevice.fromJSON),
      raw.display_name,
      raw.icon,
      raw.jid,
      raw.muted,
      raw.role,
    )
  }

  public mappableFields = [
    'devices',
    'displayName',
    'icon',
    'jid',
    'muted',
    'role',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    devices: () => ({ devices: this.devices.map(u => u.toJSON()) }),
    displayName: () => ({ display_name: this.displayName }),
    icon: () => ({ icon: this.icon }),
    jid: () => ({ jid: this.jid }),
    muted: () => ({ muted: this.muted }),
    role: () => ({ role: this.role }),
    /* eslint-enable camelcase */
  }

  public toJSON (): CallOnlinerJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<CallOnlinerJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ChatJSON {
  /* eslint-disable camelcase */
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
  feed?: boolean;
  hidden?: boolean;
  importance?: number;
  public?: boolean;
  items?: TaskItemJSON[];
  last_activity?: ISODateTimeString;
  last_message?: MessageJSON;
  last_read_message_id?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  linked_messages?: any[];
  links?: MessageLinkJSON[];
  markup?: MarkupEntityJSON[];
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
  /* eslint-enable camelcase */
}

export class Chat implements TDProtoClass<Chat> {
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
   * @param draftGentime Last message draft version, if any
   * @param draftNum Deprecated
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
  constructor (
    public chatType: ChatType,
    public created: ISODateTimeString,
    public displayName: string,
    public gentime: number,
    public icons: IconData,
    public jid: JID,
    public assignee?: JID,
    public autocleanupAge?: number,
    public baseGentime?: number,
    public canAddMember?: boolean,
    public canCall?: boolean,
    public canChangeMemberStatus?: boolean,
    public canChangeSettings?: boolean,
    public canDelete?: boolean,
    public canDeleteAnyMessage?: boolean,
    public canJoin?: boolean,
    public canRemoveMember?: boolean,
    public canSendMessage?: boolean,
    public canSetImportantAnyMessage?: boolean,
    public cantSendMessageReason?: string,
    public changeableFields?: string[],
    public collapsed?: boolean,
    public colorIndex?: number,
    public complexity?: number,
    public countersEnabled?: boolean,
    public deadline?: ISODateTimeString,
    public deadlineExpired?: boolean,
    public defaultForAll?: boolean,
    public description?: string,
    public done?: ISODateTimeString,
    public doneReason?: string,
    public draft?: string,
    public draftGentime?: number,
    public draftNum?: number,
    public feed?: boolean,
    public hidden?: boolean,
    public importance?: number,
    public isPublic?: boolean,
    public items?: TaskItem[],
    public lastActivity?: ISODateTimeString,
    public lastMessage?: Message,
    public lastReadMessageId?: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public linkedMessages?: any[],
    public links?: MessageLink[],
    public readonly markup?: MarkupEntity[],
    public members?: GroupMembership[],
    public notificationsEnabled?: boolean,
    public num?: number,
    public numCheckedItems?: number,
    public numImportants?: number,
    public numItems?: number,
    public numMembers?: number,
    public numUnread?: number,
    public numUnreadNotices?: number,
    public observers?: JID[],
    public owner?: JID,
    public parents?: Subtask[],
    public pinned?: boolean,
    public pinnedMessage?: Message,
    public pinnedSortOrdering?: number,
    public readonlyForMembers?: boolean,
    public section?: string,
    public spentTime?: number,
    public status?: GroupStatus,
    public tabs?: TaskTabKey[],
    public tags?: string[],
    public taskStatus?: string,
    public title?: string,
    public uploads?: Upload[],
    public urgency?: number,
  ) {}

  public static fromJSON (raw: ChatJSON): Chat {
    return new Chat(
      raw.chat_type,
      raw.created,
      raw.display_name,
      raw.gentime,
      IconData.fromJSON(raw.icons),
      raw.jid,
      raw.assignee,
      raw.autocleanup_age,
      raw.base_gentime,
      raw.can_add_member,
      raw.can_call,
      raw.can_change_member_status,
      raw.can_change_settings,
      raw.can_delete,
      raw.can_delete_any_message,
      raw.can_join,
      raw.can_remove_member,
      raw.can_send_message,
      raw.can_set_important_any_message,
      raw.cant_send_message_reason,
      raw.changeable_fields,
      raw.collapsed,
      raw.color_index,
      raw.complexity,
      raw.counters_enabled,
      raw.deadline,
      raw.deadline_expired,
      raw.default_for_all,
      raw.description,
      raw.done,
      raw.done_reason,
      raw.draft,
      raw.draft_gentime,
      raw.draft_num,
      raw.feed,
      raw.hidden,
      raw.importance,
      raw.public,
      raw.items && raw.items.map(TaskItem.fromJSON),
      raw.last_activity,
      raw.last_message && Message.fromJSON(raw.last_message),
      raw.last_read_message_id,
      raw.linked_messages,
      raw.links && raw.links.map(MessageLink.fromJSON),
      raw.markup && raw.markup.map(MarkupEntity.fromJSON),
      raw.members && raw.members.map(GroupMembership.fromJSON),
      raw.notifications_enabled,
      raw.num,
      raw.num_checked_items,
      raw.num_importants,
      raw.num_items,
      raw.num_members,
      raw.num_unread,
      raw.num_unread_notices,
      raw.observers,
      raw.owner,
      raw.parents && raw.parents.map(Subtask.fromJSON),
      raw.pinned,
      raw.pinned_message && Message.fromJSON(raw.pinned_message),
      raw.pinned_sort_ordering,
      raw.readonly_for_members,
      raw.section,
      raw.spent_time,
      raw.status,
      raw.tabs,
      raw.tags,
      raw.task_status,
      raw.title,
      raw.uploads && raw.uploads.map(Upload.fromJSON),
      raw.urgency,
    )
  }

  public mappableFields = [
    'chatType',
    'created',
    'displayName',
    'gentime',
    'icons',
    'jid',
    'assignee',
    'autocleanupAge',
    'baseGentime',
    'canAddMember',
    'canCall',
    'canChangeMemberStatus',
    'canChangeSettings',
    'canDelete',
    'canDeleteAnyMessage',
    'canJoin',
    'canRemoveMember',
    'canSendMessage',
    'canSetImportantAnyMessage',
    'cantSendMessageReason',
    'changeableFields',
    'collapsed',
    'colorIndex',
    'complexity',
    'countersEnabled',
    'deadline',
    'deadlineExpired',
    'defaultForAll',
    'description',
    'done',
    'doneReason',
    'draft',
    'draftGentime',
    'draftNum',
    'feed',
    'hidden',
    'importance',
    'isPublic',
    'items',
    'lastActivity',
    'lastMessage',
    'lastReadMessageId',
    'linkedMessages',
    'links',
    'markup',
    'members',
    'notificationsEnabled',
    'num',
    'numCheckedItems',
    'numImportants',
    'numItems',
    'numMembers',
    'numUnread',
    'numUnreadNotices',
    'observers',
    'owner',
    'parents',
    'pinned',
    'pinnedMessage',
    'pinnedSortOrdering',
    'readonlyForMembers',
    'section',
    'spentTime',
    'status',
    'tabs',
    'tags',
    'taskStatus',
    'title',
    'uploads',
    'urgency',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    chatType: () => ({ chat_type: this.chatType }),
    created: () => ({ created: this.created }),
    displayName: () => ({ display_name: this.displayName }),
    gentime: () => ({ gentime: this.gentime }),
    icons: () => ({ icons: this.icons.toJSON() }),
    jid: () => ({ jid: this.jid }),
    assignee: () => ({ assignee: this.assignee }),
    autocleanupAge: () => ({ autocleanup_age: this.autocleanupAge }),
    baseGentime: () => ({ base_gentime: this.baseGentime }),
    canAddMember: () => ({ can_add_member: this.canAddMember }),
    canCall: () => ({ can_call: this.canCall }),
    canChangeMemberStatus: () => ({ can_change_member_status: this.canChangeMemberStatus }),
    canChangeSettings: () => ({ can_change_settings: this.canChangeSettings }),
    canDelete: () => ({ can_delete: this.canDelete }),
    canDeleteAnyMessage: () => ({ can_delete_any_message: this.canDeleteAnyMessage }),
    canJoin: () => ({ can_join: this.canJoin }),
    canRemoveMember: () => ({ can_remove_member: this.canRemoveMember }),
    canSendMessage: () => ({ can_send_message: this.canSendMessage }),
    canSetImportantAnyMessage: () => ({ can_set_important_any_message: this.canSetImportantAnyMessage }),
    cantSendMessageReason: () => ({ cant_send_message_reason: this.cantSendMessageReason }),
    changeableFields: () => ({ changeable_fields: this.changeableFields }),
    collapsed: () => ({ collapsed: this.collapsed }),
    colorIndex: () => ({ color_index: this.colorIndex }),
    complexity: () => ({ complexity: this.complexity }),
    countersEnabled: () => ({ counters_enabled: this.countersEnabled }),
    deadline: () => ({ deadline: this.deadline }),
    deadlineExpired: () => ({ deadline_expired: this.deadlineExpired }),
    defaultForAll: () => ({ default_for_all: this.defaultForAll }),
    description: () => ({ description: this.description }),
    done: () => ({ done: this.done }),
    doneReason: () => ({ done_reason: this.doneReason }),
    draft: () => ({ draft: this.draft }),
    draftGentime: () => ({ draft_gentime: this.draftGentime }),
    draftNum: () => ({ draft_num: this.draftNum }),
    feed: () => ({ feed: this.feed }),
    hidden: () => ({ hidden: this.hidden }),
    importance: () => ({ importance: this.importance }),
    isPublic: () => ({ public: this.isPublic }),
    items: () => ({ items: this.items?.map(u => u.toJSON()) }),
    lastActivity: () => ({ last_activity: this.lastActivity }),
    lastMessage: () => ({ last_message: this.lastMessage?.toJSON() }),
    lastReadMessageId: () => ({ last_read_message_id: this.lastReadMessageId }),
    linkedMessages: () => ({ linked_messages: this.linkedMessages }),
    links: () => ({ links: this.links?.map(u => u.toJSON()) }),
    markup: () => ({ markup: this.markup?.map(u => u.toJSON()) }),
    members: () => ({ members: this.members?.map(u => u.toJSON()) }),
    notificationsEnabled: () => ({ notifications_enabled: this.notificationsEnabled }),
    num: () => ({ num: this.num }),
    numCheckedItems: () => ({ num_checked_items: this.numCheckedItems }),
    numImportants: () => ({ num_importants: this.numImportants }),
    numItems: () => ({ num_items: this.numItems }),
    numMembers: () => ({ num_members: this.numMembers }),
    numUnread: () => ({ num_unread: this.numUnread }),
    numUnreadNotices: () => ({ num_unread_notices: this.numUnreadNotices }),
    observers: () => ({ observers: this.observers }),
    owner: () => ({ owner: this.owner }),
    parents: () => ({ parents: this.parents?.map(u => u.toJSON()) }),
    pinned: () => ({ pinned: this.pinned }),
    pinnedMessage: () => ({ pinned_message: this.pinnedMessage?.toJSON() }),
    pinnedSortOrdering: () => ({ pinned_sort_ordering: this.pinnedSortOrdering }),
    readonlyForMembers: () => ({ readonly_for_members: this.readonlyForMembers }),
    section: () => ({ section: this.section }),
    spentTime: () => ({ spent_time: this.spentTime }),
    status: () => ({ status: this.status }),
    tabs: () => ({ tabs: this.tabs }),
    tags: () => ({ tags: this.tags }),
    taskStatus: () => ({ task_status: this.taskStatus }),
    title: () => ({ title: this.title }),
    uploads: () => ({ uploads: this.uploads?.map(u => u.toJSON()) }),
    urgency: () => ({ urgency: this.urgency }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ChatJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ChatJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ChatCountersJSON {
  /* eslint-disable camelcase */
  chat_type: ChatType;
  gentime: number;
  jid: JID;
  last_read_message_id: string;
  num_unread: number;
  num_unread_notices: number;
  last_activity?: ISODateTimeString;
  /* eslint-enable camelcase */
}

export class ChatCounters implements TDProtoClass<ChatCounters> {
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
  constructor (
    public chatType: ChatType,
    public gentime: number,
    public jid: JID,
    public lastReadMessageId: string,
    public numUnread: number,
    public numUnreadNotices: number,
    public lastActivity?: ISODateTimeString,
  ) {}

  public static fromJSON (raw: ChatCountersJSON): ChatCounters {
    return new ChatCounters(
      raw.chat_type,
      raw.gentime,
      raw.jid,
      raw.last_read_message_id,
      raw.num_unread,
      raw.num_unread_notices,
      raw.last_activity,
    )
  }

  public mappableFields = [
    'chatType',
    'gentime',
    'jid',
    'lastReadMessageId',
    'numUnread',
    'numUnreadNotices',
    'lastActivity',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    chatType: () => ({ chat_type: this.chatType }),
    gentime: () => ({ gentime: this.gentime }),
    jid: () => ({ jid: this.jid }),
    lastReadMessageId: () => ({ last_read_message_id: this.lastReadMessageId }),
    numUnread: () => ({ num_unread: this.numUnread }),
    numUnreadNotices: () => ({ num_unread_notices: this.numUnreadNotices }),
    lastActivity: () => ({ last_activity: this.lastActivity }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ChatCountersJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ChatCountersJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ChatMessagesJSON {
  /* eslint-disable camelcase */
  messages: MessageJSON[];
  /* eslint-enable camelcase */
}

export class ChatMessages implements TDProtoClass<ChatMessages> {
  /**
   * Chat messages
   * @param messages DOCUMENTATION MISSING
   */
  constructor (
    public messages: Message[],
  ) {}

  public static fromJSON (raw: ChatMessagesJSON): ChatMessages {
    return new ChatMessages(
      raw.messages.map(Message.fromJSON),
    )
  }

  public mappableFields = [
    'messages',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    messages: () => ({ messages: this.messages.map(u => u.toJSON()) }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ChatMessagesJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ChatMessagesJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ChatShortJSON {
  /* eslint-disable camelcase */
  chat_type: ChatType;
  display_name: string;
  icons: IconDataJSON;
  jid: JID;
  /* eslint-enable camelcase */
}

export class ChatShort implements TDProtoClass<ChatShort> {
  /**
   * Minimal chat representation
   * @param chatType Chat type
   * @param displayName Title
   * @param icons Icon data
   * @param jid Group/Task/Contact id
   */
  constructor (
    public chatType: ChatType,
    public displayName: string,
    public icons: IconData,
    public jid: JID,
  ) {}

  public static fromJSON (raw: ChatShortJSON): ChatShort {
    return new ChatShort(
      raw.chat_type,
      raw.display_name,
      IconData.fromJSON(raw.icons),
      raw.jid,
    )
  }

  public mappableFields = [
    'chatType',
    'displayName',
    'icons',
    'jid',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    chatType: () => ({ chat_type: this.chatType }),
    displayName: () => ({ display_name: this.displayName }),
    icons: () => ({ icons: this.icons.toJSON() }),
    jid: () => ({ jid: this.jid }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ChatShortJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ChatShortJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ClientActivityJSON {
  /* eslint-disable camelcase */
  event: string;
  params: ClientActivityParamsJSON;
  confirm_id?: string;
  /* eslint-enable camelcase */
}

export class ClientActivity implements TDProtoClass<ClientActivity> {
  /**
   * Change AFK (away from keyboard) status
   * @param event DOCUMENTATION MISSING
   * @param params DOCUMENTATION MISSING
   * @param confirmId DOCUMENTATION MISSING
   */
  constructor (
    public event: string,
    public params: ClientActivityParams,
    public confirmId?: string,
  ) {}

  public static fromJSON (raw: ClientActivityJSON): ClientActivity {
    return new ClientActivity(
      raw.event,
      ClientActivityParams.fromJSON(raw.params),
      raw.confirm_id,
    )
  }

  public mappableFields = [
    'event',
    'params',
    'confirmId',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    event: () => ({ event: this.event }),
    params: () => ({ params: this.params.toJSON() }),
    confirmId: () => ({ confirm_id: this.confirmId }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ClientActivityJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ClientActivityJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ClientActivityParamsJSON {
  /* eslint-disable camelcase */
  afk: boolean;
  /* eslint-enable camelcase */
}

export class ClientActivityParams implements TDProtoClass<ClientActivityParams> {
  /**
   * Params of the client.activity event
   * @param afk Is away from keyboard
   */
  constructor (
    public afk: boolean,
  ) {}

  public static fromJSON (raw: ClientActivityParamsJSON): ClientActivityParams {
    return new ClientActivityParams(
      raw.afk,
    )
  }

  public mappableFields = [
    'afk',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    afk: () => ({ afk: this.afk }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ClientActivityParamsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ClientActivityParamsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ClientCallBuzzCancelJSON {
  /* eslint-disable camelcase */
  event: string;
  params: ClientCallBuzzCancelParamsJSON;
  confirm_id?: string;
  /* eslint-enable camelcase */
}

export class ClientCallBuzzCancel implements TDProtoClass<ClientCallBuzzCancel> {
  /**
   * Call buzzing cancelled
   * @param event DOCUMENTATION MISSING
   * @param params DOCUMENTATION MISSING
   * @param confirmId DOCUMENTATION MISSING
   */
  constructor (
    public event: string,
    public params: ClientCallBuzzCancelParams,
    public confirmId?: string,
  ) {}

  public static fromJSON (raw: ClientCallBuzzCancelJSON): ClientCallBuzzCancel {
    return new ClientCallBuzzCancel(
      raw.event,
      ClientCallBuzzCancelParams.fromJSON(raw.params),
      raw.confirm_id,
    )
  }

  public mappableFields = [
    'event',
    'params',
    'confirmId',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    event: () => ({ event: this.event }),
    params: () => ({ params: this.params.toJSON() }),
    confirmId: () => ({ confirm_id: this.confirmId }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ClientCallBuzzCancelJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ClientCallBuzzCancelJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ClientCallBuzzCancelParamsJSON {
  /* eslint-disable camelcase */
  jid: JID;
  /* eslint-enable camelcase */
}

export class ClientCallBuzzCancelParams implements TDProtoClass<ClientCallBuzzCancelParams> {
  /**
   * Params of the client.call.buzzcancel event
   * @param jid Chat or contact id
   */
  constructor (
    public jid: JID,
  ) {}

  public static fromJSON (raw: ClientCallBuzzCancelParamsJSON): ClientCallBuzzCancelParams {
    return new ClientCallBuzzCancelParams(
      raw.jid,
    )
  }

  public mappableFields = [
    'jid',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    jid: () => ({ jid: this.jid }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ClientCallBuzzCancelParamsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ClientCallBuzzCancelParamsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ClientCallBuzzParamsJSON {
  /* eslint-disable camelcase */
  jid: JID;
  members?: JID[];
  /* eslint-enable camelcase */
}

export class ClientCallBuzzParams implements TDProtoClass<ClientCallBuzzParams> {
  /**
   * Call buzzing
   * @param jid Chat or contact id
   * @param members List of call participants. Empty value means all participants in call
   */
  constructor (
    public jid: JID,
    public members?: JID[],
  ) {}

  public static fromJSON (raw: ClientCallBuzzParamsJSON): ClientCallBuzzParams {
    return new ClientCallBuzzParams(
      raw.jid,
      raw.members,
    )
  }

  public mappableFields = [
    'jid',
    'members',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    jid: () => ({ jid: this.jid }),
    members: () => ({ members: this.members }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ClientCallBuzzParamsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ClientCallBuzzParamsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ClientCallLeaveJSON {
  /* eslint-disable camelcase */
  event: string;
  params: ClientCallLeaveParamsJSON;
  confirm_id?: string;
  /* eslint-enable camelcase */
}

export class ClientCallLeave implements TDProtoClass<ClientCallLeave> {
  /**
   * Leave call
   * @param event DOCUMENTATION MISSING
   * @param params DOCUMENTATION MISSING
   * @param confirmId DOCUMENTATION MISSING
   */
  constructor (
    public event: string,
    public params: ClientCallLeaveParams,
    public confirmId?: string,
  ) {}

  public static fromJSON (raw: ClientCallLeaveJSON): ClientCallLeave {
    return new ClientCallLeave(
      raw.event,
      ClientCallLeaveParams.fromJSON(raw.params),
      raw.confirm_id,
    )
  }

  public mappableFields = [
    'event',
    'params',
    'confirmId',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    event: () => ({ event: this.event }),
    params: () => ({ params: this.params.toJSON() }),
    confirmId: () => ({ confirm_id: this.confirmId }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ClientCallLeaveJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ClientCallLeaveJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ClientCallLeaveParamsJSON {
  /* eslint-disable camelcase */
  jid: JID;
  reason?: string;
  /* eslint-enable camelcase */
}

export class ClientCallLeaveParams implements TDProtoClass<ClientCallLeaveParams> {
  /**
   * Params of the client.call.leave event
   * @param jid Chat or contact id
   * @param reason Reason, if any
   */
  constructor (
    public jid: JID,
    public reason?: string,
  ) {}

  public static fromJSON (raw: ClientCallLeaveParamsJSON): ClientCallLeaveParams {
    return new ClientCallLeaveParams(
      raw.jid,
      raw.reason,
    )
  }

  public mappableFields = [
    'jid',
    'reason',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    jid: () => ({ jid: this.jid }),
    reason: () => ({ reason: this.reason }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ClientCallLeaveParamsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ClientCallLeaveParamsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ClientCallMuteAllJSON {
  /* eslint-disable camelcase */
  event: string;
  params: ClientCallMuteAllParamsJSON;
  confirm_id?: string;
  /* eslint-enable camelcase */
}

export class ClientCallMuteAll implements TDProtoClass<ClientCallMuteAll> {
  /**
   * Mute all other call participants
   * @param event DOCUMENTATION MISSING
   * @param params DOCUMENTATION MISSING
   * @param confirmId DOCUMENTATION MISSING
   */
  constructor (
    public event: string,
    public params: ClientCallMuteAllParams,
    public confirmId?: string,
  ) {}

  public static fromJSON (raw: ClientCallMuteAllJSON): ClientCallMuteAll {
    return new ClientCallMuteAll(
      raw.event,
      ClientCallMuteAllParams.fromJSON(raw.params),
      raw.confirm_id,
    )
  }

  public mappableFields = [
    'event',
    'params',
    'confirmId',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    event: () => ({ event: this.event }),
    params: () => ({ params: this.params.toJSON() }),
    confirmId: () => ({ confirm_id: this.confirmId }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ClientCallMuteAllJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ClientCallMuteAllJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ClientCallMuteAllParamsJSON {
  /* eslint-disable camelcase */
  jid: JID;
  /* eslint-enable camelcase */
}

export class ClientCallMuteAllParams implements TDProtoClass<ClientCallMuteAllParams> {
  /**
   * Params of the client.call.muteall event
   * @param jid Chat or contact id
   */
  constructor (
    public jid: JID,
  ) {}

  public static fromJSON (raw: ClientCallMuteAllParamsJSON): ClientCallMuteAllParams {
    return new ClientCallMuteAllParams(
      raw.jid,
    )
  }

  public mappableFields = [
    'jid',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    jid: () => ({ jid: this.jid }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ClientCallMuteAllParamsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ClientCallMuteAllParamsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ClientCallOfferJSON {
  /* eslint-disable camelcase */
  event: string;
  params: ClientCallOfferParamsJSON;
  confirm_id?: string;
  /* eslint-enable camelcase */
}

export class ClientCallOffer implements TDProtoClass<ClientCallOffer> {
  /**
   * Start a call
   * @param event DOCUMENTATION MISSING
   * @param params DOCUMENTATION MISSING
   * @param confirmId DOCUMENTATION MISSING
   */
  constructor (
    public event: string,
    public params: ClientCallOfferParams,
    public confirmId?: string,
  ) {}

  public static fromJSON (raw: ClientCallOfferJSON): ClientCallOffer {
    return new ClientCallOffer(
      raw.event,
      ClientCallOfferParams.fromJSON(raw.params),
      raw.confirm_id,
    )
  }

  public mappableFields = [
    'event',
    'params',
    'confirmId',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    event: () => ({ event: this.event }),
    params: () => ({ params: this.params.toJSON() }),
    confirmId: () => ({ confirm_id: this.confirmId }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ClientCallOfferJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ClientCallOfferJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ClientCallOfferParamsJSON {
  /* eslint-disable camelcase */
  jid: JID;
  muted: boolean;
  sdp: string;
  trickle: boolean;
  /* eslint-enable camelcase */
}

export class ClientCallOfferParams implements TDProtoClass<ClientCallOfferParams> {
  /**
   * Params of the client.call.offer event
   * @param jid Chat or contact id
   * @param muted Mute state
   * @param sdp SDP (session description protocol) data
   * @param trickle Is trickle mode enabled
   */
  constructor (
    public jid: JID,
    public muted: boolean,
    public sdp: string,
    public trickle: boolean,
  ) {}

  public static fromJSON (raw: ClientCallOfferParamsJSON): ClientCallOfferParams {
    return new ClientCallOfferParams(
      raw.jid,
      raw.muted,
      raw.sdp,
      raw.trickle,
    )
  }

  public mappableFields = [
    'jid',
    'muted',
    'sdp',
    'trickle',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    jid: () => ({ jid: this.jid }),
    muted: () => ({ muted: this.muted }),
    sdp: () => ({ sdp: this.sdp }),
    trickle: () => ({ trickle: this.trickle }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ClientCallOfferParamsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ClientCallOfferParamsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ClientCallRejectJSON {
  /* eslint-disable camelcase */
  event: string;
  params: ClientCallRejectParamsJSON;
  confirm_id?: string;
  /* eslint-enable camelcase */
}

export class ClientCallReject implements TDProtoClass<ClientCallReject> {
  /**
   * Reject the call
   * @param event DOCUMENTATION MISSING
   * @param params DOCUMENTATION MISSING
   * @param confirmId DOCUMENTATION MISSING
   */
  constructor (
    public event: string,
    public params: ClientCallRejectParams,
    public confirmId?: string,
  ) {}

  public static fromJSON (raw: ClientCallRejectJSON): ClientCallReject {
    return new ClientCallReject(
      raw.event,
      ClientCallRejectParams.fromJSON(raw.params),
      raw.confirm_id,
    )
  }

  public mappableFields = [
    'event',
    'params',
    'confirmId',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    event: () => ({ event: this.event }),
    params: () => ({ params: this.params.toJSON() }),
    confirmId: () => ({ confirm_id: this.confirmId }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ClientCallRejectJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ClientCallRejectJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ClientCallRejectParamsJSON {
  /* eslint-disable camelcase */
  jid: JID;
  reason?: string;
  /* eslint-enable camelcase */
}

export class ClientCallRejectParams implements TDProtoClass<ClientCallRejectParams> {
  /**
   * Params of the client.call.reject event
   * @param jid Chat or contact id
   * @param reason Reason, if any
   */
  constructor (
    public jid: JID,
    public reason?: string,
  ) {}

  public static fromJSON (raw: ClientCallRejectParamsJSON): ClientCallRejectParams {
    return new ClientCallRejectParams(
      raw.jid,
      raw.reason,
    )
  }

  public mappableFields = [
    'jid',
    'reason',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    jid: () => ({ jid: this.jid }),
    reason: () => ({ reason: this.reason }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ClientCallRejectParamsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ClientCallRejectParamsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ClientCallSdpJSON {
  /* eslint-disable camelcase */
  event: string;
  params: ClientCallSdpParamsJSON;
  confirm_id?: string;
  /* eslint-enable camelcase */
}

export class ClientCallSdp implements TDProtoClass<ClientCallSdp> {
  /**
   * For exchange Session Description with server when client's Local Session Description is changed
   * @param event DOCUMENTATION MISSING
   * @param params DOCUMENTATION MISSING
   * @param confirmId DOCUMENTATION MISSING
   */
  constructor (
    public event: string,
    public params: ClientCallSdpParams,
    public confirmId?: string,
  ) {}

  public static fromJSON (raw: ClientCallSdpJSON): ClientCallSdp {
    return new ClientCallSdp(
      raw.event,
      ClientCallSdpParams.fromJSON(raw.params),
      raw.confirm_id,
    )
  }

  public mappableFields = [
    'event',
    'params',
    'confirmId',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    event: () => ({ event: this.event }),
    params: () => ({ params: this.params.toJSON() }),
    confirmId: () => ({ confirm_id: this.confirmId }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ClientCallSdpJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ClientCallSdpJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ClientCallSdpParamsJSON {
  /* eslint-disable camelcase */
  jid: JID;
  jsep: JSEPJSON;
  uid: string;
  /* eslint-enable camelcase */
}

export class ClientCallSdpParams implements TDProtoClass<ClientCallSdpParams> {
  /**
   * Params of the client.call.sdp event
   * @param jid Chat or contact id
   * @param jsep SDP data
   * @param uid Call id
   */
  constructor (
    public jid: JID,
    public jsep: JSEP,
    public uid: string,
  ) {}

  public static fromJSON (raw: ClientCallSdpParamsJSON): ClientCallSdpParams {
    return new ClientCallSdpParams(
      raw.jid,
      JSEP.fromJSON(raw.jsep),
      raw.uid,
    )
  }

  public mappableFields = [
    'jid',
    'jsep',
    'uid',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    jid: () => ({ jid: this.jid }),
    jsep: () => ({ jsep: this.jsep.toJSON() }),
    uid: () => ({ uid: this.uid }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ClientCallSdpParamsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ClientCallSdpParamsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ClientCallSoundJSON {
  /* eslint-disable camelcase */
  event: string;
  params: ClientCallSoundParamsJSON;
  confirm_id?: string;
  /* eslint-enable camelcase */
}

export class ClientCallSound implements TDProtoClass<ClientCallSound> {
  /**
   * Change mute state in call
   * @param event DOCUMENTATION MISSING
   * @param params DOCUMENTATION MISSING
   * @param confirmId DOCUMENTATION MISSING
   */
  constructor (
    public event: string,
    public params: ClientCallSoundParams,
    public confirmId?: string,
  ) {}

  public static fromJSON (raw: ClientCallSoundJSON): ClientCallSound {
    return new ClientCallSound(
      raw.event,
      ClientCallSoundParams.fromJSON(raw.params),
      raw.confirm_id,
    )
  }

  public mappableFields = [
    'event',
    'params',
    'confirmId',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    event: () => ({ event: this.event }),
    params: () => ({ params: this.params.toJSON() }),
    confirmId: () => ({ confirm_id: this.confirmId }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ClientCallSoundJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ClientCallSoundJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ClientCallSoundParamsJSON {
  /* eslint-disable camelcase */
  jid: JID;
  muted: boolean;
  /* eslint-enable camelcase */
}

export class ClientCallSoundParams implements TDProtoClass<ClientCallSoundParams> {
  /**
   * Params of the client.call.sound event
   * @param jid Chat or contact id
   * @param muted Mute state
   */
  constructor (
    public jid: JID,
    public muted: boolean,
  ) {}

  public static fromJSON (raw: ClientCallSoundParamsJSON): ClientCallSoundParams {
    return new ClientCallSoundParams(
      raw.jid,
      raw.muted,
    )
  }

  public mappableFields = [
    'jid',
    'muted',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    jid: () => ({ jid: this.jid }),
    muted: () => ({ muted: this.muted }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ClientCallSoundParamsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ClientCallSoundParamsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ClientCallTrickleJSON {
  /* eslint-disable camelcase */
  event: string;
  params: ClientCallTrickleParamsJSON;
  confirm_id?: string;
  /* eslint-enable camelcase */
}

export class ClientCallTrickle implements TDProtoClass<ClientCallTrickle> {
  /**
   * Send trickle candidate for webrtc connection
   * @param event DOCUMENTATION MISSING
   * @param params DOCUMENTATION MISSING
   * @param confirmId DOCUMENTATION MISSING
   */
  constructor (
    public event: string,
    public params: ClientCallTrickleParams,
    public confirmId?: string,
  ) {}

  public static fromJSON (raw: ClientCallTrickleJSON): ClientCallTrickle {
    return new ClientCallTrickle(
      raw.event,
      ClientCallTrickleParams.fromJSON(raw.params),
      raw.confirm_id,
    )
  }

  public mappableFields = [
    'event',
    'params',
    'confirmId',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    event: () => ({ event: this.event }),
    params: () => ({ params: this.params.toJSON() }),
    confirmId: () => ({ confirm_id: this.confirmId }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ClientCallTrickleJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ClientCallTrickleJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ClientCallTrickleParamsJSON {
  /* eslint-disable camelcase */
  candidate: string;
  jid: JID;
  sdp_mid?: string;
  sdp_mline_index?: number;
  /* eslint-enable camelcase */
}

export class ClientCallTrickleParams implements TDProtoClass<ClientCallTrickleParams> {
  /**
   * Params of client.call.trickle event
   * @param candidate Trickle candidate
   * @param jid Chat or contact id
   * @param sdpMid SDP mid
   * @param sdpMlineIndex SDP index
   */
  constructor (
    public candidate: string,
    public jid: JID,
    public sdpMid?: string,
    public sdpMlineIndex?: number,
  ) {}

  public static fromJSON (raw: ClientCallTrickleParamsJSON): ClientCallTrickleParams {
    return new ClientCallTrickleParams(
      raw.candidate,
      raw.jid,
      raw.sdp_mid,
      raw.sdp_mline_index,
    )
  }

  public mappableFields = [
    'candidate',
    'jid',
    'sdpMid',
    'sdpMlineIndex',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    candidate: () => ({ candidate: this.candidate }),
    jid: () => ({ jid: this.jid }),
    sdpMid: () => ({ sdp_mid: this.sdpMid }),
    sdpMlineIndex: () => ({ sdp_mline_index: this.sdpMlineIndex }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ClientCallTrickleParamsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ClientCallTrickleParamsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ClientChatComposingJSON {
  /* eslint-disable camelcase */
  event: string;
  params: ClientChatComposingParamsJSON;
  confirm_id?: string;
  /* eslint-enable camelcase */
}

export class ClientChatComposing implements TDProtoClass<ClientChatComposing> {
  /**
   * Typing or recording audiomessage
   * @param event DOCUMENTATION MISSING
   * @param params DOCUMENTATION MISSING
   * @param confirmId DOCUMENTATION MISSING
   */
  constructor (
    public event: string,
    public params: ClientChatComposingParams,
    public confirmId?: string,
  ) {}

  public static fromJSON (raw: ClientChatComposingJSON): ClientChatComposing {
    return new ClientChatComposing(
      raw.event,
      ClientChatComposingParams.fromJSON(raw.params),
      raw.confirm_id,
    )
  }

  public mappableFields = [
    'event',
    'params',
    'confirmId',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    event: () => ({ event: this.event }),
    params: () => ({ params: this.params.toJSON() }),
    confirmId: () => ({ confirm_id: this.confirmId }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ClientChatComposingJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ClientChatComposingJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ClientChatComposingParamsJSON {
  /* eslint-disable camelcase */
  jid: JID;
  composing?: boolean;
  draft?: string;
  is_audio?: boolean;
  /* eslint-enable camelcase */
}

export class ClientChatComposingParams implements TDProtoClass<ClientChatComposingParams> {
  /**
   * Params of the client.chat.composing event
   * @param jid Chat or contact id
   * @param composing true = start typing / audio recording, false = stop
   * @param draft Message draft data
   * @param isAudio true = audiomessage, false = text typing
   */
  constructor (
    public jid: JID,
    public composing?: boolean,
    public draft?: string,
    public isAudio?: boolean,
  ) {}

  public static fromJSON (raw: ClientChatComposingParamsJSON): ClientChatComposingParams {
    return new ClientChatComposingParams(
      raw.jid,
      raw.composing,
      raw.draft,
      raw.is_audio,
    )
  }

  public mappableFields = [
    'jid',
    'composing',
    'draft',
    'isAudio',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    jid: () => ({ jid: this.jid }),
    composing: () => ({ composing: this.composing }),
    draft: () => ({ draft: this.draft }),
    isAudio: () => ({ is_audio: this.isAudio }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ClientChatComposingParamsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ClientChatComposingParamsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ClientChatLastreadJSON {
  /* eslint-disable camelcase */
  event: string;
  params: ClientChatLastreadParamsJSON;
  confirm_id?: string;
  /* eslint-enable camelcase */
}

export class ClientChatLastread implements TDProtoClass<ClientChatLastread> {
  /**
   * Last read message in chat changed
   * @param event DOCUMENTATION MISSING
   * @param params DOCUMENTATION MISSING
   * @param confirmId DOCUMENTATION MISSING
   */
  constructor (
    public event: string,
    public params: ClientChatLastreadParams,
    public confirmId?: string,
  ) {}

  public static fromJSON (raw: ClientChatLastreadJSON): ClientChatLastread {
    return new ClientChatLastread(
      raw.event,
      ClientChatLastreadParams.fromJSON(raw.params),
      raw.confirm_id,
    )
  }

  public mappableFields = [
    'event',
    'params',
    'confirmId',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    event: () => ({ event: this.event }),
    params: () => ({ params: this.params.toJSON() }),
    confirmId: () => ({ confirm_id: this.confirmId }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ClientChatLastreadJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ClientChatLastreadJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ClientChatLastreadParamsJSON {
  /* eslint-disable camelcase */
  jid: JID;
  last_read_message_id?: string;
  /* eslint-enable camelcase */
}

export class ClientChatLastreadParams implements TDProtoClass<ClientChatLastreadParams> {
  /**
   * Params of the client.chat.lastread event
   * @param jid Chat or contact id
   * @param lastReadMessageId Last read message id. Omitted = last message in chat
   */
  constructor (
    public jid: JID,
    public lastReadMessageId?: string,
  ) {}

  public static fromJSON (raw: ClientChatLastreadParamsJSON): ClientChatLastreadParams {
    return new ClientChatLastreadParams(
      raw.jid,
      raw.last_read_message_id,
    )
  }

  public mappableFields = [
    'jid',
    'lastReadMessageId',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    jid: () => ({ jid: this.jid }),
    lastReadMessageId: () => ({ last_read_message_id: this.lastReadMessageId }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ClientChatLastreadParamsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ClientChatLastreadParamsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ClientConfirmJSON {
  /* eslint-disable camelcase */
  event: string;
  params: ClientConfirmParamsJSON;
  confirm_id?: string;
  /* eslint-enable camelcase */
}

export class ClientConfirm implements TDProtoClass<ClientConfirm> {
  /**
   * Client confirmed server message
   * @param event DOCUMENTATION MISSING
   * @param params DOCUMENTATION MISSING
   * @param confirmId DOCUMENTATION MISSING
   */
  constructor (
    public event: string,
    public params: ClientConfirmParams,
    public confirmId?: string,
  ) {}

  public static fromJSON (raw: ClientConfirmJSON): ClientConfirm {
    return new ClientConfirm(
      raw.event,
      ClientConfirmParams.fromJSON(raw.params),
      raw.confirm_id,
    )
  }

  public mappableFields = [
    'event',
    'params',
    'confirmId',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    event: () => ({ event: this.event }),
    params: () => ({ params: this.params.toJSON() }),
    confirmId: () => ({ confirm_id: this.confirmId }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ClientConfirmJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ClientConfirmJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ClientConfirmParamsJSON {
  /* eslint-disable camelcase */
  confirm_id: string;
  /* eslint-enable camelcase */
}

export class ClientConfirmParams implements TDProtoClass<ClientConfirmParams> {
  /**
   * Params of the client.confirm event
   * @param confirmId Unique identifier generated by client
   */
  constructor (
    public confirmId: string,
  ) {}

  public static fromJSON (raw: ClientConfirmParamsJSON): ClientConfirmParams {
    return new ClientConfirmParams(
      raw.confirm_id,
    )
  }

  public mappableFields = [
    'confirmId',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    confirmId: () => ({ confirm_id: this.confirmId }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ClientConfirmParamsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ClientConfirmParamsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ClientMessageDeletedJSON {
  /* eslint-disable camelcase */
  event: string;
  params: ClientMessageDeletedParamsJSON;
  confirm_id?: string;
  /* eslint-enable camelcase */
}

export class ClientMessageDeleted implements TDProtoClass<ClientMessageDeleted> {
  /**
   * Message deleted
   * @param event DOCUMENTATION MISSING
   * @param params DOCUMENTATION MISSING
   * @param confirmId DOCUMENTATION MISSING
   */
  constructor (
    public event: string,
    public params: ClientMessageDeletedParams,
    public confirmId?: string,
  ) {}

  public static fromJSON (raw: ClientMessageDeletedJSON): ClientMessageDeleted {
    return new ClientMessageDeleted(
      raw.event,
      ClientMessageDeletedParams.fromJSON(raw.params),
      raw.confirm_id,
    )
  }

  public mappableFields = [
    'event',
    'params',
    'confirmId',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    event: () => ({ event: this.event }),
    params: () => ({ params: this.params.toJSON() }),
    confirmId: () => ({ confirm_id: this.confirmId }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ClientMessageDeletedJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ClientMessageDeletedJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ClientMessageDeletedParamsJSON {
  /* eslint-disable camelcase */
  message_id?: string;
  /* eslint-enable camelcase */
}

export class ClientMessageDeletedParams implements TDProtoClass<ClientMessageDeletedParams> {
  /**
   * Params of the client.message.deleted event
   * @param messageId Message id
   */
  constructor (
    public messageId?: string,
  ) {}

  public static fromJSON (raw: ClientMessageDeletedParamsJSON): ClientMessageDeletedParams {
    return new ClientMessageDeletedParams(
      raw.message_id,
    )
  }

  public mappableFields = [
    'messageId',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    messageId: () => ({ message_id: this.messageId }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ClientMessageDeletedParamsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ClientMessageDeletedParamsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ClientMessageUpdatedJSON {
  /* eslint-disable camelcase */
  event: string;
  params: ClientMessageUpdatedParamsJSON;
  confirm_id?: string;
  /* eslint-enable camelcase */
}

export class ClientMessageUpdated implements TDProtoClass<ClientMessageUpdated> {
  /**
   * Message created or changed
   * @param event DOCUMENTATION MISSING
   * @param params DOCUMENTATION MISSING
   * @param confirmId DOCUMENTATION MISSING
   */
  constructor (
    public event: string,
    public params: ClientMessageUpdatedParams,
    public confirmId?: string,
  ) {}

  public static fromJSON (raw: ClientMessageUpdatedJSON): ClientMessageUpdated {
    return new ClientMessageUpdated(
      raw.event,
      ClientMessageUpdatedParams.fromJSON(raw.params),
      raw.confirm_id,
    )
  }

  public mappableFields = [
    'event',
    'params',
    'confirmId',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    event: () => ({ event: this.event }),
    params: () => ({ params: this.params.toJSON() }),
    confirmId: () => ({ confirm_id: this.confirmId }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ClientMessageUpdatedJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ClientMessageUpdatedJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ClientMessageUpdatedParamsJSON {
  /* eslint-disable camelcase */
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
  /* eslint-enable camelcase */
}

export class ClientMessageUpdatedParams implements TDProtoClass<ClientMessageUpdatedParams> {
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
  constructor (
    public content: MessageContent,
    public to: JID,
    public comment?: string,
    public important?: boolean,
    public linkedMessages?: string[],
    public messageId?: string,
    public nopreview?: boolean,
    public oldStyleAttachment?: boolean,
    public replyTo?: string,
    public uploads?: string[],
  ) {}

  public static fromJSON (raw: ClientMessageUpdatedParamsJSON): ClientMessageUpdatedParams {
    return new ClientMessageUpdatedParams(
      MessageContent.fromJSON(raw.content),
      raw.to,
      raw.comment,
      raw.important,
      raw.linked_messages,
      raw.message_id,
      raw.nopreview,
      raw.old_style_attachment,
      raw.reply_to,
      raw.uploads,
    )
  }

  public mappableFields = [
    'content',
    'to',
    'comment',
    'important',
    'linkedMessages',
    'messageId',
    'nopreview',
    'oldStyleAttachment',
    'replyTo',
    'uploads',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    content: () => ({ content: this.content.toJSON() }),
    to: () => ({ to: this.to }),
    comment: () => ({ comment: this.comment }),
    important: () => ({ important: this.important }),
    linkedMessages: () => ({ linked_messages: this.linkedMessages }),
    messageId: () => ({ message_id: this.messageId }),
    nopreview: () => ({ nopreview: this.nopreview }),
    oldStyleAttachment: () => ({ old_style_attachment: this.oldStyleAttachment }),
    replyTo: () => ({ reply_to: this.replyTo }),
    uploads: () => ({ uploads: this.uploads }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ClientMessageUpdatedParamsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ClientMessageUpdatedParamsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ClientPingJSON {
  /* eslint-disable camelcase */
  event: string;
  confirm_id?: string;
  /* eslint-enable camelcase */
}

export class ClientPing implements TDProtoClass<ClientPing> {
  /**
   * Empty message for checking server connection
   * @param event DOCUMENTATION MISSING
   * @param confirmId DOCUMENTATION MISSING
   */
  constructor (
    public event: string,
    public confirmId?: string,
  ) {}

  public static fromJSON (raw: ClientPingJSON): ClientPing {
    return new ClientPing(
      raw.event,
      raw.confirm_id,
    )
  }

  public mappableFields = [
    'event',
    'confirmId',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    event: () => ({ event: this.event }),
    confirmId: () => ({ confirm_id: this.confirmId }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ClientPingJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ClientPingJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ColorRuleJSON {
  /* eslint-disable camelcase */
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
  /* eslint-enable camelcase */
}

export class ColorRule implements TDProtoClass<ColorRule> {
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
  constructor (
    public colorIndex: number,
    public priority: number,
    public uid: string,
    public description?: string,
    public section?: string,
    public sectionEnabled?: boolean,
    public tags?: string[],
    public tagsEnabled?: boolean,
    public taskImportance?: number,
    public taskImportanceEnabled?: boolean,
    public taskStatus?: string,
    public taskUrgency?: number,
    public taskUrgencyEnabled?: boolean,
  ) {}

  public static fromJSON (raw: ColorRuleJSON): ColorRule {
    return new ColorRule(
      raw.color_index,
      raw.priority,
      raw.uid,
      raw.description,
      raw.section,
      raw.section_enabled,
      raw.tags,
      raw.tags_enabled,
      raw.task_importance,
      raw.task_importance_enabled,
      raw.task_status,
      raw.task_urgency,
      raw.task_urgency_enabled,
    )
  }

  public mappableFields = [
    'colorIndex',
    'priority',
    'uid',
    'description',
    'section',
    'sectionEnabled',
    'tags',
    'tagsEnabled',
    'taskImportance',
    'taskImportanceEnabled',
    'taskStatus',
    'taskUrgency',
    'taskUrgencyEnabled',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    colorIndex: () => ({ color_index: this.colorIndex }),
    priority: () => ({ priority: this.priority }),
    uid: () => ({ uid: this.uid }),
    description: () => ({ description: this.description }),
    section: () => ({ section: this.section }),
    sectionEnabled: () => ({ section_enabled: this.sectionEnabled }),
    tags: () => ({ tags: this.tags }),
    tagsEnabled: () => ({ tags_enabled: this.tagsEnabled }),
    taskImportance: () => ({ task_importance: this.taskImportance }),
    taskImportanceEnabled: () => ({ task_importance_enabled: this.taskImportanceEnabled }),
    taskStatus: () => ({ task_status: this.taskStatus }),
    taskUrgency: () => ({ task_urgency: this.taskUrgency }),
    taskUrgencyEnabled: () => ({ task_urgency_enabled: this.taskUrgencyEnabled }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ColorRuleJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ColorRuleJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ContactJSON {
  /* eslint-disable camelcase */
  contact_email: string;
  contact_phone: string;
  display_name: string;
  gentime: number;
  hide_pushes_content: boolean;
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
  can_create_task?: boolean;
  can_delete?: boolean;
  can_delete_any_message?: boolean;
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
  is_archive?: boolean;
  last_activity?: ISODateTimeString;
  mood?: string;
  munread_first?: boolean;
  node?: string;
  patronymic?: string;
  quiet_time_finish?: string;
  quiet_time_start?: string;
  task_mshort_view?: boolean;
  task_notifications_enabled?: boolean;
  task_short_view?: boolean;
  timezone?: string;
  unread_first?: boolean;
  /* eslint-enable camelcase */
}

export class Contact implements TDProtoClass<Contact> {
  /**
   * Contact
   * @param contactEmail Contact email in this team
   * @param contactPhone Contact phone in this team
   * @param displayName Full name in chats
   * @param gentime Object version
   * @param hidePushesContent Hide pushes body
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
   * @param canCreateTask Can I create task for this contact
   * @param canDelete Can I remove this contact from team
   * @param canDeleteAnyMessage Deprecated
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
   * @param isArchive Contact deleted
   * @param lastActivity Last activity in this team (iso datetime)
   * @param mood Mood in this team
   * @param munreadFirst Show unread chats first in feed in mobile app
   * @param node Node uid for external users
   * @param patronymic Patronymic, if any
   * @param quietTimeFinish Quiet time finish
   * @param quietTimeStart Quiet time start
   * @param taskMshortView Short view in task list in mobile app
   * @param taskNotificationsEnabled Push notifications for task chats
   * @param taskShortView Short view in task list
   * @param timezone Timezone, if any
   * @param unreadFirst Show unread chats first in feed
   */
  constructor (
    public contactEmail: string,
    public contactPhone: string,
    public displayName: string,
    public gentime: number,
    public hidePushesContent: boolean,
    public icons: IconData,
    public jid: JID,
    public role: string,
    public sections: string[],
    public shortName: string,
    public status: TeamStatus,
    public altSend?: boolean,
    public alwaysSendPushes?: boolean,
    public asteriskMention?: boolean,
    public auth2faEnabled?: boolean,
    public auth2faStatus?: string,
    public botname?: string,
    public canAddToGroup?: boolean,
    public canAddToTeam?: boolean,
    public canCall?: boolean,
    public canCreateGroup?: boolean,
    public canCreateTask?: boolean,
    public canDelete?: boolean,
    public canDeleteAnyMessage?: boolean,
    public canImportTasks?: boolean,
    public canJoinPublicGroups?: boolean,
    public canJoinPublicTasks?: boolean,
    public canManageColorRules?: boolean,
    public canManageIntegrations?: boolean,
    public canManageProjects?: boolean,
    public canManageSections?: boolean,
    public canManageTags?: boolean,
    public canSendMessage?: boolean,
    public cantSendMessageReason?: string,
    public changeableFields?: string[],
    public contactMshortView?: boolean,
    public contactShortView?: boolean,
    public contactShowArchived?: boolean,
    public customFields?: ContactCustomFields,
    public debugShowActivity?: boolean,
    public defaultLang?: string,
    public dropallEnabled?: boolean,
    public familyName?: string,
    public focusUntil?: ISODateTimeString,
    public givenName?: string,
    public groupMshortView?: boolean,
    public groupNotificationsEnabled?: boolean,
    public groupShortView?: boolean,
    public isArchive?: boolean,
    public lastActivity?: ISODateTimeString,
    public mood?: string,
    public munreadFirst?: boolean,
    public node?: string,
    public patronymic?: string,
    public quietTimeFinish?: string,
    public quietTimeStart?: string,
    public taskMshortView?: boolean,
    public taskNotificationsEnabled?: boolean,
    public taskShortView?: boolean,
    public timezone?: string,
    public unreadFirst?: boolean,
  ) {}

  public static fromJSON (raw: ContactJSON): Contact {
    return new Contact(
      raw.contact_email,
      raw.contact_phone,
      raw.display_name,
      raw.gentime,
      raw.hide_pushes_content,
      IconData.fromJSON(raw.icons),
      raw.jid,
      raw.role,
      raw.sections,
      raw.short_name,
      raw.status,
      raw.alt_send,
      raw.always_send_pushes,
      raw.asterisk_mention,
      raw.auth_2fa_enabled,
      raw.auth_2fa_status,
      raw.botname,
      raw.can_add_to_group,
      raw.can_add_to_team,
      raw.can_call,
      raw.can_create_group,
      raw.can_create_task,
      raw.can_delete,
      raw.can_delete_any_message,
      raw.can_import_tasks,
      raw.can_join_public_groups,
      raw.can_join_public_tasks,
      raw.can_manage_color_rules,
      raw.can_manage_integrations,
      raw.can_manage_projects,
      raw.can_manage_sections,
      raw.can_manage_tags,
      raw.can_send_message,
      raw.cant_send_message_reason,
      raw.changeable_fields,
      raw.contact_mshort_view,
      raw.contact_short_view,
      raw.contact_show_archived,
      raw.custom_fields && ContactCustomFields.fromJSON(raw.custom_fields),
      raw.debug_show_activity,
      raw.default_lang,
      raw.dropall_enabled,
      raw.family_name,
      raw.focus_until,
      raw.given_name,
      raw.group_mshort_view,
      raw.group_notifications_enabled,
      raw.group_short_view,
      raw.is_archive,
      raw.last_activity,
      raw.mood,
      raw.munread_first,
      raw.node,
      raw.patronymic,
      raw.quiet_time_finish,
      raw.quiet_time_start,
      raw.task_mshort_view,
      raw.task_notifications_enabled,
      raw.task_short_view,
      raw.timezone,
      raw.unread_first,
    )
  }

  public mappableFields = [
    'contactEmail',
    'contactPhone',
    'displayName',
    'gentime',
    'hidePushesContent',
    'icons',
    'jid',
    'role',
    'sections',
    'shortName',
    'status',
    'altSend',
    'alwaysSendPushes',
    'asteriskMention',
    'auth2faEnabled',
    'auth2faStatus',
    'botname',
    'canAddToGroup',
    'canAddToTeam',
    'canCall',
    'canCreateGroup',
    'canCreateTask',
    'canDelete',
    'canDeleteAnyMessage',
    'canImportTasks',
    'canJoinPublicGroups',
    'canJoinPublicTasks',
    'canManageColorRules',
    'canManageIntegrations',
    'canManageProjects',
    'canManageSections',
    'canManageTags',
    'canSendMessage',
    'cantSendMessageReason',
    'changeableFields',
    'contactMshortView',
    'contactShortView',
    'contactShowArchived',
    'customFields',
    'debugShowActivity',
    'defaultLang',
    'dropallEnabled',
    'familyName',
    'focusUntil',
    'givenName',
    'groupMshortView',
    'groupNotificationsEnabled',
    'groupShortView',
    'isArchive',
    'lastActivity',
    'mood',
    'munreadFirst',
    'node',
    'patronymic',
    'quietTimeFinish',
    'quietTimeStart',
    'taskMshortView',
    'taskNotificationsEnabled',
    'taskShortView',
    'timezone',
    'unreadFirst',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    contactEmail: () => ({ contact_email: this.contactEmail }),
    contactPhone: () => ({ contact_phone: this.contactPhone }),
    displayName: () => ({ display_name: this.displayName }),
    gentime: () => ({ gentime: this.gentime }),
    hidePushesContent: () => ({ hide_pushes_content: this.hidePushesContent }),
    icons: () => ({ icons: this.icons.toJSON() }),
    jid: () => ({ jid: this.jid }),
    role: () => ({ role: this.role }),
    sections: () => ({ sections: this.sections }),
    shortName: () => ({ short_name: this.shortName }),
    status: () => ({ status: this.status }),
    altSend: () => ({ alt_send: this.altSend }),
    alwaysSendPushes: () => ({ always_send_pushes: this.alwaysSendPushes }),
    asteriskMention: () => ({ asterisk_mention: this.asteriskMention }),
    auth2faEnabled: () => ({ auth_2fa_enabled: this.auth2faEnabled }),
    auth2faStatus: () => ({ auth_2fa_status: this.auth2faStatus }),
    botname: () => ({ botname: this.botname }),
    canAddToGroup: () => ({ can_add_to_group: this.canAddToGroup }),
    canAddToTeam: () => ({ can_add_to_team: this.canAddToTeam }),
    canCall: () => ({ can_call: this.canCall }),
    canCreateGroup: () => ({ can_create_group: this.canCreateGroup }),
    canCreateTask: () => ({ can_create_task: this.canCreateTask }),
    canDelete: () => ({ can_delete: this.canDelete }),
    canDeleteAnyMessage: () => ({ can_delete_any_message: this.canDeleteAnyMessage }),
    canImportTasks: () => ({ can_import_tasks: this.canImportTasks }),
    canJoinPublicGroups: () => ({ can_join_public_groups: this.canJoinPublicGroups }),
    canJoinPublicTasks: () => ({ can_join_public_tasks: this.canJoinPublicTasks }),
    canManageColorRules: () => ({ can_manage_color_rules: this.canManageColorRules }),
    canManageIntegrations: () => ({ can_manage_integrations: this.canManageIntegrations }),
    canManageProjects: () => ({ can_manage_projects: this.canManageProjects }),
    canManageSections: () => ({ can_manage_sections: this.canManageSections }),
    canManageTags: () => ({ can_manage_tags: this.canManageTags }),
    canSendMessage: () => ({ can_send_message: this.canSendMessage }),
    cantSendMessageReason: () => ({ cant_send_message_reason: this.cantSendMessageReason }),
    changeableFields: () => ({ changeable_fields: this.changeableFields }),
    contactMshortView: () => ({ contact_mshort_view: this.contactMshortView }),
    contactShortView: () => ({ contact_short_view: this.contactShortView }),
    contactShowArchived: () => ({ contact_show_archived: this.contactShowArchived }),
    customFields: () => ({ custom_fields: this.customFields?.toJSON() }),
    debugShowActivity: () => ({ debug_show_activity: this.debugShowActivity }),
    defaultLang: () => ({ default_lang: this.defaultLang }),
    dropallEnabled: () => ({ dropall_enabled: this.dropallEnabled }),
    familyName: () => ({ family_name: this.familyName }),
    focusUntil: () => ({ focus_until: this.focusUntil }),
    givenName: () => ({ given_name: this.givenName }),
    groupMshortView: () => ({ group_mshort_view: this.groupMshortView }),
    groupNotificationsEnabled: () => ({ group_notifications_enabled: this.groupNotificationsEnabled }),
    groupShortView: () => ({ group_short_view: this.groupShortView }),
    isArchive: () => ({ is_archive: this.isArchive }),
    lastActivity: () => ({ last_activity: this.lastActivity }),
    mood: () => ({ mood: this.mood }),
    munreadFirst: () => ({ munread_first: this.munreadFirst }),
    node: () => ({ node: this.node }),
    patronymic: () => ({ patronymic: this.patronymic }),
    quietTimeFinish: () => ({ quiet_time_finish: this.quietTimeFinish }),
    quietTimeStart: () => ({ quiet_time_start: this.quietTimeStart }),
    taskMshortView: () => ({ task_mshort_view: this.taskMshortView }),
    taskNotificationsEnabled: () => ({ task_notifications_enabled: this.taskNotificationsEnabled }),
    taskShortView: () => ({ task_short_view: this.taskShortView }),
    timezone: () => ({ timezone: this.timezone }),
    unreadFirst: () => ({ unread_first: this.unreadFirst }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ContactJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ContactJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ContactCustomFieldsJSON {
  /* eslint-disable camelcase */
  ad_uid?: string;
  company?: string;
  department?: string;
  mobile_phone?: string;
  source?: string;
  title?: string;
  /* eslint-enable camelcase */
}

export class ContactCustomFields implements TDProtoClass<ContactCustomFields> {
  /**
   * Extra contact fields
   * @param adUid AD UID
   * @param company Company
   * @param department Department
   * @param mobilePhone MobilePhone
   * @param source Import source
   * @param title Title
   */
  constructor (
    public adUid?: string,
    public company?: string,
    public department?: string,
    public mobilePhone?: string,
    public source?: string,
    public title?: string,
  ) {}

  public static fromJSON (raw: ContactCustomFieldsJSON): ContactCustomFields {
    return new ContactCustomFields(
      raw.ad_uid,
      raw.company,
      raw.department,
      raw.mobile_phone,
      raw.source,
      raw.title,
    )
  }

  public mappableFields = [
    'adUid',
    'company',
    'department',
    'mobilePhone',
    'source',
    'title',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    adUid: () => ({ ad_uid: this.adUid }),
    company: () => ({ company: this.company }),
    department: () => ({ department: this.department }),
    mobilePhone: () => ({ mobile_phone: this.mobilePhone }),
    source: () => ({ source: this.source }),
    title: () => ({ title: this.title }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ContactCustomFieldsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ContactCustomFieldsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ContactPreviewJSON {
  /* eslint-disable camelcase */
  family_name: string;
  given_name: string;
  phone: string;
  role: string;
  section: string;
  _error?: string;
  patronymic?: string;
  /* eslint-enable camelcase */
}

export class ContactPreview implements TDProtoClass<ContactPreview> {
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
  constructor (
    public familyName: string,
    public givenName: string,
    public phone: string,
    public role: string,
    public section: string,
    public _error?: string,
    public patronymic?: string,
  ) {}

  public static fromJSON (raw: ContactPreviewJSON): ContactPreview {
    return new ContactPreview(
      raw.family_name,
      raw.given_name,
      raw.phone,
      raw.role,
      raw.section,
      raw._error,
      raw.patronymic,
    )
  }

  public mappableFields = [
    'familyName',
    'givenName',
    'phone',
    'role',
    'section',
    '_error',
    'patronymic',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    familyName: () => ({ family_name: this.familyName }),
    givenName: () => ({ given_name: this.givenName }),
    phone: () => ({ phone: this.phone }),
    role: () => ({ role: this.role }),
    section: () => ({ section: this.section }),
    _error: () => ({ _error: this._error }),
    patronymic: () => ({ patronymic: this.patronymic }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ContactPreviewJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ContactPreviewJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ContactShortJSON {
  /* eslint-disable camelcase */
  display_name: string;
  gentime: number;
  icons: IconDataJSON;
  jid: JID;
  short_name: string;
  /* eslint-enable camelcase */
}

export class ContactShort implements TDProtoClass<ContactShort> {
  /**
   * Short contact representation
   * @param displayName Full name in chats
   * @param gentime Object version
   * @param icons Icons data
   * @param jid Contact Id
   * @param shortName Short name in chats
   */
  constructor (
    public displayName: string,
    public gentime: number,
    public icons: IconData,
    public jid: JID,
    public shortName: string,
  ) {}

  public static fromJSON (raw: ContactShortJSON): ContactShort {
    return new ContactShort(
      raw.display_name,
      raw.gentime,
      IconData.fromJSON(raw.icons),
      raw.jid,
      raw.short_name,
    )
  }

  public mappableFields = [
    'displayName',
    'gentime',
    'icons',
    'jid',
    'shortName',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    displayName: () => ({ display_name: this.displayName }),
    gentime: () => ({ gentime: this.gentime }),
    icons: () => ({ icons: this.icons.toJSON() }),
    jid: () => ({ jid: this.jid }),
    shortName: () => ({ short_name: this.shortName }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ContactShortJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ContactShortJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface CountryJSON {
  /* eslint-disable camelcase */
  code: string;
  iso: string;
  name: string;
  default?: boolean;
  popular?: boolean;
  /* eslint-enable camelcase */
}

export class Country implements TDProtoClass<Country> {
  /**
   * Country for phone numbers selection on login screen
   * @param code Phone code
   * @param iso Country ISO code
   * @param name Country name
   * @param isDefault Selected by default
   * @param popular Is popular, need to cache
   */
  constructor (
    public code: string,
    public iso: string,
    public name: string,
    public isDefault?: boolean,
    public popular?: boolean,
  ) {}

  public static fromJSON (raw: CountryJSON): Country {
    return new Country(
      raw.code,
      raw.iso,
      raw.name,
      raw.default,
      raw.popular,
    )
  }

  public mappableFields = [
    'code',
    'iso',
    'name',
    'isDefault',
    'popular',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    code: () => ({ code: this.code }),
    iso: () => ({ iso: this.iso }),
    name: () => ({ name: this.name }),
    isDefault: () => ({ default: this.isDefault }),
    popular: () => ({ popular: this.popular }),
    /* eslint-enable camelcase */
  }

  public toJSON (): CountryJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<CountryJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface DeletedChatJSON {
  /* eslint-disable camelcase */
  chat_type: ChatType;
  gentime: number;
  is_archive: boolean;
  jid: JID;
  /* eslint-enable camelcase */
}

export class DeletedChat implements TDProtoClass<DeletedChat> {
  /**
   * Minimal chat representation for deletion
   * @param chatType Chat type
   * @param gentime Chat fields (related to concrete participant) version
   * @param isArchive Archive flag. Always true for this structure
   * @param jid Group/Task/Contact id
   */
  constructor (
    public chatType: ChatType,
    public gentime: number,
    public isArchive: boolean,
    public jid: JID,
  ) {}

  public static fromJSON (raw: DeletedChatJSON): DeletedChat {
    return new DeletedChat(
      raw.chat_type,
      raw.gentime,
      raw.is_archive,
      raw.jid,
    )
  }

  public mappableFields = [
    'chatType',
    'gentime',
    'isArchive',
    'jid',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    chatType: () => ({ chat_type: this.chatType }),
    gentime: () => ({ gentime: this.gentime }),
    isArchive: () => ({ is_archive: this.isArchive }),
    jid: () => ({ jid: this.jid }),
    /* eslint-enable camelcase */
  }

  public toJSON (): DeletedChatJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<DeletedChatJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface DeletedRemindJSON {
  /* eslint-disable camelcase */
  uid: string;
  /* eslint-enable camelcase */
}

export class DeletedRemind implements TDProtoClass<DeletedRemind> {
  /**
   * Remind deleted message
   * @param uid Remind id
   */
  constructor (
    public uid: string,
  ) {}

  public static fromJSON (raw: DeletedRemindJSON): DeletedRemind {
    return new DeletedRemind(
      raw.uid,
    )
  }

  public mappableFields = [
    'uid',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    uid: () => ({ uid: this.uid }),
    /* eslint-enable camelcase */
  }

  public toJSON (): DeletedRemindJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<DeletedRemindJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface DeletedSectionJSON {
  /* eslint-disable camelcase */
  gentime: number;
  uid: string;
  /* eslint-enable camelcase */
}

export class DeletedSection implements TDProtoClass<DeletedSection> {
  /**
   * Deleted task project or contact section
   * @param gentime Object version
   * @param uid Section uid
   */
  constructor (
    public gentime: number,
    public uid: string,
  ) {}

  public static fromJSON (raw: DeletedSectionJSON): DeletedSection {
    return new DeletedSection(
      raw.gentime,
      raw.uid,
    )
  }

  public mappableFields = [
    'gentime',
    'uid',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    gentime: () => ({ gentime: this.gentime }),
    uid: () => ({ uid: this.uid }),
    /* eslint-enable camelcase */
  }

  public toJSON (): DeletedSectionJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<DeletedSectionJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface DeletedTagJSON {
  /* eslint-disable camelcase */
  uid: string;
  /* eslint-enable camelcase */
}

export class DeletedTag implements TDProtoClass<DeletedTag> {
  /**
   * Delete tag message
   * @param uid Tag id
   */
  constructor (
    public uid: string,
  ) {}

  public static fromJSON (raw: DeletedTagJSON): DeletedTag {
    return new DeletedTag(
      raw.uid,
    )
  }

  public mappableFields = [
    'uid',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    uid: () => ({ uid: this.uid }),
    /* eslint-enable camelcase */
  }

  public toJSON (): DeletedTagJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<DeletedTagJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface DeletedTeamJSON {
  /* eslint-disable camelcase */
  gentime: number;
  is_archive: boolean;
  uid: string;
  /* eslint-enable camelcase */
}

export class DeletedTeam implements TDProtoClass<DeletedTeam> {
  /**
   * Team deletion message. Readonly
   * @param gentime Object version
   * @param isArchive Team deleted
   * @param uid Team id
   */
  constructor (
    public gentime: number,
    public isArchive: boolean,
    public uid: string,
  ) {}

  public static fromJSON (raw: DeletedTeamJSON): DeletedTeam {
    return new DeletedTeam(
      raw.gentime,
      raw.is_archive,
      raw.uid,
    )
  }

  public mappableFields = [
    'gentime',
    'isArchive',
    'uid',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    gentime: () => ({ gentime: this.gentime }),
    isArchive: () => ({ is_archive: this.isArchive }),
    uid: () => ({ uid: this.uid }),
    /* eslint-enable camelcase */
  }

  public toJSON (): DeletedTeamJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<DeletedTeamJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface DistJSON {
  /* eslint-disable camelcase */
  type: string;
  url: string;
  /* eslint-enable camelcase */
}

export class Dist implements TDProtoClass<Dist> {
  /**
   * Distribution information
   * @param type DOCUMENTATION MISSING
   * @param url DOCUMENTATION MISSING
   */
  constructor (
    public type: string,
    public url: string,
  ) {}

  public static fromJSON (raw: DistJSON): Dist {
    return new Dist(
      raw.type,
      raw.url,
    )
  }

  public mappableFields = [
    'type',
    'url',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    type: () => ({ type: this.type }),
    url: () => ({ url: this.url }),
    /* eslint-enable camelcase */
  }

  public toJSON (): DistJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<DistJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface EasyApiMessageJSON {
  /* eslint-disable camelcase */
  convert_linebreaks: boolean;
  important: boolean;
  key: string;
  message: string;
  message_id: string;
  nopreview: boolean;
  silently: boolean;
  /* eslint-enable camelcase */
}

export class EasyApiMessage implements TDProtoClass<EasyApiMessage> {
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
  constructor (
    public convertLinebreaks: boolean,
    public important: boolean,
    public key: string,
    public message: string,
    public messageId: string,
    public nopreview: boolean,
    public silently: boolean,
  ) {}

  public static fromJSON (raw: EasyApiMessageJSON): EasyApiMessage {
    return new EasyApiMessage(
      raw.convert_linebreaks,
      raw.important,
      raw.key,
      raw.message,
      raw.message_id,
      raw.nopreview,
      raw.silently,
    )
  }

  public mappableFields = [
    'convertLinebreaks',
    'important',
    'key',
    'message',
    'messageId',
    'nopreview',
    'silently',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    convertLinebreaks: () => ({ convert_linebreaks: this.convertLinebreaks }),
    important: () => ({ important: this.important }),
    key: () => ({ key: this.key }),
    message: () => ({ message: this.message }),
    messageId: () => ({ message_id: this.messageId }),
    nopreview: () => ({ nopreview: this.nopreview }),
    silently: () => ({ silently: this.silently }),
    /* eslint-enable camelcase */
  }

  public toJSON (): EasyApiMessageJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<EasyApiMessageJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface EmojiJSON {
  /* eslint-disable camelcase */
  char: string;
  key: string;
  /* eslint-enable camelcase */
}

export class Emoji implements TDProtoClass<Emoji> {
  /**
   * Emoji
   * @param char Unicode symbol
   * @param key Text representation
   */
  constructor (
    public char: string,
    public key: string,
  ) {}

  public static fromJSON (raw: EmojiJSON): Emoji {
    return new Emoji(
      raw.char,
      raw.key,
    )
  }

  public mappableFields = [
    'char',
    'key',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    char: () => ({ char: this.char }),
    key: () => ({ key: this.key }),
    /* eslint-enable camelcase */
  }

  public toJSON (): EmojiJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<EmojiJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface FeaturesJSON {
  /* eslint-disable camelcase */
  afk_age: number;
  android_app: string;
  android_corp_app: string;
  app_schemes: string[];
  app_title: string;
  build: string;
  calls: boolean;
  calls_record: boolean;
  calls_version: number;
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
  readonly_groups: boolean;
  resend_timeout: number;
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
  wiki_pages: boolean;
  allow_admin_mute?: boolean;
  amplitude_api_key?: string;
  app_login_background?: string;
  auth_2fa?: boolean;
  auth_by_password?: boolean;
  auth_by_qr_code?: boolean;
  auth_by_sms?: boolean;
  custom_app_icon_name?: string;
  default_wallpaper?: WallpaperJSON;
  installation_title?: string;
  landing_url?: string;
  max_participants_per_call?: number;
  multi_nodes?: boolean;
  oauth_services?: OAuthServiceJSON[];
  only_one_device_per_call?: boolean;
  web_login_background?: string;
  /* eslint-enable camelcase */
}

export class Features implements TDProtoClass<Features> {
  /**
   * Server information. Readonly
   * @param afkAge Max inactivity seconds
   * @param androidApp Link to Google Play
   * @param androidCorpApp Link to Google Play for corporate app
   * @param appSchemes Local applications urls
   * @param appTitle Application title
   * @param build Build/revision of server side
   * @param calls Deprecated
   * @param callsRecord Calls record enabled
   * @param callsVersion Calls version. 0 = disabled, 1 = audio only, 2 = audio+video
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
   * @param readonlyGroups Deprecated
   * @param resendTimeout Resend message in n seconds if no confirmation from server given
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
   * @param wikiPages Wiki pages in chats. Experimental
   * @param allowAdminMute Wiki pages in chats. Experimental
   * @param amplitudeApiKey Amplitude api key
   * @param appLoginBackground AppBackground image url, if any
   * @param auth2fa Two-factor authentication (2FA) enabled
   * @param authByPassword Password authentication enabled
   * @param authByQrCode QR-code / link authentication enabled
   * @param authBySms SMS authentication enabled
   * @param customAppIconName Custom application icon name, if any
   * @param defaultWallpaper Default wallpaper url for mobile apps, if any
   * @param installationTitle Installation title, used on login screen
   * @param landingUrl Landing page address, if any
   * @param maxParticipantsPerCall Maximum number of participants per call
   * @param multiNodes Multi nodes mode (federation) enabled
   * @param oauthServices External services
   * @param onlyOneDevicePerCall Disallow call from multiple devices. Experimental
   * @param webLoginBackground WebBackground image url, if any
   */
  constructor (
    public afkAge: number,
    public androidApp: string,
    public androidCorpApp: string,
    public appSchemes: string[],
    public appTitle: string,
    public build: string,
    public calls: boolean,
    public callsRecord: boolean,
    public callsVersion: number,
    public customServer: boolean,
    public customTheme: boolean,
    public desktopVersion: string,
    public firebaseApiKey: string,
    public firebaseAppId: string,
    public firebaseAuthDomain: string,
    public firebaseDatabaseUrl: string,
    public firebaseProjectId: string,
    public firebaseSenderId: string,
    public firebaseStorageBucket: string,
    public freeRegistration: boolean,
    public frontVersion: string,
    public host: string,
    public iceServers: ICEServer[],
    public installationType: string,
    public iosApp: string,
    public iosCorpApp: string,
    public isTesting: boolean,
    public maxColorRuleDescriptionLength: number,
    public maxGroupTitleLength: number,
    public maxIntegrationCommentLength: number,
    public maxLinkedMessages: number,
    public maxMessageLength: number,
    public maxMessageSearchLimit: number,
    public maxMessageUploads: number,
    public maxMoodLength: number,
    public maxProjectLength: number,
    public maxRoleLength: number,
    public maxSectionLength: number,
    public maxTagLength: number,
    public maxTaskTitleLength: number,
    public maxTeamTitleLength: number,
    public maxTeams: number,
    public maxUploadMb: number,
    public maxUrlLength: number,
    public maxUsernamePartLength: number,
    public messageUploads: boolean,
    public metrika: string,
    public minAndroidVersion: string,
    public minAppVersion: string,
    public minCorpAndroidVersion: string,
    public minCorpIosVersion: string,
    public minIosVersion: string,
    public minSearchLength: number,
    public mobileCalls: boolean,
    public readonlyGroups: boolean,
    public resendTimeout: number,
    public safariPushId: string,
    public sentryDsnJs: string,
    public serverDrafts: boolean,
    public singleGroupTeams: boolean,
    public supportEmail: string,
    public taskChecklist: boolean,
    public taskDashboard: boolean,
    public taskMessages: boolean,
    public taskPublic: boolean,
    public taskTags: boolean,
    public terms: Terms,
    public theme: string,
    public userver: string,
    public wikiPages: boolean,
    public allowAdminMute?: boolean,
    public amplitudeApiKey?: string,
    public appLoginBackground?: string,
    public auth2fa?: boolean,
    public authByPassword?: boolean,
    public authByQrCode?: boolean,
    public authBySms?: boolean,
    public customAppIconName?: string,
    public defaultWallpaper?: Wallpaper,
    public installationTitle?: string,
    public landingUrl?: string,
    public maxParticipantsPerCall?: number,
    public multiNodes?: boolean,
    public oauthServices?: OAuthService[],
    public onlyOneDevicePerCall?: boolean,
    public webLoginBackground?: string,
  ) {}

  public static fromJSON (raw: FeaturesJSON): Features {
    return new Features(
      raw.afk_age,
      raw.android_app,
      raw.android_corp_app,
      raw.app_schemes,
      raw.app_title,
      raw.build,
      raw.calls,
      raw.calls_record,
      raw.calls_version,
      raw.custom_server,
      raw.custom_theme,
      raw.desktop_version,
      raw.firebase_api_key,
      raw.firebase_app_id,
      raw.firebase_auth_domain,
      raw.firebase_database_url,
      raw.firebase_project_id,
      raw.firebase_sender_id,
      raw.firebase_storage_bucket,
      raw.free_registration,
      raw.front_version,
      raw.host,
      raw.ice_servers.map(ICEServer.fromJSON),
      raw.installation_type,
      raw.ios_app,
      raw.ios_corp_app,
      raw.is_testing,
      raw.max_color_rule_description_length,
      raw.max_group_title_length,
      raw.max_integration_comment_length,
      raw.max_linked_messages,
      raw.max_message_length,
      raw.max_message_search_limit,
      raw.max_message_uploads,
      raw.max_mood_length,
      raw.max_project_length,
      raw.max_role_length,
      raw.max_section_length,
      raw.max_tag_length,
      raw.max_task_title_length,
      raw.max_team_title_length,
      raw.max_teams,
      raw.max_upload_mb,
      raw.max_url_length,
      raw.max_username_part_length,
      raw.message_uploads,
      raw.metrika,
      raw.min_android_version,
      raw.min_app_version,
      raw.min_corp_android_version,
      raw.min_corp_ios_version,
      raw.min_ios_version,
      raw.min_search_length,
      raw.mobile_calls,
      raw.readonly_groups,
      raw.resend_timeout,
      raw.safari_push_id,
      raw.sentry_dsn_js,
      raw.server_drafts,
      raw.single_group_teams,
      raw.support_email,
      raw.task_checklist,
      raw.task_dashboard,
      raw.task_messages,
      raw.task_public,
      raw.task_tags,
      Terms.fromJSON(raw.terms),
      raw.theme,
      raw.userver,
      raw.wiki_pages,
      raw.allow_admin_mute,
      raw.amplitude_api_key,
      raw.app_login_background,
      raw.auth_2fa,
      raw.auth_by_password,
      raw.auth_by_qr_code,
      raw.auth_by_sms,
      raw.custom_app_icon_name,
      raw.default_wallpaper && Wallpaper.fromJSON(raw.default_wallpaper),
      raw.installation_title,
      raw.landing_url,
      raw.max_participants_per_call,
      raw.multi_nodes,
      raw.oauth_services && raw.oauth_services.map(OAuthService.fromJSON),
      raw.only_one_device_per_call,
      raw.web_login_background,
    )
  }

  public mappableFields = [
    'afkAge',
    'androidApp',
    'androidCorpApp',
    'appSchemes',
    'appTitle',
    'build',
    'calls',
    'callsRecord',
    'callsVersion',
    'customServer',
    'customTheme',
    'desktopVersion',
    'firebaseApiKey',
    'firebaseAppId',
    'firebaseAuthDomain',
    'firebaseDatabaseUrl',
    'firebaseProjectId',
    'firebaseSenderId',
    'firebaseStorageBucket',
    'freeRegistration',
    'frontVersion',
    'host',
    'iceServers',
    'installationType',
    'iosApp',
    'iosCorpApp',
    'isTesting',
    'maxColorRuleDescriptionLength',
    'maxGroupTitleLength',
    'maxIntegrationCommentLength',
    'maxLinkedMessages',
    'maxMessageLength',
    'maxMessageSearchLimit',
    'maxMessageUploads',
    'maxMoodLength',
    'maxProjectLength',
    'maxRoleLength',
    'maxSectionLength',
    'maxTagLength',
    'maxTaskTitleLength',
    'maxTeamTitleLength',
    'maxTeams',
    'maxUploadMb',
    'maxUrlLength',
    'maxUsernamePartLength',
    'messageUploads',
    'metrika',
    'minAndroidVersion',
    'minAppVersion',
    'minCorpAndroidVersion',
    'minCorpIosVersion',
    'minIosVersion',
    'minSearchLength',
    'mobileCalls',
    'readonlyGroups',
    'resendTimeout',
    'safariPushId',
    'sentryDsnJs',
    'serverDrafts',
    'singleGroupTeams',
    'supportEmail',
    'taskChecklist',
    'taskDashboard',
    'taskMessages',
    'taskPublic',
    'taskTags',
    'terms',
    'theme',
    'userver',
    'wikiPages',
    'allowAdminMute',
    'amplitudeApiKey',
    'appLoginBackground',
    'auth2fa',
    'authByPassword',
    'authByQrCode',
    'authBySms',
    'customAppIconName',
    'defaultWallpaper',
    'installationTitle',
    'landingUrl',
    'maxParticipantsPerCall',
    'multiNodes',
    'oauthServices',
    'onlyOneDevicePerCall',
    'webLoginBackground',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    afkAge: () => ({ afk_age: this.afkAge }),
    androidApp: () => ({ android_app: this.androidApp }),
    androidCorpApp: () => ({ android_corp_app: this.androidCorpApp }),
    appSchemes: () => ({ app_schemes: this.appSchemes }),
    appTitle: () => ({ app_title: this.appTitle }),
    build: () => ({ build: this.build }),
    calls: () => ({ calls: this.calls }),
    callsRecord: () => ({ calls_record: this.callsRecord }),
    callsVersion: () => ({ calls_version: this.callsVersion }),
    customServer: () => ({ custom_server: this.customServer }),
    customTheme: () => ({ custom_theme: this.customTheme }),
    desktopVersion: () => ({ desktop_version: this.desktopVersion }),
    firebaseApiKey: () => ({ firebase_api_key: this.firebaseApiKey }),
    firebaseAppId: () => ({ firebase_app_id: this.firebaseAppId }),
    firebaseAuthDomain: () => ({ firebase_auth_domain: this.firebaseAuthDomain }),
    firebaseDatabaseUrl: () => ({ firebase_database_url: this.firebaseDatabaseUrl }),
    firebaseProjectId: () => ({ firebase_project_id: this.firebaseProjectId }),
    firebaseSenderId: () => ({ firebase_sender_id: this.firebaseSenderId }),
    firebaseStorageBucket: () => ({ firebase_storage_bucket: this.firebaseStorageBucket }),
    freeRegistration: () => ({ free_registration: this.freeRegistration }),
    frontVersion: () => ({ front_version: this.frontVersion }),
    host: () => ({ host: this.host }),
    iceServers: () => ({ ice_servers: this.iceServers.map(u => u.toJSON()) }),
    installationType: () => ({ installation_type: this.installationType }),
    iosApp: () => ({ ios_app: this.iosApp }),
    iosCorpApp: () => ({ ios_corp_app: this.iosCorpApp }),
    isTesting: () => ({ is_testing: this.isTesting }),
    maxColorRuleDescriptionLength: () => ({ max_color_rule_description_length: this.maxColorRuleDescriptionLength }),
    maxGroupTitleLength: () => ({ max_group_title_length: this.maxGroupTitleLength }),
    maxIntegrationCommentLength: () => ({ max_integration_comment_length: this.maxIntegrationCommentLength }),
    maxLinkedMessages: () => ({ max_linked_messages: this.maxLinkedMessages }),
    maxMessageLength: () => ({ max_message_length: this.maxMessageLength }),
    maxMessageSearchLimit: () => ({ max_message_search_limit: this.maxMessageSearchLimit }),
    maxMessageUploads: () => ({ max_message_uploads: this.maxMessageUploads }),
    maxMoodLength: () => ({ max_mood_length: this.maxMoodLength }),
    maxProjectLength: () => ({ max_project_length: this.maxProjectLength }),
    maxRoleLength: () => ({ max_role_length: this.maxRoleLength }),
    maxSectionLength: () => ({ max_section_length: this.maxSectionLength }),
    maxTagLength: () => ({ max_tag_length: this.maxTagLength }),
    maxTaskTitleLength: () => ({ max_task_title_length: this.maxTaskTitleLength }),
    maxTeamTitleLength: () => ({ max_team_title_length: this.maxTeamTitleLength }),
    maxTeams: () => ({ max_teams: this.maxTeams }),
    maxUploadMb: () => ({ max_upload_mb: this.maxUploadMb }),
    maxUrlLength: () => ({ max_url_length: this.maxUrlLength }),
    maxUsernamePartLength: () => ({ max_username_part_length: this.maxUsernamePartLength }),
    messageUploads: () => ({ message_uploads: this.messageUploads }),
    metrika: () => ({ metrika: this.metrika }),
    minAndroidVersion: () => ({ min_android_version: this.minAndroidVersion }),
    minAppVersion: () => ({ min_app_version: this.minAppVersion }),
    minCorpAndroidVersion: () => ({ min_corp_android_version: this.minCorpAndroidVersion }),
    minCorpIosVersion: () => ({ min_corp_ios_version: this.minCorpIosVersion }),
    minIosVersion: () => ({ min_ios_version: this.minIosVersion }),
    minSearchLength: () => ({ min_search_length: this.minSearchLength }),
    mobileCalls: () => ({ mobile_calls: this.mobileCalls }),
    readonlyGroups: () => ({ readonly_groups: this.readonlyGroups }),
    resendTimeout: () => ({ resend_timeout: this.resendTimeout }),
    safariPushId: () => ({ safari_push_id: this.safariPushId }),
    sentryDsnJs: () => ({ sentry_dsn_js: this.sentryDsnJs }),
    serverDrafts: () => ({ server_drafts: this.serverDrafts }),
    singleGroupTeams: () => ({ single_group_teams: this.singleGroupTeams }),
    supportEmail: () => ({ support_email: this.supportEmail }),
    taskChecklist: () => ({ task_checklist: this.taskChecklist }),
    taskDashboard: () => ({ task_dashboard: this.taskDashboard }),
    taskMessages: () => ({ task_messages: this.taskMessages }),
    taskPublic: () => ({ task_public: this.taskPublic }),
    taskTags: () => ({ task_tags: this.taskTags }),
    terms: () => ({ terms: this.terms.toJSON() }),
    theme: () => ({ theme: this.theme }),
    userver: () => ({ userver: this.userver }),
    wikiPages: () => ({ wiki_pages: this.wikiPages }),
    allowAdminMute: () => ({ allow_admin_mute: this.allowAdminMute }),
    amplitudeApiKey: () => ({ amplitude_api_key: this.amplitudeApiKey }),
    appLoginBackground: () => ({ app_login_background: this.appLoginBackground }),
    auth2fa: () => ({ auth_2fa: this.auth2fa }),
    authByPassword: () => ({ auth_by_password: this.authByPassword }),
    authByQrCode: () => ({ auth_by_qr_code: this.authByQrCode }),
    authBySms: () => ({ auth_by_sms: this.authBySms }),
    customAppIconName: () => ({ custom_app_icon_name: this.customAppIconName }),
    defaultWallpaper: () => ({ default_wallpaper: this.defaultWallpaper?.toJSON() }),
    installationTitle: () => ({ installation_title: this.installationTitle }),
    landingUrl: () => ({ landing_url: this.landingUrl }),
    maxParticipantsPerCall: () => ({ max_participants_per_call: this.maxParticipantsPerCall }),
    multiNodes: () => ({ multi_nodes: this.multiNodes }),
    oauthServices: () => ({ oauth_services: this.oauthServices?.map(u => u.toJSON()) }),
    onlyOneDevicePerCall: () => ({ only_one_device_per_call: this.onlyOneDevicePerCall }),
    webLoginBackground: () => ({ web_login_background: this.webLoginBackground }),
    /* eslint-enable camelcase */
  }

  public toJSON (): FeaturesJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<FeaturesJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface FontColorsJSON {
  /* eslint-disable camelcase */
  brand_button: RGBColor;
  bubble_received: RGBColor;
  bubble_sent: RGBColor;
  simple_button: RGBColor;
  sub: RGBColor;
  text: RGBColor;
  title: RGBColor;
  /* eslint-enable camelcase */
}

export class FontColors implements TDProtoClass<FontColors> {
  /**
   * FontColors font colors for app
   * @param brandButton Brand button color
   * @param bubbleReceived Bubble received color
   * @param bubbleSent Bubble sent color
   * @param simpleButton Simple button color
   * @param sub Sub color
   * @param text Text color
   * @param title Title color
   */
  constructor (
    public brandButton: RGBColor,
    public bubbleReceived: RGBColor,
    public bubbleSent: RGBColor,
    public simpleButton: RGBColor,
    public sub: RGBColor,
    public text: RGBColor,
    public title: RGBColor,
  ) {}

  public static fromJSON (raw: FontColorsJSON): FontColors {
    return new FontColors(
      raw.brand_button,
      raw.bubble_received,
      raw.bubble_sent,
      raw.simple_button,
      raw.sub,
      raw.text,
      raw.title,
    )
  }

  public mappableFields = [
    'brandButton',
    'bubbleReceived',
    'bubbleSent',
    'simpleButton',
    'sub',
    'text',
    'title',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    brandButton: () => ({ brand_button: this.brandButton }),
    bubbleReceived: () => ({ bubble_received: this.bubbleReceived }),
    bubbleSent: () => ({ bubble_sent: this.bubbleSent }),
    simpleButton: () => ({ simple_button: this.simpleButton }),
    sub: () => ({ sub: this.sub }),
    text: () => ({ text: this.text }),
    title: () => ({ title: this.title }),
    /* eslint-enable camelcase */
  }

  public toJSON (): FontColorsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<FontColorsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface GroupAccessRequestJSON {
  /* eslint-disable camelcase */
  created: ISODateTimeString;
  subject: JID;
  uid: string;
  /* eslint-enable camelcase */
}

export class GroupAccessRequest implements TDProtoClass<GroupAccessRequest> {
  /**
   * Group Access Request
   * @param created DOCUMENTATION MISSING
   * @param subject DOCUMENTATION MISSING
   * @param uid DOCUMENTATION MISSING
   */
  constructor (
    public created: ISODateTimeString,
    public subject: JID,
    public uid: string,
  ) {}

  public static fromJSON (raw: GroupAccessRequestJSON): GroupAccessRequest {
    return new GroupAccessRequest(
      raw.created,
      raw.subject,
      raw.uid,
    )
  }

  public mappableFields = [
    'created',
    'subject',
    'uid',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    created: () => ({ created: this.created }),
    subject: () => ({ subject: this.subject }),
    uid: () => ({ uid: this.uid }),
    /* eslint-enable camelcase */
  }

  public toJSON (): GroupAccessRequestJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<GroupAccessRequestJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface GroupMembershipJSON {
  /* eslint-disable camelcase */
  jid: JID;
  can_remove?: boolean;
  status?: GroupStatus;
  /* eslint-enable camelcase */
}

export class GroupMembership implements TDProtoClass<GroupMembership> {
  /**
   * Group chat membership status
   * @param jid Contact id
   * @param canRemove Can I remove this member
   * @param status Status in group
   */
  constructor (
    public jid: JID,
    public canRemove?: boolean,
    public status?: GroupStatus,
  ) {}

  public static fromJSON (raw: GroupMembershipJSON): GroupMembership {
    return new GroupMembership(
      raw.jid,
      raw.can_remove,
      raw.status,
    )
  }

  public mappableFields = [
    'jid',
    'canRemove',
    'status',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    jid: () => ({ jid: this.jid }),
    canRemove: () => ({ can_remove: this.canRemove }),
    status: () => ({ status: this.status }),
    /* eslint-enable camelcase */
  }

  public toJSON (): GroupMembershipJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<GroupMembershipJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ICEServerJSON {
  /* eslint-disable camelcase */
  urls: string;
  /* eslint-enable camelcase */
}

export class ICEServer implements TDProtoClass<ICEServer> {
  /**
   * Interactive Connectivity Establishment Server for WEB Rtc connection. Readonly
   * @param urls URls
   */
  constructor (
    public urls: string,
  ) {}

  public static fromJSON (raw: ICEServerJSON): ICEServer {
    return new ICEServer(
      raw.urls,
    )
  }

  public mappableFields = [
    'urls',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    urls: () => ({ urls: this.urls }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ICEServerJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ICEServerJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface IconColorsJSON {
  /* eslint-disable camelcase */
  brand: RGBColor;
  other: RGBColor;
  title: RGBColor;
  /* eslint-enable camelcase */
}

export class IconColors implements TDProtoClass<IconColors> {
  /**
   * IconColors icon colors for app
   * @param brand Brand color
   * @param other Other color
   * @param title Title color
   */
  constructor (
    public brand: RGBColor,
    public other: RGBColor,
    public title: RGBColor,
  ) {}

  public static fromJSON (raw: IconColorsJSON): IconColors {
    return new IconColors(
      raw.brand,
      raw.other,
      raw.title,
    )
  }

  public mappableFields = [
    'brand',
    'other',
    'title',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    brand: () => ({ brand: this.brand }),
    other: () => ({ other: this.other }),
    title: () => ({ title: this.title }),
    /* eslint-enable camelcase */
  }

  public toJSON (): IconColorsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<IconColorsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface IconDataJSON {
  /* eslint-disable camelcase */
  lg: SingleIconJSON;
  sm: SingleIconJSON;
  blurhash?: string;
  color?: string;
  letters?: string;
  stub?: string;
  /* eslint-enable camelcase */
}

export class IconData implements TDProtoClass<IconData> {
  /**
   * Icon data. For icon generated from display name contains Letters + Color fields
   * @param lg Large image
   * @param sm Small icon
   * @param blurhash Compact representation of a placeholder for an image (experimental)
   * @param color Icon background color (only for stub icon)
   * @param letters Letters (only for stub icon)
   * @param stub Deprecated
   */
  constructor (
    public lg: SingleIcon,
    public sm: SingleIcon,
    public blurhash?: string,
    public color?: string,
    public letters?: string,
    public stub?: string,
  ) {}

  public static fromJSON (raw: IconDataJSON): IconData {
    return new IconData(
      SingleIcon.fromJSON(raw.lg),
      SingleIcon.fromJSON(raw.sm),
      raw.blurhash,
      raw.color,
      raw.letters,
      raw.stub,
    )
  }

  public mappableFields = [
    'lg',
    'sm',
    'blurhash',
    'color',
    'letters',
    'stub',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    lg: () => ({ lg: this.lg.toJSON() }),
    sm: () => ({ sm: this.sm.toJSON() }),
    blurhash: () => ({ blurhash: this.blurhash }),
    color: () => ({ color: this.color }),
    letters: () => ({ letters: this.letters }),
    stub: () => ({ stub: this.stub }),
    /* eslint-enable camelcase */
  }

  public toJSON (): IconDataJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<IconDataJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface InputColorsJSON {
  /* eslint-disable camelcase */
  active: RGBColor;
  disable: RGBColor;
  error: RGBColor;
  static: RGBColor;
  /* eslint-enable camelcase */
}

export class InputColors implements TDProtoClass<InputColors> {
  /**
   * InputColors input colors for app
   * @param active Active color
   * @param disable Disable color
   * @param error Error color
   * @param isStatic Static color
   */
  constructor (
    public active: RGBColor,
    public disable: RGBColor,
    public error: RGBColor,
    public isStatic: RGBColor,
  ) {}

  public static fromJSON (raw: InputColorsJSON): InputColors {
    return new InputColors(
      raw.active,
      raw.disable,
      raw.error,
      raw.static,
    )
  }

  public mappableFields = [
    'active',
    'disable',
    'error',
    'isStatic',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    active: () => ({ active: this.active }),
    disable: () => ({ disable: this.disable }),
    error: () => ({ error: this.error }),
    isStatic: () => ({ static: this.isStatic }),
    /* eslint-enable camelcase */
  }

  public toJSON (): InputColorsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<InputColorsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface IntegrationJSON {
  /* eslint-disable camelcase */
  comment: string;
  enabled: boolean;
  form: IntegrationFormJSON;
  group: JID;
  kind: string;
  created?: ISODateTimeString;
  help?: string;
  uid?: string;
  /* eslint-enable camelcase */
}

export class Integration implements TDProtoClass<Integration> {
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
  constructor (
    public comment: string,
    public enabled: boolean,
    public form: IntegrationForm,
    public group: JID,
    public kind: string,
    public created?: ISODateTimeString,
    public help?: string,
    public uid?: string,
  ) {}

  public static fromJSON (raw: IntegrationJSON): Integration {
    return new Integration(
      raw.comment,
      raw.enabled,
      IntegrationForm.fromJSON(raw.form),
      raw.group,
      raw.kind,
      raw.created,
      raw.help,
      raw.uid,
    )
  }

  public mappableFields = [
    'comment',
    'enabled',
    'form',
    'group',
    'kind',
    'created',
    'help',
    'uid',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    comment: () => ({ comment: this.comment }),
    enabled: () => ({ enabled: this.enabled }),
    form: () => ({ form: this.form.toJSON() }),
    group: () => ({ group: this.group }),
    kind: () => ({ kind: this.kind }),
    created: () => ({ created: this.created }),
    help: () => ({ help: this.help }),
    uid: () => ({ uid: this.uid }),
    /* eslint-enable camelcase */
  }

  public toJSON (): IntegrationJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<IntegrationJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface IntegrationFieldJSON {
  /* eslint-disable camelcase */
  label: string;
  readonly: boolean;
  value: string;
  /* eslint-enable camelcase */
}

export class IntegrationField implements TDProtoClass<IntegrationField> {
  /**
   * Integration form field
   * @param label Label
   * @param readonly Is field readonly
   * @param value Current value
   */
  constructor (
    public label: string,
    public readonly: boolean,
    public value: string,
  ) {}

  public static fromJSON (raw: IntegrationFieldJSON): IntegrationField {
    return new IntegrationField(
      raw.label,
      raw.readonly,
      raw.value,
    )
  }

  public mappableFields = [
    'label',
    'readonly',
    'value',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    label: () => ({ label: this.label }),
    readonly: () => ({ readonly: this.readonly }),
    value: () => ({ value: this.value }),
    /* eslint-enable camelcase */
  }

  public toJSON (): IntegrationFieldJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<IntegrationFieldJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface IntegrationFormJSON {
  /* eslint-disable camelcase */
  api_key?: IntegrationFieldJSON;
  url?: IntegrationFieldJSON;
  webhook_url?: IntegrationFieldJSON;
  /* eslint-enable camelcase */
}

export class IntegrationForm implements TDProtoClass<IntegrationForm> {
  /**
   * Integration form
   * @param apiKey Api key field, if any
   * @param url Url, if any
   * @param webhookUrl Webhook url, if any
   */
  constructor (
    public apiKey?: IntegrationField,
    public url?: IntegrationField,
    public webhookUrl?: IntegrationField,
  ) {}

  public static fromJSON (raw: IntegrationFormJSON): IntegrationForm {
    return new IntegrationForm(
      raw.api_key && IntegrationField.fromJSON(raw.api_key),
      raw.url && IntegrationField.fromJSON(raw.url),
      raw.webhook_url && IntegrationField.fromJSON(raw.webhook_url),
    )
  }

  public mappableFields = [
    'apiKey',
    'url',
    'webhookUrl',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    apiKey: () => ({ api_key: this.apiKey?.toJSON() }),
    url: () => ({ url: this.url?.toJSON() }),
    webhookUrl: () => ({ webhook_url: this.webhookUrl?.toJSON() }),
    /* eslint-enable camelcase */
  }

  public toJSON (): IntegrationFormJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<IntegrationFormJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface IntegrationKindJSON {
  /* eslint-disable camelcase */
  description: string;
  icon: string;
  kind: string;
  template: IntegrationJSON;
  title: string;
  /* eslint-enable camelcase */
}

export class IntegrationKind implements TDProtoClass<IntegrationKind> {
  /**
   * Integration kind
   * @param description Plugin description
   * @param icon Path to icon
   * @param kind Integration unique name
   * @param template Integration template
   * @param title Plugin title
   */
  constructor (
    public description: string,
    public icon: string,
    public kind: string,
    public template: Integration,
    public title: string,
  ) {}

  public static fromJSON (raw: IntegrationKindJSON): IntegrationKind {
    return new IntegrationKind(
      raw.description,
      raw.icon,
      raw.kind,
      Integration.fromJSON(raw.template),
      raw.title,
    )
  }

  public mappableFields = [
    'description',
    'icon',
    'kind',
    'template',
    'title',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    description: () => ({ description: this.description }),
    icon: () => ({ icon: this.icon }),
    kind: () => ({ kind: this.kind }),
    template: () => ({ template: this.template.toJSON() }),
    title: () => ({ title: this.title }),
    /* eslint-enable camelcase */
  }

  public toJSON (): IntegrationKindJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<IntegrationKindJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface IntegrationsJSON {
  /* eslint-disable camelcase */
  integrations: IntegrationJSON[];
  kinds: IntegrationKindJSON[];
  /* eslint-enable camelcase */
}

export class Integrations implements TDProtoClass<Integrations> {
  /**
   * Complete integrations data, as received from server
   * @param integrations Currently existing integrations
   * @param kinds Types of integrations available for setup
   */
  constructor (
    public integrations: Integration[],
    public kinds: IntegrationKind[],
  ) {}

  public static fromJSON (raw: IntegrationsJSON): Integrations {
    return new Integrations(
      raw.integrations.map(Integration.fromJSON),
      raw.kinds.map(IntegrationKind.fromJSON),
    )
  }

  public mappableFields = [
    'integrations',
    'kinds',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    integrations: () => ({ integrations: this.integrations.map(u => u.toJSON()) }),
    kinds: () => ({ kinds: this.kinds.map(u => u.toJSON()) }),
    /* eslint-enable camelcase */
  }

  public toJSON (): IntegrationsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<IntegrationsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface InvitableUserJSON {
  /* eslint-disable camelcase */
  display_name: string;
  icons: IconDataJSON;
  uid: string;
  node?: string;
  teams?: string[];
  /* eslint-enable camelcase */
}

export class InvitableUser implements TDProtoClass<InvitableUser> {
  /**
   * Account from other team, Active Directory or node
   * @param displayName Full name
   * @param icons Icons
   * @param uid Account id
   * @param node Node uid for external users
   * @param teams Common team uids, if any
   */
  constructor (
    public displayName: string,
    public icons: IconData,
    public uid: string,
    public node?: string,
    public teams?: string[],
  ) {}

  public static fromJSON (raw: InvitableUserJSON): InvitableUser {
    return new InvitableUser(
      raw.display_name,
      IconData.fromJSON(raw.icons),
      raw.uid,
      raw.node,
      raw.teams,
    )
  }

  public mappableFields = [
    'displayName',
    'icons',
    'uid',
    'node',
    'teams',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    displayName: () => ({ display_name: this.displayName }),
    icons: () => ({ icons: this.icons.toJSON() }),
    uid: () => ({ uid: this.uid }),
    node: () => ({ node: this.node }),
    teams: () => ({ teams: this.teams }),
    /* eslint-enable camelcase */
  }

  public toJSON (): InvitableUserJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<InvitableUserJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface InvitationJSON {
  /* eslint-disable camelcase */
  created: ISODateTimeString;
  qr: string;
  token: string;
  uid: string;
  /* eslint-enable camelcase */
}

export class Invitation implements TDProtoClass<Invitation> {
  /**
   * Invitation to team
   * @param created DOCUMENTATION MISSING
   * @param qr DOCUMENTATION MISSING
   * @param token DOCUMENTATION MISSING
   * @param uid DOCUMENTATION MISSING
   */
  constructor (
    public created: ISODateTimeString,
    public qr: string,
    public token: string,
    public uid: string,
  ) {}

  public static fromJSON (raw: InvitationJSON): Invitation {
    return new Invitation(
      raw.created,
      raw.qr,
      raw.token,
      raw.uid,
    )
  }

  public mappableFields = [
    'created',
    'qr',
    'token',
    'uid',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    created: () => ({ created: this.created }),
    qr: () => ({ qr: this.qr }),
    token: () => ({ token: this.token }),
    uid: () => ({ uid: this.uid }),
    /* eslint-enable camelcase */
  }

  public toJSON (): InvitationJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<InvitationJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface JSEPJSON {
  /* eslint-disable camelcase */
  sdp: string;
  type: string;
  /* eslint-enable camelcase */
}

export class JSEP implements TDProtoClass<JSEP> {
  /**
   * JavaScript Session Establishment Protocol
   * @param sdp Session Description Protocol information
   * @param type See https://rtcweb-wg.github.io/jsep/#rfc.section.4.1.8
   */
  constructor (
    public sdp: string,
    public type: string,
  ) {}

  public static fromJSON (raw: JSEPJSON): JSEP {
    return new JSEP(
      raw.sdp,
      raw.type,
    )
  }

  public mappableFields = [
    'sdp',
    'type',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    sdp: () => ({ sdp: this.sdp }),
    type: () => ({ type: this.type }),
    /* eslint-enable camelcase */
  }

  public toJSON (): JSEPJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<JSEPJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface MarkupEntityJSON {
  /* eslint-disable camelcase */
  cl: number;
  op: number;
  typ: MarkupType;
  childs?: MarkupEntityJSON[];
  cllen?: number;
  oplen?: number;
  repl?: string;
  time?: string;
  url?: string;
  /* eslint-enable camelcase */
}

export class MarkupEntity implements TDProtoClass<MarkupEntity> {
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
  constructor (
    public cl: number,
    public op: number,
    public typ: MarkupType,
    public childs?: MarkupEntity[],
    public cllen?: number,
    public oplen?: number,
    public repl?: string,
    public time?: string,
    public url?: string,
  ) {}

  public static fromJSON (raw: MarkupEntityJSON): MarkupEntity {
    return new MarkupEntity(
      raw.cl,
      raw.op,
      raw.typ,
      raw.childs && raw.childs.map(MarkupEntity.fromJSON),
      raw.cllen,
      raw.oplen,
      raw.repl,
      raw.time,
      raw.url,
    )
  }

  public mappableFields = [
    'cl',
    'op',
    'typ',
    'childs',
    'cllen',
    'oplen',
    'repl',
    'time',
    'url',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    cl: () => ({ cl: this.cl }),
    op: () => ({ op: this.op }),
    typ: () => ({ typ: this.typ }),
    childs: () => ({ childs: this.childs?.map(u => u.toJSON()) }),
    cllen: () => ({ cllen: this.cllen }),
    oplen: () => ({ oplen: this.oplen }),
    repl: () => ({ repl: this.repl }),
    time: () => ({ time: this.time }),
    url: () => ({ url: this.url }),
    /* eslint-enable camelcase */
  }

  public toJSON (): MarkupEntityJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<MarkupEntityJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface MessageJSON {
  /* eslint-disable camelcase */
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
  uploads?: UploadJSON[];
  /* eslint-enable camelcase */
}

export class Message implements TDProtoClass<Message> {
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
   * @param uploads Message uploads
   */
  constructor (
    public readonly chat: JID,
    public readonly chatType: ChatType,
    public content: MessageContent,
    public readonly created: ISODateTimeString,
    public readonly from: JID,
    public readonly gentime: number,
    public messageId: string,
    public to: JID,
    public readonly _debug?: string,
    public readonly drafted?: ISODateTimeString,
    public readonly editableUntil?: ISODateTimeString,
    public readonly edited?: ISODateTimeString,
    public readonly hasPreviews?: boolean,
    public important?: boolean,
    public readonly isArchive?: boolean,
    public readonly isFirst?: boolean,
    public readonly isLast?: boolean,
    public linkedMessages?: Message[],
    public readonly links?: MessageLink[],
    public readonly markup?: MarkupEntity[],
    public nopreview?: boolean,
    public readonly notice?: boolean,
    public readonly num?: number,
    public readonly numReceived?: number,
    public readonly prev?: string,
    public readonly pushText?: string,
    public readonly reactions?: MessageReaction[],
    public readonly received?: boolean,
    public replyTo?: Message,
    public readonly silently?: boolean,
    public uploads?: Upload[],
  ) {}

  public static fromJSON (raw: MessageJSON): Message {
    return new Message(
      raw.chat,
      raw.chat_type,
      MessageContent.fromJSON(raw.content),
      raw.created,
      raw.from,
      raw.gentime,
      raw.message_id,
      raw.to,
      raw._debug,
      raw.drafted,
      raw.editable_until,
      raw.edited,
      raw.has_previews,
      raw.important,
      raw.is_archive,
      raw.is_first,
      raw.is_last,
      raw.linked_messages && raw.linked_messages.map(Message.fromJSON),
      raw.links && raw.links.map(MessageLink.fromJSON),
      raw.markup && raw.markup.map(MarkupEntity.fromJSON),
      raw.nopreview,
      raw.notice,
      raw.num,
      raw.num_received,
      raw.prev,
      raw.push_text,
      raw.reactions && raw.reactions.map(MessageReaction.fromJSON),
      raw.received,
      raw.reply_to && Message.fromJSON(raw.reply_to),
      raw.silently,
      raw.uploads && raw.uploads.map(Upload.fromJSON),
    )
  }

  public mappableFields = [
    'chat',
    'chatType',
    'content',
    'created',
    'from',
    'gentime',
    'messageId',
    'to',
    '_debug',
    'drafted',
    'editableUntil',
    'edited',
    'hasPreviews',
    'important',
    'isArchive',
    'isFirst',
    'isLast',
    'linkedMessages',
    'links',
    'markup',
    'nopreview',
    'notice',
    'num',
    'numReceived',
    'prev',
    'pushText',
    'reactions',
    'received',
    'replyTo',
    'silently',
    'uploads',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    chat: () => ({ chat: this.chat }),
    chatType: () => ({ chat_type: this.chatType }),
    content: () => ({ content: this.content.toJSON() }),
    created: () => ({ created: this.created }),
    from: () => ({ from: this.from }),
    gentime: () => ({ gentime: this.gentime }),
    messageId: () => ({ message_id: this.messageId }),
    to: () => ({ to: this.to }),
    _debug: () => ({ _debug: this._debug }),
    drafted: () => ({ drafted: this.drafted }),
    editableUntil: () => ({ editable_until: this.editableUntil }),
    edited: () => ({ edited: this.edited }),
    hasPreviews: () => ({ has_previews: this.hasPreviews }),
    important: () => ({ important: this.important }),
    isArchive: () => ({ is_archive: this.isArchive }),
    isFirst: () => ({ is_first: this.isFirst }),
    isLast: () => ({ is_last: this.isLast }),
    linkedMessages: () => ({ linked_messages: this.linkedMessages?.map(u => u.toJSON()) }),
    links: () => ({ links: this.links?.map(u => u.toJSON()) }),
    markup: () => ({ markup: this.markup?.map(u => u.toJSON()) }),
    nopreview: () => ({ nopreview: this.nopreview }),
    notice: () => ({ notice: this.notice }),
    num: () => ({ num: this.num }),
    numReceived: () => ({ num_received: this.numReceived }),
    prev: () => ({ prev: this.prev }),
    pushText: () => ({ push_text: this.pushText }),
    reactions: () => ({ reactions: this.reactions?.map(u => u.toJSON()) }),
    received: () => ({ received: this.received }),
    replyTo: () => ({ reply_to: this.replyTo?.toJSON() }),
    silently: () => ({ silently: this.silently }),
    uploads: () => ({ uploads: this.uploads?.map(u => u.toJSON()) }),
    /* eslint-enable camelcase */
  }

  public toJSON (): MessageJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<MessageJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface MessageColorsJSON {
  /* eslint-disable camelcase */
  allocated: RGBColor;
  bubble_important: RGBColor;
  bubble_received: RGBColor;
  bubble_sent: RGBColor;
  status_bubble: RGBColor;
  status_feed: RGBColor;
  /* eslint-enable camelcase */
}

export class MessageColors implements TDProtoClass<MessageColors> {
  /**
   * MessageColors message colors for app
   * @param allocated Allocated color
   * @param bubbleImportant Bubble important color
   * @param bubbleReceived Bubble received color
   * @param bubbleSent Bubble sent color
   * @param statusBubble Status bubble color
   * @param statusFeed Status feed color
   */
  constructor (
    public allocated: RGBColor,
    public bubbleImportant: RGBColor,
    public bubbleReceived: RGBColor,
    public bubbleSent: RGBColor,
    public statusBubble: RGBColor,
    public statusFeed: RGBColor,
  ) {}

  public static fromJSON (raw: MessageColorsJSON): MessageColors {
    return new MessageColors(
      raw.allocated,
      raw.bubble_important,
      raw.bubble_received,
      raw.bubble_sent,
      raw.status_bubble,
      raw.status_feed,
    )
  }

  public mappableFields = [
    'allocated',
    'bubbleImportant',
    'bubbleReceived',
    'bubbleSent',
    'statusBubble',
    'statusFeed',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    allocated: () => ({ allocated: this.allocated }),
    bubbleImportant: () => ({ bubble_important: this.bubbleImportant }),
    bubbleReceived: () => ({ bubble_received: this.bubbleReceived }),
    bubbleSent: () => ({ bubble_sent: this.bubbleSent }),
    statusBubble: () => ({ status_bubble: this.statusBubble }),
    statusFeed: () => ({ status_feed: this.statusFeed }),
    /* eslint-enable camelcase */
  }

  public toJSON (): MessageColorsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<MessageColorsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface MessageContentJSON {
  /* eslint-disable camelcase */
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
  /* eslint-enable camelcase */
}

export class MessageContent implements TDProtoClass<MessageContent> {
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
  constructor (
    public text: string,
    public type: Mediatype,
    public actor?: JID,
    public animated?: boolean,
    public blurhash?: string,
    public comment?: string,
    public duration?: number,
    public emails?: string[],
    public familyName?: string,
    public givenName?: string,
    public isNew?: string,
    public mediaURL?: string,
    public name?: string,
    public old?: string,
    public patronymic?: string,
    public pdfVersion?: PdfVersion,
    public phones?: string[],
    public preview2xURL?: string,
    public previewHeight?: number,
    public previewURL?: string,
    public previewWidth?: number,
    public processing?: boolean,
    public size?: number,
    public stickerpack?: string,
    public subtype?: Mediasubtype,
    public title?: string,
    public upload?: string,
  ) {}

  public static fromJSON (raw: MessageContentJSON): MessageContent {
    return new MessageContent(
      raw.text,
      raw.type,
      raw.actor,
      raw.animated,
      raw.blurhash,
      raw.comment,
      raw.duration,
      raw.emails,
      raw.family_name,
      raw.given_name,
      raw.new,
      raw.mediaURL,
      raw.name,
      raw.old,
      raw.patronymic,
      raw.pdf_version && PdfVersion.fromJSON(raw.pdf_version),
      raw.phones,
      raw.preview2xURL,
      raw.previewHeight,
      raw.previewURL,
      raw.previewWidth,
      raw.processing,
      raw.size,
      raw.stickerpack,
      raw.subtype,
      raw.title,
      raw.upload,
    )
  }

  public mappableFields = [
    'text',
    'type',
    'actor',
    'animated',
    'blurhash',
    'comment',
    'duration',
    'emails',
    'familyName',
    'givenName',
    'isNew',
    'mediaURL',
    'name',
    'old',
    'patronymic',
    'pdfVersion',
    'phones',
    'preview2xURL',
    'previewHeight',
    'previewURL',
    'previewWidth',
    'processing',
    'size',
    'stickerpack',
    'subtype',
    'title',
    'upload',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    text: () => ({ text: this.text }),
    type: () => ({ type: this.type }),
    actor: () => ({ actor: this.actor }),
    animated: () => ({ animated: this.animated }),
    blurhash: () => ({ blurhash: this.blurhash }),
    comment: () => ({ comment: this.comment }),
    duration: () => ({ duration: this.duration }),
    emails: () => ({ emails: this.emails }),
    familyName: () => ({ family_name: this.familyName }),
    givenName: () => ({ given_name: this.givenName }),
    isNew: () => ({ new: this.isNew }),
    mediaURL: () => ({ mediaURL: this.mediaURL }),
    name: () => ({ name: this.name }),
    old: () => ({ old: this.old }),
    patronymic: () => ({ patronymic: this.patronymic }),
    pdfVersion: () => ({ pdf_version: this.pdfVersion?.toJSON() }),
    phones: () => ({ phones: this.phones }),
    preview2xURL: () => ({ preview2xURL: this.preview2xURL }),
    previewHeight: () => ({ previewHeight: this.previewHeight }),
    previewURL: () => ({ previewURL: this.previewURL }),
    previewWidth: () => ({ previewWidth: this.previewWidth }),
    processing: () => ({ processing: this.processing }),
    size: () => ({ size: this.size }),
    stickerpack: () => ({ stickerpack: this.stickerpack }),
    subtype: () => ({ subtype: this.subtype }),
    title: () => ({ title: this.title }),
    upload: () => ({ upload: this.upload }),
    /* eslint-enable camelcase */
  }

  public toJSON (): MessageContentJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<MessageContentJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface MessageLinkJSON {
  /* eslint-disable camelcase */
  pattern: string;
  text: string;
  url: string;
  nopreview?: boolean;
  preview?: MessageLinkPreviewJSON;
  uploads?: UploadJSON[];
  youtube_id?: string;
  /* eslint-enable camelcase */
}

export class MessageLink implements TDProtoClass<MessageLink> {
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
  constructor (
    public pattern: string,
    public text: string,
    public url: string,
    public nopreview?: boolean,
    public preview?: MessageLinkPreview,
    public uploads?: Upload[],
    public youtubeId?: string,
  ) {}

  public static fromJSON (raw: MessageLinkJSON): MessageLink {
    return new MessageLink(
      raw.pattern,
      raw.text,
      raw.url,
      raw.nopreview,
      raw.preview && MessageLinkPreview.fromJSON(raw.preview),
      raw.uploads && raw.uploads.map(Upload.fromJSON),
      raw.youtube_id,
    )
  }

  public mappableFields = [
    'pattern',
    'text',
    'url',
    'nopreview',
    'preview',
    'uploads',
    'youtubeId',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    pattern: () => ({ pattern: this.pattern }),
    text: () => ({ text: this.text }),
    url: () => ({ url: this.url }),
    nopreview: () => ({ nopreview: this.nopreview }),
    preview: () => ({ preview: this.preview?.toJSON() }),
    uploads: () => ({ uploads: this.uploads?.map(u => u.toJSON()) }),
    youtubeId: () => ({ youtube_id: this.youtubeId }),
    /* eslint-enable camelcase */
  }

  public toJSON (): MessageLinkJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<MessageLinkJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface MessageLinkPreviewJSON {
  /* eslint-disable camelcase */
  title: string;
  description?: string;
  /* eslint-enable camelcase */
}

export class MessageLinkPreview implements TDProtoClass<MessageLinkPreview> {
  /**
   * Website title and description
   * @param title Website title or og:title content
   * @param description Website description
   */
  constructor (
    public title: string,
    public description?: string,
  ) {}

  public static fromJSON (raw: MessageLinkPreviewJSON): MessageLinkPreview {
    return new MessageLinkPreview(
      raw.title,
      raw.description,
    )
  }

  public mappableFields = [
    'title',
    'description',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    title: () => ({ title: this.title }),
    description: () => ({ description: this.description }),
    /* eslint-enable camelcase */
  }

  public toJSON (): MessageLinkPreviewJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<MessageLinkPreviewJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface MessagePushJSON {
  /* eslint-disable camelcase */
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
  /* eslint-enable camelcase */
}

export class MessagePush implements TDProtoClass<MessagePush> {
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
  constructor (
    public chat: JID,
    public clickAction: string,
    public created: ISODateTimeString,
    public iconUrl: string,
    public message: string,
    public messageId: string,
    public sender: JID,
    public subtitle: string,
    public tag: string,
    public team: string,
    public title: string,
  ) {}

  public static fromJSON (raw: MessagePushJSON): MessagePush {
    return new MessagePush(
      raw.chat,
      raw.click_action,
      raw.created,
      raw.icon_url,
      raw.message,
      raw.message_id,
      raw.sender,
      raw.subtitle,
      raw.tag,
      raw.team,
      raw.title,
    )
  }

  public mappableFields = [
    'chat',
    'clickAction',
    'created',
    'iconUrl',
    'message',
    'messageId',
    'sender',
    'subtitle',
    'tag',
    'team',
    'title',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    chat: () => ({ chat: this.chat }),
    clickAction: () => ({ click_action: this.clickAction }),
    created: () => ({ created: this.created }),
    iconUrl: () => ({ icon_url: this.iconUrl }),
    message: () => ({ message: this.message }),
    messageId: () => ({ message_id: this.messageId }),
    sender: () => ({ sender: this.sender }),
    subtitle: () => ({ subtitle: this.subtitle }),
    tag: () => ({ tag: this.tag }),
    team: () => ({ team: this.team }),
    title: () => ({ title: this.title }),
    /* eslint-enable camelcase */
  }

  public toJSON (): MessagePushJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<MessagePushJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface MessageReactionJSON {
  /* eslint-disable camelcase */
  counter: number;
  details: MessageReactionDetailJSON[];
  name: string;
  /* eslint-enable camelcase */
}

export class MessageReaction implements TDProtoClass<MessageReaction> {
  /**
   * Message emoji reaction
   * @param counter Number of reactions
   * @param details Details
   * @param name Emoji
   */
  constructor (
    public counter: number,
    public details: MessageReactionDetail[],
    public name: string,
  ) {}

  public static fromJSON (raw: MessageReactionJSON): MessageReaction {
    return new MessageReaction(
      raw.counter,
      raw.details.map(MessageReactionDetail.fromJSON),
      raw.name,
    )
  }

  public mappableFields = [
    'counter',
    'details',
    'name',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    counter: () => ({ counter: this.counter }),
    details: () => ({ details: this.details.map(u => u.toJSON()) }),
    name: () => ({ name: this.name }),
    /* eslint-enable camelcase */
  }

  public toJSON (): MessageReactionJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<MessageReactionJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface MessageReactionDetailJSON {
  /* eslint-disable camelcase */
  created: ISODateTimeString;
  name: string;
  sender: JID;
  /* eslint-enable camelcase */
}

export class MessageReactionDetail implements TDProtoClass<MessageReactionDetail> {
  /**
   * Message reaction detail
   * @param created When reaction added, iso datetime
   * @param name Reaction emoji
   * @param sender Reaction author
   */
  constructor (
    public created: ISODateTimeString,
    public name: string,
    public sender: JID,
  ) {}

  public static fromJSON (raw: MessageReactionDetailJSON): MessageReactionDetail {
    return new MessageReactionDetail(
      raw.created,
      raw.name,
      raw.sender,
    )
  }

  public mappableFields = [
    'created',
    'name',
    'sender',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    created: () => ({ created: this.created }),
    name: () => ({ name: this.name }),
    sender: () => ({ sender: this.sender }),
    /* eslint-enable camelcase */
  }

  public toJSON (): MessageReactionDetailJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<MessageReactionDetailJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface MyReactionsJSON {
  /* eslint-disable camelcase */
  all: ReactionJSON[];
  top: ReactionJSON[];
  /* eslint-enable camelcase */
}

export class MyReactions implements TDProtoClass<MyReactions> {
  /**
   * Reactions to messages: frequently used and all available
   * @param all All available reactions
   * @param top My frequently used reactions
   */
  constructor (
    public all: Reaction[],
    public top: Reaction[],
  ) {}

  public static fromJSON (raw: MyReactionsJSON): MyReactions {
    return new MyReactions(
      raw.all.map(Reaction.fromJSON),
      raw.top.map(Reaction.fromJSON),
    )
  }

  public mappableFields = [
    'all',
    'top',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    all: () => ({ all: this.all.map(u => u.toJSON()) }),
    top: () => ({ top: this.top.map(u => u.toJSON()) }),
    /* eslint-enable camelcase */
  }

  public toJSON (): MyReactionsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<MyReactionsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface NodeJSON {
  /* eslint-disable camelcase */
  enabled: boolean;
  title: string;
  uid: string;
  /* eslint-enable camelcase */
}

export class Node implements TDProtoClass<Node> {
  /**
   * Node (for external users)
   * @param enabled Synchronization with node works
   * @param title Node title
   * @param uid Node uid
   */
  constructor (
    public enabled: boolean,
    public title: string,
    public uid: string,
  ) {}

  public static fromJSON (raw: NodeJSON): Node {
    return new Node(
      raw.enabled,
      raw.title,
      raw.uid,
    )
  }

  public mappableFields = [
    'enabled',
    'title',
    'uid',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    enabled: () => ({ enabled: this.enabled }),
    title: () => ({ title: this.title }),
    uid: () => ({ uid: this.uid }),
    /* eslint-enable camelcase */
  }

  public toJSON (): NodeJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<NodeJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface OAuthServiceJSON {
  /* eslint-disable camelcase */
  name: string;
  url: string;
  /* eslint-enable camelcase */
}

export class OAuthService implements TDProtoClass<OAuthService> {
  /**
   * OAuth service
   * @param name Integration title
   * @param url Redirect url
   */
  constructor (
    public name: string,
    public url: string,
  ) {}

  public static fromJSON (raw: OAuthServiceJSON): OAuthService {
    return new OAuthService(
      raw.name,
      raw.url,
    )
  }

  public mappableFields = [
    'name',
    'url',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    name: () => ({ name: this.name }),
    url: () => ({ url: this.url }),
    /* eslint-enable camelcase */
  }

  public toJSON (): OAuthServiceJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<OAuthServiceJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface OnlineCallJSON {
  /* eslint-disable camelcase */
  jid: JID;
  uid: string;
  online_count?: number;
  start?: ISODateTimeString;
  /* eslint-enable camelcase */
}

export class OnlineCall implements TDProtoClass<OnlineCall> {
  /**
   * Active call status
   * @param jid Chat or contact id
   * @param uid Call id
   * @param onlineCount Number participants in call
   * @param start Call start
   */
  constructor (
    public jid: JID,
    public uid: string,
    public onlineCount?: number,
    public start?: ISODateTimeString,
  ) {}

  public static fromJSON (raw: OnlineCallJSON): OnlineCall {
    return new OnlineCall(
      raw.jid,
      raw.uid,
      raw.online_count,
      raw.start,
    )
  }

  public mappableFields = [
    'jid',
    'uid',
    'onlineCount',
    'start',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    jid: () => ({ jid: this.jid }),
    uid: () => ({ uid: this.uid }),
    onlineCount: () => ({ online_count: this.onlineCount }),
    start: () => ({ start: this.start }),
    /* eslint-enable camelcase */
  }

  public toJSON (): OnlineCallJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<OnlineCallJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface OnlineContactJSON {
  /* eslint-disable camelcase */
  jid: JID;
  mobile: boolean;
  afk?: boolean;
  focused?: boolean;
  /* eslint-enable camelcase */
}

export class OnlineContact implements TDProtoClass<OnlineContact> {
  /**
   * Contact online status
   * @param jid Contact id
   * @param mobile Is mobile client
   * @param afk Is away from keyboard
   * @param focused Focus mode enabled
   */
  constructor (
    public jid: JID,
    public mobile: boolean,
    public afk?: boolean,
    public focused?: boolean,
  ) {}

  public static fromJSON (raw: OnlineContactJSON): OnlineContact {
    return new OnlineContact(
      raw.jid,
      raw.mobile,
      raw.afk,
      raw.focused,
    )
  }

  public mappableFields = [
    'jid',
    'mobile',
    'afk',
    'focused',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    jid: () => ({ jid: this.jid }),
    mobile: () => ({ mobile: this.mobile }),
    afk: () => ({ afk: this.afk }),
    focused: () => ({ focused: this.focused }),
    /* eslint-enable camelcase */
  }

  public toJSON (): OnlineContactJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<OnlineContactJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface PaginatedChatsJSON {
  /* eslint-disable camelcase */
  count: number;
  limit: number;
  objects: ChatJSON[];
  offset: number;
  contacts?: ContactJSON[];
  /* eslint-enable camelcase */
}

export class PaginatedChats implements TDProtoClass<PaginatedChats> {
  /**
   * Paginated chats
   * @param count DOCUMENTATION MISSING
   * @param limit DOCUMENTATION MISSING
   * @param objects DOCUMENTATION MISSING
   * @param offset DOCUMENTATION MISSING
   * @param contacts DOCUMENTATION MISSING
   */
  constructor (
    public count: number,
    public limit: number,
    public objects: Chat[],
    public offset: number,
    public contacts?: Contact[],
  ) {}

  public static fromJSON (raw: PaginatedChatsJSON): PaginatedChats {
    return new PaginatedChats(
      raw.count,
      raw.limit,
      raw.objects.map(Chat.fromJSON),
      raw.offset,
      raw.contacts && raw.contacts.map(Contact.fromJSON),
    )
  }

  public mappableFields = [
    'count',
    'limit',
    'objects',
    'offset',
    'contacts',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    count: () => ({ count: this.count }),
    limit: () => ({ limit: this.limit }),
    objects: () => ({ objects: this.objects.map(u => u.toJSON()) }),
    offset: () => ({ offset: this.offset }),
    contacts: () => ({ contacts: this.contacts?.map(u => u.toJSON()) }),
    /* eslint-enable camelcase */
  }

  public toJSON (): PaginatedChatsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<PaginatedChatsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface PaginatedContactsJSON {
  /* eslint-disable camelcase */
  count: number;
  limit: number;
  objects: ContactJSON[];
  offset: number;
  /* eslint-enable camelcase */
}

export class PaginatedContacts implements TDProtoClass<PaginatedContacts> {
  /**
   * Paginated contacts
   * @param count DOCUMENTATION MISSING
   * @param limit DOCUMENTATION MISSING
   * @param objects DOCUMENTATION MISSING
   * @param offset DOCUMENTATION MISSING
   */
  constructor (
    public count: number,
    public limit: number,
    public objects: Contact[],
    public offset: number,
  ) {}

  public static fromJSON (raw: PaginatedContactsJSON): PaginatedContacts {
    return new PaginatedContacts(
      raw.count,
      raw.limit,
      raw.objects.map(Contact.fromJSON),
      raw.offset,
    )
  }

  public mappableFields = [
    'count',
    'limit',
    'objects',
    'offset',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    count: () => ({ count: this.count }),
    limit: () => ({ limit: this.limit }),
    objects: () => ({ objects: this.objects.map(u => u.toJSON()) }),
    offset: () => ({ offset: this.offset }),
    /* eslint-enable camelcase */
  }

  public toJSON (): PaginatedContactsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<PaginatedContactsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface PaginatedMessagesJSON {
  /* eslint-disable camelcase */
  count: number;
  limit: number;
  objects: MessageJSON[];
  offset: number;
  /* eslint-enable camelcase */
}

export class PaginatedMessages implements TDProtoClass<PaginatedMessages> {
  /**
   * Paginated messages
   * @param count DOCUMENTATION MISSING
   * @param limit DOCUMENTATION MISSING
   * @param objects DOCUMENTATION MISSING
   * @param offset DOCUMENTATION MISSING
   */
  constructor (
    public count: number,
    public limit: number,
    public objects: Message[],
    public offset: number,
  ) {}

  public static fromJSON (raw: PaginatedMessagesJSON): PaginatedMessages {
    return new PaginatedMessages(
      raw.count,
      raw.limit,
      raw.objects.map(Message.fromJSON),
      raw.offset,
    )
  }

  public mappableFields = [
    'count',
    'limit',
    'objects',
    'offset',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    count: () => ({ count: this.count }),
    limit: () => ({ limit: this.limit }),
    objects: () => ({ objects: this.objects.map(u => u.toJSON()) }),
    offset: () => ({ offset: this.offset }),
    /* eslint-enable camelcase */
  }

  public toJSON (): PaginatedMessagesJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<PaginatedMessagesJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface PaginatedUploadShortMessagesJSON {
  /* eslint-disable camelcase */
  count: number;
  limit: number;
  objects: UploadShortMessageJSON[];
  offset: number;
  /* eslint-enable camelcase */
}

export class PaginatedUploadShortMessages implements TDProtoClass<PaginatedUploadShortMessages> {
  /**
   * Paginated UploadShortMessage
   * @param count DOCUMENTATION MISSING
   * @param limit DOCUMENTATION MISSING
   * @param objects DOCUMENTATION MISSING
   * @param offset DOCUMENTATION MISSING
   */
  constructor (
    public count: number,
    public limit: number,
    public objects: UploadShortMessage[],
    public offset: number,
  ) {}

  public static fromJSON (raw: PaginatedUploadShortMessagesJSON): PaginatedUploadShortMessages {
    return new PaginatedUploadShortMessages(
      raw.count,
      raw.limit,
      raw.objects.map(UploadShortMessage.fromJSON),
      raw.offset,
    )
  }

  public mappableFields = [
    'count',
    'limit',
    'objects',
    'offset',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    count: () => ({ count: this.count }),
    limit: () => ({ limit: this.limit }),
    objects: () => ({ objects: this.objects.map(u => u.toJSON()) }),
    offset: () => ({ offset: this.offset }),
    /* eslint-enable camelcase */
  }

  public toJSON (): PaginatedUploadShortMessagesJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<PaginatedUploadShortMessagesJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface PaymentJSON {
  /* eslint-disable camelcase */
  confirmation_url: string;
  tariff_uid: string;
  team_uid: string;
  user_uid: string;
  /* eslint-enable camelcase */
}

export class Payment implements TDProtoClass<Payment> {
  /**
   * MISSING CLASS DOCUMENTATION
   * @param confirmationUrl DOCUMENTATION MISSING
   * @param tariffUid DOCUMENTATION MISSING
   * @param teamUid DOCUMENTATION MISSING
   * @param userUid DOCUMENTATION MISSING
   */
  constructor (
    public confirmationUrl: string,
    public tariffUid: string,
    public teamUid: string,
    public userUid: string,
  ) {}

  public static fromJSON (raw: PaymentJSON): Payment {
    return new Payment(
      raw.confirmation_url,
      raw.tariff_uid,
      raw.team_uid,
      raw.user_uid,
    )
  }

  public mappableFields = [
    'confirmationUrl',
    'tariffUid',
    'teamUid',
    'userUid',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    confirmationUrl: () => ({ confirmation_url: this.confirmationUrl }),
    tariffUid: () => ({ tariff_uid: this.tariffUid }),
    teamUid: () => ({ team_uid: this.teamUid }),
    userUid: () => ({ user_uid: this.userUid }),
    /* eslint-enable camelcase */
  }

  public toJSON (): PaymentJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<PaymentJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface PdfVersionJSON {
  /* eslint-disable camelcase */
  url: string;
  text_preview?: string;
  /* eslint-enable camelcase */
}

export class PdfVersion implements TDProtoClass<PdfVersion> {
  /**
   * PDF preview of mediafile. Experimental
   * @param url Absolute url
   * @param textPreview First string of text content
   */
  constructor (
    public url: string,
    public textPreview?: string,
  ) {}

  public static fromJSON (raw: PdfVersionJSON): PdfVersion {
    return new PdfVersion(
      raw.url,
      raw.text_preview,
    )
  }

  public mappableFields = [
    'url',
    'textPreview',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    url: () => ({ url: this.url }),
    textPreview: () => ({ text_preview: this.textPreview }),
    /* eslint-enable camelcase */
  }

  public toJSON (): PdfVersionJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<PdfVersionJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface PushDeviceJSON {
  /* eslint-disable camelcase */
  allowed_notifications: boolean;
  data_badges: boolean;
  data_pushes: boolean;
  device_id: string;
  name: string;
  notification_token: string;
  type: string;
  voip_notification_token: string;
  /* eslint-enable camelcase */
}

export class PushDevice implements TDProtoClass<PushDevice> {
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
  constructor (
    public allowedNotifications: boolean,
    public dataBadges: boolean,
    public dataPushes: boolean,
    public deviceId: string,
    public name: string,
    public notificationToken: string,
    public type: string,
    public voipNotificationToken: string,
  ) {}

  public static fromJSON (raw: PushDeviceJSON): PushDevice {
    return new PushDevice(
      raw.allowed_notifications,
      raw.data_badges,
      raw.data_pushes,
      raw.device_id,
      raw.name,
      raw.notification_token,
      raw.type,
      raw.voip_notification_token,
    )
  }

  public mappableFields = [
    'allowedNotifications',
    'dataBadges',
    'dataPushes',
    'deviceId',
    'name',
    'notificationToken',
    'type',
    'voipNotificationToken',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    allowedNotifications: () => ({ allowed_notifications: this.allowedNotifications }),
    dataBadges: () => ({ data_badges: this.dataBadges }),
    dataPushes: () => ({ data_pushes: this.dataPushes }),
    deviceId: () => ({ device_id: this.deviceId }),
    name: () => ({ name: this.name }),
    notificationToken: () => ({ notification_token: this.notificationToken }),
    type: () => ({ type: this.type }),
    voipNotificationToken: () => ({ voip_notification_token: this.voipNotificationToken }),
    /* eslint-enable camelcase */
  }

  public toJSON (): PushDeviceJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<PushDeviceJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ReactionJSON {
  /* eslint-disable camelcase */
  name: string;
  /* eslint-enable camelcase */
}

export class Reaction implements TDProtoClass<Reaction> {
  /**
   * Emoji reaction
   * @param name Unicode symbol
   */
  constructor (
    public name: string,
  ) {}

  public static fromJSON (raw: ReactionJSON): Reaction {
    return new Reaction(
      raw.name,
    )
  }

  public mappableFields = [
    'name',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    name: () => ({ name: this.name }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ReactionJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ReactionJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ReceivedMessageJSON {
  /* eslint-disable camelcase */
  chat: JID;
  message_id: string;
  received: boolean;
  _debug?: string;
  num_received?: number;
  /* eslint-enable camelcase */
}

export class ReceivedMessage implements TDProtoClass<ReceivedMessage> {
  /**
   * Message receiving status
   * @param chat Chat or contact id
   * @param messageId Message id
   * @param received Is received
   * @param _debug Debug message, if any
   * @param numReceived Number of contacts received this message. Experimental
   */
  constructor (
    public chat: JID,
    public messageId: string,
    public received: boolean,
    public _debug?: string,
    public numReceived?: number,
  ) {}

  public static fromJSON (raw: ReceivedMessageJSON): ReceivedMessage {
    return new ReceivedMessage(
      raw.chat,
      raw.message_id,
      raw.received,
      raw._debug,
      raw.num_received,
    )
  }

  public mappableFields = [
    'chat',
    'messageId',
    'received',
    '_debug',
    'numReceived',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    chat: () => ({ chat: this.chat }),
    messageId: () => ({ message_id: this.messageId }),
    received: () => ({ received: this.received }),
    _debug: () => ({ _debug: this._debug }),
    numReceived: () => ({ num_received: this.numReceived }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ReceivedMessageJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ReceivedMessageJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface RemindJSON {
  /* eslint-disable camelcase */
  chat: JID;
  fire_at: ISODateTimeString;
  uid: string;
  comment?: string;
  /* eslint-enable camelcase */
}

export class Remind implements TDProtoClass<Remind> {
  /**
   * Remind
   * @param chat Chat id
   * @param fireAt Activation time, iso
   * @param uid Remind id
   * @param comment Comment, if any
   */
  constructor (
    public chat: JID,
    public fireAt: ISODateTimeString,
    public uid: string,
    public comment?: string,
  ) {}

  public static fromJSON (raw: RemindJSON): Remind {
    return new Remind(
      raw.chat,
      raw.fire_at,
      raw.uid,
      raw.comment,
    )
  }

  public mappableFields = [
    'chat',
    'fireAt',
    'uid',
    'comment',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    chat: () => ({ chat: this.chat }),
    fireAt: () => ({ fire_at: this.fireAt }),
    uid: () => ({ uid: this.uid }),
    comment: () => ({ comment: this.comment }),
    /* eslint-enable camelcase */
  }

  public toJSON (): RemindJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<RemindJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface RespJSON {
  /* eslint-disable camelcase */
  ok: boolean;
  _time?: string;
  details?: Record<string, string>;
  error?: Err;
  markup?: MarkupEntityJSON[];
  reason?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  result?: any;
  /* eslint-enable camelcase */
}

export class Resp implements TDProtoClass<Resp> {
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
  constructor (
    public ok: boolean,
    public _time?: string,
    public details?: Record<string, string>,
    public error?: Err,
    public markup?: MarkupEntity[],
    public reason?: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public result?: any,
  ) {}

  public static fromJSON (raw: RespJSON): Resp {
    return new Resp(
      raw.ok,
      raw._time,
      raw.details,
      raw.error,
      raw.markup && raw.markup.map(MarkupEntity.fromJSON),
      raw.reason,
      raw.result,
    )
  }

  public mappableFields = [
    'ok',
    '_time',
    'details',
    'error',
    'markup',
    'reason',
    'result',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    ok: () => ({ ok: this.ok }),
    _time: () => ({ _time: this._time }),
    details: () => ({ details: this.details }),
    error: () => ({ error: this.error }),
    markup: () => ({ markup: this.markup?.map(u => u.toJSON()) }),
    reason: () => ({ reason: this.reason }),
    result: () => ({ result: this.result }),
    /* eslint-enable camelcase */
  }

  public toJSON (): RespJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<RespJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface SectionJSON {
  /* eslint-disable camelcase */
  gentime: number;
  name: string;
  sort_ordering: number;
  uid: string;
  description?: string;
  is_archive?: boolean;
  /* eslint-enable camelcase */
}

export class Section implements TDProtoClass<Section> {
  /**
   * Task project or contact section
   * @param gentime Object version
   * @param name Name
   * @param sortOrdering Sort ordering
   * @param uid Section uid
   * @param description Description, if any
   * @param isArchive Is deleted
   */
  constructor (
    public gentime: number,
    public name: string,
    public sortOrdering: number,
    public uid: string,
    public description?: string,
    public isArchive?: boolean,
  ) {}

  public static fromJSON (raw: SectionJSON): Section {
    return new Section(
      raw.gentime,
      raw.name,
      raw.sort_ordering,
      raw.uid,
      raw.description,
      raw.is_archive,
    )
  }

  public mappableFields = [
    'gentime',
    'name',
    'sortOrdering',
    'uid',
    'description',
    'isArchive',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    gentime: () => ({ gentime: this.gentime }),
    name: () => ({ name: this.name }),
    sortOrdering: () => ({ sort_ordering: this.sortOrdering }),
    uid: () => ({ uid: this.uid }),
    description: () => ({ description: this.description }),
    isArchive: () => ({ is_archive: this.isArchive }),
    /* eslint-enable camelcase */
  }

  public toJSON (): SectionJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<SectionJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerCallAnswerJSON {
  /* eslint-disable camelcase */
  event: string;
  params: ServerCallAnswerParamsJSON;
  confirm_id?: string;
  /* eslint-enable camelcase */
}

export class ServerCallAnswer implements TDProtoClass<ServerCallAnswer> {
  /**
   * Call parameters (deprecated: use `ServerCallSdp`)
   * @param event DOCUMENTATION MISSING
   * @param params DOCUMENTATION MISSING
   * @param confirmId DOCUMENTATION MISSING
   */
  constructor (
    public event: string,
    public params: ServerCallAnswerParams,
    public confirmId?: string,
  ) {}

  public static fromJSON (raw: ServerCallAnswerJSON): ServerCallAnswer {
    return new ServerCallAnswer(
      raw.event,
      ServerCallAnswerParams.fromJSON(raw.params),
      raw.confirm_id,
    )
  }

  public mappableFields = [
    'event',
    'params',
    'confirmId',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    event: () => ({ event: this.event }),
    params: () => ({ params: this.params.toJSON() }),
    confirmId: () => ({ confirm_id: this.confirmId }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerCallAnswerJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerCallAnswerJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerCallAnswerCandidateJSON {
  /* eslint-disable camelcase */
  candidate: string;
  sdpMLineIndex: number;
  /* eslint-enable camelcase */
}

export class ServerCallAnswerCandidate implements TDProtoClass<ServerCallAnswerCandidate> {
  /**
   * ICE candidate for call answer
   * @param candidate DOCUMENTATION MISSING
   * @param sdpMLineIndex DOCUMENTATION MISSING
   */
  constructor (
    public candidate: string,
    public sdpMLineIndex: number,
  ) {}

  public static fromJSON (raw: ServerCallAnswerCandidateJSON): ServerCallAnswerCandidate {
    return new ServerCallAnswerCandidate(
      raw.candidate,
      raw.sdpMLineIndex,
    )
  }

  public mappableFields = [
    'candidate',
    'sdpMLineIndex',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    candidate: () => ({ candidate: this.candidate }),
    sdpMLineIndex: () => ({ sdpMLineIndex: this.sdpMLineIndex }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerCallAnswerCandidateJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerCallAnswerCandidateJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerCallAnswerParamsJSON {
  /* eslint-disable camelcase */
  jid: JID;
  jsep: JSEPJSON;
  uid: string;
  candidates?: ServerCallAnswerCandidateJSON[];
  onliners?: CallOnlinerJSON[];
  /* eslint-enable camelcase */
}

export class ServerCallAnswerParams implements TDProtoClass<ServerCallAnswerParams> {
  /**
   * Params of the server.call.answer event
   * @param jid Chat or contact id
   * @param jsep SDP data
   * @param uid Call id
   * @param candidates List of ICE candidates (when trickle = false)
   * @param onliners Current call participants
   */
  constructor (
    public jid: JID,
    public jsep: JSEP,
    public uid: string,
    public candidates?: ServerCallAnswerCandidate[],
    public onliners?: CallOnliner[],
  ) {}

  public static fromJSON (raw: ServerCallAnswerParamsJSON): ServerCallAnswerParams {
    return new ServerCallAnswerParams(
      raw.jid,
      JSEP.fromJSON(raw.jsep),
      raw.uid,
      raw.candidates && raw.candidates.map(ServerCallAnswerCandidate.fromJSON),
      raw.onliners && raw.onliners.map(CallOnliner.fromJSON),
    )
  }

  public mappableFields = [
    'jid',
    'jsep',
    'uid',
    'candidates',
    'onliners',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    jid: () => ({ jid: this.jid }),
    jsep: () => ({ jsep: this.jsep.toJSON() }),
    uid: () => ({ uid: this.uid }),
    candidates: () => ({ candidates: this.candidates?.map(u => u.toJSON()) }),
    onliners: () => ({ onliners: this.onliners?.map(u => u.toJSON()) }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerCallAnswerParamsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerCallAnswerParamsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerCallBuzzJSON {
  /* eslint-disable camelcase */
  event: string;
  params: ServerCallBuzzParamsJSON;
  confirm_id?: string;
  /* eslint-enable camelcase */
}

export class ServerCallBuzz implements TDProtoClass<ServerCallBuzz> {
  /**
   * Call buzzing
   * @param event DOCUMENTATION MISSING
   * @param params DOCUMENTATION MISSING
   * @param confirmId DOCUMENTATION MISSING
   */
  constructor (
    public event: string,
    public params: ServerCallBuzzParams,
    public confirmId?: string,
  ) {}

  public static fromJSON (raw: ServerCallBuzzJSON): ServerCallBuzz {
    return new ServerCallBuzz(
      raw.event,
      ServerCallBuzzParams.fromJSON(raw.params),
      raw.confirm_id,
    )
  }

  public mappableFields = [
    'event',
    'params',
    'confirmId',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    event: () => ({ event: this.event }),
    params: () => ({ params: this.params.toJSON() }),
    confirmId: () => ({ confirm_id: this.confirmId }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerCallBuzzJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerCallBuzzJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerCallBuzzParamsJSON {
  /* eslint-disable camelcase */
  actor: ContactShortJSON;
  buzz_timeout: number;
  chat: ChatShortJSON;
  display_name: string;
  icons: IconDataJSON;
  jid: JID;
  team: string;
  teaminfo: TeamShortJSON;
  uid: string;
  /* eslint-enable camelcase */
}

export class ServerCallBuzzParams implements TDProtoClass<ServerCallBuzzParams> {
  /**
   * Params of the server.call.buzz event
   * @param actor Short call creator information
   * @param buzzTimeout Number of seconds for stop buzzing
   * @param chat Short chat information
   * @param displayName Chat title
   * @param icons Chat icons
   * @param jid Chat or contact id
   * @param team Deprecated
   * @param teaminfo Short team information
   * @param uid Call id
   */
  constructor (
    public actor: ContactShort,
    public buzzTimeout: number,
    public chat: ChatShort,
    public displayName: string,
    public icons: IconData,
    public jid: JID,
    public team: string,
    public teaminfo: TeamShort,
    public uid: string,
  ) {}

  public static fromJSON (raw: ServerCallBuzzParamsJSON): ServerCallBuzzParams {
    return new ServerCallBuzzParams(
      ContactShort.fromJSON(raw.actor),
      raw.buzz_timeout,
      ChatShort.fromJSON(raw.chat),
      raw.display_name,
      IconData.fromJSON(raw.icons),
      raw.jid,
      raw.team,
      TeamShort.fromJSON(raw.teaminfo),
      raw.uid,
    )
  }

  public mappableFields = [
    'actor',
    'buzzTimeout',
    'chat',
    'displayName',
    'icons',
    'jid',
    'team',
    'teaminfo',
    'uid',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    actor: () => ({ actor: this.actor.toJSON() }),
    buzzTimeout: () => ({ buzz_timeout: this.buzzTimeout }),
    chat: () => ({ chat: this.chat.toJSON() }),
    displayName: () => ({ display_name: this.displayName }),
    icons: () => ({ icons: this.icons.toJSON() }),
    jid: () => ({ jid: this.jid }),
    team: () => ({ team: this.team }),
    teaminfo: () => ({ teaminfo: this.teaminfo.toJSON() }),
    uid: () => ({ uid: this.uid }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerCallBuzzParamsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerCallBuzzParamsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerCallBuzzcancelJSON {
  /* eslint-disable camelcase */
  event: string;
  params: ServerCallBuzzcancelParamsJSON;
  confirm_id?: string;
  /* eslint-enable camelcase */
}

export class ServerCallBuzzcancel implements TDProtoClass<ServerCallBuzzcancel> {
  /**
   * Call cancelled on buzzing
   * @param event DOCUMENTATION MISSING
   * @param params DOCUMENTATION MISSING
   * @param confirmId DOCUMENTATION MISSING
   */
  constructor (
    public event: string,
    public params: ServerCallBuzzcancelParams,
    public confirmId?: string,
  ) {}

  public static fromJSON (raw: ServerCallBuzzcancelJSON): ServerCallBuzzcancel {
    return new ServerCallBuzzcancel(
      raw.event,
      ServerCallBuzzcancelParams.fromJSON(raw.params),
      raw.confirm_id,
    )
  }

  public mappableFields = [
    'event',
    'params',
    'confirmId',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    event: () => ({ event: this.event }),
    params: () => ({ params: this.params.toJSON() }),
    confirmId: () => ({ confirm_id: this.confirmId }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerCallBuzzcancelJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerCallBuzzcancelJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerCallBuzzcancelParamsJSON {
  /* eslint-disable camelcase */
  jid: JID;
  team: string;
  uid: string;
  /* eslint-enable camelcase */
}

export class ServerCallBuzzcancelParams implements TDProtoClass<ServerCallBuzzcancelParams> {
  /**
   * Params of the server.call.buzzcancel event
   * @param jid Chat or contact id
   * @param team Team id
   * @param uid Call id
   */
  constructor (
    public jid: JID,
    public team: string,
    public uid: string,
  ) {}

  public static fromJSON (raw: ServerCallBuzzcancelParamsJSON): ServerCallBuzzcancelParams {
    return new ServerCallBuzzcancelParams(
      raw.jid,
      raw.team,
      raw.uid,
    )
  }

  public mappableFields = [
    'jid',
    'team',
    'uid',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    jid: () => ({ jid: this.jid }),
    team: () => ({ team: this.team }),
    uid: () => ({ uid: this.uid }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerCallBuzzcancelParamsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerCallBuzzcancelParamsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerCallCheckFingerprintJSON {
  /* eslint-disable camelcase */
  event: string;
  params: ServerCallCheckFingerprintParamsJSON;
  confirm_id?: string;
  /* eslint-enable camelcase */
}

export class ServerCallCheckFingerprint implements TDProtoClass<ServerCallCheckFingerprint> {
  /**
   * Experimental function
   * @param event DOCUMENTATION MISSING
   * @param params DOCUMENTATION MISSING
   * @param confirmId DOCUMENTATION MISSING
   */
  constructor (
    public event: string,
    public params: ServerCallCheckFingerprintParams,
    public confirmId?: string,
  ) {}

  public static fromJSON (raw: ServerCallCheckFingerprintJSON): ServerCallCheckFingerprint {
    return new ServerCallCheckFingerprint(
      raw.event,
      ServerCallCheckFingerprintParams.fromJSON(raw.params),
      raw.confirm_id,
    )
  }

  public mappableFields = [
    'event',
    'params',
    'confirmId',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    event: () => ({ event: this.event }),
    params: () => ({ params: this.params.toJSON() }),
    confirmId: () => ({ confirm_id: this.confirmId }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerCallCheckFingerprintJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerCallCheckFingerprintJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerCallCheckFingerprintParamsJSON {
  /* eslint-disable camelcase */
  fingerprint: string;
  /* eslint-enable camelcase */
}

export class ServerCallCheckFingerprintParams implements TDProtoClass<ServerCallCheckFingerprintParams> {
  /**
   * Params of the server.call.checkfingerprint event
   * @param fingerprint DOCUMENTATION MISSING
   */
  constructor (
    public fingerprint: string,
  ) {}

  public static fromJSON (raw: ServerCallCheckFingerprintParamsJSON): ServerCallCheckFingerprintParams {
    return new ServerCallCheckFingerprintParams(
      raw.fingerprint,
    )
  }

  public mappableFields = [
    'fingerprint',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    fingerprint: () => ({ fingerprint: this.fingerprint }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerCallCheckFingerprintParamsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerCallCheckFingerprintParamsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerCallLeaveJSON {
  /* eslint-disable camelcase */
  event: string;
  params: ServerCallLeaveParamsJSON;
  confirm_id?: string;
  /* eslint-enable camelcase */
}

export class ServerCallLeave implements TDProtoClass<ServerCallLeave> {
  /**
   * Participant leave a call
   * @param event DOCUMENTATION MISSING
   * @param params DOCUMENTATION MISSING
   * @param confirmId DOCUMENTATION MISSING
   */
  constructor (
    public event: string,
    public params: ServerCallLeaveParams,
    public confirmId?: string,
  ) {}

  public static fromJSON (raw: ServerCallLeaveJSON): ServerCallLeave {
    return new ServerCallLeave(
      raw.event,
      ServerCallLeaveParams.fromJSON(raw.params),
      raw.confirm_id,
    )
  }

  public mappableFields = [
    'event',
    'params',
    'confirmId',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    event: () => ({ event: this.event }),
    params: () => ({ params: this.params.toJSON() }),
    confirmId: () => ({ confirm_id: this.confirmId }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerCallLeaveJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerCallLeaveJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerCallLeaveParamsJSON {
  /* eslint-disable camelcase */
  jid: JID;
  uid: string;
  /* eslint-enable camelcase */
}

export class ServerCallLeaveParams implements TDProtoClass<ServerCallLeaveParams> {
  /**
   * Params of the server.call.leave event
   * @param jid Chat or contact id
   * @param uid Call uid
   */
  constructor (
    public jid: JID,
    public uid: string,
  ) {}

  public static fromJSON (raw: ServerCallLeaveParamsJSON): ServerCallLeaveParams {
    return new ServerCallLeaveParams(
      raw.jid,
      raw.uid,
    )
  }

  public mappableFields = [
    'jid',
    'uid',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    jid: () => ({ jid: this.jid }),
    uid: () => ({ uid: this.uid }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerCallLeaveParamsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerCallLeaveParamsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerCallMuteallJSON {
  /* eslint-disable camelcase */
  event: string;
  params: ServerCallMuteallParamsJSON;
  confirm_id?: string;
  /* eslint-enable camelcase */
}

export class ServerCallMuteall implements TDProtoClass<ServerCallMuteall> {
  /**
   * All participants in call muted
   * @param event DOCUMENTATION MISSING
   * @param params DOCUMENTATION MISSING
   * @param confirmId DOCUMENTATION MISSING
   */
  constructor (
    public event: string,
    public params: ServerCallMuteallParams,
    public confirmId?: string,
  ) {}

  public static fromJSON (raw: ServerCallMuteallJSON): ServerCallMuteall {
    return new ServerCallMuteall(
      raw.event,
      ServerCallMuteallParams.fromJSON(raw.params),
      raw.confirm_id,
    )
  }

  public mappableFields = [
    'event',
    'params',
    'confirmId',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    event: () => ({ event: this.event }),
    params: () => ({ params: this.params.toJSON() }),
    confirmId: () => ({ confirm_id: this.confirmId }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerCallMuteallJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerCallMuteallJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerCallMuteallParamsJSON {
  /* eslint-disable camelcase */
  jid: JID;
  muted: boolean;
  /* eslint-enable camelcase */
}

export class ServerCallMuteallParams implements TDProtoClass<ServerCallMuteallParams> {
  /**
   * Params of the server.call.muteall event
   * @param jid Chat or contact id
   * @param muted Mute state
   */
  constructor (
    public jid: JID,
    public muted: boolean,
  ) {}

  public static fromJSON (raw: ServerCallMuteallParamsJSON): ServerCallMuteallParams {
    return new ServerCallMuteallParams(
      raw.jid,
      raw.muted,
    )
  }

  public mappableFields = [
    'jid',
    'muted',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    jid: () => ({ jid: this.jid }),
    muted: () => ({ muted: this.muted }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerCallMuteallParamsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerCallMuteallParamsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerCallRejectJSON {
  /* eslint-disable camelcase */
  event: string;
  params: ServerCallRejectParamsJSON;
  confirm_id?: string;
  /* eslint-enable camelcase */
}

export class ServerCallReject implements TDProtoClass<ServerCallReject> {
  /**
   * Call rejected
   * @param event DOCUMENTATION MISSING
   * @param params DOCUMENTATION MISSING
   * @param confirmId DOCUMENTATION MISSING
   */
  constructor (
    public event: string,
    public params: ServerCallRejectParams,
    public confirmId?: string,
  ) {}

  public static fromJSON (raw: ServerCallRejectJSON): ServerCallReject {
    return new ServerCallReject(
      raw.event,
      ServerCallRejectParams.fromJSON(raw.params),
      raw.confirm_id,
    )
  }

  public mappableFields = [
    'event',
    'params',
    'confirmId',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    event: () => ({ event: this.event }),
    params: () => ({ params: this.params.toJSON() }),
    confirmId: () => ({ confirm_id: this.confirmId }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerCallRejectJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerCallRejectJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerCallRejectParamsJSON {
  /* eslint-disable camelcase */
  jid: JID;
  reason: string;
  uid: string;
  /* eslint-enable camelcase */
}

export class ServerCallRejectParams implements TDProtoClass<ServerCallRejectParams> {
  /**
   * Params of the server.call.reject event
   * @param jid Chat or contact id
   * @param reason Reason, if any
   * @param uid Call id
   */
  constructor (
    public jid: JID,
    public reason: string,
    public uid: string,
  ) {}

  public static fromJSON (raw: ServerCallRejectParamsJSON): ServerCallRejectParams {
    return new ServerCallRejectParams(
      raw.jid,
      raw.reason,
      raw.uid,
    )
  }

  public mappableFields = [
    'jid',
    'reason',
    'uid',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    jid: () => ({ jid: this.jid }),
    reason: () => ({ reason: this.reason }),
    uid: () => ({ uid: this.uid }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerCallRejectParamsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerCallRejectParamsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerCallRestartJSON {
  /* eslint-disable camelcase */
  event: string;
  params: ServerCallRestartParamsJSON;
  confirm_id?: string;
  /* eslint-enable camelcase */
}

export class ServerCallRestart implements TDProtoClass<ServerCallRestart> {
  /**
   * Call restarted
   * @param event DOCUMENTATION MISSING
   * @param params DOCUMENTATION MISSING
   * @param confirmId DOCUMENTATION MISSING
   */
  constructor (
    public event: string,
    public params: ServerCallRestartParams,
    public confirmId?: string,
  ) {}

  public static fromJSON (raw: ServerCallRestartJSON): ServerCallRestart {
    return new ServerCallRestart(
      raw.event,
      ServerCallRestartParams.fromJSON(raw.params),
      raw.confirm_id,
    )
  }

  public mappableFields = [
    'event',
    'params',
    'confirmId',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    event: () => ({ event: this.event }),
    params: () => ({ params: this.params.toJSON() }),
    confirmId: () => ({ confirm_id: this.confirmId }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerCallRestartJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerCallRestartJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerCallRestartParamsJSON {
  /* eslint-disable camelcase */
  jid: JID;
  team: string;
  uid: string;
  /* eslint-enable camelcase */
}

export class ServerCallRestartParams implements TDProtoClass<ServerCallRestartParams> {
  /**
   * Params of the server.call.restart event
   * @param jid Chat or contact id
   * @param team Team id
   * @param uid Call id
   */
  constructor (
    public jid: JID,
    public team: string,
    public uid: string,
  ) {}

  public static fromJSON (raw: ServerCallRestartParamsJSON): ServerCallRestartParams {
    return new ServerCallRestartParams(
      raw.jid,
      raw.team,
      raw.uid,
    )
  }

  public mappableFields = [
    'jid',
    'team',
    'uid',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    jid: () => ({ jid: this.jid }),
    team: () => ({ team: this.team }),
    uid: () => ({ uid: this.uid }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerCallRestartParamsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerCallRestartParamsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerCallSdpJSON {
  /* eslint-disable camelcase */
  event: string;
  params: ServerCallSdpParamsJSON;
  confirm_id?: string;
  /* eslint-enable camelcase */
}

export class ServerCallSdp implements TDProtoClass<ServerCallSdp> {
  /**
   * For exchange Session Description with client when server's Local Session Description is changed
   * @param event DOCUMENTATION MISSING
   * @param params DOCUMENTATION MISSING
   * @param confirmId DOCUMENTATION MISSING
   */
  constructor (
    public event: string,
    public params: ServerCallSdpParams,
    public confirmId?: string,
  ) {}

  public static fromJSON (raw: ServerCallSdpJSON): ServerCallSdp {
    return new ServerCallSdp(
      raw.event,
      ServerCallSdpParams.fromJSON(raw.params),
      raw.confirm_id,
    )
  }

  public mappableFields = [
    'event',
    'params',
    'confirmId',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    event: () => ({ event: this.event }),
    params: () => ({ params: this.params.toJSON() }),
    confirmId: () => ({ confirm_id: this.confirmId }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerCallSdpJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerCallSdpJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerCallSdpParamsJSON {
  /* eslint-disable camelcase */
  jid: JID;
  jsep: JSEPJSON;
  uid: string;
  /* eslint-enable camelcase */
}

export class ServerCallSdpParams implements TDProtoClass<ServerCallSdpParams> {
  /**
   * Params of the server.call.sdp event
   * @param jid Chat or contact id
   * @param jsep SDP data
   * @param uid Call id
   */
  constructor (
    public jid: JID,
    public jsep: JSEP,
    public uid: string,
  ) {}

  public static fromJSON (raw: ServerCallSdpParamsJSON): ServerCallSdpParams {
    return new ServerCallSdpParams(
      raw.jid,
      JSEP.fromJSON(raw.jsep),
      raw.uid,
    )
  }

  public mappableFields = [
    'jid',
    'jsep',
    'uid',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    jid: () => ({ jid: this.jid }),
    jsep: () => ({ jsep: this.jsep.toJSON() }),
    uid: () => ({ uid: this.uid }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerCallSdpParamsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerCallSdpParamsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerCallSoundJSON {
  /* eslint-disable camelcase */
  event: string;
  params: ServerCallSoundParamsJSON;
  confirm_id?: string;
  /* eslint-enable camelcase */
}

export class ServerCallSound implements TDProtoClass<ServerCallSound> {
  /**
   * Mute/unmute call participant
   * @param event DOCUMENTATION MISSING
   * @param params DOCUMENTATION MISSING
   * @param confirmId DOCUMENTATION MISSING
   */
  constructor (
    public event: string,
    public params: ServerCallSoundParams,
    public confirmId?: string,
  ) {}

  public static fromJSON (raw: ServerCallSoundJSON): ServerCallSound {
    return new ServerCallSound(
      raw.event,
      ServerCallSoundParams.fromJSON(raw.params),
      raw.confirm_id,
    )
  }

  public mappableFields = [
    'event',
    'params',
    'confirmId',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    event: () => ({ event: this.event }),
    params: () => ({ params: this.params.toJSON() }),
    confirmId: () => ({ confirm_id: this.confirmId }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerCallSoundJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerCallSoundJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerCallSoundParamsJSON {
  /* eslint-disable camelcase */
  jid: JID;
  muted: boolean;
  /* eslint-enable camelcase */
}

export class ServerCallSoundParams implements TDProtoClass<ServerCallSoundParams> {
  /**
   * Params of the server.call.sound event
   * @param jid Chat or contact id
   * @param muted Mute state
   */
  constructor (
    public jid: JID,
    public muted: boolean,
  ) {}

  public static fromJSON (raw: ServerCallSoundParamsJSON): ServerCallSoundParams {
    return new ServerCallSoundParams(
      raw.jid,
      raw.muted,
    )
  }

  public mappableFields = [
    'jid',
    'muted',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    jid: () => ({ jid: this.jid }),
    muted: () => ({ muted: this.muted }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerCallSoundParamsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerCallSoundParamsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerCallStateJSON {
  /* eslint-disable camelcase */
  event: string;
  params: CallEventJSON;
  confirm_id?: string;
  /* eslint-enable camelcase */
}

export class ServerCallState implements TDProtoClass<ServerCallState> {
  /**
   * Call information
   * @param event DOCUMENTATION MISSING
   * @param params DOCUMENTATION MISSING
   * @param confirmId DOCUMENTATION MISSING
   */
  constructor (
    public event: string,
    public params: CallEvent,
    public confirmId?: string,
  ) {}

  public static fromJSON (raw: ServerCallStateJSON): ServerCallState {
    return new ServerCallState(
      raw.event,
      CallEvent.fromJSON(raw.params),
      raw.confirm_id,
    )
  }

  public mappableFields = [
    'event',
    'params',
    'confirmId',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    event: () => ({ event: this.event }),
    params: () => ({ params: this.params.toJSON() }),
    confirmId: () => ({ confirm_id: this.confirmId }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerCallStateJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerCallStateJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerCallTalkingJSON {
  /* eslint-disable camelcase */
  event: string;
  params: ServerCallTalkingParamsJSON;
  confirm_id?: string;
  /* eslint-enable camelcase */
}

export class ServerCallTalking implements TDProtoClass<ServerCallTalking> {
  /**
   * Someone talks in call
   * @param event DOCUMENTATION MISSING
   * @param params DOCUMENTATION MISSING
   * @param confirmId DOCUMENTATION MISSING
   */
  constructor (
    public event: string,
    public params: ServerCallTalkingParams,
    public confirmId?: string,
  ) {}

  public static fromJSON (raw: ServerCallTalkingJSON): ServerCallTalking {
    return new ServerCallTalking(
      raw.event,
      ServerCallTalkingParams.fromJSON(raw.params),
      raw.confirm_id,
    )
  }

  public mappableFields = [
    'event',
    'params',
    'confirmId',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    event: () => ({ event: this.event }),
    params: () => ({ params: this.params.toJSON() }),
    confirmId: () => ({ confirm_id: this.confirmId }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerCallTalkingJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerCallTalkingJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerCallTalkingParamsJSON {
  /* eslint-disable camelcase */
  actor: JID;
  jid: JID;
  talking: boolean;
  /* eslint-enable camelcase */
}

export class ServerCallTalkingParams implements TDProtoClass<ServerCallTalkingParams> {
  /**
   * Params of the server.call.talking event
   * @param actor Actor id
   * @param jid Chat or contact id
   * @param talking Is talking
   */
  constructor (
    public actor: JID,
    public jid: JID,
    public talking: boolean,
  ) {}

  public static fromJSON (raw: ServerCallTalkingParamsJSON): ServerCallTalkingParams {
    return new ServerCallTalkingParams(
      raw.actor,
      raw.jid,
      raw.talking,
    )
  }

  public mappableFields = [
    'actor',
    'jid',
    'talking',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    actor: () => ({ actor: this.actor }),
    jid: () => ({ jid: this.jid }),
    talking: () => ({ talking: this.talking }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerCallTalkingParamsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerCallTalkingParamsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerChatComposingJSON {
  /* eslint-disable camelcase */
  event: string;
  params: ServerChatComposingParamsJSON;
  confirm_id?: string;
  /* eslint-enable camelcase */
}

export class ServerChatComposing implements TDProtoClass<ServerChatComposing> {
  /**
   * Someone typing or recording audiomessage in chat
   * @param event DOCUMENTATION MISSING
   * @param params DOCUMENTATION MISSING
   * @param confirmId DOCUMENTATION MISSING
   */
  constructor (
    public event: string,
    public params: ServerChatComposingParams,
    public confirmId?: string,
  ) {}

  public static fromJSON (raw: ServerChatComposingJSON): ServerChatComposing {
    return new ServerChatComposing(
      raw.event,
      ServerChatComposingParams.fromJSON(raw.params),
      raw.confirm_id,
    )
  }

  public mappableFields = [
    'event',
    'params',
    'confirmId',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    event: () => ({ event: this.event }),
    params: () => ({ params: this.params.toJSON() }),
    confirmId: () => ({ confirm_id: this.confirmId }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerChatComposingJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerChatComposingJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerChatComposingParamsJSON {
  /* eslint-disable camelcase */
  actor: JID;
  composing: boolean;
  jid: JID;
  is_audio?: boolean;
  valid_until?: ISODateTimeString;
  /* eslint-enable camelcase */
}

export class ServerChatComposingParams implements TDProtoClass<ServerChatComposingParams> {
  /**
   * Params of the server.chat.composing event
   * @param actor Actor id
   * @param composing true = start typing / audio recording, false = stop
   * @param jid Chat or contact id
   * @param isAudio true = audiomessage, false = text typing
   * @param validUntil Composing event max lifetime
   */
  constructor (
    public actor: JID,
    public composing: boolean,
    public jid: JID,
    public isAudio?: boolean,
    public validUntil?: ISODateTimeString,
  ) {}

  public static fromJSON (raw: ServerChatComposingParamsJSON): ServerChatComposingParams {
    return new ServerChatComposingParams(
      raw.actor,
      raw.composing,
      raw.jid,
      raw.is_audio,
      raw.valid_until,
    )
  }

  public mappableFields = [
    'actor',
    'composing',
    'jid',
    'isAudio',
    'validUntil',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    actor: () => ({ actor: this.actor }),
    composing: () => ({ composing: this.composing }),
    jid: () => ({ jid: this.jid }),
    isAudio: () => ({ is_audio: this.isAudio }),
    validUntil: () => ({ valid_until: this.validUntil }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerChatComposingParamsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerChatComposingParamsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerChatDeletedJSON {
  /* eslint-disable camelcase */
  event: string;
  params: ServerChatDeletedParamsJSON;
  confirm_id?: string;
  /* eslint-enable camelcase */
}

export class ServerChatDeleted implements TDProtoClass<ServerChatDeleted> {
  /**
   * Chat deleted
   * @param event DOCUMENTATION MISSING
   * @param params DOCUMENTATION MISSING
   * @param confirmId DOCUMENTATION MISSING
   */
  constructor (
    public event: string,
    public params: ServerChatDeletedParams,
    public confirmId?: string,
  ) {}

  public static fromJSON (raw: ServerChatDeletedJSON): ServerChatDeleted {
    return new ServerChatDeleted(
      raw.event,
      ServerChatDeletedParams.fromJSON(raw.params),
      raw.confirm_id,
    )
  }

  public mappableFields = [
    'event',
    'params',
    'confirmId',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    event: () => ({ event: this.event }),
    params: () => ({ params: this.params.toJSON() }),
    confirmId: () => ({ confirm_id: this.confirmId }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerChatDeletedJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerChatDeletedJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerChatDeletedParamsJSON {
  /* eslint-disable camelcase */
  badge: number;
  chats: DeletedChatJSON[];
  team_unread: TeamUnreadJSON;
  /* eslint-enable camelcase */
}

export class ServerChatDeletedParams implements TDProtoClass<ServerChatDeletedParams> {
  /**
   * Params of the server.chat.deleted event
   * @param badge Total number of unreads
   * @param chats List of deleted chats
   * @param teamUnread Current team counters
   */
  constructor (
    public badge: number,
    public chats: DeletedChat[],
    public teamUnread: TeamUnread,
  ) {}

  public static fromJSON (raw: ServerChatDeletedParamsJSON): ServerChatDeletedParams {
    return new ServerChatDeletedParams(
      raw.badge,
      raw.chats.map(DeletedChat.fromJSON),
      TeamUnread.fromJSON(raw.team_unread),
    )
  }

  public mappableFields = [
    'badge',
    'chats',
    'teamUnread',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    badge: () => ({ badge: this.badge }),
    chats: () => ({ chats: this.chats.map(u => u.toJSON()) }),
    teamUnread: () => ({ team_unread: this.teamUnread.toJSON() }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerChatDeletedParamsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerChatDeletedParamsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerChatDraftJSON {
  /* eslint-disable camelcase */
  event: string;
  params: ServerChatDraftParamsJSON;
  confirm_id?: string;
  /* eslint-enable camelcase */
}

export class ServerChatDraft implements TDProtoClass<ServerChatDraft> {
  /**
   * Changed draft message in chat
   * @param event DOCUMENTATION MISSING
   * @param params DOCUMENTATION MISSING
   * @param confirmId DOCUMENTATION MISSING
   */
  constructor (
    public event: string,
    public params: ServerChatDraftParams,
    public confirmId?: string,
  ) {}

  public static fromJSON (raw: ServerChatDraftJSON): ServerChatDraft {
    return new ServerChatDraft(
      raw.event,
      ServerChatDraftParams.fromJSON(raw.params),
      raw.confirm_id,
    )
  }

  public mappableFields = [
    'event',
    'params',
    'confirmId',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    event: () => ({ event: this.event }),
    params: () => ({ params: this.params.toJSON() }),
    confirmId: () => ({ confirm_id: this.confirmId }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerChatDraftJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerChatDraftJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerChatDraftParamsJSON {
  /* eslint-disable camelcase */
  draft: string;
  draft_gentime: number;
  draft_num: number;
  jid: JID;
  /* eslint-enable camelcase */
}

export class ServerChatDraftParams implements TDProtoClass<ServerChatDraftParams> {
  /**
   * Params of the server.chat.draft event
   * @param draft Draft text
   * @param draftGentime Draft version
   * @param draftNum Deprecated
   * @param jid Chat or contact id
   */
  constructor (
    public draft: string,
    public draftGentime: number,
    public draftNum: number,
    public jid: JID,
  ) {}

  public static fromJSON (raw: ServerChatDraftParamsJSON): ServerChatDraftParams {
    return new ServerChatDraftParams(
      raw.draft,
      raw.draft_gentime,
      raw.draft_num,
      raw.jid,
    )
  }

  public mappableFields = [
    'draft',
    'draftGentime',
    'draftNum',
    'jid',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    draft: () => ({ draft: this.draft }),
    draftGentime: () => ({ draft_gentime: this.draftGentime }),
    draftNum: () => ({ draft_num: this.draftNum }),
    jid: () => ({ jid: this.jid }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerChatDraftParamsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerChatDraftParamsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerChatLastreadJSON {
  /* eslint-disable camelcase */
  event: string;
  params: ServerChatLastreadParamsJSON;
  confirm_id?: string;
  /* eslint-enable camelcase */
}

export class ServerChatLastread implements TDProtoClass<ServerChatLastread> {
  /**
   * Changed last read message in chat
   * @param event DOCUMENTATION MISSING
   * @param params DOCUMENTATION MISSING
   * @param confirmId DOCUMENTATION MISSING
   */
  constructor (
    public event: string,
    public params: ServerChatLastreadParams,
    public confirmId?: string,
  ) {}

  public static fromJSON (raw: ServerChatLastreadJSON): ServerChatLastread {
    return new ServerChatLastread(
      raw.event,
      ServerChatLastreadParams.fromJSON(raw.params),
      raw.confirm_id,
    )
  }

  public mappableFields = [
    'event',
    'params',
    'confirmId',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    event: () => ({ event: this.event }),
    params: () => ({ params: this.params.toJSON() }),
    confirmId: () => ({ confirm_id: this.confirmId }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerChatLastreadJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerChatLastreadJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerChatLastreadParamsJSON {
  /* eslint-disable camelcase */
  badge: number;
  chats: ChatCountersJSON[];
  team_unread: TeamUnreadJSON;
  /* eslint-enable camelcase */
}

export class ServerChatLastreadParams implements TDProtoClass<ServerChatLastreadParams> {
  /**
   * Params of the server.chat.lastread event
   * @param badge Total number of unreads
   * @param chats Chat counters
   * @param teamUnread Current team counters
   */
  constructor (
    public badge: number,
    public chats: ChatCounters[],
    public teamUnread: TeamUnread,
  ) {}

  public static fromJSON (raw: ServerChatLastreadParamsJSON): ServerChatLastreadParams {
    return new ServerChatLastreadParams(
      raw.badge,
      raw.chats.map(ChatCounters.fromJSON),
      TeamUnread.fromJSON(raw.team_unread),
    )
  }

  public mappableFields = [
    'badge',
    'chats',
    'teamUnread',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    badge: () => ({ badge: this.badge }),
    chats: () => ({ chats: this.chats.map(u => u.toJSON()) }),
    teamUnread: () => ({ team_unread: this.teamUnread.toJSON() }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerChatLastreadParamsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerChatLastreadParamsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerChatUpdatedJSON {
  /* eslint-disable camelcase */
  event: string;
  params: ServerChatUpdatedParamsJSON;
  confirm_id?: string;
  /* eslint-enable camelcase */
}

export class ServerChatUpdated implements TDProtoClass<ServerChatUpdated> {
  /**
   * Chat created or updated
   * @param event DOCUMENTATION MISSING
   * @param params DOCUMENTATION MISSING
   * @param confirmId DOCUMENTATION MISSING
   */
  constructor (
    public event: string,
    public params: ServerChatUpdatedParams,
    public confirmId?: string,
  ) {}

  public static fromJSON (raw: ServerChatUpdatedJSON): ServerChatUpdated {
    return new ServerChatUpdated(
      raw.event,
      ServerChatUpdatedParams.fromJSON(raw.params),
      raw.confirm_id,
    )
  }

  public mappableFields = [
    'event',
    'params',
    'confirmId',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    event: () => ({ event: this.event }),
    params: () => ({ params: this.params.toJSON() }),
    confirmId: () => ({ confirm_id: this.confirmId }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerChatUpdatedJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerChatUpdatedJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerChatUpdatedParamsJSON {
  /* eslint-disable camelcase */
  badge: number;
  chats: ChatJSON[];
  team_unread: TeamUnreadJSON;
  /* eslint-enable camelcase */
}

export class ServerChatUpdatedParams implements TDProtoClass<ServerChatUpdatedParams> {
  /**
   * Params of the server.chat.updated event
   * @param badge Total number of unreads
   * @param chats Chat counters
   * @param teamUnread Current team counters
   */
  constructor (
    public badge: number,
    public chats: Chat[],
    public teamUnread: TeamUnread,
  ) {}

  public static fromJSON (raw: ServerChatUpdatedParamsJSON): ServerChatUpdatedParams {
    return new ServerChatUpdatedParams(
      raw.badge,
      raw.chats.map(Chat.fromJSON),
      TeamUnread.fromJSON(raw.team_unread),
    )
  }

  public mappableFields = [
    'badge',
    'chats',
    'teamUnread',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    badge: () => ({ badge: this.badge }),
    chats: () => ({ chats: this.chats.map(u => u.toJSON()) }),
    teamUnread: () => ({ team_unread: this.teamUnread.toJSON() }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerChatUpdatedParamsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerChatUpdatedParamsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerConfirmJSON {
  /* eslint-disable camelcase */
  event: string;
  params: ServerConfirmParamsJSON;
  confirm_id?: string;
  /* eslint-enable camelcase */
}

export class ServerConfirm implements TDProtoClass<ServerConfirm> {
  /**
   * Server confirmed client message
   * @param event DOCUMENTATION MISSING
   * @param params DOCUMENTATION MISSING
   * @param confirmId DOCUMENTATION MISSING
   */
  constructor (
    public event: string,
    public params: ServerConfirmParams,
    public confirmId?: string,
  ) {}

  public static fromJSON (raw: ServerConfirmJSON): ServerConfirm {
    return new ServerConfirm(
      raw.event,
      ServerConfirmParams.fromJSON(raw.params),
      raw.confirm_id,
    )
  }

  public mappableFields = [
    'event',
    'params',
    'confirmId',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    event: () => ({ event: this.event }),
    params: () => ({ params: this.params.toJSON() }),
    confirmId: () => ({ confirm_id: this.confirmId }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerConfirmJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerConfirmJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerConfirmParamsJSON {
  /* eslint-disable camelcase */
  confirm_id: string;
  /* eslint-enable camelcase */
}

export class ServerConfirmParams implements TDProtoClass<ServerConfirmParams> {
  /**
   * Params of the server.confirm event
   * @param confirmId Unique id generated by server
   */
  constructor (
    public confirmId: string,
  ) {}

  public static fromJSON (raw: ServerConfirmParamsJSON): ServerConfirmParams {
    return new ServerConfirmParams(
      raw.confirm_id,
    )
  }

  public mappableFields = [
    'confirmId',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    confirmId: () => ({ confirm_id: this.confirmId }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerConfirmParamsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerConfirmParamsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerContactUpdatedJSON {
  /* eslint-disable camelcase */
  event: string;
  params: ServerContactUpdatedParamsJSON;
  confirm_id?: string;
  /* eslint-enable camelcase */
}

export class ServerContactUpdated implements TDProtoClass<ServerContactUpdated> {
  /**
   * Contact created or updated
   * @param event DOCUMENTATION MISSING
   * @param params DOCUMENTATION MISSING
   * @param confirmId DOCUMENTATION MISSING
   */
  constructor (
    public event: string,
    public params: ServerContactUpdatedParams,
    public confirmId?: string,
  ) {}

  public static fromJSON (raw: ServerContactUpdatedJSON): ServerContactUpdated {
    return new ServerContactUpdated(
      raw.event,
      ServerContactUpdatedParams.fromJSON(raw.params),
      raw.confirm_id,
    )
  }

  public mappableFields = [
    'event',
    'params',
    'confirmId',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    event: () => ({ event: this.event }),
    params: () => ({ params: this.params.toJSON() }),
    confirmId: () => ({ confirm_id: this.confirmId }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerContactUpdatedJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerContactUpdatedJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerContactUpdatedParamsJSON {
  /* eslint-disable camelcase */
  contacts: ContactJSON[];
  /* eslint-enable camelcase */
}

export class ServerContactUpdatedParams implements TDProtoClass<ServerContactUpdatedParams> {
  /**
   * Params of the server.contact.updated event
   * @param contacts Contact info
   */
  constructor (
    public contacts: Contact[],
  ) {}

  public static fromJSON (raw: ServerContactUpdatedParamsJSON): ServerContactUpdatedParams {
    return new ServerContactUpdatedParams(
      raw.contacts.map(Contact.fromJSON),
    )
  }

  public mappableFields = [
    'contacts',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    contacts: () => ({ contacts: this.contacts.map(u => u.toJSON()) }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerContactUpdatedParamsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerContactUpdatedParamsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerDebugJSON {
  /* eslint-disable camelcase */
  event: string;
  params: ServerDebugParamsJSON;
  confirm_id?: string;
  /* eslint-enable camelcase */
}

export class ServerDebug implements TDProtoClass<ServerDebug> {
  /**
   * Debug message
   * @param event DOCUMENTATION MISSING
   * @param params DOCUMENTATION MISSING
   * @param confirmId DOCUMENTATION MISSING
   */
  constructor (
    public event: string,
    public params: ServerDebugParams,
    public confirmId?: string,
  ) {}

  public static fromJSON (raw: ServerDebugJSON): ServerDebug {
    return new ServerDebug(
      raw.event,
      ServerDebugParams.fromJSON(raw.params),
      raw.confirm_id,
    )
  }

  public mappableFields = [
    'event',
    'params',
    'confirmId',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    event: () => ({ event: this.event }),
    params: () => ({ params: this.params.toJSON() }),
    confirmId: () => ({ confirm_id: this.confirmId }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerDebugJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerDebugJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerDebugParamsJSON {
  /* eslint-disable camelcase */
  text: string;
  /* eslint-enable camelcase */
}

export class ServerDebugParams implements TDProtoClass<ServerDebugParams> {
  /**
   * Params of the server.debug event
   * @param text Debug message
   */
  constructor (
    public text: string,
  ) {}

  public static fromJSON (raw: ServerDebugParamsJSON): ServerDebugParams {
    return new ServerDebugParams(
      raw.text,
    )
  }

  public mappableFields = [
    'text',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    text: () => ({ text: this.text }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerDebugParamsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerDebugParamsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerLoginJSON {
  /* eslint-disable camelcase */
  event: string;
  params: ServerLoginParamsJSON;
  confirm_id?: string;
  /* eslint-enable camelcase */
}

export class ServerLogin implements TDProtoClass<ServerLogin> {
  /**
   * Login from other device
   * @param event DOCUMENTATION MISSING
   * @param params DOCUMENTATION MISSING
   * @param confirmId DOCUMENTATION MISSING
   */
  constructor (
    public event: string,
    public params: ServerLoginParams,
    public confirmId?: string,
  ) {}

  public static fromJSON (raw: ServerLoginJSON): ServerLogin {
    return new ServerLogin(
      raw.event,
      ServerLoginParams.fromJSON(raw.params),
      raw.confirm_id,
    )
  }

  public mappableFields = [
    'event',
    'params',
    'confirmId',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    event: () => ({ event: this.event }),
    params: () => ({ params: this.params.toJSON() }),
    confirmId: () => ({ confirm_id: this.confirmId }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerLoginJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerLoginJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerLoginParamsJSON {
  /* eslint-disable camelcase */
  device_name: string;
  /* eslint-enable camelcase */
}

export class ServerLoginParams implements TDProtoClass<ServerLoginParams> {
  /**
   * Params of the server.login event
   * @param deviceName Device name
   */
  constructor (
    public deviceName: string,
  ) {}

  public static fromJSON (raw: ServerLoginParamsJSON): ServerLoginParams {
    return new ServerLoginParams(
      raw.device_name,
    )
  }

  public mappableFields = [
    'deviceName',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    deviceName: () => ({ device_name: this.deviceName }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerLoginParamsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerLoginParamsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerMessagePushJSON {
  /* eslint-disable camelcase */
  event: string;
  params: MessagePushJSON;
  confirm_id?: string;
  /* eslint-enable camelcase */
}

export class ServerMessagePush implements TDProtoClass<ServerMessagePush> {
  /**
   * Push replacement for desktop application
   * @param event DOCUMENTATION MISSING
   * @param params DOCUMENTATION MISSING
   * @param confirmId DOCUMENTATION MISSING
   */
  constructor (
    public event: string,
    public params: MessagePush,
    public confirmId?: string,
  ) {}

  public static fromJSON (raw: ServerMessagePushJSON): ServerMessagePush {
    return new ServerMessagePush(
      raw.event,
      MessagePush.fromJSON(raw.params),
      raw.confirm_id,
    )
  }

  public mappableFields = [
    'event',
    'params',
    'confirmId',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    event: () => ({ event: this.event }),
    params: () => ({ params: this.params.toJSON() }),
    confirmId: () => ({ confirm_id: this.confirmId }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerMessagePushJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerMessagePushJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerMessageReceivedJSON {
  /* eslint-disable camelcase */
  event: string;
  params: ServerMessageReceivedParamsJSON;
  confirm_id?: string;
  /* eslint-enable camelcase */
}

export class ServerMessageReceived implements TDProtoClass<ServerMessageReceived> {
  /**
   * Message received by someone in chat
   * @param event DOCUMENTATION MISSING
   * @param params DOCUMENTATION MISSING
   * @param confirmId DOCUMENTATION MISSING
   */
  constructor (
    public event: string,
    public params: ServerMessageReceivedParams,
    public confirmId?: string,
  ) {}

  public static fromJSON (raw: ServerMessageReceivedJSON): ServerMessageReceived {
    return new ServerMessageReceived(
      raw.event,
      ServerMessageReceivedParams.fromJSON(raw.params),
      raw.confirm_id,
    )
  }

  public mappableFields = [
    'event',
    'params',
    'confirmId',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    event: () => ({ event: this.event }),
    params: () => ({ params: this.params.toJSON() }),
    confirmId: () => ({ confirm_id: this.confirmId }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerMessageReceivedJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerMessageReceivedJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerMessageReceivedParamsJSON {
  /* eslint-disable camelcase */
  messages: ReceivedMessageJSON[];
  /* eslint-enable camelcase */
}

export class ServerMessageReceivedParams implements TDProtoClass<ServerMessageReceivedParams> {
  /**
   * Params of the server.message.received event
   * @param messages received message data
   */
  constructor (
    public messages: ReceivedMessage[],
  ) {}

  public static fromJSON (raw: ServerMessageReceivedParamsJSON): ServerMessageReceivedParams {
    return new ServerMessageReceivedParams(
      raw.messages.map(ReceivedMessage.fromJSON),
    )
  }

  public mappableFields = [
    'messages',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    messages: () => ({ messages: this.messages.map(u => u.toJSON()) }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerMessageReceivedParamsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerMessageReceivedParamsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerMessageUpdatedJSON {
  /* eslint-disable camelcase */
  event: string;
  params: ServerMessageUpdatedParamsJSON;
  confirm_id?: string;
  /* eslint-enable camelcase */
}

export class ServerMessageUpdated implements TDProtoClass<ServerMessageUpdated> {
  /**
   * Chat message created, updated or deleted
   * @param event DOCUMENTATION MISSING
   * @param params DOCUMENTATION MISSING
   * @param confirmId DOCUMENTATION MISSING
   */
  constructor (
    public event: string,
    public params: ServerMessageUpdatedParams,
    public confirmId?: string,
  ) {}

  public static fromJSON (raw: ServerMessageUpdatedJSON): ServerMessageUpdated {
    return new ServerMessageUpdated(
      raw.event,
      ServerMessageUpdatedParams.fromJSON(raw.params),
      raw.confirm_id,
    )
  }

  public mappableFields = [
    'event',
    'params',
    'confirmId',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    event: () => ({ event: this.event }),
    params: () => ({ params: this.params.toJSON() }),
    confirmId: () => ({ confirm_id: this.confirmId }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerMessageUpdatedJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerMessageUpdatedJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerMessageUpdatedParamsJSON {
  /* eslint-disable camelcase */
  badge: number;
  chat_counters: ChatCountersJSON[];
  delayed: boolean;
  messages: MessageJSON[];
  team_unread: TeamUnreadJSON;
  /* eslint-enable camelcase */
}

export class ServerMessageUpdatedParams implements TDProtoClass<ServerMessageUpdatedParams> {
  /**
   * Params of the server.message.updated event
   * @param badge Total number of unreads, if changed
   * @param chatCounters Chat counters
   * @param delayed true = silently message update, false = new message
   * @param messages Messages data
   * @param teamUnread Current team counters
   */
  constructor (
    public badge: number,
    public chatCounters: ChatCounters[],
    public delayed: boolean,
    public messages: Message[],
    public teamUnread: TeamUnread,
  ) {}

  public static fromJSON (raw: ServerMessageUpdatedParamsJSON): ServerMessageUpdatedParams {
    return new ServerMessageUpdatedParams(
      raw.badge,
      raw.chat_counters.map(ChatCounters.fromJSON),
      raw.delayed,
      raw.messages.map(Message.fromJSON),
      TeamUnread.fromJSON(raw.team_unread),
    )
  }

  public mappableFields = [
    'badge',
    'chatCounters',
    'delayed',
    'messages',
    'teamUnread',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    badge: () => ({ badge: this.badge }),
    chatCounters: () => ({ chat_counters: this.chatCounters.map(u => u.toJSON()) }),
    delayed: () => ({ delayed: this.delayed }),
    messages: () => ({ messages: this.messages.map(u => u.toJSON()) }),
    teamUnread: () => ({ team_unread: this.teamUnread.toJSON() }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerMessageUpdatedParamsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerMessageUpdatedParamsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerOnlineJSON {
  /* eslint-disable camelcase */
  event: string;
  params: ServerOnlineParamsJSON;
  confirm_id?: string;
  /* eslint-enable camelcase */
}

export class ServerOnline implements TDProtoClass<ServerOnline> {
  /**
   * Online team members and current active calls
   * @param event DOCUMENTATION MISSING
   * @param params DOCUMENTATION MISSING
   * @param confirmId DOCUMENTATION MISSING
   */
  constructor (
    public event: string,
    public params: ServerOnlineParams,
    public confirmId?: string,
  ) {}

  public static fromJSON (raw: ServerOnlineJSON): ServerOnline {
    return new ServerOnline(
      raw.event,
      ServerOnlineParams.fromJSON(raw.params),
      raw.confirm_id,
    )
  }

  public mappableFields = [
    'event',
    'params',
    'confirmId',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    event: () => ({ event: this.event }),
    params: () => ({ params: this.params.toJSON() }),
    confirmId: () => ({ confirm_id: this.confirmId }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerOnlineJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerOnlineJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerOnlineParamsJSON {
  /* eslint-disable camelcase */
  contacts: OnlineContactJSON[];
  calls?: OnlineCallJSON[];
  /* eslint-enable camelcase */
}

export class ServerOnlineParams implements TDProtoClass<ServerOnlineParams> {
  /**
   * Params of the server.online event
   * @param contacts Online team members
   * @param calls Active calls
   */
  constructor (
    public contacts: OnlineContact[],
    public calls?: OnlineCall[],
  ) {}

  public static fromJSON (raw: ServerOnlineParamsJSON): ServerOnlineParams {
    return new ServerOnlineParams(
      raw.contacts.map(OnlineContact.fromJSON),
      raw.calls && raw.calls.map(OnlineCall.fromJSON),
    )
  }

  public mappableFields = [
    'contacts',
    'calls',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    contacts: () => ({ contacts: this.contacts.map(u => u.toJSON()) }),
    calls: () => ({ calls: this.calls?.map(u => u.toJSON()) }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerOnlineParamsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerOnlineParamsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerProcessingJSON {
  /* eslint-disable camelcase */
  event: string;
  params: ServerProcessingParamsJSON;
  confirm_id?: string;
  /* eslint-enable camelcase */
}

export class ServerProcessing implements TDProtoClass<ServerProcessing> {
  /**
   * Status of background operation
   * @param event DOCUMENTATION MISSING
   * @param params DOCUMENTATION MISSING
   * @param confirmId DOCUMENTATION MISSING
   */
  constructor (
    public event: string,
    public params: ServerProcessingParams,
    public confirmId?: string,
  ) {}

  public static fromJSON (raw: ServerProcessingJSON): ServerProcessing {
    return new ServerProcessing(
      raw.event,
      ServerProcessingParams.fromJSON(raw.params),
      raw.confirm_id,
    )
  }

  public mappableFields = [
    'event',
    'params',
    'confirmId',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    event: () => ({ event: this.event }),
    params: () => ({ params: this.params.toJSON() }),
    confirmId: () => ({ confirm_id: this.confirmId }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerProcessingJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerProcessingJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerProcessingParamsJSON {
  /* eslint-disable camelcase */
  action: string;
  has_error: boolean;
  message: string;
  num: number;
  total: number;
  /* eslint-enable camelcase */
}

export class ServerProcessingParams implements TDProtoClass<ServerProcessingParams> {
  /**
   * Params of the server.processing event
   * @param action Action name
   * @param hasError Has error
   * @param message Message
   * @param num Current processing item
   * @param total Total processing items
   */
  constructor (
    public action: string,
    public hasError: boolean,
    public message: string,
    public num: number,
    public total: number,
  ) {}

  public static fromJSON (raw: ServerProcessingParamsJSON): ServerProcessingParams {
    return new ServerProcessingParams(
      raw.action,
      raw.has_error,
      raw.message,
      raw.num,
      raw.total,
    )
  }

  public mappableFields = [
    'action',
    'hasError',
    'message',
    'num',
    'total',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    action: () => ({ action: this.action }),
    hasError: () => ({ has_error: this.hasError }),
    message: () => ({ message: this.message }),
    num: () => ({ num: this.num }),
    total: () => ({ total: this.total }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerProcessingParamsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerProcessingParamsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerRemindDeletedJSON {
  /* eslint-disable camelcase */
  event: string;
  params: ServerRemindDeletedParamsJSON;
  confirm_id?: string;
  /* eslint-enable camelcase */
}

export class ServerRemindDeleted implements TDProtoClass<ServerRemindDeleted> {
  /**
   * Task or group remind deleted
   * @param event DOCUMENTATION MISSING
   * @param params DOCUMENTATION MISSING
   * @param confirmId DOCUMENTATION MISSING
   */
  constructor (
    public event: string,
    public params: ServerRemindDeletedParams,
    public confirmId?: string,
  ) {}

  public static fromJSON (raw: ServerRemindDeletedJSON): ServerRemindDeleted {
    return new ServerRemindDeleted(
      raw.event,
      ServerRemindDeletedParams.fromJSON(raw.params),
      raw.confirm_id,
    )
  }

  public mappableFields = [
    'event',
    'params',
    'confirmId',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    event: () => ({ event: this.event }),
    params: () => ({ params: this.params.toJSON() }),
    confirmId: () => ({ confirm_id: this.confirmId }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerRemindDeletedJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerRemindDeletedJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerRemindDeletedParamsJSON {
  /* eslint-disable camelcase */
  reminds: DeletedRemindJSON[];
  /* eslint-enable camelcase */
}

export class ServerRemindDeletedParams implements TDProtoClass<ServerRemindDeletedParams> {
  /**
   * Params of the server.remind.deleted event
   * @param reminds Remind information
   */
  constructor (
    public reminds: DeletedRemind[],
  ) {}

  public static fromJSON (raw: ServerRemindDeletedParamsJSON): ServerRemindDeletedParams {
    return new ServerRemindDeletedParams(
      raw.reminds.map(DeletedRemind.fromJSON),
    )
  }

  public mappableFields = [
    'reminds',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    reminds: () => ({ reminds: this.reminds.map(u => u.toJSON()) }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerRemindDeletedParamsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerRemindDeletedParamsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerRemindFiredJSON {
  /* eslint-disable camelcase */
  event: string;
  params: ServerRemindFiredParamsJSON;
  confirm_id?: string;
  /* eslint-enable camelcase */
}

export class ServerRemindFired implements TDProtoClass<ServerRemindFired> {
  /**
   * Task or group remind fired
   * @param event DOCUMENTATION MISSING
   * @param params DOCUMENTATION MISSING
   * @param confirmId DOCUMENTATION MISSING
   */
  constructor (
    public event: string,
    public params: ServerRemindFiredParams,
    public confirmId?: string,
  ) {}

  public static fromJSON (raw: ServerRemindFiredJSON): ServerRemindFired {
    return new ServerRemindFired(
      raw.event,
      ServerRemindFiredParams.fromJSON(raw.params),
      raw.confirm_id,
    )
  }

  public mappableFields = [
    'event',
    'params',
    'confirmId',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    event: () => ({ event: this.event }),
    params: () => ({ params: this.params.toJSON() }),
    confirmId: () => ({ confirm_id: this.confirmId }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerRemindFiredJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerRemindFiredJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerRemindFiredParamsJSON {
  /* eslint-disable camelcase */
  reminds: RemindJSON[];
  /* eslint-enable camelcase */
}

export class ServerRemindFiredParams implements TDProtoClass<ServerRemindFiredParams> {
  /**
   * Params of the server.remind.fired event
   * @param reminds Remind information
   */
  constructor (
    public reminds: Remind[],
  ) {}

  public static fromJSON (raw: ServerRemindFiredParamsJSON): ServerRemindFiredParams {
    return new ServerRemindFiredParams(
      raw.reminds.map(Remind.fromJSON),
    )
  }

  public mappableFields = [
    'reminds',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    reminds: () => ({ reminds: this.reminds.map(u => u.toJSON()) }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerRemindFiredParamsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerRemindFiredParamsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerRemindUpdatedJSON {
  /* eslint-disable camelcase */
  event: string;
  params: ServerRemindUpdatedParamsJSON;
  confirm_id?: string;
  /* eslint-enable camelcase */
}

export class ServerRemindUpdated implements TDProtoClass<ServerRemindUpdated> {
  /**
   * Task/group remind created or changed
   * @param event DOCUMENTATION MISSING
   * @param params DOCUMENTATION MISSING
   * @param confirmId DOCUMENTATION MISSING
   */
  constructor (
    public event: string,
    public params: ServerRemindUpdatedParams,
    public confirmId?: string,
  ) {}

  public static fromJSON (raw: ServerRemindUpdatedJSON): ServerRemindUpdated {
    return new ServerRemindUpdated(
      raw.event,
      ServerRemindUpdatedParams.fromJSON(raw.params),
      raw.confirm_id,
    )
  }

  public mappableFields = [
    'event',
    'params',
    'confirmId',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    event: () => ({ event: this.event }),
    params: () => ({ params: this.params.toJSON() }),
    confirmId: () => ({ confirm_id: this.confirmId }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerRemindUpdatedJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerRemindUpdatedJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerRemindUpdatedParamsJSON {
  /* eslint-disable camelcase */
  reminds: RemindJSON[];
  /* eslint-enable camelcase */
}

export class ServerRemindUpdatedParams implements TDProtoClass<ServerRemindUpdatedParams> {
  /**
   * Params of the server.remind.updated event
   * @param reminds Remind information
   */
  constructor (
    public reminds: Remind[],
  ) {}

  public static fromJSON (raw: ServerRemindUpdatedParamsJSON): ServerRemindUpdatedParams {
    return new ServerRemindUpdatedParams(
      raw.reminds.map(Remind.fromJSON),
    )
  }

  public mappableFields = [
    'reminds',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    reminds: () => ({ reminds: this.reminds.map(u => u.toJSON()) }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerRemindUpdatedParamsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerRemindUpdatedParamsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerSectionDeletedJSON {
  /* eslint-disable camelcase */
  event: string;
  params: ServerSectionDeletedParamsJSON;
  confirm_id?: string;
  /* eslint-enable camelcase */
}

export class ServerSectionDeleted implements TDProtoClass<ServerSectionDeleted> {
  /**
   * Contact section or task project deleted
   * @param event DOCUMENTATION MISSING
   * @param params DOCUMENTATION MISSING
   * @param confirmId DOCUMENTATION MISSING
   */
  constructor (
    public event: string,
    public params: ServerSectionDeletedParams,
    public confirmId?: string,
  ) {}

  public static fromJSON (raw: ServerSectionDeletedJSON): ServerSectionDeleted {
    return new ServerSectionDeleted(
      raw.event,
      ServerSectionDeletedParams.fromJSON(raw.params),
      raw.confirm_id,
    )
  }

  public mappableFields = [
    'event',
    'params',
    'confirmId',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    event: () => ({ event: this.event }),
    params: () => ({ params: this.params.toJSON() }),
    confirmId: () => ({ confirm_id: this.confirmId }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerSectionDeletedJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerSectionDeletedJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerSectionDeletedParamsJSON {
  /* eslint-disable camelcase */
  chat_type: ChatType;
  gentime: number;
  sections: DeletedSectionJSON[];
  /* eslint-enable camelcase */
}

export class ServerSectionDeletedParams implements TDProtoClass<ServerSectionDeletedParams> {
  /**
   * Params of the server.section.deleted event
   * @param chatType Chat type
   * @param gentime Deprecated
   * @param sections Section/project info
   */
  constructor (
    public chatType: ChatType,
    public gentime: number,
    public sections: DeletedSection[],
  ) {}

  public static fromJSON (raw: ServerSectionDeletedParamsJSON): ServerSectionDeletedParams {
    return new ServerSectionDeletedParams(
      raw.chat_type,
      raw.gentime,
      raw.sections.map(DeletedSection.fromJSON),
    )
  }

  public mappableFields = [
    'chatType',
    'gentime',
    'sections',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    chatType: () => ({ chat_type: this.chatType }),
    gentime: () => ({ gentime: this.gentime }),
    sections: () => ({ sections: this.sections.map(u => u.toJSON()) }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerSectionDeletedParamsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerSectionDeletedParamsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerSectionUpdatedJSON {
  /* eslint-disable camelcase */
  event: string;
  params: ServerSectionUpdatedParamsJSON;
  confirm_id?: string;
  /* eslint-enable camelcase */
}

export class ServerSectionUpdated implements TDProtoClass<ServerSectionUpdated> {
  /**
   * Contact section or task project created or changed
   * @param event DOCUMENTATION MISSING
   * @param params DOCUMENTATION MISSING
   * @param confirmId DOCUMENTATION MISSING
   */
  constructor (
    public event: string,
    public params: ServerSectionUpdatedParams,
    public confirmId?: string,
  ) {}

  public static fromJSON (raw: ServerSectionUpdatedJSON): ServerSectionUpdated {
    return new ServerSectionUpdated(
      raw.event,
      ServerSectionUpdatedParams.fromJSON(raw.params),
      raw.confirm_id,
    )
  }

  public mappableFields = [
    'event',
    'params',
    'confirmId',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    event: () => ({ event: this.event }),
    params: () => ({ params: this.params.toJSON() }),
    confirmId: () => ({ confirm_id: this.confirmId }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerSectionUpdatedJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerSectionUpdatedJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerSectionUpdatedParamsJSON {
  /* eslint-disable camelcase */
  chat_type: ChatType;
  gentime: number;
  sections: SectionJSON[];
  /* eslint-enable camelcase */
}

export class ServerSectionUpdatedParams implements TDProtoClass<ServerSectionUpdatedParams> {
  /**
   * Params of the server.section.updated event
   * @param chatType Chat type
   * @param gentime deprecated
   * @param sections Section/project info
   */
  constructor (
    public chatType: ChatType,
    public gentime: number,
    public sections: Section[],
  ) {}

  public static fromJSON (raw: ServerSectionUpdatedParamsJSON): ServerSectionUpdatedParams {
    return new ServerSectionUpdatedParams(
      raw.chat_type,
      raw.gentime,
      raw.sections.map(Section.fromJSON),
    )
  }

  public mappableFields = [
    'chatType',
    'gentime',
    'sections',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    chatType: () => ({ chat_type: this.chatType }),
    gentime: () => ({ gentime: this.gentime }),
    sections: () => ({ sections: this.sections.map(u => u.toJSON()) }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerSectionUpdatedParamsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerSectionUpdatedParamsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerTagDeletedJSON {
  /* eslint-disable camelcase */
  event: string;
  params: ServerTagDeletedParamsJSON;
  confirm_id?: string;
  /* eslint-enable camelcase */
}

export class ServerTagDeleted implements TDProtoClass<ServerTagDeleted> {
  /**
   * Tag deleted
   * @param event DOCUMENTATION MISSING
   * @param params DOCUMENTATION MISSING
   * @param confirmId DOCUMENTATION MISSING
   */
  constructor (
    public event: string,
    public params: ServerTagDeletedParams,
    public confirmId?: string,
  ) {}

  public static fromJSON (raw: ServerTagDeletedJSON): ServerTagDeleted {
    return new ServerTagDeleted(
      raw.event,
      ServerTagDeletedParams.fromJSON(raw.params),
      raw.confirm_id,
    )
  }

  public mappableFields = [
    'event',
    'params',
    'confirmId',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    event: () => ({ event: this.event }),
    params: () => ({ params: this.params.toJSON() }),
    confirmId: () => ({ confirm_id: this.confirmId }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerTagDeletedJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerTagDeletedJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerTagDeletedParamsJSON {
  /* eslint-disable camelcase */
  tags: DeletedTagJSON[];
  /* eslint-enable camelcase */
}

export class ServerTagDeletedParams implements TDProtoClass<ServerTagDeletedParams> {
  /**
   * Params of the server.tag.deleted event
   * @param tags Tags info
   */
  constructor (
    public tags: DeletedTag[],
  ) {}

  public static fromJSON (raw: ServerTagDeletedParamsJSON): ServerTagDeletedParams {
    return new ServerTagDeletedParams(
      raw.tags.map(DeletedTag.fromJSON),
    )
  }

  public mappableFields = [
    'tags',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    tags: () => ({ tags: this.tags.map(u => u.toJSON()) }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerTagDeletedParamsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerTagDeletedParamsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerTagUpdatedJSON {
  /* eslint-disable camelcase */
  event: string;
  params: ServerTagUpdatedParamsJSON;
  confirm_id?: string;
  /* eslint-enable camelcase */
}

export class ServerTagUpdated implements TDProtoClass<ServerTagUpdated> {
  /**
   * Tag created or changed
   * @param event DOCUMENTATION MISSING
   * @param params DOCUMENTATION MISSING
   * @param confirmId DOCUMENTATION MISSING
   */
  constructor (
    public event: string,
    public params: ServerTagUpdatedParams,
    public confirmId?: string,
  ) {}

  public static fromJSON (raw: ServerTagUpdatedJSON): ServerTagUpdated {
    return new ServerTagUpdated(
      raw.event,
      ServerTagUpdatedParams.fromJSON(raw.params),
      raw.confirm_id,
    )
  }

  public mappableFields = [
    'event',
    'params',
    'confirmId',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    event: () => ({ event: this.event }),
    params: () => ({ params: this.params.toJSON() }),
    confirmId: () => ({ confirm_id: this.confirmId }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerTagUpdatedJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerTagUpdatedJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerTagUpdatedParamsJSON {
  /* eslint-disable camelcase */
  tags: TagJSON[];
  /* eslint-enable camelcase */
}

export class ServerTagUpdatedParams implements TDProtoClass<ServerTagUpdatedParams> {
  /**
   * Params of the server.tag.updated event
   * @param tags Tags info
   */
  constructor (
    public tags: Tag[],
  ) {}

  public static fromJSON (raw: ServerTagUpdatedParamsJSON): ServerTagUpdatedParams {
    return new ServerTagUpdatedParams(
      raw.tags.map(Tag.fromJSON),
    )
  }

  public mappableFields = [
    'tags',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    tags: () => ({ tags: this.tags.map(u => u.toJSON()) }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerTagUpdatedParamsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerTagUpdatedParamsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerTeamCountersJSON {
  /* eslint-disable camelcase */
  event: string;
  params: ServerTeamCountersParamsJSON;
  confirm_id?: string;
  /* eslint-enable camelcase */
}

export class ServerTeamCounters implements TDProtoClass<ServerTeamCounters> {
  /**
   * Counters form other teams
   * @param event DOCUMENTATION MISSING
   * @param params DOCUMENTATION MISSING
   * @param confirmId DOCUMENTATION MISSING
   */
  constructor (
    public event: string,
    public params: ServerTeamCountersParams,
    public confirmId?: string,
  ) {}

  public static fromJSON (raw: ServerTeamCountersJSON): ServerTeamCounters {
    return new ServerTeamCounters(
      raw.event,
      ServerTeamCountersParams.fromJSON(raw.params),
      raw.confirm_id,
    )
  }

  public mappableFields = [
    'event',
    'params',
    'confirmId',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    event: () => ({ event: this.event }),
    params: () => ({ params: this.params.toJSON() }),
    confirmId: () => ({ confirm_id: this.confirmId }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerTeamCountersJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerTeamCountersJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerTeamCountersParamsJSON {
  /* eslint-disable camelcase */
  badge: number;
  teams: TeamCounterJSON[];
  /* eslint-enable camelcase */
}

export class ServerTeamCountersParams implements TDProtoClass<ServerTeamCountersParams> {
  /**
   * Params of the server.team.counters event
   * @param badge Total number of unreads
   * @param teams Counters
   */
  constructor (
    public badge: number,
    public teams: TeamCounter[],
  ) {}

  public static fromJSON (raw: ServerTeamCountersParamsJSON): ServerTeamCountersParams {
    return new ServerTeamCountersParams(
      raw.badge,
      raw.teams.map(TeamCounter.fromJSON),
    )
  }

  public mappableFields = [
    'badge',
    'teams',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    badge: () => ({ badge: this.badge }),
    teams: () => ({ teams: this.teams.map(u => u.toJSON()) }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerTeamCountersParamsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerTeamCountersParamsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerTeamDeletedJSON {
  /* eslint-disable camelcase */
  event: string;
  params: ServerTeamDeletedParamsJSON;
  confirm_id?: string;
  /* eslint-enable camelcase */
}

export class ServerTeamDeleted implements TDProtoClass<ServerTeamDeleted> {
  /**
   * Team archived
   * @param event DOCUMENTATION MISSING
   * @param params DOCUMENTATION MISSING
   * @param confirmId DOCUMENTATION MISSING
   */
  constructor (
    public event: string,
    public params: ServerTeamDeletedParams,
    public confirmId?: string,
  ) {}

  public static fromJSON (raw: ServerTeamDeletedJSON): ServerTeamDeleted {
    return new ServerTeamDeleted(
      raw.event,
      ServerTeamDeletedParams.fromJSON(raw.params),
      raw.confirm_id,
    )
  }

  public mappableFields = [
    'event',
    'params',
    'confirmId',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    event: () => ({ event: this.event }),
    params: () => ({ params: this.params.toJSON() }),
    confirmId: () => ({ confirm_id: this.confirmId }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerTeamDeletedJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerTeamDeletedJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerTeamDeletedParamsJSON {
  /* eslint-disable camelcase */
  teams: DeletedTeamJSON[];
  /* eslint-enable camelcase */
}

export class ServerTeamDeletedParams implements TDProtoClass<ServerTeamDeletedParams> {
  /**
   * Params of the server.team.deleted event
   * @param teams Teams info
   */
  constructor (
    public teams: DeletedTeam[],
  ) {}

  public static fromJSON (raw: ServerTeamDeletedParamsJSON): ServerTeamDeletedParams {
    return new ServerTeamDeletedParams(
      raw.teams.map(DeletedTeam.fromJSON),
    )
  }

  public mappableFields = [
    'teams',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    teams: () => ({ teams: this.teams.map(u => u.toJSON()) }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerTeamDeletedParamsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerTeamDeletedParamsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerTeamUpdatedJSON {
  /* eslint-disable camelcase */
  event: string;
  params: ServerTeamUpdatedParamsJSON;
  confirm_id?: string;
  /* eslint-enable camelcase */
}

export class ServerTeamUpdated implements TDProtoClass<ServerTeamUpdated> {
  /**
   * Team created or changed
   * @param event DOCUMENTATION MISSING
   * @param params DOCUMENTATION MISSING
   * @param confirmId DOCUMENTATION MISSING
   */
  constructor (
    public event: string,
    public params: ServerTeamUpdatedParams,
    public confirmId?: string,
  ) {}

  public static fromJSON (raw: ServerTeamUpdatedJSON): ServerTeamUpdated {
    return new ServerTeamUpdated(
      raw.event,
      ServerTeamUpdatedParams.fromJSON(raw.params),
      raw.confirm_id,
    )
  }

  public mappableFields = [
    'event',
    'params',
    'confirmId',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    event: () => ({ event: this.event }),
    params: () => ({ params: this.params.toJSON() }),
    confirmId: () => ({ confirm_id: this.confirmId }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerTeamUpdatedJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerTeamUpdatedJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerTeamUpdatedParamsJSON {
  /* eslint-disable camelcase */
  teams: TeamJSON[];
  /* eslint-enable camelcase */
}

export class ServerTeamUpdatedParams implements TDProtoClass<ServerTeamUpdatedParams> {
  /**
   * Params of the server.team.updated event
   * @param teams DOCUMENTATION MISSING
   */
  constructor (
    public teams: Team[],
  ) {}

  public static fromJSON (raw: ServerTeamUpdatedParamsJSON): ServerTeamUpdatedParams {
    return new ServerTeamUpdatedParams(
      raw.teams.map(Team.fromJSON),
    )
  }

  public mappableFields = [
    'teams',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    teams: () => ({ teams: this.teams.map(u => u.toJSON()) }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerTeamUpdatedParamsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerTeamUpdatedParamsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerTimeJSON {
  /* eslint-disable camelcase */
  event: string;
  params: ServerTimeParamsJSON;
  confirm_id?: string;
  /* eslint-enable camelcase */
}

export class ServerTime implements TDProtoClass<ServerTime> {
  /**
   * Current server time
   * @param event DOCUMENTATION MISSING
   * @param params DOCUMENTATION MISSING
   * @param confirmId DOCUMENTATION MISSING
   */
  constructor (
    public event: string,
    public params: ServerTimeParams,
    public confirmId?: string,
  ) {}

  public static fromJSON (raw: ServerTimeJSON): ServerTime {
    return new ServerTime(
      raw.event,
      ServerTimeParams.fromJSON(raw.params),
      raw.confirm_id,
    )
  }

  public mappableFields = [
    'event',
    'params',
    'confirmId',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    event: () => ({ event: this.event }),
    params: () => ({ params: this.params.toJSON() }),
    confirmId: () => ({ confirm_id: this.confirmId }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerTimeJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerTimeJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerTimeParamsJSON {
  /* eslint-disable camelcase */
  time: ISODateTimeString;
  /* eslint-enable camelcase */
}

export class ServerTimeParams implements TDProtoClass<ServerTimeParams> {
  /**
   * Params of the server.time event
   * @param time Current time
   */
  constructor (
    public time: ISODateTimeString,
  ) {}

  public static fromJSON (raw: ServerTimeParamsJSON): ServerTimeParams {
    return new ServerTimeParams(
      raw.time,
    )
  }

  public mappableFields = [
    'time',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    time: () => ({ time: this.time }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerTimeParamsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerTimeParamsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerUiSettingsJSON {
  /* eslint-disable camelcase */
  event: string;
  params: ServerUiSettingsParamsJSON;
  confirm_id?: string;
  /* eslint-enable camelcase */
}

export class ServerUiSettings implements TDProtoClass<ServerUiSettings> {
  /**
   * Part of UI settings changed
   * @param event DOCUMENTATION MISSING
   * @param params DOCUMENTATION MISSING
   * @param confirmId DOCUMENTATION MISSING
   */
  constructor (
    public event: string,
    public params: ServerUiSettingsParams,
    public confirmId?: string,
  ) {}

  public static fromJSON (raw: ServerUiSettingsJSON): ServerUiSettings {
    return new ServerUiSettings(
      raw.event,
      ServerUiSettingsParams.fromJSON(raw.params),
      raw.confirm_id,
    )
  }

  public mappableFields = [
    'event',
    'params',
    'confirmId',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    event: () => ({ event: this.event }),
    params: () => ({ params: this.params.toJSON() }),
    confirmId: () => ({ confirm_id: this.confirmId }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerUiSettingsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerUiSettingsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerUiSettingsParamsJSON {
  /* eslint-disable camelcase */
  data: UiSettingsData;
  namespace: string;
  /* eslint-enable camelcase */
}

export class ServerUiSettingsParams implements TDProtoClass<ServerUiSettingsParams> {
  /**
   * MISSING CLASS DOCUMENTATION
   * @param data UiSettingsData
   * @param namespace Namespace. For example: web, app
   */
  constructor (
    public data: UiSettingsData,
    public namespace: string,
  ) {}

  public static fromJSON (raw: ServerUiSettingsParamsJSON): ServerUiSettingsParams {
    return new ServerUiSettingsParams(
      raw.data,
      raw.namespace,
    )
  }

  public mappableFields = [
    'data',
    'namespace',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    data: () => ({ data: this.data }),
    namespace: () => ({ namespace: this.namespace }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerUiSettingsParamsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerUiSettingsParamsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerUploadUpdatedJSON {
  /* eslint-disable camelcase */
  event: string;
  params: ServerUploadUpdatedParamsJSON;
  confirm_id?: string;
  /* eslint-enable camelcase */
}

export class ServerUploadUpdated implements TDProtoClass<ServerUploadUpdated> {
  /**
   * Upload object created or changed
   * @param event DOCUMENTATION MISSING
   * @param params DOCUMENTATION MISSING
   * @param confirmId DOCUMENTATION MISSING
   */
  constructor (
    public event: string,
    public params: ServerUploadUpdatedParams,
    public confirmId?: string,
  ) {}

  public static fromJSON (raw: ServerUploadUpdatedJSON): ServerUploadUpdated {
    return new ServerUploadUpdated(
      raw.event,
      ServerUploadUpdatedParams.fromJSON(raw.params),
      raw.confirm_id,
    )
  }

  public mappableFields = [
    'event',
    'params',
    'confirmId',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    event: () => ({ event: this.event }),
    params: () => ({ params: this.params.toJSON() }),
    confirmId: () => ({ confirm_id: this.confirmId }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerUploadUpdatedJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerUploadUpdatedJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerUploadUpdatedParamsJSON {
  /* eslint-disable camelcase */
  uploads: UploadJSON[];
  /* eslint-enable camelcase */
}

export class ServerUploadUpdatedParams implements TDProtoClass<ServerUploadUpdatedParams> {
  /**
   * Params of the server.upload.updated event
   * @param uploads Uploads data
   */
  constructor (
    public uploads: Upload[],
  ) {}

  public static fromJSON (raw: ServerUploadUpdatedParamsJSON): ServerUploadUpdatedParams {
    return new ServerUploadUpdatedParams(
      raw.uploads.map(Upload.fromJSON),
    )
  }

  public mappableFields = [
    'uploads',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    uploads: () => ({ uploads: this.uploads.map(u => u.toJSON()) }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerUploadUpdatedParamsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerUploadUpdatedParamsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerWarningJSON {
  /* eslint-disable camelcase */
  event: string;
  params: ServerWarningParamsJSON;
  confirm_id?: string;
  /* eslint-enable camelcase */
}

export class ServerWarning implements TDProtoClass<ServerWarning> {
  /**
   * Something went wrong with client message
   * @param event DOCUMENTATION MISSING
   * @param params DOCUMENTATION MISSING
   * @param confirmId DOCUMENTATION MISSING
   */
  constructor (
    public event: string,
    public params: ServerWarningParams,
    public confirmId?: string,
  ) {}

  public static fromJSON (raw: ServerWarningJSON): ServerWarning {
    return new ServerWarning(
      raw.event,
      ServerWarningParams.fromJSON(raw.params),
      raw.confirm_id,
    )
  }

  public mappableFields = [
    'event',
    'params',
    'confirmId',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    event: () => ({ event: this.event }),
    params: () => ({ params: this.params.toJSON() }),
    confirmId: () => ({ confirm_id: this.confirmId }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerWarningJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerWarningJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ServerWarningParamsJSON {
  /* eslint-disable camelcase */
  message: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  orig: any;
  /* eslint-enable camelcase */
}

export class ServerWarningParams implements TDProtoClass<ServerWarningParams> {
  /**
   * Params of the server.warning event
   * @param message Message
   * @param orig Debug information
   */
  constructor (
    public message: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public orig: any,
  ) {}

  public static fromJSON (raw: ServerWarningParamsJSON): ServerWarningParams {
    return new ServerWarningParams(
      raw.message,
      raw.orig,
    )
  }

  public mappableFields = [
    'message',
    'orig',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    message: () => ({ message: this.message }),
    orig: () => ({ orig: this.orig }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ServerWarningParamsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ServerWarningParamsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface SessionJSON {
  /* eslint-disable camelcase */
  created: ISODateTimeString;
  uid: string;
  addr?: string;
  afk?: boolean;
  is_mobile?: boolean;
  lang?: string;
  team?: string;
  useragent?: string;
  /* eslint-enable camelcase */
}

export class Session implements TDProtoClass<Session> {
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
  constructor (
    public created: ISODateTimeString,
    public uid: string,
    public addr?: string,
    public afk?: boolean,
    public isMobile?: boolean,
    public lang?: string,
    public team?: string,
    public useragent?: string,
  ) {}

  public static fromJSON (raw: SessionJSON): Session {
    return new Session(
      raw.created,
      raw.uid,
      raw.addr,
      raw.afk,
      raw.is_mobile,
      raw.lang,
      raw.team,
      raw.useragent,
    )
  }

  public mappableFields = [
    'created',
    'uid',
    'addr',
    'afk',
    'isMobile',
    'lang',
    'team',
    'useragent',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    created: () => ({ created: this.created }),
    uid: () => ({ uid: this.uid }),
    addr: () => ({ addr: this.addr }),
    afk: () => ({ afk: this.afk }),
    isMobile: () => ({ is_mobile: this.isMobile }),
    lang: () => ({ lang: this.lang }),
    team: () => ({ team: this.team }),
    useragent: () => ({ useragent: this.useragent }),
    /* eslint-enable camelcase */
  }

  public toJSON (): SessionJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<SessionJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface SharpLinkJSON {
  /* eslint-disable camelcase */
  key: string;
  meta: SharpLinkMetaJSON;
  title: string;
  icons?: IconDataJSON;
  /* eslint-enable camelcase */
}

export class SharpLink implements TDProtoClass<SharpLink> {
  /**
   * #-link autocomplete information
   * @param key What should be inserted to the chat
   * @param meta Internal details
   * @param title What should be visible by user
   * @param icons Icon data, if any
   */
  constructor (
    public key: string,
    public meta: SharpLinkMeta,
    public title: string,
    public icons?: IconData,
  ) {}

  public static fromJSON (raw: SharpLinkJSON): SharpLink {
    return new SharpLink(
      raw.key,
      SharpLinkMeta.fromJSON(raw.meta),
      raw.title,
      raw.icons && IconData.fromJSON(raw.icons),
    )
  }

  public mappableFields = [
    'key',
    'meta',
    'title',
    'icons',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    key: () => ({ key: this.key }),
    meta: () => ({ meta: this.meta.toJSON() }),
    title: () => ({ title: this.title }),
    icons: () => ({ icons: this.icons?.toJSON() }),
    /* eslint-enable camelcase */
  }

  public toJSON (): SharpLinkJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<SharpLinkJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface SharpLinkMetaJSON {
  /* eslint-disable camelcase */
  chat_type: ChatType;
  jid: JID;
  done?: boolean;
  public?: boolean;
  num?: number;
  task_status?: string;
  /* eslint-enable camelcase */
}

export class SharpLinkMeta implements TDProtoClass<SharpLinkMeta> {
  /**
   * #-link autocomplete details
   * @param chatType Chat type
   * @param jid Chat id
   * @param done Deprecated: use `TaskStatus == "done"` comparsion
   * @param isPublic Is task or group public for non-guests
   * @param num Task number (for tasks)
   * @param taskStatus Task status (for tasks)
   */
  constructor (
    public chatType: ChatType,
    public jid: JID,
    public done?: boolean,
    public isPublic?: boolean,
    public num?: number,
    public taskStatus?: string,
  ) {}

  public static fromJSON (raw: SharpLinkMetaJSON): SharpLinkMeta {
    return new SharpLinkMeta(
      raw.chat_type,
      raw.jid,
      raw.done,
      raw.public,
      raw.num,
      raw.task_status,
    )
  }

  public mappableFields = [
    'chatType',
    'jid',
    'done',
    'isPublic',
    'num',
    'taskStatus',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    chatType: () => ({ chat_type: this.chatType }),
    jid: () => ({ jid: this.jid }),
    done: () => ({ done: this.done }),
    isPublic: () => ({ public: this.isPublic }),
    num: () => ({ num: this.num }),
    taskStatus: () => ({ task_status: this.taskStatus }),
    /* eslint-enable camelcase */
  }

  public toJSON (): SharpLinkMetaJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<SharpLinkMetaJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ShortMessageJSON {
  /* eslint-disable camelcase */
  chat: JID;
  chat_type: ChatType;
  created: ISODateTimeString;
  from: JID;
  gentime: number;
  message_id: string;
  to: JID;
  is_archive?: boolean;
  /* eslint-enable camelcase */
}

export class ShortMessage implements TDProtoClass<ShortMessage> {
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
  constructor (
    public readonly chat: JID,
    public readonly chatType: ChatType,
    public readonly created: ISODateTimeString,
    public readonly from: JID,
    public readonly gentime: number,
    public messageId: string,
    public to: JID,
    public readonly isArchive?: boolean,
  ) {}

  public static fromJSON (raw: ShortMessageJSON): ShortMessage {
    return new ShortMessage(
      raw.chat,
      raw.chat_type,
      raw.created,
      raw.from,
      raw.gentime,
      raw.message_id,
      raw.to,
      raw.is_archive,
    )
  }

  public mappableFields = [
    'chat',
    'chatType',
    'created',
    'from',
    'gentime',
    'messageId',
    'to',
    'isArchive',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    chat: () => ({ chat: this.chat }),
    chatType: () => ({ chat_type: this.chatType }),
    created: () => ({ created: this.created }),
    from: () => ({ from: this.from }),
    gentime: () => ({ gentime: this.gentime }),
    messageId: () => ({ message_id: this.messageId }),
    to: () => ({ to: this.to }),
    isArchive: () => ({ is_archive: this.isArchive }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ShortMessageJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ShortMessageJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface SingleIconJSON {
  /* eslint-disable camelcase */
  height: number;
  url: string;
  width: number;
  /* eslint-enable camelcase */
}

export class SingleIcon implements TDProtoClass<SingleIcon> {
  /**
   * Small or large icon
   * @param height Icon height, in pixels
   * @param url absolute url to icon
   * @param width Icon width, in pixels
   */
  constructor (
    public height: number,
    public url: string,
    public width: number,
  ) {}

  public static fromJSON (raw: SingleIconJSON): SingleIcon {
    return new SingleIcon(
      raw.height,
      raw.url,
      raw.width,
    )
  }

  public mappableFields = [
    'height',
    'url',
    'width',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    height: () => ({ height: this.height }),
    url: () => ({ url: this.url }),
    width: () => ({ width: this.width }),
    /* eslint-enable camelcase */
  }

  public toJSON (): SingleIconJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<SingleIconJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface StickerJSON {
  /* eslint-disable camelcase */
  icon100: string;
  icon128: string;
  icon200: string;
  icon64: string;
  message_content: MessageContentJSON;
  uid: string;
  /* eslint-enable camelcase */
}

export class Sticker implements TDProtoClass<Sticker> {
  /**
   * Single sticker
   * @param icon100 DOCUMENTATION MISSING
   * @param icon128 DOCUMENTATION MISSING
   * @param icon200 DOCUMENTATION MISSING
   * @param icon64 DOCUMENTATION MISSING
   * @param messageContent DOCUMENTATION MISSING
   * @param uid DOCUMENTATION MISSING
   */
  constructor (
    public icon100: string,
    public icon128: string,
    public icon200: string,
    public icon64: string,
    public messageContent: MessageContent,
    public uid: string,
  ) {}

  public static fromJSON (raw: StickerJSON): Sticker {
    return new Sticker(
      raw.icon100,
      raw.icon128,
      raw.icon200,
      raw.icon64,
      MessageContent.fromJSON(raw.message_content),
      raw.uid,
    )
  }

  public mappableFields = [
    'icon100',
    'icon128',
    'icon200',
    'icon64',
    'messageContent',
    'uid',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    icon100: () => ({ icon100: this.icon100 }),
    icon128: () => ({ icon128: this.icon128 }),
    icon200: () => ({ icon200: this.icon200 }),
    icon64: () => ({ icon64: this.icon64 }),
    messageContent: () => ({ message_content: this.messageContent.toJSON() }),
    uid: () => ({ uid: this.uid }),
    /* eslint-enable camelcase */
  }

  public toJSON (): StickerJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<StickerJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface StickerpackJSON {
  /* eslint-disable camelcase */
  name: string;
  stickers: StickerJSON[];
  title: string;
  uid: string;
  author?: string;
  author_link?: string;
  /* eslint-enable camelcase */
}

export class Stickerpack implements TDProtoClass<Stickerpack> {
  /**
   * Collection of stickers
   * @param name DOCUMENTATION MISSING
   * @param stickers DOCUMENTATION MISSING
   * @param title DOCUMENTATION MISSING
   * @param uid DOCUMENTATION MISSING
   * @param author DOCUMENTATION MISSING
   * @param authorLink DOCUMENTATION MISSING
   */
  constructor (
    public name: string,
    public stickers: Sticker[],
    public title: string,
    public uid: string,
    public author?: string,
    public authorLink?: string,
  ) {}

  public static fromJSON (raw: StickerpackJSON): Stickerpack {
    return new Stickerpack(
      raw.name,
      raw.stickers.map(Sticker.fromJSON),
      raw.title,
      raw.uid,
      raw.author,
      raw.author_link,
    )
  }

  public mappableFields = [
    'name',
    'stickers',
    'title',
    'uid',
    'author',
    'authorLink',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    name: () => ({ name: this.name }),
    stickers: () => ({ stickers: this.stickers.map(u => u.toJSON()) }),
    title: () => ({ title: this.title }),
    uid: () => ({ uid: this.uid }),
    author: () => ({ author: this.author }),
    authorLink: () => ({ author_link: this.authorLink }),
    /* eslint-enable camelcase */
  }

  public toJSON (): StickerpackJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<StickerpackJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface SubscriptionJSON {
  /* eslint-disable camelcase */
  uid: string;
  activated?: string;
  expires?: string;
  tariff_uid?: string;
  user_uid?: string;
  /* eslint-enable camelcase */
}

export class Subscription implements TDProtoClass<Subscription> {
  /**
   * Subscription - an entity that signifies the fact of subscribing to the tariff of any team for a certain period (not defined, in the case of the default tariff)
   * @param uid Subscription id
   * @param activated Subscription activation time
   * @param expires Subscription expiration time
   * @param tariffUid ID of the tariff for which the subscription is valid
   * @param userUid ID of the user who subscribed
   */
  constructor (
    public uid: string,
    public activated?: string,
    public expires?: string,
    public tariffUid?: string,
    public userUid?: string,
  ) {}

  public static fromJSON (raw: SubscriptionJSON): Subscription {
    return new Subscription(
      raw.uid,
      raw.activated,
      raw.expires,
      raw.tariff_uid,
      raw.user_uid,
    )
  }

  public mappableFields = [
    'uid',
    'activated',
    'expires',
    'tariffUid',
    'userUid',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    uid: () => ({ uid: this.uid }),
    activated: () => ({ activated: this.activated }),
    expires: () => ({ expires: this.expires }),
    tariffUid: () => ({ tariff_uid: this.tariffUid }),
    userUid: () => ({ user_uid: this.userUid }),
    /* eslint-enable camelcase */
  }

  public toJSON (): SubscriptionJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<SubscriptionJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface SubtaskJSON {
  /* eslint-disable camelcase */
  assignee: JID;
  display_name: string;
  jid: JID;
  num: number;
  title: string;
  public?: boolean;
  task_status?: string;
  /* eslint-enable camelcase */
}

export class Subtask implements TDProtoClass<Subtask> {
  /**
   * Link to sub/sup task
   * @param assignee Assignee contact id. Tasks only
   * @param displayName Title
   * @param jid Task id
   * @param num Task number in this team
   * @param title Task title. Generated from number and description
   * @param isPublic Is task or group public for non-guests
   * @param taskStatus Subtask task status
   */
  constructor (
    public assignee: JID,
    public displayName: string,
    public jid: JID,
    public num: number,
    public title: string,
    public isPublic?: boolean,
    public taskStatus?: string,
  ) {}

  public static fromJSON (raw: SubtaskJSON): Subtask {
    return new Subtask(
      raw.assignee,
      raw.display_name,
      raw.jid,
      raw.num,
      raw.title,
      raw.public,
      raw.task_status,
    )
  }

  public mappableFields = [
    'assignee',
    'displayName',
    'jid',
    'num',
    'title',
    'isPublic',
    'taskStatus',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    assignee: () => ({ assignee: this.assignee }),
    displayName: () => ({ display_name: this.displayName }),
    jid: () => ({ jid: this.jid }),
    num: () => ({ num: this.num }),
    title: () => ({ title: this.title }),
    isPublic: () => ({ public: this.isPublic }),
    taskStatus: () => ({ task_status: this.taskStatus }),
    /* eslint-enable camelcase */
  }

  public toJSON (): SubtaskJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<SubtaskJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface SwitcherColorsJSON {
  /* eslint-disable camelcase */
  off: RGBColor;
  on: RGBColor;
  /* eslint-enable camelcase */
}

export class SwitcherColors implements TDProtoClass<SwitcherColors> {
  /**
   * SwitcherColors switcher colors for app
   * @param off Off color
   * @param on On color
   */
  constructor (
    public off: RGBColor,
    public on: RGBColor,
  ) {}

  public static fromJSON (raw: SwitcherColorsJSON): SwitcherColors {
    return new SwitcherColors(
      raw.off,
      raw.on,
    )
  }

  public mappableFields = [
    'off',
    'on',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    off: () => ({ off: this.off }),
    on: () => ({ on: this.on }),
    /* eslint-enable camelcase */
  }

  public toJSON (): SwitcherColorsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<SwitcherColorsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface TagJSON {
  /* eslint-disable camelcase */
  name: string;
  uid: string;
  /* eslint-enable camelcase */
}

export class Tag implements TDProtoClass<Tag> {
  /**
   * Task tag
   * @param name Tag name
   * @param uid Tag id
   */
  constructor (
    public name: string,
    public uid: string,
  ) {}

  public static fromJSON (raw: TagJSON): Tag {
    return new Tag(
      raw.name,
      raw.uid,
    )
  }

  public mappableFields = [
    'name',
    'uid',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    name: () => ({ name: this.name }),
    uid: () => ({ uid: this.uid }),
    /* eslint-enable camelcase */
  }

  public toJSON (): TagJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<TagJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface TariffJSON {
  /* eslint-disable camelcase */
  title_en: string;
  title_ru: string;
  uid: string;
  cloud_space?: number;
  max_members_in_team?: number;
  max_participants_per_call?: number;
  max_upload_filesize?: number;
  price?: string;
  /* eslint-enable camelcase */
}

export class Tariff implements TDProtoClass<Tariff> {
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
  constructor (
    public titleEn: string,
    public titleRu: string,
    public uid: string,
    public cloudSpace?: number,
    public maxMembersInTeam?: number,
    public maxParticipantsPerCall?: number,
    public maxUploadFilesize?: number,
    public price?: string,
  ) {}

  public static fromJSON (raw: TariffJSON): Tariff {
    return new Tariff(
      raw.title_en,
      raw.title_ru,
      raw.uid,
      raw.cloud_space,
      raw.max_members_in_team,
      raw.max_participants_per_call,
      raw.max_upload_filesize,
      raw.price,
    )
  }

  public mappableFields = [
    'titleEn',
    'titleRu',
    'uid',
    'cloudSpace',
    'maxMembersInTeam',
    'maxParticipantsPerCall',
    'maxUploadFilesize',
    'price',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    titleEn: () => ({ title_en: this.titleEn }),
    titleRu: () => ({ title_ru: this.titleRu }),
    uid: () => ({ uid: this.uid }),
    cloudSpace: () => ({ cloud_space: this.cloudSpace }),
    maxMembersInTeam: () => ({ max_members_in_team: this.maxMembersInTeam }),
    maxParticipantsPerCall: () => ({ max_participants_per_call: this.maxParticipantsPerCall }),
    maxUploadFilesize: () => ({ max_upload_filesize: this.maxUploadFilesize }),
    price: () => ({ price: this.price }),
    /* eslint-enable camelcase */
  }

  public toJSON (): TariffJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<TariffJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface TaskJSON {
  /* eslint-disable camelcase */
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
  /* eslint-enable camelcase */
}

export class Task implements TDProtoClass<Task> {
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
  constructor (
    public assignee?: JID,
    public complexity?: number,
    public customColorIndex?: number,
    public deadline?: ISODateTimeString,
    public description?: string,
    public importance?: number,
    public isPublic?: boolean,
    public items?: string[],
    public linkedMessages?: string[],
    public observers?: JID[],
    public remindAt?: ISODateTimeString,
    public section?: string,
    public spentTime?: number,
    public tags?: string[],
    public taskStatus?: string,
    public uploads?: string[],
    public urgency?: number,
  ) {}

  public static fromJSON (raw: TaskJSON): Task {
    return new Task(
      raw.assignee,
      raw.complexity,
      raw.custom_color_index,
      raw.deadline,
      raw.description,
      raw.importance,
      raw.public,
      raw.items,
      raw.linked_messages,
      raw.observers,
      raw.remind_at,
      raw.section,
      raw.spent_time,
      raw.tags,
      raw.task_status,
      raw.uploads,
      raw.urgency,
    )
  }

  public mappableFields = [
    'assignee',
    'complexity',
    'customColorIndex',
    'deadline',
    'description',
    'importance',
    'isPublic',
    'items',
    'linkedMessages',
    'observers',
    'remindAt',
    'section',
    'spentTime',
    'tags',
    'taskStatus',
    'uploads',
    'urgency',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    assignee: () => ({ assignee: this.assignee }),
    complexity: () => ({ complexity: this.complexity }),
    customColorIndex: () => ({ custom_color_index: this.customColorIndex }),
    deadline: () => ({ deadline: this.deadline }),
    description: () => ({ description: this.description }),
    importance: () => ({ importance: this.importance }),
    isPublic: () => ({ public: this.isPublic }),
    items: () => ({ items: this.items }),
    linkedMessages: () => ({ linked_messages: this.linkedMessages }),
    observers: () => ({ observers: this.observers }),
    remindAt: () => ({ remind_at: this.remindAt }),
    section: () => ({ section: this.section }),
    spentTime: () => ({ spent_time: this.spentTime }),
    tags: () => ({ tags: this.tags }),
    taskStatus: () => ({ task_status: this.taskStatus }),
    uploads: () => ({ uploads: this.uploads }),
    urgency: () => ({ urgency: this.urgency }),
    /* eslint-enable camelcase */
  }

  public toJSON (): TaskJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<TaskJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface TaskColorJSON {
  /* eslint-disable camelcase */
  dark: RGBColor;
  light: RGBColor;
  regular: RGBColor;
  /* eslint-enable camelcase */
}

export class TaskColor implements TDProtoClass<TaskColor> {
  /**
   * Task color rules color
   * @param dark Dark color
   * @param light Light color
   * @param regular Regular color
   */
  constructor (
    public dark: RGBColor,
    public light: RGBColor,
    public regular: RGBColor,
  ) {}

  public static fromJSON (raw: TaskColorJSON): TaskColor {
    return new TaskColor(
      raw.dark,
      raw.light,
      raw.regular,
    )
  }

  public mappableFields = [
    'dark',
    'light',
    'regular',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    dark: () => ({ dark: this.dark }),
    light: () => ({ light: this.light }),
    regular: () => ({ regular: this.regular }),
    /* eslint-enable camelcase */
  }

  public toJSON (): TaskColorJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<TaskColorJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface TaskCountersJSON {
  /* eslint-disable camelcase */
  jid: JID;
  num_unread?: number;
  num_unread_notices?: number;
  /* eslint-enable camelcase */
}

export class TaskCounters implements TDProtoClass<TaskCounters> {
  /**
   * Tasks counters
   * @param jid Task jid
   * @param numUnread Unreads counter
   * @param numUnreadNotices Mentions (@) counter
   */
  constructor (
    public jid: JID,
    public numUnread?: number,
    public numUnreadNotices?: number,
  ) {}

  public static fromJSON (raw: TaskCountersJSON): TaskCounters {
    return new TaskCounters(
      raw.jid,
      raw.num_unread,
      raw.num_unread_notices,
    )
  }

  public mappableFields = [
    'jid',
    'numUnread',
    'numUnreadNotices',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    jid: () => ({ jid: this.jid }),
    numUnread: () => ({ num_unread: this.numUnread }),
    numUnreadNotices: () => ({ num_unread_notices: this.numUnreadNotices }),
    /* eslint-enable camelcase */
  }

  public toJSON (): TaskCountersJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<TaskCountersJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface TaskFilterJSON {
  /* eslint-disable camelcase */
  field: TaskFilterKey;
  title: string;
  /* eslint-enable camelcase */
}

export class TaskFilter implements TDProtoClass<TaskFilter> {
  /**
   * Task filter
   * @param field Task filter field
   * @param title Filter title
   */
  constructor (
    public field: TaskFilterKey,
    public title: string,
  ) {}

  public static fromJSON (raw: TaskFilterJSON): TaskFilter {
    return new TaskFilter(
      raw.field,
      raw.title,
    )
  }

  public mappableFields = [
    'field',
    'title',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    field: () => ({ field: this.field }),
    title: () => ({ title: this.title }),
    /* eslint-enable camelcase */
  }

  public toJSON (): TaskFilterJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<TaskFilterJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface TaskItemJSON {
  /* eslint-disable camelcase */
  gentime: number;
  text: string;
  can_change?: boolean;
  can_toggle?: boolean;
  checked?: boolean;
  sort_ordering?: number;
  subtask?: SubtaskJSON;
  uid?: string;
  /* eslint-enable camelcase */
}

export class TaskItem implements TDProtoClass<TaskItem> {
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
  constructor (
    public readonly gentime: number,
    public text: string,
    public canChange?: boolean,
    public canToggle?: boolean,
    public checked?: boolean,
    public sortOrdering?: number,
    public subtask?: Subtask,
    public uid?: string,
  ) {}

  public static fromJSON (raw: TaskItemJSON): TaskItem {
    return new TaskItem(
      raw.gentime,
      raw.text,
      raw.can_change,
      raw.can_toggle,
      raw.checked,
      raw.sort_ordering,
      raw.subtask && Subtask.fromJSON(raw.subtask),
      raw.uid,
    )
  }

  public mappableFields = [
    'gentime',
    'text',
    'canChange',
    'canToggle',
    'checked',
    'sortOrdering',
    'subtask',
    'uid',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    gentime: () => ({ gentime: this.gentime }),
    text: () => ({ text: this.text }),
    canChange: () => ({ can_change: this.canChange }),
    canToggle: () => ({ can_toggle: this.canToggle }),
    checked: () => ({ checked: this.checked }),
    sortOrdering: () => ({ sort_ordering: this.sortOrdering }),
    subtask: () => ({ subtask: this.subtask?.toJSON() }),
    uid: () => ({ uid: this.uid }),
    /* eslint-enable camelcase */
  }

  public toJSON (): TaskItemJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<TaskItemJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface TaskItemsJSON {
  /* eslint-disable camelcase */
  checked: boolean;
  name: string;
  /* eslint-enable camelcase */
}

export class TaskItems implements TDProtoClass<TaskItems> {
  /**
   * Task item
   * @param checked DOCUMENTATION MISSING
   * @param name DOCUMENTATION MISSING
   */
  constructor (
    public checked: boolean,
    public name: string,
  ) {}

  public static fromJSON (raw: TaskItemsJSON): TaskItems {
    return new TaskItems(
      raw.checked,
      raw.name,
    )
  }

  public mappableFields = [
    'checked',
    'name',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    checked: () => ({ checked: this.checked }),
    name: () => ({ name: this.name }),
    /* eslint-enable camelcase */
  }

  public toJSON (): TaskItemsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<TaskItemsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface TaskPreviewJSON {
  /* eslint-disable camelcase */
  assignee: JID;
  deadline: string;
  description: string;
  public: boolean;
  items: TaskItemsJSON[];
  section: string;
  tags: string[];
  _error?: string;
  /* eslint-enable camelcase */
}

export class TaskPreview implements TDProtoClass<TaskPreview> {
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
  constructor (
    public assignee: JID,
    public deadline: string,
    public description: string,
    public isPublic: boolean,
    public items: TaskItems[],
    public section: string,
    public tags: string[],
    public _error?: string,
  ) {}

  public static fromJSON (raw: TaskPreviewJSON): TaskPreview {
    return new TaskPreview(
      raw.assignee,
      raw.deadline,
      raw.description,
      raw.public,
      raw.items.map(TaskItems.fromJSON),
      raw.section,
      raw.tags,
      raw._error,
    )
  }

  public mappableFields = [
    'assignee',
    'deadline',
    'description',
    'isPublic',
    'items',
    'section',
    'tags',
    '_error',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    assignee: () => ({ assignee: this.assignee }),
    deadline: () => ({ deadline: this.deadline }),
    description: () => ({ description: this.description }),
    isPublic: () => ({ public: this.isPublic }),
    items: () => ({ items: this.items.map(u => u.toJSON()) }),
    section: () => ({ section: this.section }),
    tags: () => ({ tags: this.tags }),
    _error: () => ({ _error: this._error }),
    /* eslint-enable camelcase */
  }

  public toJSON (): TaskPreviewJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<TaskPreviewJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface TaskSortJSON {
  /* eslint-disable camelcase */
  key: TaskSortKey;
  title: string;
  /* eslint-enable camelcase */
}

export class TaskSort implements TDProtoClass<TaskSort> {
  /**
   * Task sort type
   * @param key Field
   * @param title Sort title
   */
  constructor (
    public key: TaskSortKey,
    public title: string,
  ) {}

  public static fromJSON (raw: TaskSortJSON): TaskSort {
    return new TaskSort(
      raw.key,
      raw.title,
    )
  }

  public mappableFields = [
    'key',
    'title',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    key: () => ({ key: this.key }),
    title: () => ({ title: this.title }),
    /* eslint-enable camelcase */
  }

  public toJSON (): TaskSortJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<TaskSortJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface TaskStatusJSON {
  /* eslint-disable camelcase */
  name: string;
  sort_ordering: number;
  title: string;
  is_archive?: boolean;
  uid?: string;
  /* eslint-enable camelcase */
}

export class TaskStatus implements TDProtoClass<TaskStatus> {
  /**
   * Custom task status
   * @param name Status internal name
   * @param sortOrdering Status sort ordering
   * @param title Status localized name
   * @param isArchive Status not used anymore
   * @param uid Status id
   */
  constructor (
    public name: string,
    public sortOrdering: number,
    public title: string,
    public isArchive?: boolean,
    public uid?: string,
  ) {}

  public static fromJSON (raw: TaskStatusJSON): TaskStatus {
    return new TaskStatus(
      raw.name,
      raw.sort_ordering,
      raw.title,
      raw.is_archive,
      raw.uid,
    )
  }

  public mappableFields = [
    'name',
    'sortOrdering',
    'title',
    'isArchive',
    'uid',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    name: () => ({ name: this.name }),
    sortOrdering: () => ({ sort_ordering: this.sortOrdering }),
    title: () => ({ title: this.title }),
    isArchive: () => ({ is_archive: this.isArchive }),
    uid: () => ({ uid: this.uid }),
    /* eslint-enable camelcase */
  }

  public toJSON (): TaskStatusJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<TaskStatusJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface TaskTabJSON {
  /* eslint-disable camelcase */
  filters: TaskFilterJSON[];
  hide_empty: boolean;
  key: TaskTabKey;
  pagination: boolean;
  show_counter: boolean;
  sort: TaskSortJSON[];
  title: string;
  unread_tasks: TaskCountersJSON[];
  /* eslint-enable camelcase */
}

export class TaskTab implements TDProtoClass<TaskTab> {
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
  constructor (
    public filters: TaskFilter[],
    public hideEmpty: boolean,
    public key: TaskTabKey,
    public pagination: boolean,
    public showCounter: boolean,
    public sort: TaskSort[],
    public title: string,
    public unreadTasks: TaskCounters[],
  ) {}

  public static fromJSON (raw: TaskTabJSON): TaskTab {
    return new TaskTab(
      raw.filters.map(TaskFilter.fromJSON),
      raw.hide_empty,
      raw.key,
      raw.pagination,
      raw.show_counter,
      raw.sort.map(TaskSort.fromJSON),
      raw.title,
      raw.unread_tasks.map(TaskCounters.fromJSON),
    )
  }

  public mappableFields = [
    'filters',
    'hideEmpty',
    'key',
    'pagination',
    'showCounter',
    'sort',
    'title',
    'unreadTasks',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    filters: () => ({ filters: this.filters.map(u => u.toJSON()) }),
    hideEmpty: () => ({ hide_empty: this.hideEmpty }),
    key: () => ({ key: this.key }),
    pagination: () => ({ pagination: this.pagination }),
    showCounter: () => ({ show_counter: this.showCounter }),
    sort: () => ({ sort: this.sort.map(u => u.toJSON()) }),
    title: () => ({ title: this.title }),
    unreadTasks: () => ({ unread_tasks: this.unreadTasks.map(u => u.toJSON()) }),
    /* eslint-enable camelcase */
  }

  public toJSON (): TaskTabJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<TaskTabJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface TeamJSON {
  /* eslint-disable camelcase */
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
  pinned?: boolean;
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
  /* eslint-enable camelcase */
}

export class Team implements TDProtoClass<Team> {
  /**
   * Team
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
   * @param pinned Team pinned
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
  constructor (
    public readonly gentime: number,
    public readonly icons: IconData,
    public readonly lastActive: boolean,
    public maxMessageUpdateAge: number,
    public me: Contact,
    public name: string,
    public readonly needConfirmation: boolean,
    public readonly uid: string,
    public unread: TeamUnread,
    public readonly userFields: string[],
    public availableTariffs?: string[],
    public readonly badProfile?: boolean,
    public readonly changeableStatuses?: TeamStatus[],
    public readonly contacts?: Contact[],
    public defaultTaskDeadline?: string,
    public displayFamilyNameFirst?: boolean,
    public hideArchivedUsers?: boolean,
    public readonly isArchive?: boolean,
    public pinned?: boolean,
    public readonly singleGroup?: JID,
    public subscription?: Subscription,
    public taskImportanceMax?: number,
    public taskImportanceMin?: number,
    public taskImportanceRev?: boolean,
    public readonly theme?: Theme,
    public readonly uploadsSize?: number,
    public readonly uploadsSizeLimit?: number,
    public usePatronymic?: boolean,
    public useTaskComplexity?: boolean,
    public useTaskImportance?: boolean,
    public useTaskSpentTime?: boolean,
    public useTaskUrgency?: boolean,
  ) {}

  public static fromJSON (raw: TeamJSON): Team {
    return new Team(
      raw.gentime,
      IconData.fromJSON(raw.icons),
      raw.last_active,
      raw.max_message_update_age,
      Contact.fromJSON(raw.me),
      raw.name,
      raw.need_confirmation,
      raw.uid,
      TeamUnread.fromJSON(raw.unread),
      raw.user_fields,
      raw.available_tariffs,
      raw.bad_profile,
      raw.changeable_statuses,
      raw.contacts && raw.contacts.map(Contact.fromJSON),
      raw.default_task_deadline,
      raw.display_family_name_first,
      raw.hide_archived_users,
      raw.is_archive,
      raw.pinned,
      raw.single_group,
      raw.subscription && Subscription.fromJSON(raw.subscription),
      raw.task_importance_max,
      raw.task_importance_min,
      raw.task_importance_rev,
      raw.theme && Theme.fromJSON(raw.theme),
      raw.uploads_size,
      raw.uploads_size_limit,
      raw.use_patronymic,
      raw.use_task_complexity,
      raw.use_task_importance,
      raw.use_task_spent_time,
      raw.use_task_urgency,
    )
  }

  public mappableFields = [
    'gentime',
    'icons',
    'lastActive',
    'maxMessageUpdateAge',
    'me',
    'name',
    'needConfirmation',
    'uid',
    'unread',
    'userFields',
    'availableTariffs',
    'badProfile',
    'changeableStatuses',
    'contacts',
    'defaultTaskDeadline',
    'displayFamilyNameFirst',
    'hideArchivedUsers',
    'isArchive',
    'pinned',
    'singleGroup',
    'subscription',
    'taskImportanceMax',
    'taskImportanceMin',
    'taskImportanceRev',
    'theme',
    'uploadsSize',
    'uploadsSizeLimit',
    'usePatronymic',
    'useTaskComplexity',
    'useTaskImportance',
    'useTaskSpentTime',
    'useTaskUrgency',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    gentime: () => ({ gentime: this.gentime }),
    icons: () => ({ icons: this.icons.toJSON() }),
    lastActive: () => ({ last_active: this.lastActive }),
    maxMessageUpdateAge: () => ({ max_message_update_age: this.maxMessageUpdateAge }),
    me: () => ({ me: this.me.toJSON() }),
    name: () => ({ name: this.name }),
    needConfirmation: () => ({ need_confirmation: this.needConfirmation }),
    uid: () => ({ uid: this.uid }),
    unread: () => ({ unread: this.unread.toJSON() }),
    userFields: () => ({ user_fields: this.userFields }),
    availableTariffs: () => ({ available_tariffs: this.availableTariffs }),
    badProfile: () => ({ bad_profile: this.badProfile }),
    changeableStatuses: () => ({ changeable_statuses: this.changeableStatuses }),
    contacts: () => ({ contacts: this.contacts?.map(u => u.toJSON()) }),
    defaultTaskDeadline: () => ({ default_task_deadline: this.defaultTaskDeadline }),
    displayFamilyNameFirst: () => ({ display_family_name_first: this.displayFamilyNameFirst }),
    hideArchivedUsers: () => ({ hide_archived_users: this.hideArchivedUsers }),
    isArchive: () => ({ is_archive: this.isArchive }),
    pinned: () => ({ pinned: this.pinned }),
    singleGroup: () => ({ single_group: this.singleGroup }),
    subscription: () => ({ subscription: this.subscription?.toJSON() }),
    taskImportanceMax: () => ({ task_importance_max: this.taskImportanceMax }),
    taskImportanceMin: () => ({ task_importance_min: this.taskImportanceMin }),
    taskImportanceRev: () => ({ task_importance_rev: this.taskImportanceRev }),
    theme: () => ({ theme: this.theme?.toJSON() }),
    uploadsSize: () => ({ uploads_size: this.uploadsSize }),
    uploadsSizeLimit: () => ({ uploads_size_limit: this.uploadsSizeLimit }),
    usePatronymic: () => ({ use_patronymic: this.usePatronymic }),
    useTaskComplexity: () => ({ use_task_complexity: this.useTaskComplexity }),
    useTaskImportance: () => ({ use_task_importance: this.useTaskImportance }),
    useTaskSpentTime: () => ({ use_task_spent_time: this.useTaskSpentTime }),
    useTaskUrgency: () => ({ use_task_urgency: this.useTaskUrgency }),
    /* eslint-enable camelcase */
  }

  public toJSON (): TeamJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<TeamJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface TeamCounterJSON {
  /* eslint-disable camelcase */
  uid: string;
  unread: TeamUnreadJSON;
  /* eslint-enable camelcase */
}

export class TeamCounter implements TDProtoClass<TeamCounter> {
  /**
   * Unread message counters
   * @param uid Team id
   * @param unread Unread message counters
   */
  constructor (
    public uid: string,
    public unread: TeamUnread,
  ) {}

  public static fromJSON (raw: TeamCounterJSON): TeamCounter {
    return new TeamCounter(
      raw.uid,
      TeamUnread.fromJSON(raw.unread),
    )
  }

  public mappableFields = [
    'uid',
    'unread',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    uid: () => ({ uid: this.uid }),
    unread: () => ({ unread: this.unread.toJSON() }),
    /* eslint-enable camelcase */
  }

  public toJSON (): TeamCounterJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<TeamCounterJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface TeamShortJSON {
  /* eslint-disable camelcase */
  icons: IconDataJSON;
  name: string;
  uid: string;
  /* eslint-enable camelcase */
}

export class TeamShort implements TDProtoClass<TeamShort> {
  /**
   * Short team representation. For invites, push notifications, etc. Readonly
   * @param icons Team icons
   * @param name Team name
   * @param uid Team id
   */
  constructor (
    public icons: IconData,
    public name: string,
    public uid: string,
  ) {}

  public static fromJSON (raw: TeamShortJSON): TeamShort {
    return new TeamShort(
      IconData.fromJSON(raw.icons),
      raw.name,
      raw.uid,
    )
  }

  public mappableFields = [
    'icons',
    'name',
    'uid',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    icons: () => ({ icons: this.icons.toJSON() }),
    name: () => ({ name: this.name }),
    uid: () => ({ uid: this.uid }),
    /* eslint-enable camelcase */
  }

  public toJSON (): TeamShortJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<TeamShortJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface TermsJSON {
  /* eslint-disable camelcase */
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
  /* eslint-enable camelcase */
}

export class Terms implements TDProtoClass<Terms> {
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
  constructor (
    public EnInTeam: string,
    public EnTeam: string,
    public EnTeamAccess: string,
    public EnTeamAdmin: string,
    public EnTeamAdmins: string,
    public EnTeamGuest: string,
    public EnTeamMember: string,
    public EnTeamMembers: string,
    public EnTeamOwner: string,
    public EnTeamSettings: string,
    public EnTeams: string,
    public EnToTeam: string,
    public RuInTeam: string,
    public RuTeam: string,
    public RuTeamAccess: string,
    public RuTeamAdmin: string,
    public RuTeamAdmins: string,
    public RuTeamD: string,
    public RuTeamGuest: string,
    public RuTeamMember: string,
    public RuTeamMembers: string,
    public RuTeamOwner: string,
    public RuTeamP: string,
    public RuTeamR: string,
    public RuTeamSettings: string,
    public RuTeamT: string,
    public RuTeamV: string,
    public RuTeams: string,
    public RuTeamsD: string,
    public RuTeamsP: string,
    public RuTeamsR: string,
    public RuTeamsT: string,
    public RuTeamsV: string,
    public RuToTeam: string,
  ) {}

  public static fromJSON (raw: TermsJSON): Terms {
    return new Terms(
      raw.EnInTeam,
      raw.EnTeam,
      raw.EnTeamAccess,
      raw.EnTeamAdmin,
      raw.EnTeamAdmins,
      raw.EnTeamGuest,
      raw.EnTeamMember,
      raw.EnTeamMembers,
      raw.EnTeamOwner,
      raw.EnTeamSettings,
      raw.EnTeams,
      raw.EnToTeam,
      raw.RuInTeam,
      raw.RuTeam,
      raw.RuTeamAccess,
      raw.RuTeamAdmin,
      raw.RuTeamAdmins,
      raw.RuTeamD,
      raw.RuTeamGuest,
      raw.RuTeamMember,
      raw.RuTeamMembers,
      raw.RuTeamOwner,
      raw.RuTeamP,
      raw.RuTeamR,
      raw.RuTeamSettings,
      raw.RuTeamT,
      raw.RuTeamV,
      raw.RuTeams,
      raw.RuTeamsD,
      raw.RuTeamsP,
      raw.RuTeamsR,
      raw.RuTeamsT,
      raw.RuTeamsV,
      raw.RuToTeam,
    )
  }

  public mappableFields = [
    'EnInTeam',
    'EnTeam',
    'EnTeamAccess',
    'EnTeamAdmin',
    'EnTeamAdmins',
    'EnTeamGuest',
    'EnTeamMember',
    'EnTeamMembers',
    'EnTeamOwner',
    'EnTeamSettings',
    'EnTeams',
    'EnToTeam',
    'RuInTeam',
    'RuTeam',
    'RuTeamAccess',
    'RuTeamAdmin',
    'RuTeamAdmins',
    'RuTeamD',
    'RuTeamGuest',
    'RuTeamMember',
    'RuTeamMembers',
    'RuTeamOwner',
    'RuTeamP',
    'RuTeamR',
    'RuTeamSettings',
    'RuTeamT',
    'RuTeamV',
    'RuTeams',
    'RuTeamsD',
    'RuTeamsP',
    'RuTeamsR',
    'RuTeamsT',
    'RuTeamsV',
    'RuToTeam',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    EnInTeam: () => ({ EnInTeam: this.EnInTeam }),
    EnTeam: () => ({ EnTeam: this.EnTeam }),
    EnTeamAccess: () => ({ EnTeamAccess: this.EnTeamAccess }),
    EnTeamAdmin: () => ({ EnTeamAdmin: this.EnTeamAdmin }),
    EnTeamAdmins: () => ({ EnTeamAdmins: this.EnTeamAdmins }),
    EnTeamGuest: () => ({ EnTeamGuest: this.EnTeamGuest }),
    EnTeamMember: () => ({ EnTeamMember: this.EnTeamMember }),
    EnTeamMembers: () => ({ EnTeamMembers: this.EnTeamMembers }),
    EnTeamOwner: () => ({ EnTeamOwner: this.EnTeamOwner }),
    EnTeamSettings: () => ({ EnTeamSettings: this.EnTeamSettings }),
    EnTeams: () => ({ EnTeams: this.EnTeams }),
    EnToTeam: () => ({ EnToTeam: this.EnToTeam }),
    RuInTeam: () => ({ RuInTeam: this.RuInTeam }),
    RuTeam: () => ({ RuTeam: this.RuTeam }),
    RuTeamAccess: () => ({ RuTeamAccess: this.RuTeamAccess }),
    RuTeamAdmin: () => ({ RuTeamAdmin: this.RuTeamAdmin }),
    RuTeamAdmins: () => ({ RuTeamAdmins: this.RuTeamAdmins }),
    RuTeamD: () => ({ RuTeamD: this.RuTeamD }),
    RuTeamGuest: () => ({ RuTeamGuest: this.RuTeamGuest }),
    RuTeamMember: () => ({ RuTeamMember: this.RuTeamMember }),
    RuTeamMembers: () => ({ RuTeamMembers: this.RuTeamMembers }),
    RuTeamOwner: () => ({ RuTeamOwner: this.RuTeamOwner }),
    RuTeamP: () => ({ RuTeamP: this.RuTeamP }),
    RuTeamR: () => ({ RuTeamR: this.RuTeamR }),
    RuTeamSettings: () => ({ RuTeamSettings: this.RuTeamSettings }),
    RuTeamT: () => ({ RuTeamT: this.RuTeamT }),
    RuTeamV: () => ({ RuTeamV: this.RuTeamV }),
    RuTeams: () => ({ RuTeams: this.RuTeams }),
    RuTeamsD: () => ({ RuTeamsD: this.RuTeamsD }),
    RuTeamsP: () => ({ RuTeamsP: this.RuTeamsP }),
    RuTeamsR: () => ({ RuTeamsR: this.RuTeamsR }),
    RuTeamsT: () => ({ RuTeamsT: this.RuTeamsT }),
    RuTeamsV: () => ({ RuTeamsV: this.RuTeamsV }),
    RuToTeam: () => ({ RuToTeam: this.RuToTeam }),
    /* eslint-enable camelcase */
  }

  public toJSON (): TermsJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<TermsJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface ThemeJSON {
  /* eslint-disable camelcase */
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
  back: RGBColor;
  back_dark: RGBColor;
  back_light: RGBColor;
  background: RGBColor;
  brand: RGBColor;
  brand_dark: RGBColor;
  brand_light: RGBColor;
  button: ButtonColorsJSON;
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
  switcher: SwitcherColorsJSON;
  tab_background: RGBColor;
  title_background: RGBColor;
  web_base: WebBaseJSON;
  /* eslint-enable camelcase */
}

export class Theme implements TDProtoClass<Theme> {
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
   * @param back Back light color for app
   * @param backDark Back dark color for app
   * @param backLight Back light color for app
   * @param background Background color for app
   * @param brand Brand color for app
   * @param brandDark BrandDark color for app
   * @param brandLight Brand light color for app
   * @param button Button colors for app
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
   * @param switcher Switcher colors for app
   * @param tabBackground Tab background color for app
   * @param titleBackground Title background color for app
   * @param webBase WebBase colors for web
   */
  constructor (
    public AccentColor: RGBColor,
    public AccentHoverColor: RGBColor,
    public AppAccentColor: RGBColor,
    public AppPrimaryColor: RGBColor,
    public BgColor: RGBColor,
    public BgHoverColor: RGBColor,
    public MainAccent: RGBColor,
    public MainAccentHover: RGBColor,
    public MainLightAccent: RGBColor,
    public MainLink: RGBColor,
    public MutedTextColor: RGBColor,
    public TextColor: RGBColor,
    public TextOnAccentHoverColor: RGBColor,
    public attention: RGBColor,
    public attentionLight: RGBColor,
    public back: RGBColor,
    public backDark: RGBColor,
    public backLight: RGBColor,
    public background: RGBColor,
    public brand: RGBColor,
    public brandDark: RGBColor,
    public brandLight: RGBColor,
    public button: ButtonColors,
    public chatInputBackground: RGBColor,
    public error: RGBColor,
    public errorLight: RGBColor,
    public font: FontColors,
    public ic: IconColors,
    public input: InputColors,
    public message: MessageColors,
    public modalBackground: RGBColor,
    public substrateBackground: RGBColor,
    public success: RGBColor,
    public successLight: RGBColor,
    public switcher: SwitcherColors,
    public tabBackground: RGBColor,
    public titleBackground: RGBColor,
    public webBase: WebBase,
  ) {}

  public static fromJSON (raw: ThemeJSON): Theme {
    return new Theme(
      raw.AccentColor,
      raw.AccentHoverColor,
      raw.AppAccentColor,
      raw.AppPrimaryColor,
      raw.BgColor,
      raw.BgHoverColor,
      raw.MainAccent,
      raw.MainAccentHover,
      raw.MainLightAccent,
      raw.MainLink,
      raw.MutedTextColor,
      raw.TextColor,
      raw.TextOnAccentHoverColor,
      raw.attention,
      raw.attention_light,
      raw.back,
      raw.back_dark,
      raw.back_light,
      raw.background,
      raw.brand,
      raw.brand_dark,
      raw.brand_light,
      ButtonColors.fromJSON(raw.button),
      raw.chat_input_background,
      raw.error,
      raw.error_light,
      FontColors.fromJSON(raw.font),
      IconColors.fromJSON(raw.ic),
      InputColors.fromJSON(raw.input),
      MessageColors.fromJSON(raw.message),
      raw.modal_background,
      raw.substrate_background,
      raw.success,
      raw.success_light,
      SwitcherColors.fromJSON(raw.switcher),
      raw.tab_background,
      raw.title_background,
      WebBase.fromJSON(raw.web_base),
    )
  }

  public mappableFields = [
    'AccentColor',
    'AccentHoverColor',
    'AppAccentColor',
    'AppPrimaryColor',
    'BgColor',
    'BgHoverColor',
    'MainAccent',
    'MainAccentHover',
    'MainLightAccent',
    'MainLink',
    'MutedTextColor',
    'TextColor',
    'TextOnAccentHoverColor',
    'attention',
    'attentionLight',
    'back',
    'backDark',
    'backLight',
    'background',
    'brand',
    'brandDark',
    'brandLight',
    'button',
    'chatInputBackground',
    'error',
    'errorLight',
    'font',
    'ic',
    'input',
    'message',
    'modalBackground',
    'substrateBackground',
    'success',
    'successLight',
    'switcher',
    'tabBackground',
    'titleBackground',
    'webBase',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    AccentColor: () => ({ AccentColor: this.AccentColor }),
    AccentHoverColor: () => ({ AccentHoverColor: this.AccentHoverColor }),
    AppAccentColor: () => ({ AppAccentColor: this.AppAccentColor }),
    AppPrimaryColor: () => ({ AppPrimaryColor: this.AppPrimaryColor }),
    BgColor: () => ({ BgColor: this.BgColor }),
    BgHoverColor: () => ({ BgHoverColor: this.BgHoverColor }),
    MainAccent: () => ({ MainAccent: this.MainAccent }),
    MainAccentHover: () => ({ MainAccentHover: this.MainAccentHover }),
    MainLightAccent: () => ({ MainLightAccent: this.MainLightAccent }),
    MainLink: () => ({ MainLink: this.MainLink }),
    MutedTextColor: () => ({ MutedTextColor: this.MutedTextColor }),
    TextColor: () => ({ TextColor: this.TextColor }),
    TextOnAccentHoverColor: () => ({ TextOnAccentHoverColor: this.TextOnAccentHoverColor }),
    attention: () => ({ attention: this.attention }),
    attentionLight: () => ({ attention_light: this.attentionLight }),
    back: () => ({ back: this.back }),
    backDark: () => ({ back_dark: this.backDark }),
    backLight: () => ({ back_light: this.backLight }),
    background: () => ({ background: this.background }),
    brand: () => ({ brand: this.brand }),
    brandDark: () => ({ brand_dark: this.brandDark }),
    brandLight: () => ({ brand_light: this.brandLight }),
    button: () => ({ button: this.button.toJSON() }),
    chatInputBackground: () => ({ chat_input_background: this.chatInputBackground }),
    error: () => ({ error: this.error }),
    errorLight: () => ({ error_light: this.errorLight }),
    font: () => ({ font: this.font.toJSON() }),
    ic: () => ({ ic: this.ic.toJSON() }),
    input: () => ({ input: this.input.toJSON() }),
    message: () => ({ message: this.message.toJSON() }),
    modalBackground: () => ({ modal_background: this.modalBackground }),
    substrateBackground: () => ({ substrate_background: this.substrateBackground }),
    success: () => ({ success: this.success }),
    successLight: () => ({ success_light: this.successLight }),
    switcher: () => ({ switcher: this.switcher.toJSON() }),
    tabBackground: () => ({ tab_background: this.tabBackground }),
    titleBackground: () => ({ title_background: this.titleBackground }),
    webBase: () => ({ web_base: this.webBase.toJSON() }),
    /* eslint-enable camelcase */
  }

  public toJSON (): ThemeJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<ThemeJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface UnreadJSON {
  /* eslint-disable camelcase */
  chats: number;
  messages: number;
  notice_messages: number;
  /* eslint-enable camelcase */
}

export class Unread implements TDProtoClass<Unread> {
  /**
   * Unread message counters
   * @param chats Total chats with unread messages
   * @param messages Total unread messages
   * @param noticeMessages Total unread messages with mentions
   */
  constructor (
    public chats: number,
    public messages: number,
    public noticeMessages: number,
  ) {}

  public static fromJSON (raw: UnreadJSON): Unread {
    return new Unread(
      raw.chats,
      raw.messages,
      raw.notice_messages,
    )
  }

  public mappableFields = [
    'chats',
    'messages',
    'noticeMessages',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    chats: () => ({ chats: this.chats }),
    messages: () => ({ messages: this.messages }),
    noticeMessages: () => ({ notice_messages: this.noticeMessages }),
    /* eslint-enable camelcase */
  }

  public toJSON (): UnreadJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<UnreadJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface UploadJSON {
  /* eslint-disable camelcase */
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
  /* eslint-enable camelcase */
}

export class Upload implements TDProtoClass<Upload> {
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
  constructor (
    public contentType: string,
    public created: ISODateTimeString,
    public name: string,
    public size: number,
    public type: UploadMediaType,
    public uid: string,
    public url: string,
    public animated?: boolean,
    public blurhash?: string,
    public duration?: number,
    public pdfVersion?: PdfVersion,
    public preview?: UploadPreview,
    public processing?: boolean,
  ) {}

  public static fromJSON (raw: UploadJSON): Upload {
    return new Upload(
      raw.content_type,
      raw.created,
      raw.name,
      raw.size,
      raw.type,
      raw.uid,
      raw.url,
      raw.animated,
      raw.blurhash,
      raw.duration,
      raw.pdf_version && PdfVersion.fromJSON(raw.pdf_version),
      raw.preview && UploadPreview.fromJSON(raw.preview),
      raw.processing,
    )
  }

  public mappableFields = [
    'contentType',
    'created',
    'name',
    'size',
    'type',
    'uid',
    'url',
    'animated',
    'blurhash',
    'duration',
    'pdfVersion',
    'preview',
    'processing',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    contentType: () => ({ content_type: this.contentType }),
    created: () => ({ created: this.created }),
    name: () => ({ name: this.name }),
    size: () => ({ size: this.size }),
    type: () => ({ type: this.type }),
    uid: () => ({ uid: this.uid }),
    url: () => ({ url: this.url }),
    animated: () => ({ animated: this.animated }),
    blurhash: () => ({ blurhash: this.blurhash }),
    duration: () => ({ duration: this.duration }),
    pdfVersion: () => ({ pdf_version: this.pdfVersion?.toJSON() }),
    preview: () => ({ preview: this.preview?.toJSON() }),
    processing: () => ({ processing: this.processing }),
    /* eslint-enable camelcase */
  }

  public toJSON (): UploadJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<UploadJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface UploadPreviewJSON {
  /* eslint-disable camelcase */
  height: number;
  url: string;
  url_2x: string;
  width: number;
  /* eslint-enable camelcase */
}

export class UploadPreview implements TDProtoClass<UploadPreview> {
  /**
   * Upload preview
   * @param height Height in pixels
   * @param url Absolute url to image
   * @param url2x Absolute url to high resolution image (retina)
   * @param width Width in pixels
   */
  constructor (
    public height: number,
    public url: string,
    public url2x: string,
    public width: number,
  ) {}

  public static fromJSON (raw: UploadPreviewJSON): UploadPreview {
    return new UploadPreview(
      raw.height,
      raw.url,
      raw.url_2x,
      raw.width,
    )
  }

  public mappableFields = [
    'height',
    'url',
    'url2x',
    'width',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    height: () => ({ height: this.height }),
    url: () => ({ url: this.url }),
    url2x: () => ({ url_2x: this.url2x }),
    width: () => ({ width: this.width }),
    /* eslint-enable camelcase */
  }

  public toJSON (): UploadPreviewJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<UploadPreviewJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface UploadShortMessageJSON {
  /* eslint-disable camelcase */
  message: ShortMessageJSON;
  upload: UploadJSON;
  /* eslint-enable camelcase */
}

export class UploadShortMessage implements TDProtoClass<UploadShortMessage> {
  /**
   * Upload + ShortMessage
   * @param message Short message information
   * @param upload Upload information
   */
  constructor (
    public message: ShortMessage,
    public upload: Upload,
  ) {}

  public static fromJSON (raw: UploadShortMessageJSON): UploadShortMessage {
    return new UploadShortMessage(
      ShortMessage.fromJSON(raw.message),
      Upload.fromJSON(raw.upload),
    )
  }

  public mappableFields = [
    'message',
    'upload',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    message: () => ({ message: this.message.toJSON() }),
    upload: () => ({ upload: this.upload.toJSON() }),
    /* eslint-enable camelcase */
  }

  public toJSON (): UploadShortMessageJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<UploadShortMessageJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface UserJSON {
  /* eslint-disable camelcase */
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
  /* eslint-enable camelcase */
}

export class User implements TDProtoClass<User> {
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
  constructor (
    public altSend: boolean,
    public alwaysSendPushes: boolean,
    public asteriskMention: boolean,
    public hidePushesContent: boolean,
    public icons: IconData,
    public munreadFirst: boolean,
    public quietTimeFinish: string,
    public quietTimeStart: string,
    public timezone: string,
    public unreadFirst: boolean,
    public defaultLang?: string,
    public email?: string,
    public familyName?: string,
    public givenName?: string,
    public patronymic?: string,
    public phone?: string,
  ) {}

  public static fromJSON (raw: UserJSON): User {
    return new User(
      raw.alt_send,
      raw.always_send_pushes,
      raw.asterisk_mention,
      raw.hide_pushes_content,
      IconData.fromJSON(raw.icons),
      raw.munread_first,
      raw.quiet_time_finish,
      raw.quiet_time_start,
      raw.timezone,
      raw.unread_first,
      raw.default_lang,
      raw.email,
      raw.family_name,
      raw.given_name,
      raw.patronymic,
      raw.phone,
    )
  }

  public mappableFields = [
    'altSend',
    'alwaysSendPushes',
    'asteriskMention',
    'hidePushesContent',
    'icons',
    'munreadFirst',
    'quietTimeFinish',
    'quietTimeStart',
    'timezone',
    'unreadFirst',
    'defaultLang',
    'email',
    'familyName',
    'givenName',
    'patronymic',
    'phone',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    altSend: () => ({ alt_send: this.altSend }),
    alwaysSendPushes: () => ({ always_send_pushes: this.alwaysSendPushes }),
    asteriskMention: () => ({ asterisk_mention: this.asteriskMention }),
    hidePushesContent: () => ({ hide_pushes_content: this.hidePushesContent }),
    icons: () => ({ icons: this.icons.toJSON() }),
    munreadFirst: () => ({ munread_first: this.munreadFirst }),
    quietTimeFinish: () => ({ quiet_time_finish: this.quietTimeFinish }),
    quietTimeStart: () => ({ quiet_time_start: this.quietTimeStart }),
    timezone: () => ({ timezone: this.timezone }),
    unreadFirst: () => ({ unread_first: this.unreadFirst }),
    defaultLang: () => ({ default_lang: this.defaultLang }),
    email: () => ({ email: this.email }),
    familyName: () => ({ family_name: this.familyName }),
    givenName: () => ({ given_name: this.givenName }),
    patronymic: () => ({ patronymic: this.patronymic }),
    phone: () => ({ phone: this.phone }),
    /* eslint-enable camelcase */
  }

  public toJSON (): UserJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<UserJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface UserAuthJSON {
  /* eslint-disable camelcase */
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
  /* eslint-enable camelcase */
}

export class UserAuth implements TDProtoClass<UserAuth> {
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
  constructor (
    public created: string,
    public kind: string,
    public uid: string,
    public _age?: number,
    public addr?: string,
    public country?: string,
    public device?: PushDevice,
    public lastAccess?: string,
    public region?: string,
    public userAgent?: string,
  ) {}

  public static fromJSON (raw: UserAuthJSON): UserAuth {
    return new UserAuth(
      raw.created,
      raw.kind,
      raw.uid,
      raw._age,
      raw.addr,
      raw.country,
      raw.device && PushDevice.fromJSON(raw.device),
      raw.last_access,
      raw.region,
      raw.user_agent,
    )
  }

  public mappableFields = [
    'created',
    'kind',
    'uid',
    '_age',
    'addr',
    'country',
    'device',
    'lastAccess',
    'region',
    'userAgent',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    created: () => ({ created: this.created }),
    kind: () => ({ kind: this.kind }),
    uid: () => ({ uid: this.uid }),
    _age: () => ({ _age: this._age }),
    addr: () => ({ addr: this.addr }),
    country: () => ({ country: this.country }),
    device: () => ({ device: this.device?.toJSON() }),
    lastAccess: () => ({ last_access: this.lastAccess }),
    region: () => ({ region: this.region }),
    userAgent: () => ({ user_agent: this.userAgent }),
    /* eslint-enable camelcase */
  }

  public toJSON (): UserAuthJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<UserAuthJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface UserWithMeJSON {
  /* eslint-disable camelcase */
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
  default_lang?: string;
  email?: string;
  family_name?: string;
  given_name?: string;
  inviter?: JID;
  patronymic?: string;
  phone?: string;
  /* eslint-enable camelcase */
}

export class UserWithMe implements TDProtoClass<UserWithMe> {
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
   * @param defaultLang Default language code
   * @param email Email for login
   * @param familyName Family name
   * @param givenName Given name
   * @param inviter Inviter id, if any
   * @param patronymic Patronymic, if any
   * @param phone Phone for login
   */
  constructor (
    public altSend: boolean,
    public alwaysSendPushes: boolean,
    public asteriskMention: boolean,
    public devices: PushDevice[],
    public hidePushesContent: boolean,
    public icons: IconData,
    public munreadFirst: boolean,
    public quietTimeFinish: string,
    public quietTimeStart: string,
    public teams: Team[],
    public timezone: string,
    public unreadFirst: boolean,
    public defaultLang?: string,
    public email?: string,
    public familyName?: string,
    public givenName?: string,
    public inviter?: JID,
    public patronymic?: string,
    public phone?: string,
  ) {}

  public static fromJSON (raw: UserWithMeJSON): UserWithMe {
    return new UserWithMe(
      raw.alt_send,
      raw.always_send_pushes,
      raw.asterisk_mention,
      raw.devices.map(PushDevice.fromJSON),
      raw.hide_pushes_content,
      IconData.fromJSON(raw.icons),
      raw.munread_first,
      raw.quiet_time_finish,
      raw.quiet_time_start,
      raw.teams.map(Team.fromJSON),
      raw.timezone,
      raw.unread_first,
      raw.default_lang,
      raw.email,
      raw.family_name,
      raw.given_name,
      raw.inviter,
      raw.patronymic,
      raw.phone,
    )
  }

  public mappableFields = [
    'altSend',
    'alwaysSendPushes',
    'asteriskMention',
    'devices',
    'hidePushesContent',
    'icons',
    'munreadFirst',
    'quietTimeFinish',
    'quietTimeStart',
    'teams',
    'timezone',
    'unreadFirst',
    'defaultLang',
    'email',
    'familyName',
    'givenName',
    'inviter',
    'patronymic',
    'phone',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    altSend: () => ({ alt_send: this.altSend }),
    alwaysSendPushes: () => ({ always_send_pushes: this.alwaysSendPushes }),
    asteriskMention: () => ({ asterisk_mention: this.asteriskMention }),
    devices: () => ({ devices: this.devices.map(u => u.toJSON()) }),
    hidePushesContent: () => ({ hide_pushes_content: this.hidePushesContent }),
    icons: () => ({ icons: this.icons.toJSON() }),
    munreadFirst: () => ({ munread_first: this.munreadFirst }),
    quietTimeFinish: () => ({ quiet_time_finish: this.quietTimeFinish }),
    quietTimeStart: () => ({ quiet_time_start: this.quietTimeStart }),
    teams: () => ({ teams: this.teams.map(u => u.toJSON()) }),
    timezone: () => ({ timezone: this.timezone }),
    unreadFirst: () => ({ unread_first: this.unreadFirst }),
    defaultLang: () => ({ default_lang: this.defaultLang }),
    email: () => ({ email: this.email }),
    familyName: () => ({ family_name: this.familyName }),
    givenName: () => ({ given_name: this.givenName }),
    inviter: () => ({ inviter: this.inviter }),
    patronymic: () => ({ patronymic: this.patronymic }),
    phone: () => ({ phone: this.phone }),
    /* eslint-enable camelcase */
  }

  public toJSON (): UserWithMeJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<UserWithMeJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface WallpaperJSON {
  /* eslint-disable camelcase */
  key: string;
  name: string;
  url: string;
  /* eslint-enable camelcase */
}

export class Wallpaper implements TDProtoClass<Wallpaper> {
  /**
   * Chat wallpaper
   * @param key Unique identifier
   * @param name Localized description
   * @param url Url to jpg or png
   */
  constructor (
    public key: string,
    public name: string,
    public url: string,
  ) {}

  public static fromJSON (raw: WallpaperJSON): Wallpaper {
    return new Wallpaper(
      raw.key,
      raw.name,
      raw.url,
    )
  }

  public mappableFields = [
    'key',
    'name',
    'url',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    key: () => ({ key: this.key }),
    name: () => ({ name: this.name }),
    url: () => ({ url: this.url }),
    /* eslint-enable camelcase */
  }

  public toJSON (): WallpaperJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<WallpaperJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}

export interface WebBaseJSON {
  /* eslint-disable camelcase */
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
  /* eslint-enable camelcase */
}

export class WebBase implements TDProtoClass<WebBase> {
  /**
   * WebBase base colors for web
   * @param attention DOCUMENTATION MISSING
   * @param attentionLight DOCUMENTATION MISSING
   * @param backLight DOCUMENTATION MISSING
   * @param brand DOCUMENTATION MISSING
   * @param brandDark DOCUMENTATION MISSING
   * @param brandLight DOCUMENTATION MISSING
   * @param error DOCUMENTATION MISSING
   * @param errorLight DOCUMENTATION MISSING
   * @param fade DOCUMENTATION MISSING
   * @param success DOCUMENTATION MISSING
   * @param successLight DOCUMENTATION MISSING
   */
  constructor (
    public attention: RGBColor,
    public attentionLight: RGBColor,
    public backLight: RGBColor,
    public brand: RGBColor,
    public brandDark: RGBColor,
    public brandLight: RGBColor,
    public error: RGBColor,
    public errorLight: RGBColor,
    public fade: RGBColor,
    public success: RGBColor,
    public successLight: RGBColor,
  ) {}

  public static fromJSON (raw: WebBaseJSON): WebBase {
    return new WebBase(
      raw.attention,
      raw.attention_light,
      raw.back_light,
      raw.brand,
      raw.brand_dark,
      raw.brand_light,
      raw.error,
      raw.error_light,
      raw.fade,
      raw.success,
      raw.success_light,
    )
  }

  public mappableFields = [
    'attention',
    'attentionLight',
    'backLight',
    'brand',
    'brandDark',
    'brandLight',
    'error',
    'errorLight',
    'fade',
    'success',
    'successLight',
  ] as const

  readonly #mapper = {
    /* eslint-disable camelcase */
    attention: () => ({ attention: this.attention }),
    attentionLight: () => ({ attention_light: this.attentionLight }),
    backLight: () => ({ back_light: this.backLight }),
    brand: () => ({ brand: this.brand }),
    brandDark: () => ({ brand_dark: this.brandDark }),
    brandLight: () => ({ brand_light: this.brandLight }),
    error: () => ({ error: this.error }),
    errorLight: () => ({ error_light: this.errorLight }),
    fade: () => ({ fade: this.fade }),
    success: () => ({ success: this.success }),
    successLight: () => ({ success_light: this.successLight }),
    /* eslint-enable camelcase */
  }

  public toJSON (): WebBaseJSON
  public toJSON (fields: Array<this['mappableFields'][number]>): Partial<WebBaseJSON>
  public toJSON (fields?: Array<this['mappableFields'][number]>) {
    if (fields && fields.length > 0) {
      return Object.assign({}, ...fields.map(f => this.#mapper[f]()))
    } else {
      return Object.assign({}, ...Object.values(this.#mapper).map(v => v()))
    }
  }
}
