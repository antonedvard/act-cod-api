import { AxiosResponse, AxiosInstance } from "axios";
import { CODAPI } from "./interface";
export default class Helper {
    protected _BASEURL: string;
    protected _LOGINURL: string;
    protected _PROFILEURL: string;
    protected _LOGGEDIN: boolean;
    protected _DEBUG: boolean;
    protected readonly _USERAGENT: string;
    protected readonly _BASECOOKIE: string;
    _ssoCOOKIE: string;
    protected userEmail: string;
    protected userPassword: string;
    protected userPlatform: CODAPI.OneOfPlatforms;
    protected platformUser: string;
    protected activisionId: string;
    protected httpI: AxiosInstance | null;
    protected loginHttp: AxiosInstance | null;
    /**
     * Currently hardcoded, a dynamic function to fetch the
     * current season would be much more optimal.
     */
    protected __currentSeason: number;
    constructor(config: CODAPI.CODAPICONFIG);
    get loggedIn(): boolean;
    get debug(): boolean;
    protected getCurrentSeason(): void;
    protected buildUri(str: string): string;
    protected buildProfileUri(str: string): string;
    protected cleanClientName(gamertag: string): string;
    protected sendRequestUserInfoOnly(url: string): Promise<any>;
    protected sendRequest(url: string): Promise<any>;
    protected sendPostRequest(url: string, data: object): Promise<AxiosResponse>;
    protected postReq(url: string, data: object, headers: object | null): Promise<any>;
    protected apiErrorHandling(response: AxiosResponse | any): object;
}
