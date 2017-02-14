/**
 * Created by Uncle Charlie, 2017/02/13
 */

export default function singleTaskKeeper(func, wait, ctx, immediate = true) {
  let timeoutRefId;
  let args;
  let context;
  let timestamp;
  let result;

  const later = () => {
    const last = timestampNow() - timestamp;

    if (last < wait && last >= 0) {
      timeoutRefId = setTimeout(later, wait - last);
    } else {
      timeoutRefId = null;
      if (!immediate) {
        result = func.apply(context, args);
        if (!timeoutRefId) context = args = null;
      }
    }
  };

  return () => {
    context = ctx || this;
    // eslint-disable-next-line prefer-rest-params
    args = arguments;
    timestamp = timestampNow();
    const callNow = immediate && !timeoutRefId;
    if (!timeoutRefId) timeoutRefId = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };
}

function timestampNow() {
  return Date.now()
}