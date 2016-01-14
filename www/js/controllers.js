angular.module('starter.controllers', [])

.controller('AppCtrl', function ($scope, $ionicModal, $location, $timeout) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
        $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function () {
        $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
        console.log('Doing login', $scope.loginData);

        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function () {
            $scope.closeLogin();
        }, 1000);
    };

    $scope.goCart = function () {
        $location.path("/app/order");
    }

    $scope.reset = function () {
        var id = Math.floor((Math.random() * 100) + 1);
        $location.path("/app/home/" + id);
    }
})

.controller('homeCtrl', function ($scope, $window, $location, $cordovaCamera, $ionicLoading, $cordovaMedia, $ionicPopup) {

    $scope.result = "";
    $scope.var1 = Math.floor((Math.random() * 10));
    $scope.var2 = "";
    $scope.imgresult = "img/plus.png";
    $scope.sign = "img/plus.png";
    var img = document.getElementById("imgResult");
    var sign = Math.floor((Math.random() * 10) + 1);

    if ((sign % 2) == 0) {
        $scope.sign = "img/plus.png";
        $scope.var2 = Math.floor((Math.random() * 10));
    }
    else {
        $scope.sign = "img/minus.png";
        $scope.var2 = Math.floor(Math.random() * parseInt($scope.var1));
    }

    // pop up

    $scope.showPopup = function (templateUrl, mp3) {
        $scope.data = {};
        // add media
        var media = $cordovaMedia.newMedia(mp3);
        media.play();
        // An elaborate, custom popup
        var myPopup = $ionicPopup.show({
            templateUrl: templateUrl,
            scope: $scope,
            buttons: [
              {
                  text: '<b>Làm lại</b>',
                  type: 'button-assertive',
                  onTap: function (e) {
                      media.stop();
                  }
              },
              {
                  text: '<b>Làm mới</b>',
                  type: 'button-positive',
                  onTap: function (e) {
                      $scope.Reset();
                      media.stop();
                  }
              }
            ]
        });
    }

    $scope.Add = function (value) {
        img.style.display = "none";
        if ($scope.result == "")
            $scope.result = value;
        else {
            if ($scope.result.toString().length < 2)
                $scope.result = $scope.result + "" + value;
        }
    }

    $scope.Remove = function () {
        if ($scope.result.toString().length == 1) {
            $scope.result = "";
            img.style.display = "block";
        }
        else if ($scope.result.toString().length == 2) {
            $scope.result = $scope.result.toString()[0];
        }
    }

    $scope.Reset = function () {
        $scope.result = "";
        $scope.var1 = Math.floor((Math.random() * 10));
        $scope.var2 = "";
        $scope.imgresult = "img/plus.png";
        $scope.sign = "img/plus.png";
        var img = document.getElementById("imgResult");
        var sign = Math.floor((Math.random() * 10) + 1);

        if ((sign % 2) == 0) {
            $scope.sign = "img/plus.png";
            $scope.var2 = Math.floor((Math.random() * 10));
        }
        else {
            $scope.sign = "img/minus.png";
            $scope.var2 = Math.floor(Math.random() * parseInt($scope.var1));
        }

        img.style.display = "block";
    }

    $scope.OK = function () {
        if ($scope.sign == "img/plus.png") {
            if ($scope.result == parseInt($scope.var1) + parseInt($scope.var2)) {
                $scope.showPopup("templates/winpopup.html", "http://c34.vdc.nixcdn.com/b93d1a7a1354ef910ba737014cccbbf7/56974d5f/NhacCuaTui233/TiengVoTay-DangCapNhat_49xap.mp3");
            }
            else {
                $scope.showPopup("templates/wrongpopup.html", "http://www.oxfordlearnersdictionaries.com/media/english/us_pron/w/wro/wrong/wrong__us_1.mp3");
            }
        }
        else {
            if ($scope.result == parseInt($scope.var1) - parseInt($scope.var2)) {
                $scope.showPopup("templates/winpopup.html", "http://c34.vdc.nixcdn.com/b93d1a7a1354ef910ba737014cccbbf7/56974d5f/NhacCuaTui233/TiengVoTay-DangCapNhat_49xap.mp3");
            }
            else {
                $scope.showPopup("templates/wrongpopup.html", "http://www.oxfordlearnersdictionaries.com/media/english/us_pron/w/wro/wrong/wrong__us_1.mp3");
            }
        }
    }
})

