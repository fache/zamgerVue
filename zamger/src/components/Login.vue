  <template>
  <div class="ui middle aligned center aligned grid" style="height:100%; background-color:#dadada; margin-top: 0rem;">
    <div class="column customSize">
      <h2 class="ui teal image header">
        <img src="../assets/etf-50x50.png" class="image"/>
        <span class="content">
          Dobro došli na bolognaware Elektrotehničkog fakulteta Sarajevo
        </span>
      </h2>
      <form class="ui large form">
        <div class="ui stacked segment">
          <div class="field">
            <div class="ui left icon input">
              <i class="user icon"></i>
              <input type="text" name="email" placeholder="User" v-model="userName"/>
            {{userName}}
            </div>
          </div>
          <div class="field">
            <div class="ui left icon input">
              <i class="lock icon"></i>
              <input type="password" name="password" placeholder="Password" v-model="passWord"/>
            </div>
          </div>
            <div class="ui fluid large teal submit button" v-on:click="poziv">Prijavite se</div>
        </div>

        <div class="ui error message"></div>

      </form>

      <div class="ui message">
        Preuzmite <a href="#">uputstva za nastavnike</a>
      </div>
    </div>
  </div>
</template>
<script>
  var config = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
var obj;
  export default {
  name: "app-login",
  data(){
    return{
      userName:'',
      passWord:''
    }
  },
  methods:{
    poziv: function(){
    var apiData='login='+this.userName+'&pass='+this.passWord;
     obj=this;
     axios.post('https://zamger.etf.unsa.ba/auth.php', apiData, config)
      .then(function (response) {
        if(response.data.success=="true"){
        obj.$router.push("/");
        }
      })
      .catch(function (error) {
        alert(error);
      });
      }
    },
    mounted:function(){
           
    }




  }</script>
<style scoped>
  @media screen and (max-width: 800px) {
    .customSize {
      width: 85% !important;
    }
  }
  @media screen and (min-width: 801px) and (max-width: 1000px) {
    .customSize {
      width: 50% !important;
    }
  }
  @media screen and (min-width: 1001px) {
    .customSize {
      width: 40% !important;
    }
  }
</style>
