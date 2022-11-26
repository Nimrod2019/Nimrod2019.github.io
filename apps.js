async function PVPBattles(){
	const api_link='https://api.worldofwarships.com/wows/account/info/?application_id=40c89c194464b943f74c5d5044cc66ed&account_id=1008221991%2C+1011213121%2C+1016093123%2C+1003075437';
	const response=await fetch(api_link)
	const datapoints=await response.json();
	for (let account in datapoints.data){
		BattlesPlayedPVP.push(datapoints.data[account]["statistics"]["pvp"]["battles"]);
		PlayerFullName.push(datapoints.data[account]["nickname"]);
	}
}

async function SurvivedBattles(){
	const api_link='https://api.worldofwarships.com/wows/account/statsbydate/?application_id=40c89c194464b943f74c5d5044cc66ed&dates=20221010%2C+20221015%2C+20221020%2C+20221027&account_id=1008221991';
	const response=await fetch(api_link)
	const datapoints=await response.json();
	for (let account in datapoints.data){
		for(let date in datapoints.data[account]["pvp"]){
			Dates.push(date);
			BattlesSurvived.push(datapoints.data[account]["pvp"][date]["survived_battles"])
		}
	}
}

async function WinLossRatio(){
	const api_link='https://api.worldofwarships.com/wows/account/info/?application_id=40c89c194464b943f74c5d5044cc66ed&account_id=1008221991';
	const response=await fetch(api_link)
	const datapoints=await response.json();
	for(let account in datapoints.data){
		WinsPVP.push(datapoints.data[account]["statistics"]["pvp"]["wins"])
		LossesPVP.push(datapoints.data[account]["statistics"]["pvp"]["losses"])
	}
async function statsGoozombies(){
	const api_link='https://api.worldofwarships.com/wows/account/info/?application_id=40c89c194464b943f74c5d5044cc66ed&account_id=1008221991';
	const response=await fetch(api_link)
	const datapoints=await response.json();
	for(let account in datapoints.data){
	}
}

async function statsGoodNotBest(){
	const api_link='https://api.worldofwarships.com/wows/account/info/?application_id=40c89c194464b943f74c5d5044cc66ed&account_id=1003075437';
	const response=await fetch(api_link)
	const datapoints=await response.json();
	for(let account in datapoints.data){
	}
}
}
