https://blog.techbridge.cc/2018/10/13/pwa-in-action/

https://www.itread01.com/content/1546110677.html


不知有無聽過PWA(Progressive Web App)技術？若聽過就忽略以下介紹

這技術可以將網頁成功安裝在手機上並且看起來、操作起來跟 Native App 沒兩樣。
於電腦上
當Browser(此技術是google開發，所以用chrome相容性最好)載入此技術開發的網頁，會在chrome自訂及管理的清單中看到安裝xxx(=手機安裝App)，安裝好後會在桌面上看到圖示，點進去便是該網頁，但完全沒有位址列等資訊，看起像極手機App。
也可以解除安裝
若將程式部署在web server(需要SSL驗證，HTTPS網址)後就可以供手機使用。
於手機上
當瀏覽器(Android Chrome 或 iphone safari)點選該網址，會出現是否安裝，安裝後出現如同手機一樣的App圖示，點開後就像一般App一樣呈現，但
其實是網頁。
我在想，不用學Android,IOS開發，不用在App Store上架、不必費用，用桌機來模擬及開發，就可以將網頁程式放到手機中執行卻是很棒的點子。

google 有個以此技術開發的網站 https://events.google.com/io/ 可用手機連進去玩玩看。我也實作了一支程式(附件)，發覺有無限的可能。

iphone的safari已納入此規格，但目前還有一些相容性問題，應該很快會完全相容這技術。(我沒iphone所以不知相容程度)

還是很新的技術，蠻有趣的。