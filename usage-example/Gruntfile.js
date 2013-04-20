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
        },
        myMultiTask: {
            first: 'Single string',
            second: [1, 2, 3]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['jshint', 'concat', 'uglify']);

    grunt.registerTask('asyncTask', function() {
        var done = this.async();
        console.time('Completed in ');
        setTimeout(function(){
            console.timeEnd('Completed in ');
            done();
        }, 1000);
    });


};