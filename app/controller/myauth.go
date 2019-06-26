/*******************************************************************************
 * Copyright © 2017-2018 VMware, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 *
 * @author: Huaqiao Zhang, <huaqiaoz@vmware.com>
 *******************************************************************************/

package controller

import (
	"encoding/json"
    	"fmt"
	"log"
	"net/http"

	"github.com/edgexfoundry/edgex-ui-go/app/repository/mongo"
)



func Debug(w http.ResponseWriter, r *http.Request){
    
    log.Println("Dbug  !!!!!!!!!!!!!!!!!!")
    var	cleanweightResult []map[string]interface{}
    cleanweightResult = mongo.FindWeightDB("test","cleanweight")
   // fmt.Println(cleanweightResult)

    var	colorweightResult []map[string]interface{}
    colorweightResult = mongo.FindWeightDB("test","colorweight")
 //   fmt.Println(colorweightResult)
 
 
    cleanResult := make(map[string]interface{})
    cleanResult = cleanweightResult[0]
 
    mapString := make(map[string]string)
    for key,value := range cleanResult{
	strkey := fmt.Sprintf("%v",key)
	strvalue := fmt.Sprintf("%v",value)
	mapString[strkey]= strvalue
    }

     colorResult := make(map[string]interface{})
     colorResult = colorweightResult[0]
     
     for key2,value2 := range colorResult{
          strkey2 := fmt.Sprintf("%v",key2)
          strvalue2 := fmt.Sprintf("%v",value2)
          mapString[strkey2]= strvalue2
      }

    fmt.Println(mapString)


    result, _ := json.Marshal(&mapString)

    w.Write(result)

}



