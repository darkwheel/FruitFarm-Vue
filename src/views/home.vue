<template>
  <div class="home-container">
    <header class="home-header">
      <img
        alt="logo"
        src="/playground_assets/bildschirmfoto%202021-10-28%20um%2018.33.35-1200h.png"
        class="home-image"
      />
      <div class="home-nav">
        <navigation-links rootClassName="rootClassName1"></navigation-links>
      </div>
      <div class="home-btn-group">
        <button class="button">Connect Wallet</button>
      </div>
      <div class="home-menu-burger teleport-menu-burger">
        <svg viewBox="0 0 1024 1024" class="home-icon">
          <path
            d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
          ></path>
        </svg>
      </div>
      <div class="teleport-menu-mobile home-menu-mobile">
        <div class="home-nav1">
          <div class="home-container01">
            <img
              alt="image"
              src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
              class="home-image1"
            />
            <div class="teleport-menu-close">
              <svg viewBox="0 0 1024 1024" class="home-icon02">
                <path
                  d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                ></path>
              </svg>
            </div>
          </div>
          <navigation-links rootClassName="rootClassName"></navigation-links>
        </div>
        <div>
          <svg viewBox="0 0 950.8571428571428 1024" class="home-icon04">
            <path
              d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
            ></path></svg
          ><svg viewBox="0 0 877.7142857142857 1024" class="home-icon06">
            <path
              d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
            ></path></svg
          ><svg viewBox="0 0 602.2582857142856 1024" class="home-icon08">
            <path
              d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
            ></path>
          </svg>
        </div>
      </div>
    </header>
    <div class="home-container02">
      <div class="home-steps">
        <h1 class="home-text"><span>Discover Our Process</span></h1>
        <span class="home-text02">
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
          <br />
          <span></span>
        </span>
        <div class="home-container03">
          <div class="home-step">
            <div class="home-container04">
              <div class="home-line"></div>
              <div class="home-container05">
                <svg viewBox="0 0 1024 1024" class="home-icon10">
                  <path
                    d="M634 558q92-64 92-174 0-88-63-151t-151-63-151 63-63 151q0 46 27 96t65 78l36 26v98h172v-98zM512 86q124 0 211 87t87 211q0 156-128 244v98q0 18-12 30t-30 12h-256q-18 0-30-12t-12-30v-98q-128-88-128-244 0-124 87-211t211-87zM384 896v-42h256v42q0 18-12 30t-30 12h-172q-18 0-30-12t-12-30z"
                  ></path>
                </svg>
              </div>
              <div class="home-line1"></div>
            </div>
            <div class="home-container06">
              <h1 class="home-text05"><span>Ideate</span></h1>
              <span class="home-text07">
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
                <br />
                <span></span>
              </span>
            </div>
          </div>
          <div class="home-step1">
            <div class="home-container07">
              <div class="home-line2"></div>
              <div class="home-container08">
                <svg viewBox="0 0 1024 1024" class="home-icon12">
                  <path
                    d="M746 512q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM618 342q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM406 342q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM278 512q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM512 128q158 0 271 100t113 242q0 88-63 150t-151 62h-74q-28 0-46 19t-18 45q0 22 16 42t16 44q0 28-18 46t-46 18q-160 0-272-112t-112-272 112-272 272-112z"
                  ></path>
                </svg>
              </div>
              <div class="home-line3"></div>
            </div>
            <div class="home-container09">
              <h1 class="home-text10"><span>Design</span></h1>
              <span class="home-text12">
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
                <br />
                <span></span>
              </span>
            </div>
          </div>
          <div class="home-step2">
            <div class="home-container10">
              <div class="home-line4"></div>
              <div class="home-container11">
                <svg viewBox="0 0 1024 1024" class="home-icon14">
                  <path d="M576 736l96 96 320-320-320-320-96 96 224 224z"></path>
                  <path d="M448 288l-96-96-320 320 320 320 96-96-224-224z"></path>
                </svg>
              </div>
              <div class="home-line5"></div>
            </div>
            <div class="home-container12">
              <h1 class="home-text15"><span>Develop</span></h1>
              <span class="home-text17">
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
                <br />
                <span></span>
              </span>
            </div>
          </div>
          <div class="home-step3">
            <div class="home-container13">
              <div class="home-line6"></div>
              <div class="home-container14">
                <svg viewBox="0 0 1024 1024" class="home-icon17">
                  <path
                    d="M480 64c-265.096 0-480 214.904-480 480 0 265.098 214.904 480 480 480 265.098 0 480-214.902 480-480 0-265.096-214.902-480-480-480zM751.59 704c8.58-40.454 13.996-83.392 15.758-128h127.446c-3.336 44.196-13.624 87.114-30.68 128h-112.524zM208.41 384c-8.58 40.454-13.996 83.392-15.758 128h-127.444c3.336-44.194 13.622-87.114 30.678-128h112.524zM686.036 384c9.614 40.962 15.398 83.854 17.28 128h-191.316v-128h174.036zM512 320v-187.338c14.59 4.246 29.044 11.37 43.228 21.37 26.582 18.74 52.012 47.608 73.54 83.486 14.882 24.802 27.752 52.416 38.496 82.484h-155.264zM331.232 237.516c21.528-35.878 46.956-64.748 73.54-83.486 14.182-10 28.638-17.124 43.228-21.37v187.34h-155.264c10.746-30.066 23.616-57.68 38.496-82.484zM448 384v128h-191.314c1.88-44.146 7.666-87.038 17.278-128h174.036zM95.888 704c-17.056-40.886-27.342-83.804-30.678-128h127.444c1.762 44.608 7.178 87.546 15.758 128h-112.524zM256.686 576h191.314v128h-174.036c-9.612-40.96-15.398-83.854-17.278-128zM448 768v187.34c-14.588-4.246-29.044-11.372-43.228-21.37-26.584-18.74-52.014-47.61-73.54-83.486-14.882-24.804-27.75-52.418-38.498-82.484h155.266zM628.768 850.484c-21.528 35.876-46.958 64.746-73.54 83.486-14.184 9.998-28.638 17.124-43.228 21.37v-187.34h155.266c-10.746 30.066-23.616 57.68-38.498 82.484zM512 704v-128h191.314c-1.88 44.146-7.666 87.040-17.28 128h-174.034zM767.348 512c-1.762-44.608-7.178-87.546-15.758-128h112.524c17.056 40.886 27.344 83.806 30.68 128h-127.446zM830.658 320h-95.9c-18.638-58.762-44.376-110.294-75.316-151.428 42.536 20.34 81.058 47.616 114.714 81.272 21.48 21.478 40.362 44.938 56.502 70.156zM185.844 249.844c33.658-33.658 72.18-60.932 114.714-81.272-30.942 41.134-56.676 92.666-75.316 151.428h-95.898c16.138-25.218 35.022-48.678 56.5-70.156zM129.344 768h95.898c18.64 58.762 44.376 110.294 75.318 151.43-42.536-20.34-81.058-47.616-114.714-81.274-21.48-21.478-40.364-44.938-56.502-70.156zM774.156 838.156c-33.656 33.658-72.18 60.934-114.714 81.274 30.942-41.134 56.678-92.668 75.316-151.43h95.9c-16.14 25.218-35.022 48.678-56.502 70.156z"
                  ></path>
                </svg>
              </div>
              <div class="home-line7"></div>
            </div>
            <div class="home-container15">
              <h1 class="home-text20"><span>Deploy</span></h1>
              <span class="home-text22">
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
                <br />
                <span></span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="home-stats">
        <div class="home-stat">
          <h1 class="home-text25">
            <span>50</span>
            <span>+</span>
          </h1>
          <span class="home-text28">Happy clients</span>
          <span class="home-text29">
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </span>
        </div>
        <div class="home-stat1">
          <h1 class="home-text30"><span>369</span></h1>
          <span class="home-text32">Projects completed</span>
          <span class="home-text33">
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </span>
        </div>
        <div class="home-stat2">
          <h1 class="home-text34">
            <span>500</span>
            <span>+</span>
          </h1>
          <span class="home-text37">Hours</span>
          <span class="home-text38">
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </span>
        </div>
        <div class="home-stat3">
          <h1 class="home-text39"><span>24/7</span></h1>
          <span class="home-text41">Support</span>
          <span class="home-text42">
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </span>
        </div>
      </div>
    </div>
    <footer class="home-footer">
      <img
        alt="logo"
        src="/playground_assets/bildschirmfoto%202021-10-28%20um%2018.33.35-1200h.png"
        class="home-image2"
      />
      <span class="home-text43">Â© 2021 FruitFarm, All Rights Reserved.</span>
      <div class="home-icon-group1">
        <svg viewBox="0 0 950.8571428571428 1024" class="home-icon19">
          <path
            d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
          ></path></svg
        ><svg viewBox="0 0 877.7142857142857 1024" class="home-icon21">
          <path
            d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
          ></path></svg
        ><svg viewBox="0 0 602.2582857142856 1024" class="home-icon23">
          <path
            d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
          ></path>
        </svg>
      </div>
    </footer>
  </div>
