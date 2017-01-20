/**
 * js/index.js - alibhai.co
 * 
 * Licensed under CC-BY 4.0.
 * Copyright (C) 2016 Karim Alibhai.
 */

~ function (app) {
  'use strict'

  var colors = ['#F44336','#E91E63','#9C27B0','#673AB7','#3F51B5','#2196F3','#03A9F4','#00BCD4','#009688','#4CAF50','#8BC34A','#CDDC39','#FFEB3B','#FFC107','#FF9800','#FF5722','#795548','#9E9E9E','#607D8B']

  app.directive('ngLoad', function () {
    return function ($scope, $elm, $attrs) {
      $elm.bind('load', function (evt) {
        evt.preventDefault()
        $scope.$eval($attrs.ngLoad)
      })
    }
  })

  app.directive('ngError', function () {
    return function ($scope, $elm, $attrs) {
      $elm.bind('error', function (evt) {
        evt.preventDefault()
        $scope.$eval($attrs.ngError)
      })
    }
  })

  app.controller('ProjectsCtl', ['$scope', '$http', function ($scope, $http) {
    $scope.projects = []

    var success

    $scope.ready = function (index) {
      var project = document.getElementById('project-' + index)
      var image = project.getElementsByClassName('project-image')[0]

      success = image
      image.style.height = image.offsetWidth + 'px'
      setTimeout(function () { project.classList.add('ready') }, 100)
    }

    $scope.fail = function (index) {
      var load = function () {
        if (!success) return setTimeout(load, 10)

        var project = document.getElementById('project-' + index)
        var image = project.getElementsByClassName('project-image')[0]

        image.style.height = image.style.width = success.offsetWidth + 'px'
        image.style.background = colors[Math.floor( Math.random() * colors.length )]
        project.classList.add('ready')
      }

      load()
    }

    $scope.open = function (project) {
      window.open('https://github.com/karimsa/' + project.name)
    }

    $http.get('https://api.github.com/users/karimsa/repos?sort=updated').then(function (res) {
      res.data.forEach(function (repo) {
        if (repo.fork === false && repo.description) {
          $scope.projects.push({
            name: repo.name,
            description: repo.description
          })
        }
      })
    }, function (error) {
      console.error(error)
    })
  }])
}(angular.module('alibhai.co', ['ngAnimate']))