.controller('matheduCtrl', function ($scope, $window, $location, $ionicLoading, $cordovaMedia, $ionicPopup) {
    var arrImg = [];
    for (i = 1; i <= 34; i++) {
        arrImg.push("img/edu2/" + i + ".png");
    }

    // lay random anh
    var imgIndex = Math.floor((Math.random() * arrImg.length));
    $scope.img = arrImg[imgIndex];
    $scope.array1 = [];
    $scope.array2 = [];
    $scope.result = "";

    // add vao mang
    $scope.row1 = Math.floor((Math.random() * 10));
    if ($scope.row1 == 0) $scope.row1 = $scope.row1 + 1;
    if ($scope.row1 == 10) $scope.row1 = $scope.row1 - 1;

    console.log("row:" + $scope.row1);
    if ($scope.row1 > 5) {
        var length1 = Math.floor($scope.row1 / 2);
        var length2 = $scope.row1 - length1;
        console.log("length1: " + length1);
        console.log("length2: " + length2);
        for (i = 0; i < length1; i++) {
            $scope.array1.push(i);
        }

        for (j = 0; j < length2; j++) {
            $scope.array2.push(j);
        }        
    }
    else {
        for (i = 0; i < $scope.row1; i++) {
            $scope.array1.push(i);
        }
    }

    $scope.Add = function (value) {
        if ($scope.row1 == value) {
            $scope.showPopup("templates/winpopup.html", "http://c34.vdc.nixcdn.com/b93d1a7a1354ef910ba737014cccbbf7/56974d5f/NhacCuaTui233/TiengVoTay-DangCapNhat_49xap.mp3");
        }
        else {
            $scope.showPopup("templates/wrongpopup.html", "http://www.oxfordlearnersdictionaries.com/media/english/us_pron/w/wro/wrong/wrong__us_1.mp3");
        }
    }

    $scope.Reset = function () {
        // lay random anh
        var imgIndex = Math.floor((Math.random() * arrImg.length));
        $scope.img = arrImg[imgIndex];
        $scope.array1 = [];
        $scope.array2 = [];
        $scope.result = "";

        // add vao mang
        $scope.row1 = Math.floor((Math.random() * 10));
        if ($scope.row1 == 0) $scope.row1 = $scope.row1 + 1;
        if ($scope.row1 == 10) $scope.row1 = $scope.row1 - 1;

        console.log("row:" + $scope.row1);
        if ($scope.row1 > 5) {
            var length1 = Math.floor($scope.row1 / 2);
            var length2 = $scope.row1 - length1;
            console.log("length1: " + length1);
            console.log("length2: " + length2);
            for (i = 0; i < length1; i++) {
                $scope.array1.push(i);
            }

            for (j = 0; j < length2; j++) {
                $scope.array2.push(j);
            }
        }
        else {
            for (i = 0; i < $scope.row1; i++) {
                $scope.array1.push(i);
            }
        }
    }

    $scope.showPopup = function (templateUrl, mp3) {
        $scope.data = {};
        // add media
        var media = $cordovaMedia.newMedia(mp3);
        media.play();
        // An elaborate, custom popup
        var myPopup = $ionicPopup.show({
            templateUrl: templateUrl,
            scope: $scope,
            buttons: [
              {
                  text: '<b>Làm lại</b>',
                  type: 'button-assertive',
                  onTap: function (e) {
                      media.stop();
                  }
              },
              {
                  text: '<b>Làm mới</b>',
                  type: 'button-positive',
                  onTap: function (e) {
                      $scope.Reset();
                      media.stop();
                  }
              }
            ]
        });
    }
})