module.exports = function(grunt) {

  // Project configuration.
    grunt.initConfig({
      responsive_images: {
        myTask: {
          options: {
            sizes: [{
              width: 320,
              height: 240
            },{
              name: 'large',
              width: 640
            },{
              name: "large",
              width: 1024,
              suffix: "_x2",
              quality: 60
            },{
              name: "icon",
              width: 32
            }]
          },
          files: [{
            expand: true,
            src: ['img/**.{jpg,gif,png}'],
            cwd: '.',
            dest: 'resized/'
          }]
        }
      },
    })
  grunt.loadNpmTasks('grunt-responsive-images');

  // Default task(s).
  grunt.registerTask('default', ['responsive_images']);

};
