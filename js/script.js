$(document).ready(function () {
  var chart = new JSC.Chart("chartDiv", {
    type: "line", // line spline, line step
    targetElement: 'cc',
    height: 320,
    defaultSeriesType: 'column',
    defaultPoint_marker_type: "circle",
    defaultSeries_firstPoint: { label_text: "%seriesName" }, // coloca o nome logo acima da linha
    yAxisLabelText: 'Units Sold',
    xAxisLabelText: 'Quarters',
    titleLabelText: 'Acme Tool Sales Total: %sum Best Seller: %maxSeriesName',
    defaultSeriesLegendEntryText: '%name  %sum',
    defaultSeries: { legendEntry: { text: '%name  %sum' } },
    yAxis_label_text: "Count",
    legend_position: "bottom right",
    xAxis: {
      crosshair_enabled: true,
      scale_type: "time"
    },
    defaultAxis: {
      // defaultTick_gridLine_visible: false, // tira a grid e o fundo do gráfico fica todo branco
      alternateGridFill: "none"
    },
    toolbar_visible: true,
    title_label_text: "<span class=\"txt\" style=\"font-size: 14px; font-weight: bold;\">" + getDateTime() + "</span>",
    padding: 50,
    series: getSeriesLine()
  });

  var chart1 = JSC.chart("chartDiv1", {
    type: "variwide",
    yAxis: {
      scale_type: "stackedFull",
      label_text: "Units Sold"
    },
    xAxis_label_text: "Vendors",
    legend_position: 'bottom',
    title_label_text: "Worldwide Smartphone Sales to End Users by Vendor",
    defaultPoint_tooltip: "<b>%name %seriesName</b><br>Units Sold: %yValue<br>Market Share: %zValue%",
    toolbar_visible: true,
    title_label_text: "<span class=\"txt\" style=\"font-size: 14px; font-weight: bold;\">" + getDateTime() + "</span>",
    series: getSeriesVariwide()
  });

  setInterval(function () {
    chart.options({
      title_label_text: "<span class=\"txt\" style=\"font-size: 14px; font-weight: bold;\">" + getDateTime() + "</span>",
      series: getSeriesLine()
    });
    chart1.options({
      title_label_text: "<span class=\"txt\" style=\"font-size: 14px; font-weight: bold;\">" + getDateTime() + "</span>",
      series: getSeriesVariwide()
    });
    // chart.options({  });
    // chart.series(0).options({
    //   line: {
    //     dashStyle: 'dot',
    //     caps: {
    //       size: '500%',
    //       end_type: 'arrow',
    //       start_type: 'circle'
    //     }
    //   },
    //   defaultPoint_marker_visible: false
    // });
  }, 5000);

});

function getDateTime() {
  var dt = new Date();
  return dt.toLocaleString();
}

function getSeriesLine() {
  var series = [
    {
      name: 'Saw',
      line_width: 3,
      defaultPoint_marker: {
        fill: "white",
        size: 12,
        outline: { width: 3 }
      },
      points: getPoints(0)
    },
    {
      name: 'Hammer',
      line_width: 3,
      defaultPoint_marker: {
        size: 12,
        outline: { width: 3, color: "white" }
      },
      points: getPoints(1)
    }
  ];
  return series;
}

function getSeriesVariwide() {
  var series = [
    {
      name: "4Q14",
      points: [
        { name: "Samsung", y: 73031, z: 19.9 },
        { name: "Apple", y: 74831, z: 20.4 },
        { name: "Huawei", y: 21038, z: 5.7 },
        { name: "Xiaomi", y: 18581, z: 5.1 }
      ]
    },
    {
      name: "4Q15",
      points: [
        { name: "Samsung", y: 83437, z: 20.7 },
        { name: "Apple", y: 71525, z: 17.7 },
        { name: "Huawei", y: 32116, z: 8 },
        { name: "Xiaomi", y: 18216, z: 4.5 }
      ]
    }
  ];
  return series;
}

function getPoints(i) {
  var extraY = i * 20;
  var points = [
    { x: "1/1/2020", y: 65 },
    { x: "2/1/2020", y: 67 },
    { x: "3/1/2020", y: 72 },
    { x: "4/1/2020", y: 66 },
    { x: "5/1/2020", y: 84 },
    { x: "6/1/2020", y: 74 },
    { x: "7/1/2020", y: 72 },
    { x: "8/1/2020", y: 84 }
  ];
  return points.map(function (p) {
    return { x: p.x, y: p.y + extraY };
  });
}