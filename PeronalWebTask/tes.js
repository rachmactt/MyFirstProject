function mahasiswa(){
		alert("Muhammad Fadil Akbar (D421 13 001)\nHermawan Safrin (D421 14 314)");
	}

	function pilih(x){
		switch (x) {
			case "Pondokan-1":
				document.getElementById("pondok").innerHTML="Pondok Informatika";
				document.getElementById("j-kamar").innerHTML="10 kamar";
				document.getElementById("luas").innerHTML="3x4 meter";
				document.getElementById("pemilik").innerHTML="Hermawan Safrin";
				break;
			
			case "Pondokan-2":
				document.getElementById("pondok").innerHTML="Pondok Bersalin";
				document.getElementById("j-kamar").innerHTML="15 kamar";
				document.getElementById("luas").innerHTML="3x4 meter";
				document.getElementById("pemilik").innerHTML="Al Riefqy Dasmito";
				break;

			case "Pondokan-3":
				document.getElementById("pondok").innerHTML="Pondok Asik Josh";
				document.getElementById("j-kamar").innerHTML="13 kamar";
				document.getElementById("luas").innerHTML="3x4 meter";
				document.getElementById("pemilik").innerHTML="Yakip";
				break;
			default:
				document.getElementById("pondok").innerHTML=".......";
				document.getElementById("j-kamar").innerHTML=".......";
				document.getElementById("luas").innerHTML="........";
				document.getElementById("pemilik").innerHTML=".......";
				break;
		
		}
}