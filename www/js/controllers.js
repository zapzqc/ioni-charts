angular.module('starter.controllers', [])

    .controller('DashCtrl', function ($scope) {
        $scope.chartConfig = {

            //This is not a highcharts object. It just looks a little like one!
            options: {
                //This is the Main Highcharts chart config. Any Highchart options are valid here.
                //will be ovverriden by values specified below.
                chart: {
                    type: 'column',
                    options3d: {
                        enabled: true,
                        alpha: 15,
                        beta: 15,
                        viewDistance: 25,
                        depth: 40
                    },
                    marginTop: 80,
                    marginRight: 40
                }
            },
            //The below properties are watched separately for changes.

            title: {
                text: '年终奖'
            },

            xAxis: {
                categories: ['王振强', '余晓辉', '安建华', '戴丽欣', '田伟']
            },

            yAxis: {
                allowDecimals: false,
                min: 0,
                title: {
                    text: '奖金（万元）'
                }
            },

            tooltip: {
                headerFormat: '<b>{point.key}</b><br>',
                pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} / {point.stackTotal}'
            },

            plotOptions: {
                column: {
                    stacking: 'normal',
                    depth: 40
                }
            },

            series: [{
                name: '2011',
                data: [5, 3, 4, 7, 2],
                stack: 'male'
            }, {
                name: '2012',
                data: [3, 4, 4, 2, 5],
                stack: 'male'
            }, {
                name: '2013',
                data: [2, 5, 6, 2, 1],
                stack: 'female'
            }, {
                name: '2014',
                data: [3, 0, 4, 4, 3],
                stack: 'female'
            }]
        };
    })

    .controller('ChatsCtrl', function ($scope) {
        $scope.chartConfig = {
            options: {
                chart: {
                    type: 'pie',
                    options3d: {
                        enabled: true,
                        alpha: 45,
                        beta: 0
                    }
                }
            },
            title: {
                text: '2014年终奖'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    depth: 35,
                    dataLabels: {
                        enabled: true,
                        format: '{point.name}'
                    }
                }
            },
            series: [{
                type: 'pie',
                name: '比率',
                data: [
                    ['何**', 45.0],
                    ['王**', 36.8],
                    {
                        name: '贾*',
                        y: 2.8,
                        sliced: true,
                        selected: true
                    },
                    ['余**', 2.5],
                    ['安**', 2.2],
                    ['戴**', 3.0],
                    ['赵**', 1.0],
                    ['张**', 1.0],
                    ['田**', 2.7],
                    ['郑**', 3.0]
                ]
            }]
        }
    })

    .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
        $scope.chat = Chats.get($stateParams.chatId);
    })

    .controller('FriendsCtrl', function ($scope, Friends) {
        $scope.friends = Friends.all();
    })

    .controller('FriendDetailCtrl', function ($scope, $stateParams, Friends) {
        $scope.friend = Friends.get($stateParams.friendId);
    })

    .controller('AccountCtrl', function ($scope) {
        $scope.settings = {
            enableFriends: true
        };
    });
