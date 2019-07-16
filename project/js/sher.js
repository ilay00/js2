const sher={
components:{products},
/*data(){
       return { filter () {
            let regExp = new RegExp(this.userSearch,'i');
            this.filtered = this.products.filter (el => regExp.test (el.product_name))
			
        }}
    },*/
  template: `<form action="#" class="search-form">
             <input type="text" class="search-field">
             <button class="btn-search" type="submit">
             <i class="fas fa-search"></i>
             </button>
             </form>`
		                      };