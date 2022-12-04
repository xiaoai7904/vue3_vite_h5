import {defineComponent} from 'vue'
import './Home.style.less';

export default defineComponent({
    setup() {
        return () => <div class="home">Home</div>
    }
})