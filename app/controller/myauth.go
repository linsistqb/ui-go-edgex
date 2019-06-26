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
/*
	"github.com/edgexfoundry/edgex-ui-go/app/common"
	"github.com/edgexfoundry/edgex-ui-go/app/domain"
	"github.com/edgexfoundry/edgex-ui-go/app/repository"
*/
	"github.com/edgexfoundry/edgex-ui-go/app/repository/mongo"
)

const (
//	UserNameKey = "name"
//	PasswordKey = "password"
)

func Debug(w http.ResponseWriter, r *http.Request){
    log.Println("Dbug  !!!!!!!!!!!!!!!!!!")
    var	cleanweightResult []map[string]interface{}
    cleanweightResult = mongo.FindDB("test","cleanweight")
   // fmt.Println(cleanweightResult)

    var	colorweightResult []map[string]interface{}
    colorweightResult = mongo.FindDB("test","colorweight")
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

//  fmt.Println(mapString[0]["BS11_5"])
 
     for key2,value2 := range colorResult{
          strkey2 := fmt.Sprintf("%v",key2)
          strvalue2 := fmt.Sprintf("%v",value2)
          mapString[strkey2]= strvalue2
      }

    fmt.Println(mapString)
/*
    resultOne := make(map[string]interface{})
    resultOne = result[0]
    str, err := json.Marshal(resultOne)
    if err != nil {
        fmt.Println(err)
    }
    fmt.Println(str)
*/
//    fmt.Println(result._id);

    result1, _ := json.Marshal(&mapString)
//    result2, _ := json.Marshal(&colorweightResult)
    //fmt.Println(result1)
    w.Write(result1)
   // w.Write(result2)
   // fmt.Println(result[0]["_id"])

/*
    for k,v := range result{

    dataJson := make(v)
    str,err := json.Marshal(dataJson)
    if err != nil {
        fmt.Println(err)
    }
	
    fmt.Println(v)
    fmt.Println(k)
}

    fmt.Println("********************")
    fmt.Println(dataJson)
    w.Write([]byte(dataJson))
    fmt.Println(result[0])
*/
   // w.Write([]byte(result[0]["BS11_2"]))
}
/*
func Login(w http.ResponseWriter, r *http.Request) {
	defer r.Body.Close()

	m := make(map[string]string)
	err := json.NewDecoder(r.Body).Decode(&m)
	if err != nil {
		http.Error(w, err.Error(), http.StatusServiceUnavailable)
		return
	}
	name := m[UserNameKey]
	pwd := m[PasswordKey]

	u := domain.User{Name: name, Password: pwd}
	ok, err := repository.GetUserRepos().ExistsUser(u)

	if err != nil {
		log.Println("User: " + name + " login failed : " + err.Error())
		w.Write([]byte("log failed : " + err.Error()))
		return
	}

	if ok {
		token := common.GetMd5String(name)
		common.TokenCache[token] = u
		log.Println("User: " + name + " login.")
		w.Write([]byte(token))
	}
}

func Logout(w http.ResponseWriter, r *http.Request) {
	token := r.Header.Get(common.SessionTokenKey)
	delete(common.TokenCache, token)
}
*/

