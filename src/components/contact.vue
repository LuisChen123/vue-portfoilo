<template>
  <div>
    <div class="topNav">
      <publicNav-box/>
      <div class="outer-box">
        <div class="info-box">
          <ul>
            <li>
              <div class="icon-box">
                <img src="../assets/pic/location.png" alt>
              </div>
              <div class="personelInfo">
                <h1>Adress</h1>
                <p>Irvine,CA,92620</p>
              </div>
            </li>
            <li>
              <div class="icon-box">
                <img src="../assets/pic/email.png" alt>
              </div>
              <div class="personelInfo">
                <h1>E-Mail</h1>
                <p>hangyuchen@msn.com</p>
              </div>
            </li>
            <li>
              <div class="icon-box">
                <img src="../assets/pic/phone.png" alt>
              </div>
              <div class="personelInfo">
                <h1>Calle Me</h1>
                <p>818-826-6589</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="commentBox">
          <h1>Contact Me</h1>
          <p>You can contact me using the following form :)</p>
          <div class="infoForm">
            <el-form
              :model="ruleForm"
              :rules="rules"
              ref="ruleForm"
              label-width="100px"
              class="demo-ruleForm"
            >
              <el-form-item label="Name" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
              </el-form-item>

              <el-form-item label="E-mail" prop="email">
                <el-input v-model="ruleForm.email"></el-input>
              </el-form-item>

              <el-form-item label="Comment" prop="comment">
                <el-input type="textarea" v-model="ruleForm.comment" rows="10" cols="10"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">submit</el-button>
                <el-button @click="resetForm('ruleForm')">reset</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
    <footer-Box/>
  </div>
</template>

<script>
import NavBox from "../components/chirdren/navBox";
import footerBox from "./chirdren/footerBox";
export default {
  name: "home",
  data() {
    return {
      ruleForm: {
        name: "",
        email: "",
        comment: ""
      },
      rules: {
        name: [
          {
            required: true,
            message: "please entry your name",
            trigger: "blur"
          },
          {
            min: 3,
            max: 10,
            message: "please keep your name length between 3-10",
            trigger: "blur"
          }
        ],
        email: [
          {
            required: true,
            message: "please entry your email address",
            trigger: "blur"
          },
          {
            type: "email",
            message: "please entry correct email address",
            trigger: ["blur", "change"]
          }
        ],
        comment: [
          {
            required: true,
            message: "please entry your message",
            trigger: "blur"
          },
          {
            min: 10,
            max: 120,
            message: "min length is 10 words, max lenght is 120 words",
            trigger: "blur"
          }
        ]
      }
    };
  },
  components: {
    "publicNav-box": NavBox,
    "footer-Box": footerBox
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.popoverBox()
          this.$axios
            .post()
            .then(result => {
              if (result.status === 200) {
                this.ruleForm.name = "";
                this.ruleForm.email = "";
                this.ruleForm.comment = "";
              }
            })
            .catch(err => {
              console.log(err);
            });
          // put data to mysql end
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    popoverBox(){
      this.$alert('Sorry,Because this is a static website,(no back-end support),If you want to connect me,please send me a emial or click the icon at the of bottom website:)', 'Message From Luis', {
          confirmButtonText: 'Ok',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
    }
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang = "scss" scoped>
.clearfix {
}
:after {
  content: "";
  display: block;
  height: 0;
  visibility: hidden;
  clear: both;
}
.clearfix {
  *zoom: 1;
}

@mixin box-shadow {
  //make this box has a white box shadow
  border: 1px solid #ebeef5;
  background-color: #fff;
  color: #303133;
  transition: 0.3s;
  box-shadow: 9px 7px 10px 0 rgba(56, 56, 56, 0.51);
  border-radius: 4px;
  overflow: hidden;
}

@mixin background-picLay {
  //the way that background pic layout
  background-repeat: no-repeat;
  background-size: contain;
}

@mixin flex-centerShadowBox {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  box-shadow: 9px 7px 10px 0 rgba(56, 56, 56, 0.51);
}

$auto-center: 0 auto; //make this element auto center
$web-heartWidth: 1226px; //

.topNav {
  background-image: url("../assets/pic/banner.jpg");
  @include background-picLay;

  .outer-box {
    width: $web-heartWidth;
    display: flex;
    margin: 100px auto;
    .info-box {
      width: 300px;
      @include flex-centerShadowBox;

      ul {
        margin: $auto-center;
        padding: 0;
        li {
          display: flex;
          list-style: none;
          justify-content: space-between;
          .icon-box {
            width: 65px;
            height: 65px;
            border-radius: 100%;
            margin: 25px 10px 25px 25px;
            @include flex-centerShadowBox;
            img {
              width: 20px;
              height: 20px;
            }
          }
          .personelInfo {
            width: 180px;
            h1 {
            }
            p {
            }
          }
        }
      }
    }

    .commentBox {
      margin-top: 20px;
      width: 825px;
      margin: $auto-center;
      @include box-shadow;
      h1 {
        text-align: center;
      }
      p {
        text-align: center;
      }
      .infoForm {
        width: 600px;
        margin: $auto-center;
      }
    }
  }
}
</style>
