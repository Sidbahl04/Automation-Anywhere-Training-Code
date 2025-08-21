export default {
dummy()
{
	FindCountry.run().then(() => {
  FindUsersfromCountry.run().then(()=>{
		
		//Query dependent on from FindUsersfromCountry
	}
	
	);
});
},
	 async fetchDatafromCountries(){
		const countries= await FindCountry.run();
		const userfromCountry = await FindUsersfromCountry.run({
			country:countries[0].country //"India", "USA"
		})
		return userfromCountry;
		//return countries;//FindCountry.data
	}
}