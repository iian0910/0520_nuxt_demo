# Vue Style Guide

### Priority A 基本寫法
* 元件命名使用 **<font color=red>多個單字</font>** 組合
* 元件內的 data 應使用 **<font color=red>function return</font>** 來回傳值
* 由外部傳進來的 Props 需 **<font color=red>定義類別</font>** ，使接收的元件能判別物件類型
* v-for 一定要帶著 **<font color=red>key</font>**
* v-for / v-if **<font color=red>不能同時</font>** 在同一個標籤內
* 元件自己使用的樣式要在 style 標籤上記得加 **<font color=red>scoped</font>** ，以防渲染到其他元件
* 共用/私用的 function 要區分清楚，可使用 **<font color=red>「$_function_name」</font>** 的方式來做區隔
  
### Priority B 元件/閱讀方面推薦寫法
**【元件建立相關】**
* 每一隻檔案都要有各自的 **<font color=red>「.vue」或「.js」檔</font>** ，利於維護實查找目標檔案
* Component 命名規則建立
  * MyComponent.vue
  * my-component.vue
* 若是在特定的情境下使用的 Component，可架上 **<font color=red>前綴字</font>** 來區分。例：
  * BaseButton.vue
  * BaseTable.vue
  * BaseCard.vue
* 使用「The」前綴字來判別元件的的 **<font color=red>唯一使用性</font>** 
  * TheHeader.vue
  * TheFooter.vue
* 相關元件命名 **<font color=red>耦合度提高</font>** 
  * TodoList.vue
  * TodoListItem.vue
  * TodoListItemButton.vue
* 元件名稱單字排列順序
  * ClearSearchButton (X)
  * SearchButtonClear (V)
* Component 標籤 Close 寫法
  * < MyComponent />
  * < my-component >< /my-component >
* 元件名稱應使用 **<font color=red>完整詞彙</font>** 而避免用縮寫
  * SdSettings.vue (X)
  * StudentDashboardSettings.vue (V)
* Props 命名規則在 Component 內應使用 **<font color=red>camelCase</font>**，在標籤上使用 **<font color=red>kebab-case</font>**
  * props: { 'setText': String }
  * < myComponent set-text="123" />

**【程式碼閱讀相關】**
* 將標籤內的各個屬性 **<font color=red>獨立一行</font>**
* 雖然 {{ }} 內可以計算資料，但還是要把計算的部分 **<font color=red>交給 computed 來執行</font>**，避免程式碼凌亂不易閱讀
* 可以把程式碼 **<font color=red>更細節的拆分</font>**，避免程式碼長長一串
* 標籤內的動態屬性要加上雙誇號 **<font color=red>「＂＂」</font>**
* 標籤內的動態屬性 **<font color=red>寫法要一致</font>**，不應該混用導致閱讀不易
### Priority C 建議
* Component/instance 指令
* Element attribute 指令
* props 內每一個變數或是其他地方設定的 function 之間要 **<font color=red>空一行</font>**
* Vue.component 檔案內多組的 template / script / style **<font color=red>順序要一致</font>**，並且 style **<font color=red>一定要在最後執行</font>**
### Priority D 注意
* 若有寫 v-if/v-else 須設定 **<font color=red>key Value</font>**
* style scoped 應 **<font color=red>避免直接用標籤名稱</font>** 來設定
* Implicit parent-child communication(看不懂)
* 全域的狀態管理應使用 **<font color=red>Vuex</font>**


> 資料來源：<a href="https://vuejs.org/v2/style-guide/#Rule-Categories">Vue Style Guide</a>

> VSCode 套件：<a href="https://code.visualstudio.com/Docs/languages/markdown#_markdown-preview">Markdown Preview Github Styling</a>

