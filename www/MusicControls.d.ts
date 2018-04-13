declare module MediaControls {
  interface MediaControls {
    /**
     * @description Creates the notification controls
     */
    create (options: CreateOptions, onSuccess: SuccessCallback, onError: ErrorCallback): void

    /**
     * @description Destroys the notification controls
     */
    destroy (onSuccess: SuccessCallback, onError: ErrorCallback)

    /**
     * @description Registers an event listener (only supports one listener). NOTE: this does*NOT* start listening for events!
     */
    subscribe (listener: (ev: SubscribeEvent) => void): void

    /**
     * @description Starts listening for events on all subscribed listeners
     */
    listen (): void

    /**
     * @description Updates the controls to correctly display play/pause
     */
    updateIsPlaying (playing: boolean, onSuccess: SuccessCallback, onError: ErrorCallback): void

    /**
     * @description Updates whether or not the controls can be dismissed
     */
    updateDismissable (dismissable: boolean, onSuccess: SuccessCallback, onError: ErrorCallback): void
  }

  interface CreateOptions {

    /**
     * @default: ''
     */
    track?: string

    /**
     * @default: ''
     */
    artist?: string

    /**
     * @default: ''
     */
    cover?: string

    /**
     * @default: true
     */
    isPlaying?: boolean

    /**
     * @default: false
     */
    dismissable?: boolean

    /**
     * @default: true
     */
    hasPrev?: boolean

    /**
     * @default: true
     */
    hasNext?: boolean

    /**
     * @default: false
     */
    hasClose?: boolean

    /**
     * @description iOS only
     * @default: ''
     */
    album?: string

    /**
     * @description iOS only
     * @default: 0
     */
    duration?: number

    /**
     * @description iOS only
     * @default: 0
     */
    elapsed?: number

    /**
     * @description iOS only
     * @default: false
     */
    hasSkipForward?: boolean

    /**
     * @description iOS only
     * @default: false
     */
    hasSkipBackward?: boolean

    /**
     * @description iOS only
     * @default: 0
     */
    skipForwardInterval?: number

    /**
     * @description iOS only
     * @default: 0
     */
    skipBackwardInterval?: number

    /**
     * @description iOS only
     * @default: false
     */
    hasScrubbing?: boolean

    /**
     * @description Android only
     * @default: ''
     */
    ticker?: string

    /**
     * @description Android only
     * @default: android.R.drawable.ic_media_play
     */
    playIcon?: string

    /**
     * @description Android only
     * @default: android.R.drawable.ic_media_pause
     */
    pauseIcon?: string

    /**
     * @description Android only
     * @default: android.R.drawable.ic_media_previous
     */
    prevIcon?: string

    /**
     * @description Android only
     * @default: android.R.drawable.ic_media_next
     */
    nextIcon?: string

    /**
     * @description Android only
     * @default: android.R.drawable.ic_menu_close_clear_cancel
     */
    closeIcon?: string

    /**
     * @description Android only
     * @default: android.R.drawable.ic_media_play | android.R.drawable.ic_media_pause
     */
    notificationIcon?: string
  }

  type SubscribeEventMessage =
    'music-controls-next' |
    'music-controls-previous' |
    'music-controls-pause' |
    'music-controls-play' |
    'music-controls-destroy' |
    /** iOS only
     */
    'music-controls-toggle-play-pause' |
    'music-controls-seek-to' |
    /** Android only
     */
    'music-controls-media-button' |
    'music-controls-headset-unplugged' |
    'music-controls-headset-plugged'

  interface SubscribeEvent {
    message: SubscribeEventMessage
    position?: number
  }

  interface SuccessCallback {
    (): void
  }

  interface ErrorCallback {
    (error: any): void
  }
}
