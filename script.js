
        // function openSlideMenu() {
        //     document.getElementById('menu').style.width = '250px';
        //     document.getElementById('content').style.marginLeft = '250px';
        // }
        // function closeSlideMenu() {
        //     document.getElementById('menu').style.width = '0';
        //     document.getElementById('content').style.marginLeft = '0';
        // }



        Highcharts.chart('container1', {
            chart: {
                type: 'line',
            },
            title: {
                text: 'Monthly Average Temperature'
            },
            subtitle: {
                text: 'Source: WorldClimate.com'
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                title: {
                    text: 'Temperature (°C)'
                }
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: true
                    },
                    enableMouseTracking: false
                }
            },
            series: [{
                name: 'Tokyo',
                data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
            }, {
                name: 'London',
                data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
            }]
        });









        Highcharts.chart('container', {
            chart: {
                type: 'variablepie',
            },
            title: {
                text: 'Countries compared by population density and total area.'
            },
            tooltip: {
                headerFormat: '',
                pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
                    'Area (square km): <b>{point.y}</b><br/>' +
                    'Population density (people per square km): <b>{point.z}</b><br/>'
            },
            series: [{
                minPointSize: 10,
                innerSize: '20%',
                zMin: 0,
                name: 'countries',
                data: [{
                    name: 'Spain',
                    y: 505370,
                    z: 92.9
                }, {
                    name: 'France',
                    y: 551500,
                    z: 118.7
                }, {
                    name: 'Poland',
                    y: 312685,
                    z: 124.6
                }, {
                    name: 'Czech Republic',
                    y: 78867,
                    z: 137.5
                }, {
                    name: 'Italy',
                    y: 301340,
                    z: 201.8
                }, {
                    name: 'Switzerland',
                    y: 41277,
                    z: 214.5
                }, {
                    name: 'Germany',
                    y: 357022,
                    z: 235.6
                }]
            }]
        });