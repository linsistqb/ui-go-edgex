
        //1.���ö�ʱ��                                                ʱ�����
        //2.Ϊȫ�����鸳Ĭ��ֵ
        //3.��AJAX��ȡ����
        //4.���������ݸ�ֵ��ȫ������
        //5.if...else�жϣ�������ɫֵ��Χ,�ı�ֽ���ӵ���ɫ

        var parentDOM = document.getElementById("seqiduan");
        var parentDOM1 = document.getElementById("qingqiduan");



        var time =0;
        function fun()
        {
            time += 1000;
            console.log(time);
            var int = self.setInterval("clock()", time);                    //1.���ö�ʱ��
            if(time==10000){
                time=0;
            }
        }

        var array =[];                                                      //2.Ϊȫ�����鸳Ĭ��ֵ
        var p=[];


        function clock() {
            //3.��AJAX��ȡ����
 /*
                $.get("dat.asp"
                ,function(data,status){
                    var obj = JSON.parse(data);
                    array.push(obj);

                    for(i=0;i<90;i++)
                    {
                        p[i]=array[0][i].A;                          //4.���������ݸ�ֵ��ȫ������
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
            //-----------------------------------�ɹ���ȡ ����P ��ֵ-------------------------------------------

            //5.��ȡֽ����,  if...else�жϣ�������ɫֵ��Χ,�ı�ֽ���ӵ���ɫ

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
