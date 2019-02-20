<template>
  <div>
    <label for="location">Pick-up Location</label>
    <div>
      <input id="location" class="location" v-model="locationInput" placeholder="city, airport, station, region, district..." aria-required="true" required="required" role="textbox">
      <div class="dropdownContainer">
        <div class="dropdown" v-if="hasResults">
          <div class="dropdownItem" v-for="item in response.results" :key="item.index">
            <div>
              <div class="dropdownItemName">
              {{item.name}}
              </div>
              <div class="dropdownItemLocation">
              <span v-if="item.city">{{item.city}}, </span>{{item.country}}
              </div>
            </div>
          </div>
        </div>
        <div class="dropdown" v-if="!hasResults">
          <div class="dropdownNoResults">No results found.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getData from '#js/callApi';
export default {  
  computed: {
    hasResults: function(){
      if(this.locationInput.length > 1)
        if(this.response.results > 0){
            return true;
        }
        else{
            return false;
        }
    }
  },
  watch: {
    locationInput: function(location){
      if(location.length > 1){
        getData(6, location)
          .then(function(data){
            if(this.locationInput.length > 1){
              this.response = data;
            }
            else{
              this.response = {};
            }
          }.bind(this));
      }
      else{
        this.response = {};
      }
    }
  }
}
</script>

<style scoped lang="scss">
.location{
  width:100%;
  padding: 0.5rem;
  border-radius:0.1rem;
  border: 1px darkgoldenrod;
}
.dropdownContainer{
  position:relative;
}
.dropdown{
  top: 0;
  position: absolute;
  width: 100%;
  border: 1px solid black;
}
.dropdownItem{
  padding:0.5rem 1rem 0.5rem 1rem;
  cursor: pointer;
  display:table;
  width:100%;
  > div{
    display:table-cell;
    vertical-align: left;
  }
}
.dropdownItem:hover{
  background-color: darkgoldenrod
}
.dropdownItemName{
  color:black;
}
.dropdownItemLocation{
  color:grey;
}
.dropdownNoResults{
  padding:1rem 1rem 1rem 1rem;
  color: red;
}
.dropdownItem{
  width:25%;
}
</style>