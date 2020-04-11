
async function request() {
    let key = APIKeys[Math.floor(Math.random() * APIKeys.length)]
    let req = await fetch(`http://random3465api.glitch.me/api/mrbeastgaming`)
    let res = await req.json().catch(error => notes.innerHTML = "An error occured.")
    document.getElementById("name") = "MrBeast Gaming"
    description.innerHTML = "MrBeast Gaming - Coming Soon SUBSCRIBE OR ELSE"
    count.innerHTML = Math.round(res.estimated)
    notes.innerHTML = "WARNING: This count can behave weirdly due to how it works."
    chart.series[0].addPoint([Date.now(), res.estimated])

}

var chart = new Highcharts.chart({
  chart: {
      renderTo: 'chart',
      type: 'spline',
        zoomType: 'x',
        backgroundColor: 'transparent',
        plotBorderColor: 'transparent'
  },
  title: {
      text: 'Subscriber Graph'
  },
  xAxis: {
      type: 'datetime',
      tickPixelInterval: 500,
        gridLineColor: '#999',
        labels: {
            style: {
                color: '#fff'
            }
        },
        lineColor: '#999',
        minorGridLineColor: '#999',
        tickColor: '#999',
        title: {
            style: {
                color: '#fff'
            }
        }
  },
  yAxis: {
      title: {
          text: ''
      },
        gridLineColor: '#999',
        labels: {
            style: {
                color: '#fff'
            }
        },
        lineColor: '#999',
        minorGridLineColor: '#999',
        tickColor: '#999'
  },

  series: [{
    name: 'Subs',
    marker: { enabled: false },
    color: '#fff',
    lineColor: '#fff'
  }]
});



setInterval(request, 5000)
