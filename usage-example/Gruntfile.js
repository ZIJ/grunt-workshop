module.exports = function(grunt){

    var sources = 'src/*.js';

    grunt.initConfig({
        jshint: {
            all: ['Gruntfile.js', sources]
        },
        concat: {
            dist: {
                src: sources,
                dest: 'main.js'
            }
        },
        uglify: {
            all: {
                files: {
                    'main.min.js': ['main.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['jshint', 'concat', 'uglify']);

};