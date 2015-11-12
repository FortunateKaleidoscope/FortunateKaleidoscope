module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: [
        // Add filespec list here
        'Gruntfile.js', 'client/**/*.js', 'server/**/*.js'
        // find all files inside views
      ],
      options: {
        force: 'true',
        jshintrc: '.jshintrc'
      }
    },
    nodemon: {
      dev: {
        script: 'server/index.js'
      }
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/**/*.js']
      }
    }
  });

  // Load npm tasks
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-nodemon');

  // Default task(s).
  grunt.registerTask('default', [
    'jshint',
    'mochaTest',
    'run'
  ]);
  grunt.registerTask('run', ['nodemon'])

};
