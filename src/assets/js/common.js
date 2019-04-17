export default {
    MillisecondToDate: function(msd) {
        var time = parseFloat(msd) / 1000
        if (null != time && '' != time) {
            if (time > 60 && time < 60 * 60) {
                //分
                time =
                    parseInt(time / 60.0) +
                    ':' +
                    parseInt(
                        (parseFloat(time / 60.0) - parseInt(time / 60.0)) * 60
                    )
            } else if (time >= 60 * 60 && time < 60 * 60 * 24) {
                //时
                time =
                    parseInt(time / 3600.0) +
                    ':' +
                    parseInt(
                        (parseFloat(time / 3600.0) - parseInt(time / 3600.0)) *
                            60
                    ) +
                    ':' +
                    parseInt(
                        (parseFloat(
                            (parseFloat(time / 3600.0) -
                                parseInt(time / 3600.0)) *
                                60
                        ) -
                            parseInt(
                                (parseFloat(time / 3600.0) -
                                    parseInt(time / 3600.0)) *
                                    60
                            )) *
                            60
                    )
            } else {
                //秒
                time = parseInt(time)
            }
        } else {
            time = '0:0:0'
        }
        return time
    }
}
