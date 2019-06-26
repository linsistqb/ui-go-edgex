
        //1.设置定时器                                                时间可设
        //2.为全局数组赋默认值
        //3.从AJAX获取数据
        //4.服务器数据赋值给全局数组
        //5.if...else判断，根据颜色值范围,改变纸盒子的颜色

        var parentDOM = document.getElementById("seqiduan");
        var parentDOM1 = document.getElementById("qingqiduan");



        var time =0;
        function fun()
        {
            time += 1000;
            console.log(time);
            var int = self.setInterval("clock()", time);                    //1.设置定时器
            if(time==10000){
                time=0;
            }
        }

        var array =[];                                                      //2.为全局数组赋默认值
        var p=[];


        function clock() {
            //3.从AJAX获取数据
 /*
                $.get("dat.asp"
                ,function(data,status){
                    var obj = JSON.parse(data);
                    array.push(obj);

                    for(i=0;i<90;i++)
                    {
                        p[i]=array[0][i].A;                          //4.服务器数据赋值给全局数组
                    }
                });
*/
            $.ajax({
                url: '/api/v1/myauth/debug',
                type: 'GET',
                success: function (data) {
                    console.log(data);
		    var obj = JSON.parse(data);
		    console.log(obj)
		    console.log(obj.BS11_2)
                }
            });

            for(i = 0;i < 90; i++)
            {
                p[i] = 250;
            }
            //-----------------------------------成功获取 数组P 的值-------------------------------------------

            //5.获取纸盒子,  if...else判断，根据颜色值范围,改变纸盒子的颜色

                for (i=0;i<42;i++)
                {
                    var testTarget1 = parentDOM.getElementsByClassName("color")[i];     //seqiduan
                    p[i]+= Math.ceil(Math.random()*40);
                    if (p[i] <= 235)
                    {

                        testTarget1.style.backgroundColor = "green";    // green
                    }
                    else if (p[i]   <= 255)
                    {
                        testTarget1.style.backgroundColor = "blue";     //blue
                    }
                    else  if ( p[i]  <= 275)
                    {
                        testTarget1.style.backgroundColor = "yellow";   //yellow;
                        testTarget1.style.color = "black";
                    }
                        else if (p[i]   <= 280)
                        {
                            testTarget1.style.backgroundColor = "orange";   //orange;
                        }
                        else if (p[i]   <= 310)
                        {
                            testTarget1.style.backgroundColor = "red";   //orange;
                        }
                    }

                var y =0;
                for(i=41;i<90;i++)
                {
                    //console.log("sssss");
                   // console.log(y);
                   // console.log("sssdsffefewfew");
                    var testTarget1_1 = parentDOM1.getElementsByClassName("color")[y];
                    p[i] += Math.ceil(Math.random() * 40);
                    if (p[i] <= 235) {
                        testTarget1_1.style.backgroundColor = "green";        // green

                    } else if (p[i] <= 255) {
                        testTarget1_1.style.backgroundColor = "blue";         //blue

                    } else if (p[i] <= 275) {
                        testTarget1_1.style.backgroundColor = "yellow";       //yellow;
                        testTarget1_1.style.color = "black";
                    } else if (p[i] <= 280) {
                        testTarget1_1.style.backgroundColor = "orange";       //orange;

                    } else if (p[i] <= 310) {
                        testTarget1_1.style.backgroundColor = "red";          //orange;
                    }
                    y++;
                }
          //  }  */

            /*
             for (var q=0;q<30;q++)
             {     console.log("heekoi woi");
                 console.log(t[q]);
                 console.log("sssdsds");
                 var testTarget1_1 = parentDOM1.getElementsByClassName("color")[q];
                 t[q] += Math.ceil(Math.random() * 40);
                 if (t[q] <= 235) {
                     testTarget1_1.style.backgroundColor = "green";        // green

                 } else if (t[q] <= 255) {
                     testTarget1_1.style.backgroundColor = "blue";         //blue

                 } else if (t[q] <= 275) {
                     testTarget1_1.style.backgroundColor = "yellow";       //yellow;
                     testTarget1_1.style.color = "black";
                 } else if (t[q] <= 280) {
                     testTarget1_1.style.backgroundColor = "orange";       //orange;

                 } else if (t[q] <= 310) {
                     testTarget1_1.style.backgroundColor = "red";          //orange;
                 }
             } */
        }
