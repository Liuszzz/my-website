export default {
    MillisecondToDate: function(msd) {
        var time = parseFloat(msd) / 1000;
        var hour = null;
        var min = null;
        var sec = null;
        if (null != time && '' != time) {
            if (time > 60 && time < 60 * 60) {
                //分
                min = parseInt(time / 60.0);
                sec = parseInt(
                    (parseFloat(time / 60.0) - parseInt(time / 60.0)) * 60
                );
                min = min > 10 ? min : '0' + min;
                sec = sec > 10 ? sec : '0' + sec;
                time = min + ':' + sec;
            } else if (time >= 60 * 60 && time < 60 * 60 * 24) {
                //时
                hour = parseInt(time / 3600.0);
                min = parseInt(
                    (parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60
                );
                min = parseInt(
                    (parseFloat(
                        (parseFloat(time / 3600.0) - parseInt(time / 3600.0)) *
                            60
                    ) -
                        parseInt(
                            (parseFloat(time / 3600.0) -
                                parseInt(time / 3600.0)) *
                                60
                        )) *
                        60
                );
                hour = hour > 10 ? hour : '0' + hour;
                min = min > 10 ? min : '0' + min;
                sec = sec > 10 ? sec : '0' + sec;

                time = hour + ':' + min + ':' + sec;
            } else {
                //秒
                sec = parseInt(time);
                sec = sec > 10 ? sec : '0' + sec;
                time = sec;
            }
        } else {
            time = '00:00:00';
        }
        return time;
    }
};
