let globalData = {
    color_in: 'vesuvio',
    color_out: 'tobacc',
    dodings_style: 'yes',
    furniture: 'venera',
    furniture_color: 'chrome',
    inset_in: 'aluminum.m001',
    inset_out: 'vesuvio.m001',
    internal_opening: 'out',
    lock_count: 2,
    lock_primary: 'shweda',
    milling_in: 'none',
    milling_out: 'none',
    model: 'shweda',
    panel_in: 'wenge_light.decoline_light',
    panel_out: 'afr_palisandr.lamina',
    panel_mount_out:'standart',
    side:'left',
    steel_threshold:'default_steel',
    style_in:'molding',
    style_out:'molding',
    trim_style_in:'standard',
    weight_steel:'2_0',
    _side:'out',
    _size:'medium',
    _model:'shweda'
}

document.cookie = "user=John; domain=site.com"

let post = (data) => {
    const baseURL = 'https://portalle.ru/configurator/image';

    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", baseURL);
    xhttp.withCredentials = true
    xhttp.setRequestHeader("Cookie", "first_visit=eyJpdiI6IlhFemFnQ3FlWWF2alA2VHJHMGdWQnc9PSIsInZhbHVlIjoiNjN2Y0NSZkxZY1lDalFFS2Z1V0Zpa2czMTRPdisvQldydExjK1BrN3BBRVI2eHVYanlEZ01YMHB1czc5ZlJxditRcnZrMk41SzJPbmZrSnlMSzZwWFJNcEpnQ05FK29yTkJCaWNEQ0dGeHBTcC9EMkpROGoyaDdyd09xWVlRdDY1M2dpY2lCREZOUHZ6S1cvZitHZ2Y5VzE1NkhvQTNlZGR1N0JNS0tqTWVYSTRrQUVjS21wMDJ0UzB5S2ZwY2hyZ2o4eWRMYUtUYURTZ3FyWUhnNFcydk5qM1NxY2FXR094NVIwMDVpOVc5SWk1NXU0OERZNU5oRW9NK2UrSGF3a2hWTzR5Q3BmdWFXOEgrMjR5OEJQUDFNZHJDOE9LNGxxc0g5czNmcGk4alFQeXIyTS9hbng5MUwrYW9nQ3V2WUoxdGNNTCtaOWUrTnFQeXJEOGprM0srb0tuUzh1VURjRk8rcGFvZmh6TTN6SjVBR0ovK2pldW44bWFuSUo1ekY0bjhxTHlYN1lhWGRxR1U0cnFpM1g1QTIrR3d0WUt2VjJsL0xONmk2RUxKSXhKWnI0MmJ0VDFnVkxLakU4NFRkaGRRLzM1OUVlQmJCNkVaREdKTW1ZRW5jSmc4Mmh3WUVrTTdRMzNRVEM5K1dsV1JTNnFLSVhzdm5Hamhua1VLc2hPUnZ4NWw3aWR2eVozcEJrUHRYaTFzUlJJcDFDaGZBTEtPSU5FcnoyMk9QMEZDT0JiTWdrdnZTQjJaWEhNT3pWdGQwNnNocG5iWTdONUFOd1BPaTdGWWNOdzg2SkxsL1E1ejd1MVU2ZG5PVzJNTlAwVE5nall3V2lLekh6b01tTUY3UjN4QkNZMmxWQU1FYTRMZE9NeTE2eVhjSkVPWWFydWs2M3hZWkZxaWpxZUZjTlFQMkJRL1JrRDJwMzlncmtlQ0JMRzg1K1JqR0lKa2tHZGRTSjRSODB0RzVwUjVOUEFVdUljNkFoU0JlV2IyYW1LZ2tMZktLQ0ltSFpiQ2tyZU5JSEVKNDlCNEtYWWp0Y2IyamFYcVlWQ2o2M3BkUTlDSzlPSkFEcmhwdk4vUmcyN1NSam9nV1c2OXZrTGE3RSIsIm1hYyI6ImYxZGM1MmE2ZWY0ZjlmMzM5ZTFiY2MwYWU0OTFlMzYzOTZjMjMxMTE3MmMyYjNmM2I3ZDQwZTI5YzRiNzBlYmYiLCJ0YWciOiIifQ%3D%3D; portalle_session=eyJpdiI6ImplNVVPMjcwSDlLTTFka1J0QVovQkE9PSIsInZhbHVlIjoiTmJEazRta3Z0alRHaExlYUU0ZGI2T3F1UEFUcVJkNU9iY1cyOUd5RHY4QitNd0NScmJyWjBuZjhVcXZEbkIwb3pGODBTZmwzRGdmbHM1NllCV3prM21wQWhsNERybTdKVzF1QjNjTmhYL2NNZnhmUWJWaCtLZmZIblFER2dSRloiLCJtYWMiOiI1YTU4ZjM0MjczY2JjZmRmMjk3MzZjMTZiYmQ0MWJjZDdmMmVmMmNhYTU5MjIxNTQ4Mzc5YWY5NGE1MWVlNThjIiwidGFnIjoiIn0%3D");
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
    // xhttp.setRequestHeader("X-CSRF-TOKEN", "BlghRFMB4pO55f79i67gp6FfMzqtwh0cwVQBMV6U");
    xhttp.setRequestHeader("Accept", "application/json, text/javascript, */*; q=0.01");
    // xhttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    xhttp.setRequestHeader("Origin", "https://portalle.ru");
    xhttp.setRequestHeader("Sec-Fetch-Site", "same-origin");
    xhttp.setRequestHeader("Sec-Fetch-Mode", "cors");

    let result = JSON.stringify(data).replaceAll(',', '&').replaceAll(':', '=').replaceAll('{', '').replaceAll('}', '').replaceAll('"', '')

    xhttp.send(result);
    // xhttp.send(data)

   
}

// window.addEventListener('click', () => {
//     post(globalData)
// })