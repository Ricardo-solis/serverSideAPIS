//WHEN USER SEARCHES CITY
$(document).ready(function () {
  $("#userSearch").keypress(function (e) {
    const key = e.which;
    if (key == 13) {
      let userSearch = $("#userSearch").val();
      let userSearchCityList = [];

      userSearchCityList =
        JSON.parse(localStorage.getItem("userSearchCityList")) || [];
      userSearchCityList.push(userSearch);
      localStorage.setItem(
        "userSearchCityList",
        JSON.stringify(userSearchCityList)
      );
    }
  });
});
