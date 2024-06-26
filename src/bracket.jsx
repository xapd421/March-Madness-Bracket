
import "./bracket.css"
import {readRemoteFile} from 'react-papaparse'
import React, { useState } from 'react';


  
export default function Bracket() {
    
   
    
    const [data, setData] = useState([]);
    const getName = (row) => {
        return String(data[row][3])
    }
    const handleReadRemoteFile = () => {
        if (data.length === 0){
            readRemoteFile("/away.csv", {
                complete: (results) => {
                  console.log('---------------------------');
                  console.log('Results:', results);
                  console.log('---------------------------');
                  setData(results.data)
                },
              });
        }
        
      };
    handleReadRemoteFile()
    return (
        <div className="flex-1 flex flex-row mg-5">
            <div className="flex-inital w-8"></div>
            <div id="left" className="left bracket flex-4">
                
            <ul className="round round-1">
                <li className="spacer">&nbsp;</li>
                
                <li className="game game-top winner"> { getName(1) } <span>79</span></li>
                <li className="game game-spacer-left">&nbsp;</li>
                <li className="game game-bottom ">NC A&T <span>48</span></li>
        
                <li className="spacer">&nbsp;</li>
                
                <li className="game game-top winner">Colo St <span>84</span></li>
                <li className="game game-spacer-left">&nbsp;</li>
                <li className="game game-bottom ">Missouri <span>72</span></li>
        
                <li className="spacer">&nbsp;</li>
                
                <li className="game game-top ">Oklahoma St <span>55</span></li>
                <li className="game game-spacer-left">&nbsp;</li>
                <li className="game game-bottom winner">Oregon <span>68</span></li>
        
                <li className="spacer">&nbsp;</li>
                
                <li className="game game-top winner">Saint Louis <span>64</span></li>
                <li className="game game-spacer-left">&nbsp;</li>
                <li className="game game-bottom ">New Mexico St <span>44</span></li>
        
                <li className="spacer">&nbsp;</li>
                
                <li className="game game-top winner">Memphis <span>54</span></li>
                <li className="game game-spacer-left">&nbsp;</li>
                <li className="game game-bottom ">St Mary's <span>52</span></li>
        
                <li className="spacer">&nbsp;</li>
                
                <li className="game game-top winner">Mich St <span>65</span></li>
                <li className="game game-spacer-left">&nbsp;</li>
                <li className="game game-bottom ">Valparaiso <span>54</span></li>
        
                <li className="spacer">&nbsp;</li>
                
                <li className="game game-top winner">Creighton <span>67</span></li>
                <li className="game game-spacer-left">&nbsp;</li>
                <li className="game game-bottom ">Cincinnati <span>63</span></li>
        
                <li className="spacer">&nbsp;</li>
                
                <li className="game game-top winner">Duke <span>73</span></li>
                <li className="game game-spacer-left">&nbsp;</li>
                <li className="game game-bottom ">Albany <span>61</span></li>
        
                <li className="spacer">&nbsp;</li>
            </ul>
            <ul className="round round-2">
                <li className="spacer">&nbsp;</li>
                
                <li className="game game-top winner">Lousville <span>82</span></li>
                <li className="game game-spacer-left">&nbsp;</li>
                <li className="game game-bottom ">Colo St <span>56</span></li>
        
                <li className="spacer">&nbsp;</li>
                
                <li className="game game-top winner">Oregon <span>74</span></li>
                <li className="game game-spacer-left">&nbsp;</li>
                <li className="game game-bottom ">Saint Louis <span>57</span></li>
        
                <li className="spacer">&nbsp;</li>
                
                <li className="game game-top ">Memphis <span>48</span></li>
                <li className="game game-spacer-left">&nbsp;</li>
                <li className="game game-bottom winner">Mich St <span>70</span></li>
        
                <li className="spacer">&nbsp;</li>
                
                <li className="game game-top ">Creighton <span>50</span></li>
                <li className="game game-spacer-left">&nbsp;</li>
                <li className="game game-bottom winner">Duke <span>66</span></li>
        
                <li className="spacer">&nbsp;</li>
            </ul>
            <ul className="round round-3">
                <li className="spacer">&nbsp;</li>
                
                <li className="game game-top winner">Lousville <span>77</span></li>
                <li className="game game-spacer-left">&nbsp;</li>
                <li className="game game-bottom ">Oregon <span>69</span></li>
        
                <li className="spacer">&nbsp;</li>
                
                <li className="game game-top ">Mich St <span>61</span></li>
                <li className="game game-spacer-left">&nbsp;</li>
                <li className="game game-bottom winner">Duke <span>71</span></li>
        
                <li className="spacer">&nbsp;</li>
            </ul>
            <ul className="round round-4">
                <li className="spacer">&nbsp;</li>
                
                <li className="game game-top winner">Lousville <span>85</span></li>
                <li className="game game-spacer-left">&nbsp;</li>
                <li className="game game-bottom ">Duke <span>63</span></li>
                
                <li className="spacer">&nbsp;</li>
            </ul>		
            </div>
            <div className="flex-1"></div>
            <div id="right" className="right bracket flex-4">
                
            <ul className="round round-1">
                <li className="spacer">&nbsp;</li>
                
                <li className="game game-top winner">Lousville <span>79</span></li>
                <li className="game game-spacer-right">&nbsp;</li>
                <li className="game game-bottom ">NC A&T <span>48</span></li>
        
                <li className="spacer">&nbsp;</li>
                
                <li className="game game-top winner">Colo St <span>84</span></li>
                <li className="game game-spacer-right">&nbsp;</li>
                <li className="game game-bottom ">Missouri <span>72</span></li>
        
                <li className="spacer">&nbsp;</li>
                
                <li className="game game-top ">Oklahoma St <span>55</span></li>
                <li className="game game-spacer-right">&nbsp;</li>
                <li className="game game-bottom winner">Oregon <span>68</span></li>
        
                <li className="spacer">&nbsp;</li>
                
                <li className="game game-top winner">Saint Louis <span>64</span></li>
                <li className="game game-spacer-right">&nbsp;</li>
                <li className="game game-bottom ">New Mexico St <span>44</span></li>
        
                <li className="spacer">&nbsp;</li>
                
                <li className="game game-top winner">Memphis <span>54</span></li>
                <li className="game game-spacer-right">&nbsp;</li>
                <li className="game game-bottom ">St Mary's <span>52</span></li>
        
                <li className="spacer">&nbsp;</li>
                
                <li className="game game-top winner">Mich St <span>65</span></li>
                <li className="game game-spacer-right">&nbsp;</li>
                <li className="game game-bottom ">Valparaiso <span>54</span></li>
        
                <li className="spacer">&nbsp;</li>
                
                <li className="game game-top winner">Creighton <span>67</span></li>
                <li className="game game-spacer-right">&nbsp;</li>
                <li className="game game-bottom ">Cincinnati <span>63</span></li>
        
                <li className="spacer">&nbsp;</li>
                
                <li className="game game-top winner">Duke <span>73</span></li>
                <li className="game game-spacer-right">&nbsp;</li>
                <li className="game game-bottom ">Albany <span>61</span></li>
        
                <li className="spacer">&nbsp;</li>
            </ul>
            <ul className="round round-2">
                <li className="spacer">&nbsp;</li>
                
                <li className="game game-top winner">Lousville <span>82</span></li>
                <li className="game game-spacer-right">&nbsp;</li>
                <li className="game game-bottom ">Colo St <span>56</span></li>
        
                <li className="spacer">&nbsp;</li>
                
                <li className="game game-top winner">Oregon <span>74</span></li>
                <li className="game game-spacer-right">&nbsp;</li>
                <li className="game game-bottom ">Saint Louis <span>57</span></li>
        
                <li className="spacer">&nbsp;</li>
                
                <li className="game game-top ">Memphis <span>48</span></li>
                <li className="game game-spacer-right">&nbsp;</li>
                <li className="game game-bottom winner">Mich St <span>70</span></li>
        
                <li className="spacer">&nbsp;</li>
                
                <li className="game game-top ">Creighton <span>50</span></li>
                <li className="game game-spacer-right">&nbsp;</li>
                <li className="game game-bottom winner">Duke <span>66</span></li>
        
                <li className="spacer">&nbsp;</li>
            </ul>
            <ul className="round round-3">
                <li className="spacer">&nbsp;</li>
                
                <li className="game game-top winner">Lousville <span>77</span></li>
                <li className="game game-spacer-right">&nbsp;</li>
                <li className="game game-bottom ">Oregon <span>69</span></li>
        
                <li className="spacer">&nbsp;</li>
                
                <li className="game game-top ">Mich St <span>61</span></li>
                <li className="game game-spacer-right">&nbsp;</li>
                <li className="game game-bottom winner">Duke <span>71</span></li>
        
                <li className="spacer">&nbsp;</li>
            </ul>
            <ul className="round round-4">
                <li className="spacer">&nbsp;</li>
                
                <li className="game game-top winner">Lousville <span>85</span></li>
                <li className="game game-spacer-right">&nbsp;</li>
                <li className="game game-bottom ">Duke <span>63</span></li>
                
                <li className="spacer">&nbsp;</li>
            </ul>		
            </div>
            <div className="flex-inital w-8"></div>
        </div>
    )
  }