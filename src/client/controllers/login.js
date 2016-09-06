app.controller('loginController', ['$http', '$scope', '$state', '$localStorage', function($http, $scope, $state, $localStorage) {
  $scope.username;
  $scope.password;
  $scope.loginSubmit = (form) => {
    if (form.$valid) {
      $http({
        method: 'POST',
        url: '/login',
        data: {
          username: $scope.username,
          password: $scope.password
        }
      }).then(result => {

        console.log('Login result: ', result);

        /* if username and password are correct,
           save to local storage and redirect to '/main' */
        $localStorage.username = $scope.username;
        $state.go('main');

      }).catch(err => {
        console.log('Error signing in: ', err);
      })
    }
  }
}])