</template>

<script>
import NavigationLinks from '../components/navigation-links'

export default {
  name: 'Home',
  components: {
    NavigationLinks,
  },
  metaInfo: {
    title: 'FruitFarm',
    meta: [
      {
        property: 'og:title',
        content: 'FruitFarm',
      },
    ],
  },
}
</script>

<style scoped>
.home-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #C4DDAF;
}
.home-header {
  width: 100%;
  display: flex;
  position: relative;
  max-width: 100%;
  align-items: center;
  padding-top: var(--dl-space-space-twounits);
  padding-left: var(--dl-space-space-threeunits);
  padding-right: var(--dl-space-space-threeunits);
  padding-bottom: var(--dl-space-space-twounits);
  justify-content: space-between;
  background-color: #ffffff;
}
.home-image {
  height: 2rem;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius4);
}
.home-nav {
  display: flex;
}
.home-btn-group {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.home-menu-burger {
  display: none;
}
.home-icon {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  display: none;
}
.home-nav1 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.home-container01 {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}
.home-image1 {
  height: 2rem;
}
.home-icon02 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.home-icon04 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.home-icon06 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.home-icon08 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.home-container02 {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.home-steps {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-threeunits);
  max-width: var(--dl-size-size-maxwidth);
  align-self: center;
  align-items: center;
  flex-direction: column;
}
.home-text {
  color: var(--dl-color-gray-black);
  font-size: 3rem;
}
.home-text02 {
  color: #000000;
  font-size: 1.15rem;
  max-width: 600px;
  margin-top: var(--dl-space-space-unit);
  text-align: center;
  margin-bottom: var(--dl-space-space-unit);
}
.home-container03 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
}
.home-step {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.home-container04 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: var(--dl-space-space-unit);
  padding-left: 2px;
  padding-right: 2px;
  flex-direction: row;
  justify-content: center;
}
.home-line {
  flex: 1;
  height: 0px;
  display: flex;
  align-items: flex-start;
  border-color: transparent;
  border-style: dashed;
  border-width: 2px;
  flex-direction: row;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
}
.home-container05 {
  flex: 0 0 auto;
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
  display: flex;
  align-items: center;
  border-radius: var(--dl-radius-radius-round);
  flex-direction: row;
  justify-content: center;
  background-color: #f5f5f5ff;
}
.home-icon10 {
  fill: var(--dl-color-gray-500);
  width: 24px;
  height: 24px;
}
.home-line1 {
  flex: 1;
  height: 0px;
  display: flex;
  align-items: flex-start;
  border-color: var(--dl-color-gray-900);
  border-style: dashed;
  border-width: 2px;
  flex-direction: row;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
}
.home-container06 {
  display: flex;
  align-items: center;
  padding-top: var(--dl-space-space-unit);
  padding-left: var(--dl-space-space-twounits);
  padding-right: var(--dl-space-space-twounits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-unit);
}
.home-text05 {
  font-size: 1.5rem;
  text-align: center;
  font-weight: 500;
  margin-bottom: var(--dl-space-space-unit);
}
.home-text07 {
  color: var(--dl-color-gray-500);
  font-size: 0.75rem;
  text-align: center;
}
.home-step1 {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.home-container07 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: var(--dl-space-space-unit);
  padding-left: 2px;
  padding-right: 2px;
  flex-direction: row;
  justify-content: center;
}
.home-line2 {
  flex: 1;
  height: 0px;
  display: flex;
  align-items: flex-start;
  border-color: var(--dl-color-gray-900);
  border-style: dashed;
  border-width: 2px;
  flex-direction: row;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
}
.home-container08 {
  flex: 0 0 auto;
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
  display: flex;
  align-items: center;
  border-radius: var(--dl-radius-radius-round);
  flex-direction: row;
  justify-content: center;
  background-color: #f5f5f5ff;
}
.home-icon12 {
  fill: var(--dl-color-gray-500);
  width: 24px;
  height: 24px;
}
.home-line3 {
  flex: 1;
  height: 0px;
  display: flex;
  align-items: flex-start;
  border-color: var(--dl-color-gray-900);
  border-style: dashed;
  border-width: 2px;
  flex-direction: row;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
}
.home-container09 {
  display: flex;
  align-items: center;
  padding-top: var(--dl-space-space-unit);
  padding-left: var(--dl-space-space-twounits);
  padding-right: var(--dl-space-space-twounits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-unit);
}
.home-text10 {
  font-size: 1.5rem;
  text-align: center;
  font-weight: 500;
  margin-bottom: var(--dl-space-space-unit);
}
.home-text12 {
  color: var(--dl-color-gray-500);
  font-size: 0.75rem;
  text-align: center;
}
.home-step2 {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.home-container10 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: var(--dl-space-space-unit);
  padding-left: 2px;
  padding-right: 2px;
  flex-direction: row;
  justify-content: center;
}
.home-line4 {
  flex: 1;
  height: 0px;
  display: flex;
  align-items: flex-start;
  border-color: var(--dl-color-gray-900);
  border-style: dashed;
  border-width: 2px;
  flex-direction: row;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
}
.home-container11 {
  flex: 0 0 auto;
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
  display: flex;
  align-items: center;
  border-radius: var(--dl-radius-radius-round);
  flex-direction: row;
  justify-content: center;
  background-color: #f5f5f5ff;
}
.home-icon14 {
  fill: var(--dl-color-gray-500);
  width: 24px;
  height: 24px;
}
.home-line5 {
  flex: 1;
  height: 0px;
  display: flex;
  align-items: flex-start;
  border-color: var(--dl-color-gray-900);
  border-style: dashed;
  border-width: 2px;
  flex-direction: row;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
}
.home-container12 {
  display: flex;
  align-items: center;
  padding-top: var(--dl-space-space-unit);
  padding-left: var(--dl-space-space-twounits);
  padding-right: var(--dl-space-space-twounits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-unit);
}
.home-text15 {
  font-size: 1.5rem;
  text-align: center;
  font-weight: 500;
  margin-bottom: var(--dl-space-space-unit);
}
.home-text17 {
  color: var(--dl-color-gray-500);
  font-size: 0.75rem;
  text-align: center;
}
.home-step3 {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.home-container13 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: var(--dl-space-space-unit);
  padding-left: 2px;
  padding-right: 2px;
  flex-direction: row;
  justify-content: center;
}
.home-line6 {
  flex: 1;
  height: 0px;
  display: flex;
  align-items: flex-start;
  border-color: var(--dl-color-gray-900);
  border-style: dashed;
  border-width: 2px;
  flex-direction: row;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
}
.home-container14 {
  flex: 0 0 auto;
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
  display: flex;
  align-items: center;
  border-radius: var(--dl-radius-radius-round);
  flex-direction: row;
  justify-content: center;
  background-color: #f5f5f5ff;
}
.home-icon17 {
  fill: var(--dl-color-gray-500);
  width: 24px;
  height: 24px;
}
.home-line7 {
  flex: 1;
  height: 0px;
  display: flex;
  align-items: flex-start;
  border-color: transparent;
  border-style: dashed;
  border-width: 2px;
  flex-direction: row;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
}
.home-container15 {
  display: flex;
  align-items: center;
  padding-top: var(--dl-space-space-unit);
  padding-left: var(--dl-space-space-twounits);
  padding-right: var(--dl-space-space-twounits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-unit);
}
.home-text20 {
  font-size: 1.5rem;
  text-align: center;
  font-weight: 500;
  margin-bottom: var(--dl-space-space-unit);
}
.home-text22 {
  color: var(--dl-color-gray-500);
  font-size: 0.75rem;
  text-align: center;
}
.home-stats {
  width: 100%;
  display: grid;
  padding: var(--dl-space-space-threeunits);
  grid-gap: var(--dl-space-space-twounits);
  max-width: var(--dl-size-size-maxwidth);
  align-self: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.home-stat {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.home-text25 {
  color: #FF7C4C;
  font-size: 3rem;
}
.home-text28 {
  font-size: 1.15rem;
  margin-top: var(--dl-space-space-halfunit);
  text-align: center;
}
.home-text29 {
  color: var(--dl-color-gray-500);
  font-size: 0.75rem;
  margin-top: var(--dl-space-space-halfunit);
  text-align: center;
}
.home-stat1 {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.home-text30 {
  color: #FF7C4C;
  font-size: 3rem;
}
.home-text32 {
  font-size: 1.15rem;
  margin-top: var(--dl-space-space-halfunit);
  text-align: center;
}
.home-text33 {
  color: var(--dl-color-gray-500);
  font-size: 0.75rem;
  margin-top: var(--dl-space-space-halfunit);
  text-align: center;
}
.home-stat2 {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.home-text34 {
  color: #FF7C4C;
  font-size: 3rem;
}
.home-text37 {
  font-size: 1.15rem;
  margin-top: var(--dl-space-space-halfunit);
  text-align: center;
}
.home-text38 {
  color: var(--dl-color-gray-500);
  font-size: 0.75rem;
  margin-top: var(--dl-space-space-halfunit);
  text-align: center;
}
.home-stat3 {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.home-text39 {
  color: #FF7C4C;
  font-size: 3rem;
}
.home-text41 {
  font-size: 1.15rem;
  margin-top: var(--dl-space-space-halfunit);
  text-align: center;
}
.home-text42 {
  color: var(--dl-color-gray-500);
  font-size: 0.75rem;
  margin-top: var(--dl-space-space-halfunit);
  text-align: center;
}
.home-footer {
  flex: 0;
  width: 100%;
  bottom: 0px;
  margin: auto;
  display: flex;
  position: absolute;
  max-width: 100%;
  align-items: center;
  padding-top: var(--dl-space-space-twounits);
  padding-left: var(--dl-space-space-threeunits);
  padding-right: var(--dl-space-space-threeunits);
  padding-bottom: var(--dl-space-space-twounits);
  justify-content: space-between;
  background-color: #ffffff;
}
.home-image2 {
  height: 2rem;
  object-fit: cover;
}
.home-icon-group1 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.home-icon19 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.home-icon21 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.home-icon23 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
@media(max-width: 991px) {
  .home-icon {
    display: flex;
  }
  .home-text {
    text-align: center;
  }
  .home-text02 {
    text-align: center;
  }
  .home-text25 {
    text-align: center;
  }
  .home-text30 {
    text-align: center;
  }
  .home-text34 {
    text-align: center;
  }
  .home-text39 {
    text-align: center;
  }
}
@media(max-width: 767px) {
  .home-header {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .home-nav {
    display: none;
  }
  .home-btn-group {
    display: none;
  }
  .home-menu-burger {
    display: flex;
  }
  .home-steps {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .home-container03 {
    align-items: flex-start;
    padding-left: var(--dl-space-space-fiveunits);
    flex-direction: column;
  }
  .home-step {
    width: 100%;
    height: auto;
    flex-direction: row;
    justify-content: center;
  }
  .home-container04 {
    width: var(--dl-size-size-small);
    height: auto;
    align-self: stretch;
    padding-top: 0px;
    padding-left: 0px;
    padding-right: 0px;
    flex-direction: column;
    padding-bottom: 2px;
    justify-content: space-between;
  }
  .home-line1 {
    border-color: var(--dl-color-gray-900);
    border-style: dashed;
    border-top-width: 0px;
    border-left-width: 2px;
  }
  .home-container06 {
    width: 100%;
    align-items: flex-start;
    padding-top: var(--dl-space-space-twounits);
    flex-direction: column;
    padding-bottom: var(--dl-space-space-twounits);
    justify-content: space-between;
  }
  .home-text05 {
    margin-top: var(--dl-space-space-twounits);
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-unit);
  }
  .home-text07 {
    text-align: left;
  }
  .home-step1 {
    width: 100%;
    height: auto;
    flex-direction: row;
    justify-content: center;
  }
  .home-container07 {
    width: var(--dl-size-size-small);
    height: auto;
    align-self: stretch;
    padding-top: 0px;
    padding-left: 0px;
    padding-right: 0px;
    flex-direction: column;
    padding-bottom: 2px;
    justify-content: space-between;
  }
  .home-line2 {
    border-top-width: 0px;
    border-left-width: 2px;
  }
  .home-line3 {
    border-color: var(--dl-color-gray-900);
    border-style: dashed;
    border-top-width: 0px;
    border-left-width: 2px;
  }
  .home-container09 {
    width: 100%;
    align-items: flex-start;
    padding-top: var(--dl-space-space-twounits);
    flex-direction: column;
    padding-bottom: var(--dl-space-space-twounits);
    justify-content: space-between;
  }
  .home-text10 {
    margin-top: var(--dl-space-space-twounits);
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-unit);
  }
  .home-text12 {
    text-align: left;
  }
  .home-step2 {
    width: 100%;
    height: auto;
    flex-direction: row;
    justify-content: center;
  }
  .home-container10 {
    width: var(--dl-size-size-small);
    height: auto;
    align-self: stretch;
    padding-top: 0px;
    padding-left: 0px;
    padding-right: 0px;
    flex-direction: column;
    padding-bottom: 2px;
    justify-content: space-between;
  }
  .home-line4 {
    border-top-width: 0px;
    border-left-width: 2px;
  }
  .home-line5 {
    border-color: var(--dl-color-gray-900);
    border-style: dashed;
    border-top-width: 0px;
    border-left-width: 2px;
  }
  .home-container12 {
    width: 100%;
    align-items: flex-start;
    padding-top: var(--dl-space-space-twounits);
    flex-direction: column;
    padding-bottom: var(--dl-space-space-twounits);
    justify-content: space-between;
  }
  .home-text15 {
    margin-top: var(--dl-space-space-twounits);
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-unit);
  }
  .home-text17 {
    text-align: left;
  }
  .home-step3 {
    width: 100%;
    height: auto;
    flex-direction: row;
    justify-content: center;
  }
  .home-container13 {
    width: var(--dl-size-size-small);
    height: auto;
    align-self: stretch;
    padding-top: 0px;
    padding-left: 0px;
    padding-right: 0px;
    flex-direction: column;
    padding-bottom: 2px;
    justify-content: space-between;
  }
  .home-line6 {
    border-top-width: 0px;
    border-left-width: 2px;
  }
  .home-line7 {
    border-color: transparent;
    border-style: dashed;
    border-top-width: 0px;
    border-left-width: 2px;
  }
  .home-container15 {
    width: 100%;
    align-items: flex-start;
    padding-top: var(--dl-space-space-twounits);
    flex-direction: column;
    padding-bottom: var(--dl-space-space-twounits);
    justify-content: space-between;
  }
  .home-text20 {
    margin-top: var(--dl-space-space-twounits);
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-unit);
  }
  .home-text22 {
    text-align: left;
  }
  .home-stats {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
    grid-template-columns: 1fr 1fr;
  }
  .home-text28 {
    text-align: center;
  }
  .home-text32 {
    text-align: center;
  }
  .home-text37 {
    text-align: center;
  }
  .home-text41 {
    text-align: center;
  }
  .home-footer {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .home-text43 {
    text-align: center;
    margin-left: var(--dl-space-space-unit);
    margin-right: var(--dl-space-space-unit);
  }
}
@media(max-width: 479px) {
  .home-header {
    padding: var(--dl-space-space-unit);
  }
  .home-menu-mobile {
    padding: 16px;
  }
  .home-steps {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .home-container03 {
    padding-left: 0px;
  }
  .home-container06 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: 0px;
    padding-bottom: var(--dl-space-space-twounits);
  }
  .home-text05 {
    margin-left: 0px;
    margin-right: var(--dl-space-space-twounits);
  }
  .home-container09 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: 0px;
    padding-bottom: var(--dl-space-space-twounits);
  }
  .home-text10 {
    margin-left: 0px;
    margin-right: var(--dl-space-space-twounits);
  }
  .home-container12 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: 0px;
    padding-bottom: var(--dl-space-space-twounits);
  }
  .home-text15 {
    margin-left: 0px;
    margin-right: var(--dl-space-space-twounits);
  }
  .home-container15 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: 0px;
    padding-bottom: var(--dl-space-space-twounits);
  }
  .home-text20 {
    margin-left: 0px;
    margin-right: var(--dl-space-space-twounits);
  }
  .home-stats {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
    grid-template-columns: 1fr;
  }
  .home-footer {
    padding: var(--dl-space-space-unit);
    flex-direction: column;
  }
  .home-image2 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .home-text43 {
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-unit);
  }
}
</style>
