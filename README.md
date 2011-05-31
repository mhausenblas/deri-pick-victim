# What is this about?

Just a fun dog-fooding hack with DERI data. The app just selects a random DERIan and displays her or his name along with the picture.

## Behind the scenes

The data preparation phase was rather simple because the [DERI team page](http://www.deri.ie/about/team/) contains the data already in RDFa. I first used an [ARC2](https://github.com/semsol/arc2/) SPARQL endpoint to load the data directly from the DERI team page:

	LOAD <http://www.deri.ie/about/team/> INTO <http://deri.ie/team>

... and then I executed the following query:

	PREFIX foaf: <http://xmlns.com/foaf/0.1/>

	SELECT ?firstname ?lastname ?img
	FROM <http://deri.ie/team>
	WHERE {
		?person a foaf:Person;
				foaf:givenName ?firstname ;
				foaf:familyName ?lastname ;
				foaf:img ?img .
	}

... and stored the SPARQL [JSON result](http://www.w3.org/TR/rdf-sparql-json-res/) as [team.js](https://github.com/mhausenblas/deri-pick-victim/raw/master/team.js), which serves as my local data source.

## License

This software is Public Domain.