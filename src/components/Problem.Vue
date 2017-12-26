<script>
const jsonp = require('jsonp');

const codeforces_api_url = 'http://codeforces.com/api/'

function problems() {
    jsonp(codeforces_api_url + 'problemset.problems', {param: 'jsonp'}, function(err, data) {
        if (err) return ;
        console.log(data);
    })
}
</script>