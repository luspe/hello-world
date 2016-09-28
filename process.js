Framework7.prototype.plugins.math = function (app, params) {
    if (!params) return;

    var stat = function(){
      'use strict';
      return {
            mean:function(num){
              var y = 0;
              $.each(num,function(a,b){
                y = y + b;
              })
              return y/num.length;
            },
        median:function (num){
                num.sort(function(a,b){return b-a});
                var median= 0;
                var num2 = num.length;
                if (num2 % 2 == 0) {
                median = ( num [num2 / 2-1] + num [num2/2]/2);
                } else {
                median = num [(num2 -1) /2];
                }
                return median;
        },
            mode: function(num){
                var modes = [],
                count = [],
                I,
                number,
                maxLength = 0;
                for (I = 0; I < num.length; I += 1) {
                    number = num[I];
                    count[number] = (count[number] || 0) + 1;
                    if (count[number] > maxLength) {
                        maxLength = count[number];
                    }
                }
                for (I in count) if (count.hasOwnProperty(I)) {
                    if (count[I] === maxLength) {
                        modes.push(Number(I));
                    }
                }
                return modes;
        }
    }
}();
    return {
        hooks: {
            appInit: function () {
                $$("#btn_calc").click(function(){
                    var input = $$("#input_ages").val().split(',');
                    $$.each(input,function(a,b){
                        input[a] = parseInt(input[a]);
                    });
               
                    $$("#statSolutions").html("Mean: "+stat.mean(input)+"<br/>Median: "+stat.median(input)+"<br/>Mode: "+stat.mode(input));



                });
            }
        }
    };
};

var $$ = Dom7;

var app = new Framework7({
  material:true,
  math:true
});


