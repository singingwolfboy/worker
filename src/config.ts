/**
 * IDLE_DELAY: This is how long to wait between polling for jobs.
 *
 * Note: this does NOT need to be short, because we use LISTEN/NOTIFY to be
 * notified when new jobs are added - this is just used in the case where
 * LISTEN/NOTIFY fails for whatever reason.
 */
export const IDLE_DELAY = 2000;

/**
 * How many errors in a row can we get fetching a job before we raise a higher
 * exception?
 */
export const MAX_CONTIGUOUS_ERRORS = 10;
