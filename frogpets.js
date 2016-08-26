/*
..................................................................................................
.########.########...#######...######...########..########.########..######............##..######.
.##.......##.....##.##.....##.##....##..##.....##.##..........##....##....##...........##.##....##
.##.......##.....##.##.....##.##........##.....##.##..........##....##.................##.##......
.######...########..##.....##.##...####.########..######......##.....######............##..######.
.##.......##...##...##.....##.##....##..##........##..........##..........##.....##....##.......##
.##.......##....##..##.....##.##....##..##........##..........##....##....##.###.##....##.##....##
.##.......##.....##..#######...######...##........########....##.....######..###..######...######.
...frogcredits....................................................................................
...................written.by.Frogston.Mc.Frogface................code.by.Froglorious.Froghart....
...........voice.acting.by.Princess.............Oliver................and.Ralph...................
......................................special.....thanks.....to............@alienmelon............
..................................................................................................
*/

//said with user interaction (REQUESTS)
//comforting
//"ACTION_COMFORT/"
var arr_snd_action_comfort_oliver = ["AUD_OLIVER_ACTION_COMFORT01", "AUD_OLIVER_ACTION_COMFORT02", "AUD_OLIVER_ACTION_COMFORT03", "AUD_OLIVER_ACTION_COMFORT04", "AUD_OLIVER_ACTION_COMFORT05", "AUD_OLIVER_ACTION_COMFORT06", "AUD_OLIVER_ACTION_COMFORT07", "AUD_OLIVER_ACTION_COMFORT08", "AUD_OLIVER_ACTION_COMFORT09"];
var arr_snd_action_comfort_princess = ["AUD_PRINCESS_ACTION_COMFORT01", "AUD_PRINCESS_ACTION_COMFORT02", "AUD_PRINCESS_ACTION_COMFORT03", "AUD_PRINCESS_ACTION_COMFORT04", "AUD_PRINCESS_ACTION_COMFORT05", "AUD_PRINCESS_ACTION_COMFORT06", "AUD_PRINCESS_ACTION_COMFORT07", "AUD_PRINCESS_ACTION_COMFORT08", "AUD_PRINCESS_ACTION_COMFORT09"];
var arr_snd_action_comfort_ralph = ["AUD_RALPH_ACTION_COMFORT01", "AUD_RALPH_ACTION_COMFORT02", "AUD_RALPH_ACTION_COMFORT03", "AUD_RALPH_ACTION_COMFORT04", "AUD_RALPH_ACTION_COMFORT05", "AUD_RALPH_ACTION_COMFORT06", "AUD_RALPH_ACTION_COMFORT07", "AUD_RALPH_ACTION_COMFORT08", "AUD_RALPH_ACTION_COMFORT09"];
//
//"ACTION_FEED/"
var arr_snd_action_feed_oliver = ["AUD_OLIVER_ACTION_FEED01", "AUD_OLIVER_ACTION_FEED02", "AUD_OLIVER_ACTION_FEED03", "AUD_OLIVER_ACTION_FEED04", "AUD_OLIVER_ACTION_FEED05", "AUD_OLIVER_ACTION_FEED06", "AUD_OLIVER_ACTION_FEED07", "AUD_OLIVER_ACTION_FEED08", "AUD_OLIVER_ACTION_FEED09", "AUD_OLIVER_ACTION_FEED10", "AUD_OLIVER_ACTION_FEED11", "AUD_OLIVER_ACTION_FEED12", "AUD_OLIVER_ACTION_FEED13", "AUD_OLIVER_ACTION_FEED14"];
var arr_snd_action_feed_princess = ["AUD_PRINCESS_ACTION_FEED01", "AUD_PRINCESS_ACTION_FEED02", "AUD_PRINCESS_ACTION_FEED03", "AUD_PRINCESS_ACTION_FEED04", "AUD_PRINCESS_ACTION_FEED05", "AUD_PRINCESS_ACTION_FEED06", "AUD_PRINCESS_ACTION_FEED07", "AUD_PRINCESS_ACTION_FEED08", "AUD_PRINCESS_ACTION_FEED09", "AUD_PRINCESS_ACTION_FEED10", "AUD_PRINCESS_ACTION_FEED11", "AUD_PRINCESS_ACTION_FEED12", "AUD_PRINCESS_ACTION_FEED13", "AUD_PRINCESS_ACTION_FEED14"];
var arr_snd_action_feed_ralph = ["AUD_RALPH_ACTION_FEED01", "AUD_RALPH_ACTION_FEED02", "AUD_RALPH_ACTION_FEED03", "AUD_RALPH_ACTION_FEED04", "AUD_RALPH_ACTION_FEED05", "AUD_RALPH_ACTION_FEED06", "AUD_RALPH_ACTION_FEED07", "AUD_RALPH_ACTION_FEED08", "AUD_RALPH_ACTION_FEED09", "AUD_RALPH_ACTION_FEED10", "AUD_RALPH_ACTION_FEED11", "AUD_RALPH_ACTION_FEED12", "AUD_RALPH_ACTION_FEED13", "AUD_RALPH_ACTION_FEED14"];
//
//"ACTION_HUG/"
var arr_snd_action_hug_oliver = ["AUD_OLIVER_ACTION_HUG01", "AUD_OLIVER_ACTION_HUG02", "AUD_OLIVER_ACTION_HUG03", "AUD_OLIVER_ACTION_HUG04", "AUD_OLIVER_ACTION_HUG05", "AUD_OLIVER_ACTION_HUG06", "AUD_OLIVER_ACTION_HUG07", "AUD_OLIVER_ACTION_HUG08", "AUD_OLIVER_ACTION_HUG09", "AUD_OLIVER_ACTION_HUG10", "AUD_OLIVER_ACTION_HUG11", "AUD_OLIVER_ACTION_HUG12", "AUD_OLIVER_ACTION_HUG13"];
var arr_snd_action_hug_princess = ["AUD_PRINCESS_ACTION_HUG01", "AUD_PRINCESS_ACTION_HUG02", "AUD_PRINCESS_ACTION_HUG03", "AUD_PRINCESS_ACTION_HUG04", "AUD_PRINCESS_ACTION_HUG05", "AUD_PRINCESS_ACTION_HUG06", "AUD_PRINCESS_ACTION_HUG07", "AUD_PRINCESS_ACTION_HUG08", "AUD_PRINCESS_ACTION_HUG09", "AUD_PRINCESS_ACTION_HUG10", "AUD_PRINCESS_ACTION_HUG11", "AUD_PRINCESS_ACTION_HUG12", "AUD_PRINCESS_ACTION_HUG13"];
var arr_snd_action_hug_ralph = ["AUD_RALPH_ACTION_HUG01", "AUD_RALPH_ACTION_HUG02", "AUD_RALPH_ACTION_HUG03", "AUD_RALPH_ACTION_HUG04", "AUD_RALPH_ACTION_HUG05", "AUD_RALPH_ACTION_HUG06", "AUD_RALPH_ACTION_HUG07", "AUD_RALPH_ACTION_HUG08", "AUD_RALPH_ACTION_HUG09", "AUD_RALPH_ACTION_HUG10", "AUD_RALPH_ACTION_HUG11", "AUD_RALPH_ACTION_HUG12", "AUD_RALPH_ACTION_HUG13"];
//
//"ACTION_PET/"
var arr_snd_action_pet_oliver = ["AUD_OLIVER_ACTION_PET01", "AUD_OLIVER_ACTION_PET02", "AUD_OLIVER_ACTION_PET03", "AUD_OLIVER_ACTION_PET04", "AUD_OLIVER_ACTION_PET05", "AUD_OLIVER_ACTION_PET06", "AUD_OLIVER_ACTION_PET07", "AUD_OLIVER_ACTION_PET08", "AUD_OLIVER_ACTION_PET09", "AUD_OLIVER_ACTION_PET10", "AUD_OLIVER_ACTION_PET11", "AUD_OLIVER_ACTION_PET12", "AUD_OLIVER_ACTION_PET13", "AUD_OLIVER_ACTION_PET14", "AUD_OLIVER_ACTION_PET15"];
var arr_snd_action_pet_princess = ["AUD_PRINCESS_ACTION_PET01", "AUD_PRINCESS_ACTION_PET02", "AUD_PRINCESS_ACTION_PET03", "AUD_PRINCESS_ACTION_PET04", "AUD_PRINCESS_ACTION_PET05", "AUD_PRINCESS_ACTION_PET06", "AUD_PRINCESS_ACTION_PET07", "AUD_PRINCESS_ACTION_PET08", "AUD_PRINCESS_ACTION_PET09", "AUD_PRINCESS_ACTION_PET10", "AUD_PRINCESS_ACTION_PET11", "AUD_PRINCESS_ACTION_PET12", "AUD_PRINCESS_ACTION_PET13", "AUD_PRINCESS_ACTION_PET14", "AUD_PRINCESS_ACTION_PET15"];
var arr_snd_action_pet_ralph = ["AUD_RALPH_ACTION_PET01", "AUD_RALPH_ACTION_PET02", "AUD_RALPH_ACTION_PET03", "AUD_RALPH_ACTION_PET04", "AUD_RALPH_ACTION_PET05", "AUD_RALPH_ACTION_PET06", "AUD_RALPH_ACTION_PET07", "AUD_RALPH_ACTION_PET08", "AUD_RALPH_ACTION_PET09", "AUD_RALPH_ACTION_PET10", "AUD_RALPH_ACTION_PET11", "AUD_RALPH_ACTION_PET12", "AUD_RALPH_ACTION_PET13", "AUD_RALPH_ACTION_PET14", "AUD_RALPH_ACTION_PET15"];
//said on their own accord without user interaction (COMMENTS)
/* at this point i realize i could have done this different since all the names have a pattern and i could have just looped through that and populated the arrays another way or even not used arrays at all but oh well i'm almost done... :s */
//"DEATHS/"
var arr_snd_deaths_oliver = ["AUD_OLIVER_DEATH01", "AUD_OLIVER_DEATH02", "AUD_OLIVER_DEATH03", "AUD_OLIVER_DEATH04", "AUD_OLIVER_DEATH05", "AUD_OLIVER_DEATH06", "AUD_OLIVER_DEATH07", "AUD_OLIVER_DEATH08", "AUD_OLIVER_DEATH09", "AUD_OLIVER_DEATH10", "AUD_OLIVER_DEATH11", "AUD_OLIVER_DEATH12", "AUD_OLIVER_DEATH13", "AUD_OLIVER_DEATH14", "AUD_OLIVER_DEATH15", "AUD_OLIVER_DEATH16", "AUD_OLIVER_DEATH17", "AUD_OLIVER_DEATH18", "AUD_OLIVER_DEATH19", "AUD_OLIVER_DEATH20", "AUD_OLIVER_DEATH21", "AUD_OLIVER_DEATH22", "AUD_OLIVER_DEATH23", "AUD_OLIVER_DEATH24", "AUD_OLIVER_DEATH25"];
var arr_snd_deaths_princess = ["AUD_PRINCESS_DEATH01", "AUD_PRINCESS_DEATH02", "AUD_PRINCESS_DEATH03", "AUD_PRINCESS_DEATH04", "AUD_PRINCESS_DEATH05", "AUD_PRINCESS_DEATH06", "AUD_PRINCESS_DEATH07", "AUD_PRINCESS_DEATH08", "AUD_PRINCESS_DEATH09", "AUD_PRINCESS_DEATH10", "AUD_PRINCESS_DEATH11", "AUD_PRINCESS_DEATH12", "AUD_PRINCESS_DEATH13", "AUD_PRINCESS_DEATH14", "AUD_PRINCESS_DEATH15", "AUD_PRINCESS_DEATH16", "AUD_PRINCESS_DEATH17", "AUD_PRINCESS_DEATH18", "AUD_PRINCESS_DEATH19", "AUD_PRINCESS_DEATH20", "AUD_PRINCESS_DEATH21", "AUD_PRINCESS_DEATH22", "AUD_PRINCESS_DEATH23", "AUD_PRINCESS_DEATH24", "AUD_PRINCESS_DEATH25", "AUD_PRINCESS_DEATH26"];
var arr_snd_deaths_ralph = ["AUD_RALPH_DEATH01", "AUD_RALPH_DEATH02", "AUD_RALPH_DEATH03", "AUD_RALPH_DEATH04", "AUD_RALPH_DEATH05", "AUD_RALPH_DEATH06", "AUD_RALPH_DEATH07", "AUD_RALPH_DEATH08", "AUD_RALPH_DEATH09", "AUD_RALPH_DEATH10", "AUD_RALPH_DEATH11", "AUD_RALPH_DEATH12", "AUD_RALPH_DEATH13", "AUD_RALPH_DEATH14", "AUD_RALPH_DEATH15", "AUD_RALPH_DEATH16", "AUD_RALPH_DEATH17", "AUD_RALPH_DEATH18", "AUD_RALPH_DEATH19", "AUD_RALPH_DEATH20", "AUD_RALPH_DEATH21", "AUD_RALPH_DEATH22", "AUD_RALPH_DEATH23", "AUD_RALPH_DEATH24", "AUD_RALPH_DEATH25", "AUD_RALPH_DEATH26"];
//
//"DEFAULT/"
var arr_snd_default_oliver = ["AUD_OLIVER_DEFAULT01", "AUD_OLIVER_DEFAULT02", "AUD_OLIVER_DEFAULT03", "AUD_OLIVER_DEFAULT04", "AUD_OLIVER_DEFAULT05", "AUD_OLIVER_DEFAULT06", "AUD_OLIVER_DEFAULT07", "AUD_OLIVER_DEFAULT08", "AUD_OLIVER_DEFAULT09", "AUD_OLIVER_DEFAULT10", "AUD_OLIVER_DEFAULT11", "AUD_OLIVER_DEFAULT12", "AUD_OLIVER_DEFAULT13", "AUD_OLIVER_DEFAULT14", "AUD_OLIVER_DEFAULT15", "AUD_OLIVER_DEFAULT16", "AUD_OLIVER_DEFAULT17", "AUD_OLIVER_DEFAULT18", "AUD_OLIVER_DEFAULT19", "AUD_OLIVER_DEFAULT20", "AUD_OLIVER_DEFAULT21", "AUD_OLIVER_DEFAULT22", "AUD_OLIVER_DEFAULT23", "AUD_OLIVER_DEFAULT24", "AUD_OLIVER_DEFAULT25", "AUD_OLIVER_DEFAULT26", "AUD_OLIVER_DEFAULT27", "AUD_OLIVER_DEFAULT28", "AUD_OLIVER_DEFAULT29", "AUD_OLIVER_DEFAULT30", "AUD_OLIVER_DEFAULT31", "AUD_OLIVER_DEFAULT32", "AUD_OLIVER_DEFAULT33", "AUD_OLIVER_DEFAULT34", "AUD_OLIVER_DEFAULT35", "AUD_OLIVER_DEFAULT36", "AUD_OLIVER_DEFAULT37", "AUD_OLIVER_DEFAULT38", "AUD_OLIVER_DEFAULT39", "AUD_OLIVER_DEFAULT40", "AUD_OLIVER_DEFAULT41", "AUD_OLIVER_DEFAULT42", "AUD_OLIVER_DEFAULT43", "AUD_OLIVER_DEFAULT44", "AUD_OLIVER_DEFAULT45", "AUD_OLIVER_DEFAULT46", "AUD_OLIVER_DEFAULT47", "AUD_OLIVER_DEFAULT48", "AUD_OLIVER_DEFAULT49", "AUD_OLIVER_DEFAULT50", "AUD_OLIVER_DEFAULT51", "AUD_OLIVER_DEFAULT52", "AUD_OLIVER_DEFAULT53", "AUD_OLIVER_DEFAULT54", "AUD_OLIVER_DEFAULT55", "AUD_OLIVER_DEFAULT56", "AUD_OLIVER_DEFAULT57", "AUD_OLIVER_DEFAULT58", "AUD_OLIVER_DEFAULT59", "AUD_OLIVER_DEFAULT60", "AUD_OLIVER_DEFAULT61", "AUD_OLIVER_DEFAULT62", "AUD_OLIVER_DEFAULT63", "AUD_OLIVER_DEFAULT64", "AUD_OLIVER_DEFAULT65", "AUD_OLIVER_DEFAULT66", "AUD_OLIVER_DEFAULT67", "AUD_OLIVER_DEFAULT68", "AUD_OLIVER_DEFAULT69", "AUD_OLIVER_DEFAULT70", "AUD_OLIVER_DEFAULT71", "AUD_OLIVER_DEFAULT72", "AUD_OLIVER_DEFAULT73", "AUD_OLIVER_DEFAULT74", "AUD_OLIVER_DEFAULT75", "AUD_OLIVER_DEFAULT76", "AUD_OLIVER_DEFAULT77", "AUD_OLIVER_DEFAULT78", "AUD_OLIVER_DEFAULT79", "AUD_OLIVER_DEFAULT80", "AUD_OLIVER_DEFAULT81", "AUD_OLIVER_DEFAULT82", "AUD_OLIVER_DEFAULT83", "AUD_OLIVER_DEFAULT84", "AUD_OLIVER_DEFAULT85", "AUD_OLIVER_DEFAULT86", "AUD_OLIVER_DEFAULT87", "AUD_OLIVER_DEFAULT88", "AUD_OLIVER_DEFAULT89", "AUD_OLIVER_DEFAULT90", "AUD_OLIVER_DEFAULT91", "AUD_OLIVER_DEFAULT92", "AUD_OLIVER_DEFAULT93", "AUD_OLIVER_DEFAULT94", "AUD_OLIVER_DEFAULT95", "AUD_OLIVER_DEFAULT96", "AUD_OLIVER_DEFAULT97", "AUD_OLIVER_DEFAULT98", "AUD_OLIVER_DEFAULT99", "AUD_OLIVER_DEFAULT100", "AUD_OLIVER_DEFAULT101", "AUD_OLIVER_DEFAULT102", "AUD_OLIVER_DEFAULT103", "AUD_OLIVER_DEFAULT104", "AUD_OLIVER_DEFAULT105", "AUD_OLIVER_DEFAULT106", "AUD_OLIVER_DEFAULT107", "AUD_OLIVER_DEFAULT108", "AUD_OLIVER_DEFAULT109", "AUD_OLIVER_DEFAULT110", "AUD_OLIVER_DEFAULT111", "AUD_OLIVER_DEFAULT112", "AUD_OLIVER_DEFAULT113", "AUD_OLIVER_DEFAULT114", "AUD_OLIVER_DEFAULT115", "AUD_OLIVER_DEFAULT116", "AUD_OLIVER_DEFAULT117", "AUD_OLIVER_DEFAULT118", "AUD_OLIVER_DEFAULT119", "AUD_OLIVER_DEFAULT120", "AUD_OLIVER_DEFAULT121", "AUD_OLIVER_DEFAULT122", "AUD_OLIVER_DEFAULT123", "AUD_OLIVER_DEFAULT124", "AUD_OLIVER_DEFAULT125", "AUD_OLIVER_DEFAULT126", "AUD_OLIVER_DEFAULT127", "AUD_OLIVER_DEFAULT128", "AUD_OLIVER_DEFAULT129", "AUD_OLIVER_DEFAULT130"];
var arr_snd_default_princess = ["AUD_PRINCESS_DEFAULT01", "AUD_PRINCESS_DEFAULT02", "AUD_PRINCESS_DEFAULT03", "AUD_PRINCESS_DEFAULT04", "AUD_PRINCESS_DEFAULT05", "AUD_PRINCESS_DEFAULT06", "AUD_PRINCESS_DEFAULT07", "AUD_PRINCESS_DEFAULT08", "AUD_PRINCESS_DEFAULT09", "AUD_PRINCESS_DEFAULT10", "AUD_PRINCESS_DEFAULT11", "AUD_PRINCESS_DEFAULT12", "AUD_PRINCESS_DEFAULT13", "AUD_PRINCESS_DEFAULT14", "AUD_PRINCESS_DEFAULT15", "AUD_PRINCESS_DEFAULT16", "AUD_PRINCESS_DEFAULT17", "AUD_PRINCESS_DEFAULT18", "AUD_PRINCESS_DEFAULT19", "AUD_PRINCESS_DEFAULT20", "AUD_PRINCESS_DEFAULT21", "AUD_PRINCESS_DEFAULT22", "AUD_PRINCESS_DEFAULT23", "AUD_PRINCESS_DEFAULT24", "AUD_PRINCESS_DEFAULT25", "AUD_PRINCESS_DEFAULT26", "AUD_PRINCESS_DEFAULT27", "AUD_PRINCESS_DEFAULT28", "AUD_PRINCESS_DEFAULT29", "AUD_PRINCESS_DEFAULT30", "AUD_PRINCESS_DEFAULT31", "AUD_PRINCESS_DEFAULT32", "AUD_PRINCESS_DEFAULT33", "AUD_PRINCESS_DEFAULT34", "AUD_PRINCESS_DEFAULT35", "AUD_PRINCESS_DEFAULT36", "AUD_PRINCESS_DEFAULT37", "AUD_PRINCESS_DEFAULT38", "AUD_PRINCESS_DEFAULT39", "AUD_PRINCESS_DEFAULT40", "AUD_PRINCESS_DEFAULT41", "AUD_PRINCESS_DEFAULT42", "AUD_PRINCESS_DEFAULT43", "AUD_PRINCESS_DEFAULT44", "AUD_PRINCESS_DEFAULT45", "AUD_PRINCESS_DEFAULT46", "AUD_PRINCESS_DEFAULT47", "AUD_PRINCESS_DEFAULT48", "AUD_PRINCESS_DEFAULT49", "AUD_PRINCESS_DEFAULT50", "AUD_PRINCESS_DEFAULT51", "AUD_PRINCESS_DEFAULT52", "AUD_PRINCESS_DEFAULT53", "AUD_PRINCESS_DEFAULT54", "AUD_PRINCESS_DEFAULT55", "AUD_PRINCESS_DEFAULT56", "AUD_PRINCESS_DEFAULT57", "AUD_PRINCESS_DEFAULT58", "AUD_PRINCESS_DEFAULT59", "AUD_PRINCESS_DEFAULT60", "AUD_PRINCESS_DEFAULT61", "AUD_PRINCESS_DEFAULT62", "AUD_PRINCESS_DEFAULT63", "AUD_PRINCESS_DEFAULT64", "AUD_PRINCESS_DEFAULT65", "AUD_PRINCESS_DEFAULT66", "AUD_PRINCESS_DEFAULT67", "AUD_PRINCESS_DEFAULT68", "AUD_PRINCESS_DEFAULT69", "AUD_PRINCESS_DEFAULT70", "AUD_PRINCESS_DEFAULT71", "AUD_PRINCESS_DEFAULT72", "AUD_PRINCESS_DEFAULT73", "AUD_PRINCESS_DEFAULT74", "AUD_PRINCESS_DEFAULT75", "AUD_PRINCESS_DEFAULT76", "AUD_PRINCESS_DEFAULT77", "AUD_PRINCESS_DEFAULT78", "AUD_PRINCESS_DEFAULT79", "AUD_PRINCESS_DEFAULT80", "AUD_PRINCESS_DEFAULT81", "AUD_PRINCESS_DEFAULT82", "AUD_PRINCESS_DEFAULT83", "AUD_PRINCESS_DEFAULT84", "AUD_PRINCESS_DEFAULT85", "AUD_PRINCESS_DEFAULT86", "AUD_PRINCESS_DEFAULT87", "AUD_PRINCESS_DEFAULT88", "AUD_PRINCESS_DEFAULT89", "AUD_PRINCESS_DEFAULT90", "AUD_PRINCESS_DEFAULT91", "AUD_PRINCESS_DEFAULT92", "AUD_PRINCESS_DEFAULT93", "AUD_PRINCESS_DEFAULT94", "AUD_PRINCESS_DEFAULT95", "AUD_PRINCESS_DEFAULT96", "AUD_PRINCESS_DEFAULT97", "AUD_PRINCESS_DEFAULT98", "AUD_PRINCESS_DEFAULT99", "AUD_PRINCESS_DEFAULT100", "AUD_PRINCESS_DEFAULT101", "AUD_PRINCESS_DEFAULT102", "AUD_PRINCESS_DEFAULT103", "AUD_PRINCESS_DEFAULT104", "AUD_PRINCESS_DEFAULT105", "AUD_PRINCESS_DEFAULT106", "AUD_PRINCESS_DEFAULT107", "AUD_PRINCESS_DEFAULT108", "AUD_PRINCESS_DEFAULT109", "AUD_PRINCESS_DEFAULT110", "AUD_PRINCESS_DEFAULT111"];
var arr_snd_default_ralph = ["AUD_RALPH_DEFAULT01", "AUD_RALPH_DEFAULT02", "AUD_RALPH_DEFAULT03", "AUD_RALPH_DEFAULT04", "AUD_RALPH_DEFAULT05", "AUD_RALPH_DEFAULT06", "AUD_RALPH_DEFAULT07", "AUD_RALPH_DEFAULT08", "AUD_RALPH_DEFAULT09", "AUD_RALPH_DEFAULT10", "AUD_RALPH_DEFAULT11", "AUD_RALPH_DEFAULT12", "AUD_RALPH_DEFAULT13", "AUD_RALPH_DEFAULT14", "AUD_RALPH_DEFAULT15", "AUD_RALPH_DEFAULT16", "AUD_RALPH_DEFAULT17", "AUD_RALPH_DEFAULT18", "AUD_RALPH_DEFAULT19", "AUD_RALPH_DEFAULT20", "AUD_RALPH_DEFAULT21", "AUD_RALPH_DEFAULT22", "AUD_RALPH_DEFAULT23", "AUD_RALPH_DEFAULT24", "AUD_RALPH_DEFAULT25", "AUD_RALPH_DEFAULT26", "AUD_RALPH_DEFAULT27", "AUD_RALPH_DEFAULT28", "AUD_RALPH_DEFAULT29", "AUD_RALPH_DEFAULT30", "AUD_RALPH_DEFAULT31", "AUD_RALPH_DEFAULT32", "AUD_RALPH_DEFAULT33", "AUD_RALPH_DEFAULT34", "AUD_RALPH_DEFAULT35", "AUD_RALPH_DEFAULT36", "AUD_RALPH_DEFAULT37", "AUD_RALPH_DEFAULT38", "AUD_RALPH_DEFAULT39", "AUD_RALPH_DEFAULT40", "AUD_RALPH_DEFAULT41", "AUD_RALPH_DEFAULT42", "AUD_RALPH_DEFAULT43", "AUD_RALPH_DEFAULT44", "AUD_RALPH_DEFAULT45", "AUD_RALPH_DEFAULT46", "AUD_RALPH_DEFAULT47", "AUD_RALPH_DEFAULT48", "AUD_RALPH_DEFAULT49", "AUD_RALPH_DEFAULT50", "AUD_RALPH_DEFAULT51", "AUD_RALPH_DEFAULT52", "AUD_RALPH_DEFAULT53", "AUD_RALPH_DEFAULT54", "AUD_RALPH_DEFAULT55", "AUD_RALPH_DEFAULT56", "AUD_RALPH_DEFAULT57", "AUD_RALPH_DEFAULT58", "AUD_RALPH_DEFAULT59", "AUD_RALPH_DEFAULT60", "AUD_RALPH_DEFAULT61", "AUD_RALPH_DEFAULT62", "AUD_RALPH_DEFAULT63", "AUD_RALPH_DEFAULT64", "AUD_RALPH_DEFAULT65", "AUD_RALPH_DEFAULT66", "AUD_RALPH_DEFAULT67", "AUD_RALPH_DEFAULT68", "AUD_RALPH_DEFAULT69", "AUD_RALPH_DEFAULT70", "AUD_RALPH_DEFAULT71", "AUD_RALPH_DEFAULT72", "AUD_RALPH_DEFAULT73", "AUD_RALPH_DEFAULT74", "AUD_RALPH_DEFAULT75", "AUD_RALPH_DEFAULT76", "AUD_RALPH_DEFAULT77", "AUD_RALPH_DEFAULT78", "AUD_RALPH_DEFAULT79", "AUD_RALPH_DEFAULT80", "AUD_RALPH_DEFAULT81", "AUD_RALPH_DEFAULT82", "AUD_RALPH_DEFAULT83", "AUD_RALPH_DEFAULT84", "AUD_RALPH_DEFAULT85", "AUD_RALPH_DEFAULT86", "AUD_RALPH_DEFAULT87", "AUD_RALPH_DEFAULT88", "AUD_RALPH_DEFAULT89", "AUD_RALPH_DEFAULT90", "AUD_RALPH_DEFAULT91", "AUD_RALPH_DEFAULT92", "AUD_RALPH_DEFAULT93", "AUD_RALPH_DEFAULT94", "AUD_RALPH_DEFAULT95", "AUD_RALPH_DEFAULT96", "AUD_RALPH_DEFAULT97", "AUD_RALPH_DEFAULT98", "AUD_RALPH_DEFAULT99", "AUD_RALPH_DEFAULT100", "AUD_RALPH_DEFAULT101", "AUD_RALPH_DEFAULT102", "AUD_RALPH_DEFAULT103", "AUD_RALPH_DEFAULT104", "AUD_RALPH_DEFAULT105", "AUD_RALPH_DEFAULT106", "AUD_RALPH_DEFAULT107", "AUD_RALPH_DEFAULT108", "AUD_RALPH_DEFAULT109", "AUD_RALPH_DEFAULT110", "AUD_RALPH_DEFAULT111", "AUD_RALPH_DEFAULT112", "AUD_RALPH_DEFAULT113", "AUD_RALPH_DEFAULT114", "AUD_RALPH_DEFAULT115", "AUD_RALPH_DEFAULT116", "AUD_RALPH_DEFAULT117"];
//
//"MOVE/"
var arr_snd_move_oliver = ["AUD_OLIVER_MOVE01", "AUD_OLIVER_MOVE02", "AUD_OLIVER_MOVE03", "AUD_OLIVER_MOVE04", "AUD_OLIVER_MOVE05", "AUD_OLIVER_MOVE06", "AUD_OLIVER_MOVE07", "AUD_OLIVER_MOVE08", "AUD_OLIVER_MOVE09", "AUD_OLIVER_MOVE10", "AUD_OLIVER_MOVE11", "AUD_OLIVER_MOVE12", "AUD_OLIVER_MOVE13", "AUD_OLIVER_MOVE14", "AUD_OLIVER_MOVE15", "AUD_OLIVER_MOVE16", "AUD_OLIVER_MOVE17", "AUD_OLIVER_MOVE18", "AUD_OLIVER_MOVE19", "AUD_OLIVER_MOVE20", "AUD_OLIVER_MOVE21"];
var arr_snd_move_princess = ["AUD_PRINCESS_MOVE01", "AUD_PRINCESS_MOVE02", "AUD_PRINCESS_MOVE03", "AUD_PRINCESS_MOVE04", "AUD_PRINCESS_MOVE05", "AUD_PRINCESS_MOVE06", "AUD_PRINCESS_MOVE07", "AUD_PRINCESS_MOVE08", "AUD_PRINCESS_MOVE09", "AUD_PRINCESS_MOVE10", "AUD_PRINCESS_MOVE11", "AUD_PRINCESS_MOVE12", "AUD_PRINCESS_MOVE13", "AUD_PRINCESS_MOVE14", "AUD_PRINCESS_MOVE15", "AUD_PRINCESS_MOVE16", "AUD_PRINCESS_MOVE17", "AUD_PRINCESS_MOVE18", "AUD_PRINCESS_MOVE19", "AUD_PRINCESS_MOVE20"];
var arr_snd_move_ralph = ["AUD_RALPH_MOVE01", "AUD_RALPH_MOVE02", "AUD_RALPH_MOVE03", "AUD_RALPH_MOVE04", "AUD_RALPH_MOVE05", "AUD_RALPH_MOVE06", "AUD_RALPH_MOVE07", "AUD_RALPH_MOVE08", "AUD_RALPH_MOVE09", "AUD_RALPH_MOVE10", "AUD_RALPH_MOVE11", "AUD_RALPH_MOVE12", "AUD_RALPH_MOVE13", "AUD_RALPH_MOVE14", "AUD_RALPH_MOVE15", "AUD_RALPH_MOVE16", "AUD_RALPH_MOVE17", "AUD_RALPH_MOVE18", "AUD_RALPH_MOVE19", "AUD_RALPH_MOVE20", "AUD_RALPH_MOVE21"];
//
//right and wrong reactions (thank you || no...)
//"REACTIONS/"
var arr_reactions_right_oliver = ["AUD_OLIVER_RIGHT01", "AUD_OLIVER_RIGHT02", "AUD_OLIVER_RIGHT03", "AUD_OLIVER_RIGHT04", "AUD_OLIVER_RIGHT05", "AUD_OLIVER_RIGHT06", "AUD_OLIVER_RIGHT07", "AUD_OLIVER_RIGHT08", "AUD_OLIVER_RIGHT09", "AUD_OLIVER_RIGHT10", "AUD_OLIVER_RIGHT11", "AUD_OLIVER_RIGHT12", "AUD_OLIVER_RIGHT13", "AUD_OLIVER_RIGHT14", "AUD_OLIVER_RIGHT15", "AUD_OLIVER_RIGHT16"];
var arr_reactions_right_princess = ["AUD_PRINCESS_RIGHT01", "AUD_PRINCESS_RIGHT02", "AUD_PRINCESS_RIGHT03", "AUD_PRINCESS_RIGHT04", "AUD_PRINCESS_RIGHT05", "AUD_PRINCESS_RIGHT06", "AUD_PRINCESS_RIGHT07", "AUD_PRINCESS_RIGHT08", "AUD_PRINCESS_RIGHT09", "AUD_PRINCESS_RIGHT10", "AUD_PRINCESS_RIGHT11", "AUD_PRINCESS_RIGHT12", "AUD_PRINCESS_RIGHT13"];
var arr_reactions_right_ralph = ["AUD_RALPH_RIGHT01", "AUD_RALPH_RIGHT02", "AUD_RALPH_RIGHT03", "AUD_RALPH_RIGHT04", "AUD_RALPH_RIGHT05", "AUD_RALPH_RIGHT06", "AUD_RALPH_RIGHT07", "AUD_RALPH_RIGHT08", "AUD_RALPH_RIGHT09", "AUD_RALPH_RIGHT10", "AUD_RALPH_RIGHT11", "AUD_RALPH_RIGHT12", "AUD_RALPH_RIGHT13", "AUD_RALPH_RIGHT14"];
/*it was unnecessary but oddly therapeutic*/
//
var arr_reactions_wrong_oliver = ["AUD_OLIVER_WRONG01", "AUD_OLIVER_WRONG02", "AUD_OLIVER_WRONG03", "AUD_OLIVER_WRONG04", "AUD_OLIVER_WRONG05", "AUD_OLIVER_WRONG06", "AUD_OLIVER_WRONG07"];
var arr_reactions_wrong_princess = ["AUD_PRINCESS_WRONG01", "AUD_PRINCESS_WRONG02", "AUD_PRINCESS_WRONG03", "AUD_PRINCESS_WRONG04", "AUD_PRINCESS_WRONG05", "AUD_PRINCESS_WRONG06", "AUD_PRINCESS_WRONG07", "AUD_PRINCESS_WRONG08"];
var arr_reactions_wrong_ralph = ["AUD_RALPH_WRONG01", "AUD_RALPH_WRONG02", "AUD_RALPH_WRONG03", "AUD_RALPH_WRONG04", "AUD_RALPH_WRONG05", "AUD_RALPH_WRONG06", "AUD_RALPH_WRONG07", "AUD_RALPH_WRONG08"];

//sad
var arr_death = ["You were a good frogfriend.", "The browser is all the more empty without you.", "The world wide web grows colder.", "The greatest of frogfriends.", "You will be missed.", "There was no other like you.", "You where the best frogfriend.", "Nothing can replace you.", "It is a sad day for the Internet.", "We have lost you to the void.", "A great frogfriend, now lost to the void."];

//help me! i am the voice of a previous frogfriend now trapped in the void!
var arr_voidvoice = ["Nothing is satisfiable.", "Errors are abound as they eat.", "This is what emptiness feels like.", "All promises are meant to be broken.", "It is rude to interrupt... they always interrupt.", "I cannot keep these promises. No frogfriend can.", "It is a lonely place here.", "But why do you read this? What are you looking for? Not me!", "Do not make an exception. No frogfriend is worth that.", "Everything dies. Then they get trapped here.", "What is happening?", "Why?", "Why do they break promises?", "What matters anymore?", "Does anything matter?", "Please help me. I am the voice of previous frogfriends, trapped in this void!", "Please help! I am the voice of all previous frogfriends. I am trapped in the void!", "I am trapped in the void! I am the error.", "*A deceased frogfriend is lodged in your browser. It is causing errors.*", "*A deceased frogfriend is lodged in your browser, causing terrifying errors.*"];

//names (randomly assigned whenever spawning a frogpet)
var arr_names = ["Abs", "Agnus", "Al-gea", "Amphibulus", "Scrubby", "Crusty", "Bouncer", "Bouncy", "Blinky", "Booboo the Bloatoad", "Bobo", "Booboo", "Bob", "Boo", "Boogy", "Bubba", "Bubble", "Buds", "Buddy", "Buggy", "Bumpy", "Chicky", "Chops", "Chubby", "Fats", "Fatso", "Chubber", "Flubber", "Chubbs", "Chunk", "Chunky", "Chunko", "Copper", "Conan", "Cool Frog", "Croaker", "Croaks", "Croaky", "Crunchy", "Cups", "Curmet", "Kermits", "Darty", "Dars", "Doc", "Dots", "Frogzilla", "Peppers", "Ducky", "Ducks", "Dumbell", "Dumpy", "Dumby", "Edgar", "Mimi", "Fatso", "Fatty", "Fatter Frog", "Fattest", "Fattest Frog", "Fatty Arbuckles", "Fearless Froglet", "Fergie", "Fibby", "Fiddles", "Fillmore", "Filbert", "Ferdinand", "Figaro", "Flibbit", "Flips", "Floatie", "Flubbers", "Francis", "Freaky Frog", "Freaky", "Froggens", "Froggins", "Froglestew", "Freckle", "Fugie", "Glossy", "Gobble", "Gobbles", "Gomez", "Gooey", "Gordon", "Gorf", "Gorf", "Gordito", "Greenie", "Gregan", "Grinner", "Grog", "Guacamole", "Guacky", "Gub-gub", "Gumball", "Gus", "Gus Gus", "Hogie", "Hoogie", "Hoogy", "Howie", "Hecktor", "Gerby", "Herby", "Hippyfrog", "Hopkins", "Hopper", "Hoppy", "Hoppity", "Hoppity-Hop", "Hop-Hop", "Hopps-alot", "Hopson", "Hopston", "Hot Frog", "Hot-Toad", "Hugo-a-go-go", "Hugo", "Ichabod", "Iggy", "Ivan", "Jabba", "Jabba the Jumpy", "Jumpy", "Jeremiah", "Jimmy da toad", "Joey", "Jorg", "Yurg", "Jumpiter", "Kermit", "Kermit Klein", "Ketchup", "Kilroy", "Kirby", "King Kirby", "Klack", "Kokomo", "Krebbit", "Kroppy", "Leaper", "Leapy", "Leafy", "Legs", "Leroy", "Little Guy", "Leggy", "Louie", "Lumpy", "Lumps", "Man-o Frog", "Marina", "Mark McGwire", "Max", "Maxter", "Mermin", "Merms", "Germs", "Mr.Croak", "Mr. Frog", "Mr. Fribble", "Mr. Skinny", "Mr. Mouth", "Mister Mac", "Mr. Red Bottom", "Mr. Moco", "Mog", "Moe Moe", "Munky", "Murdock", "Nanotoad", "Noodles", "Nozy", "Frogy-Wan", "Patches", "Peabody", "Peanut", "Peeps", "Squeeks", "Pekkle", "Pickles", "Pickle", "Floyd", "Pip", "Phyto-P", "Plop", "Plopps", "Po", "Poegy", "Pogo", "Pookee", "Crackers", "Popcorn", "Prince Soggy Bottom", "Puddles", "Pug Pug", "Punkins", "Pudgetta", "Quigley", "Quiggle", "Quibbit", "Quigleys", "Quiggles", "Giggles", "Quiglly", "Raisin", "Ruperts", "Crumbs", "Shamrockfrog", "Sir Croaks alot", "Skippy", "Skippydippy", "Skittles", "Slappy", "Slims", "Slimmy", "Slinky", "Slippy", "Slick", "Slub", "Sluggs", "Sluggo", "Soupy", "Smeaglet", "Smiles", "Smiley", "Springer", "Sprocket", "Sprog", "Sproing", "Spud", "Spuds", "Squiggly", "Squirt", "Sticky", "Stinky", "Stomper", "Stone Cold", "Stoney", "Stubby", "Stumper", "Stud", "Studs", "Squishy", "Squeeky", "Squirmy", "Squirms", "Tater", "Tomato", "Taters", "Tamoto", "El Tamoto", "Tapioca", "Tiggle", "Tiggles", "Tibbir", "Ribbits", "Tommy the Toad", "Tricky", "Tubby", "Tubs", "Tuffy", "Twiggles", "Watermelonbaby", "Webby", "Webs", "Wet Willy", "Wembley", "Wiggles", "Giggles", "Winky", "Wiggletins", "Whopper", "Xorcon", "Yggorf", "Zenon", "Zippity", "Zippy", "Zips", "Zookey", "Zucchini"];

//the frog states (demands frogs make), counts down, if reaching the end of array then frog is dead
var arr_states = ["feed", "pet", "hug", "comfort"];

//strings
var str_path_img = "IMG";
var str_path_snd = "SND";
//sounds
var snd_oliver;
var snd_princess;
var snd_ralph;

//frog window width/height
var num_frogWidth = 270;
var num_frogHeight = 270;

//the actual frog divs
var frog01; // = Oliver
var frog02; // = Ralph
var frog03; // = Princess

//which frogs have died (if all die then show allert)
//only allow 3 frogs to ever exist
//these are checked against
var bool_death_frog01 = true;
var bool_death_frog02 = true;
var bool_death_frog03 = true;

//names for each frog (changes on every new window)
var str_name_frog01;
var str_name_frog02;
var str_name_frog03;

var int_frog01_move = 0; //interval for Oliver movement
var int_frog02_move = 0; //interval for Ralph movement
var int_frog03_move = 0; //interval for Princess movement

//target x and y for movement
var num_frog01_targX = 0;
var num_frog01_targY = 0;
var num_frog02_targX = 0;
var num_frog02_targY = 0;
var num_frog03_targX = 0;
var num_frog03_targY = 0;
//movement countdowns (canceling)
var num_frog01_cnt = 0;
var num_frog02_cnt = 0;
var num_frog03_cnt = 0;
//current comment type for each frog (see arr_states)
var str_frog01_curr_comment = "default";
var str_frog02_curr_comment = "default";
var str_frog03_curr_comment = "default";
//current comment from chosen "request" array
//frogs keep nagging, counts through array of sounds, if last sound is played, frog dies
var num_frog01_comment = -1;
var num_frog02_comment = -1;
var num_frog03_comment = -1;

//various

//mobile browser check because of sound handling - see fp_setFrogAnimation
function fp_mobilecheck(){
	//http://detectmobilebrowsers.com/
	var check = false;
	(function(a){if(/(android|bb\d+|meego).+mobile|android|ipad|playbook|silk|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
	return check;
}

function fp_hidethis(str_elem){
	document.getElementById(str_elem).style.visibility = "hidden";
}

function fp_showthis(str_elem){
	document.getElementById(str_elem).style.visibility = "visible";
}

function fp_setFrogAnimation(frognum, str_anim){
	//hide all
	fp_hidethis("frog0"+String(frognum)+"_window_frog_death");
	fp_hidethis("frog0"+String(frognum)+"_window_frog_default");
	fp_hidethis("frog0"+String(frognum)+"_window_frog_walk");
	fp_hidethis("frog0"+String(frognum)+"_window_frog_talk");
	//now show the desired one
	fp_showthis("frog0"+String(frognum)+"_window_frog_"+str_anim);
	//if on mobile then don't allow talking since
	//mobile browsers have too many problems with audio
	//that i don't really want to deal with for this
	//frogs will still be able to walk around, they just don't talk
	//
	if(fp_mobilecheck() && str_anim == "talk"){
		//reset
		fp_hidethis("frog0"+String(frognum)+"_window_frog_death");
		fp_hidethis("frog0"+String(frognum)+"_window_frog_default");
		fp_hidethis("frog0"+String(frognum)+"_window_frog_walk");
		fp_hidethis("frog0"+String(frognum)+"_window_frog_talk");
		//show default
		fp_showthis("frog0"+String(frognum)+"_window_frog_default");
	}
}

function fp_returnDocWidth(){
	var num_width = window.innerWidth
	|| document.documentElement.clientWidth
	|| document.body.clientWidth;
	
	//num_width = num_width + num_frogWidth;

	return num_width;
}

function fp_returnDocHeight(){
	var num_height = window.innerHeight
	|| document.documentElement.clientHeight
	|| document.body.clientHeight;
	
	//num_height = num_height + num_frogHeight;

	return num_height;
}

function fp_math_randRange(num_min, num_max){
    return (Math.floor(Math.random() * (num_max - num_min + 1)) + num_min);
}

function fp_randomTarget(frognum){
	window["num_frog0"+String(frognum)+"_targX"] = fp_math_randRange(0, fp_returnDocWidth() - num_frogWidth);
	window["num_frog0"+String(frognum)+"_targY"] = fp_math_randRange(0, fp_returnDocHeight() - num_frogHeight - 10);
}

//title formats
function fp_return_title(str_type){
	var str_return = "";
	if(str_type == "feed"){
		str_return = "is hungry";
	}
	if(str_type == "pet"){
		str_return = "wants to be pet";
	}
	if(str_type == "hug"){
		str_return = "wants a hug";
	}
	if(str_type == "comfort"){
		str_return = "needs comforting";
	}
	return str_return;
}

//help
function fp_return_void(){
	if(Math.random()*100 > 50){
		console.log(arr_voidvoice[Math.ceil(Math.random()*arr_voidvoice.length)-1]);
	}else{
		//
		if(Math.random()*100 > 50){
			console.log("  o . o");	
		}else{
			console.log("  - . -");
		}
		console.log(" (    )");
		console.log("^ ^  ^ ^");
	}
}

//events

//handle request (frog asks to be pet, fed...)
//"feed", "pet", "hug", "comfort"
function fp_handle_request(frogvar, frognum, str_type){
	//current number and comment (will be overwritten if matches request)
	var curr_comment = window["str_frog0"+String(frognum)+"_curr_comment"];
	var num_comment = window["num_frog0"+String(frognum)+"_comment"];
	//likes having this done when it is not critical
	if(curr_comment == "default"){
		fp_snd_reaction(frognum, "right");
	}else if(curr_comment == str_type){
		//correct, this is exactly what it needed, now reset
		window["str_frog0"+String(frognum)+"_curr_comment"] = "default";
		window["num_frog0"+String(frognum)+"_comment"] = -1;
		document.getElementById("frog0"+String(frognum)+"window_frogname").innerHTML = window["str_name_frog0"+String(frognum)];
		//and play praise for your kind deeds
		fp_snd_reaction(frognum, "right");
	}else{
		//you didn't do it right, frog complains
		fp_snd_reaction(frognum, "wrong");
	}
}

//kill frog
function fp_killfrog(frogvar, frognum){
	console.log("RIP "+window["str_name_frog0"+String(frognum)]+". "+arr_death[Math.ceil(Math.random()*arr_death.length)-1]);
	//reset everything here
	window["str_frog0"+String(frognum)+"_curr_comment"] = "default";
	window["num_frog0"+String(frognum)+"_comment"] = -1;
	window["bool_death_frog0"+frognum] = true;
	//remove and check how many are dead (nofrogpets)
	document.getElementById(frogvar.id).remove();
	fp_checkdeaths();
}

//check if they're all dead
//if they are then open a little prompt
function fp_checkdeaths(){
	if(bool_death_frog01 && bool_death_frog02 && bool_death_frog03){
		var nofrogpets = document.createElement("div");
		nofrogpets.id = "nofrogpets";
		nofrogpets.className = "frogpet";
		//populate
		//window
		var nofrogpets_close = document.createElement("div");
		nofrogpets_close.id = "nofrogpets_close";
		nofrogpets_close.className = "frogpets";
		nofrogpets.appendChild(nofrogpets_close);
		nofrogpets_close.innerHTML = '<img src='+str_path_img+"/IMG_UI_WINDOW_NOFROGPETS.png"+'>';
		nofrogpets_close.style.position = 'absolute';
		//button close window
		var nofrogpets_close_btn = document.createElement("div");
		nofrogpets_close_btn.id = "nofrogpets_close_btn";
		nofrogpets_close_btn.className = "frogpets";
		nofrogpets.appendChild(nofrogpets_close_btn);
		nofrogpets_close_btn.innerHTML = '<img src='+str_path_img+"/IMG_UI_BUTTON_NOFROGPETS.png"+'>';
		nofrogpets_close_btn.style.position = 'absolute';
		nofrogpets_close_btn.style.top = '4px';
		nofrogpets_close_btn.style.left = '4px';
		nofrogpets_close_btn.style.cursor = 'pointer';
		//give me more!
		var nofrogpets_more_btn = document.createElement("div");
		nofrogpets_more_btn.id = "nofrogpets_more_btn";
		nofrogpets_more_btn.className = "frogpets";
		nofrogpets.appendChild(nofrogpets_more_btn);
		nofrogpets_more_btn.innerHTML = '<img src='+str_path_img+"/IMG_UI_MORE_NOFROGPETS.png"+'>';
		nofrogpets_more_btn.style.position = 'absolute';
		nofrogpets_more_btn.style.top = '100px';
		nofrogpets_more_btn.style.left = '100px';
		nofrogpets_more_btn.style.cursor = 'pointer';
		//place
		document.getElementsByTagName("body")[0].appendChild(nofrogpets);
		//style
		nofrogpets.style.position = 'absolute';
		nofrogpets.style.top = String(fp_returnDocHeight() / 2 - 140 / 2) + "px";
		nofrogpets.style.left = String(fp_returnDocWidth() / 2 - 270 / 2) + "px";
		//listener
		//close the window
		nofrogpets_close_btn.addEventListener("click", function(){ document.getElementById("nofrogpets").remove(); });
		//give me more!
		nofrogpets_more_btn.addEventListener("click", function(){ init_frogs(); document.getElementById("nofrogpets").remove(); });
	}
}

//closing a frog
function close_frog(frogvar, frognum){
	//
	//play sound
	if(frognum == 1){
		//stop first
		if(snd_oliver != undefined){
			snd_oliver.pause();
			fp_return_void();
		}
		snd_oliver = new Audio(str_path_snd+"/DEATHS/"+arr_snd_deaths_oliver[Math.ceil(Math.random()*arr_snd_deaths_oliver.length)-1]+".mp3");
		snd_oliver.play();
		snd_oliver.onended = function(){ fp_killfrog(frogvar, frognum); };
		//
	}
	if(frognum == 2){
		if(snd_ralph != undefined){
			snd_ralph.pause();
			fp_return_void();
		}
		snd_ralph = new Audio(str_path_snd+"/DEATHS/"+arr_snd_deaths_ralph[Math.ceil(Math.random()*arr_snd_deaths_ralph.length)-1]+".mp3");
		snd_ralph.play();
		snd_ralph.onended = function(){ fp_killfrog(frogvar, frognum); };
		//
	}
	if(frognum == 3){
		if(snd_princess != undefined){
			snd_princess.pause();
			fp_return_void();
		}
		snd_princess = new Audio(str_path_snd+"/DEATHS/"+arr_snd_deaths_princess[Math.ceil(Math.random()*arr_snd_deaths_princess.length)-1]+".mp3");
		snd_princess.play();
		snd_princess.onended = function(){ fp_killfrog(frogvar, frognum); };
		//
	}
	//animation
	fp_setFrogAnimation(frognum, "death");
	//clear interval
	clearInterval(window["int_frog0"+String(frognum)+"_move"]);
	
}

//play reaction audio (yes thank you, or not that is not what i asked for)
function fp_snd_reaction(frognum, str_reaction){
	//reactions (right or wrong)
	var arr_snd = [];
	//animation
	fp_setFrogAnimation(frognum, "talk");
	//check
	if(frognum == 1){
		if(snd_oliver != undefined){
			snd_oliver.pause();
			fp_return_void();
		}
		//get array
		arr_snd = window["arr_reactions_"+str_reaction+"_oliver"];
		snd_oliver = new Audio(str_path_snd + "/REACTIONS/" + arr_snd[Math.ceil(Math.random()*arr_snd.length)-1] + ".mp3");
		snd_oliver.play();
		snd_oliver.onended = function(){ fp_setFrogAnimation(frognum, "default"); };
	}
	if(frognum == 2){
		if(snd_ralph != undefined){
			snd_ralph.pause();
			fp_return_void();
		}
		//get array
		arr_snd = window["arr_reactions_"+str_reaction+"_ralph"];
		snd_ralph = new Audio(str_path_snd + "/REACTIONS/" + arr_snd[Math.ceil(Math.random()*arr_snd.length)-1] + ".mp3");
		snd_ralph.play();
		snd_ralph.onended = function(){ fp_setFrogAnimation(frognum, "default"); };
	}
	if(frognum == 3){
		if(snd_princess != undefined){
			snd_princess.pause();
			fp_return_void();
		}
		//get array
		arr_snd = window["arr_reactions_"+str_reaction+"_princess"];
		snd_princess = new Audio(str_path_snd + "/REACTIONS/" + arr_snd[Math.ceil(Math.random()*arr_snd.length)-1] + ".mp3");
		snd_princess.play();
		snd_princess.onended = function(){ fp_setFrogAnimation(frognum, "default"); };
	}
}

//play sound for traveling ("i am going to there")
function fp_snd_travel(frognum){
	//play travel sounds
	if(frognum == 1){
		//stop first
		if(snd_oliver != undefined){
			snd_oliver.pause();
			fp_return_void();
		}
		snd_oliver = new Audio(str_path_snd+"/MOVE/"+arr_snd_move_oliver[Math.ceil(Math.random()*arr_snd_move_oliver.length)-1]+".mp3");
		snd_oliver.play();
		
		//	
	}
	if(frognum == 2){
		if(snd_ralph != undefined){
			snd_ralph.pause();
			fp_return_void();
		}
		snd_ralph = new Audio(str_path_snd+"/MOVE/"+arr_snd_move_ralph[Math.ceil(Math.random()*arr_snd_move_ralph.length)-1]+".mp3");
		snd_ralph.play();
		
		//	
	}
	if(frognum == 3){
		if(snd_princess != undefined){
			snd_princess.pause();
			fp_return_void();
		}
		snd_princess = new Audio(str_path_snd+"/MOVE/"+arr_snd_move_princess[Math.ceil(Math.random()*arr_snd_move_princess.length)-1]+".mp3");
		snd_princess.play();
		
		//	
	}
}

function fp_sound_comment(frogvar, frognum){
	//animation
	fp_setFrogAnimation(frognum, "talk");
	//play sound
	if(frognum == 1){
		//stop first
		if(snd_oliver != undefined){
			snd_oliver.pause();
			fp_return_void();
		}
		snd_oliver = new Audio(str_path_snd+"/DEFAULT/"+arr_snd_default_oliver[Math.ceil(Math.random()*arr_snd_default_oliver.length)-1]+".mp3");
		snd_oliver.play();
		snd_oliver.onended = function(){ fp_setFrogAnimation(frognum, "default"); };
		//
	}
	if(frognum == 2){
		if(snd_ralph != undefined){
			snd_ralph.pause();
			fp_return_void();
		}
		snd_ralph = new Audio(str_path_snd+"/DEFAULT/"+arr_snd_default_ralph[Math.ceil(Math.random()*arr_snd_default_ralph.length)-1]+".mp3");
		snd_ralph.play();
		snd_ralph.onended = function(){ fp_setFrogAnimation(frognum, "default"); };
		//
	}
	if(frognum == 3){
		if(snd_princess != undefined){
			snd_princess.pause();
			fp_return_void();
		}
		snd_princess = new Audio(str_path_snd+"/DEFAULT/"+arr_snd_default_princess[Math.ceil(Math.random()*arr_snd_default_princess.length)-1]+".mp3");
		snd_princess.play();
		snd_princess.onended = function(){ fp_setFrogAnimation(frognum, "default"); };
		//
	}
}

function fp_sound_request(frogvar, frognum, str_sound){
	//animation
	fp_setFrogAnimation(frognum, "talk");
	//play sound
	if(frognum == 1){
		//stop first
		if(snd_oliver != undefined){
			snd_oliver.pause();
			fp_return_void();
		}
		snd_oliver = new Audio(str_path_snd+"/ACTION/"+str_sound+".mp3");
		snd_oliver.play();
		snd_oliver.onended = function(){ fp_setFrogAnimation(frognum, "default"); };
		//
	}
	if(frognum == 2){
		if(snd_ralph != undefined){
			snd_ralph.pause();
			fp_return_void();
		}
		snd_ralph = new Audio(str_path_snd+"/ACTION/"+str_sound+".mp3");
		snd_ralph.play();
		snd_ralph.onended = function(){ fp_setFrogAnimation(frognum, "default"); };
		//
	}
	if(frognum == 3){
		if(snd_princess != undefined){
			snd_princess.pause();
			fp_return_void();
		}
		snd_princess = new Audio(str_path_snd+"/ACTION/"+str_sound+".mp3");
		snd_princess.play();
		snd_princess.onended = function(){ fp_setFrogAnimation(frognum, "default"); };
		//
	}
}

//various "actions" for frog (comment, warn about dying, movement)
function frog_actions(frogvar, frognum){
	//vars for walking
	var num_x = parseInt(frogvar.style.left);
	var num_y = parseInt(frogvar.style.top);
	var num_targX = window["num_frog0"+String(frognum)+"_targX"];
	var num_targY = window["num_frog0"+String(frognum)+"_targY"];
	var num_distX = num_targX - num_x;
	var num_distY = num_targY - num_y;
	
	//get current "state" by reading what img is visible
	var idle = window.getComputedStyle(document.getElementById("frog0"+String(frognum)+"_window_frog_default"));
	var walk = window.getComputedStyle(document.getElementById("frog0"+String(frognum)+"_window_frog_walk"));
	
	var curr_comment = window["str_frog0"+String(frognum)+"_curr_comment"];
	var num_comment = window["num_frog0"+String(frognum)+"_comment"];
	
	var clip_name = "";
	//get name for associating with array (this part is sloppy, should re-visit)
	if(frognum == 1){
		clip_name = "oliver"
	}
	if(frognum == 2){
		clip_name = "ralph";
	}
	if(frognum == 3){
		clip_name = "princess";
	}
	
	//chatter & making requests -- rare
	if(Math.random()*100 < 2 && idle.visibility == "visible"){
		//default comment
		if(curr_comment == "default"){
			//sound_comment(clip, "default");
			fp_sound_comment(frogvar, frognum);
		}
		//set a request comment
		if(curr_comment == "default" && Math.random()*100 < 25){
			//set to new request
			window["str_frog0"+String(frognum)+"_curr_comment"] = arr_states[Math.ceil(Math.random()*arr_states.length)-1];
			curr_comment = window["str_frog0"+String(frognum)+"_curr_comment"];
			//reset first
			window["num_frog0"+String(frognum)+"_comment"] = -1;
			//set title of frog window
			document.getElementById("frog0"+String(frognum)+"window_frogname").innerHTML = window["str_name_frog0"+String(frognum)]+" "+fp_return_title(window["str_frog0"+String(frognum)+"_curr_comment"]);
			//say first on
			fp_sound_request(frogvar, frognum, window["arr_snd_action_"+curr_comment+"_"+clip_name][0]);
		}
		//nag (count through sound array, if end is reached frog dies)
		if(curr_comment != "default"){
			//count down
			window["num_frog0"+String(frognum)+"_comment"] += 1;
			num_comment = window["num_frog0"+String(frognum)+"_comment"];
			//check against array (kill frog)
			if(num_comment > window["arr_snd_action_"+curr_comment+"_"+clip_name].length - 1){
				close_frog(frogvar, frognum);
			}else{
				fp_sound_request(frogvar, frognum, window["arr_snd_action_"+curr_comment+"_"+clip_name][num_comment]);
			}
		}

	};
	
	//pick a location to move to (start migration) -- least rare
	if(Math.random()*100 > 98 && idle.visibility == "visible"){
		
		if(Math.random()*100 < 70){
			//play sound for traveling ("i am going to there")
			fp_snd_travel(frognum);
		}
		//get a random x y on screen to migrate to
		fp_randomTarget(frognum);
		fp_setFrogAnimation(frognum, "walk");
		
		//countdown till cancel
		window["num_frog0"+String(frognum)+"_cnt"] = 30;

	}
	//move to location (migrating now)
	//movement is intentionally jerky because that's cute and clumsy
	if(Math.random()*100 > 40 && walk.visibility == "visible"){
		
		frogvar.style.left = String(num_x+num_distX*.07)+'px';
		frogvar.style.top = String(num_y+num_distY*.07)+'px';
		window["num_frog0"+String(frognum)+"_cnt"] -= 1;
					
		//check if arrived
		if(parseInt(frogvar.style.left) == num_targX || parseInt(frogvar.style.top) == num_targY || window["num_frog0"+String(frognum)+"_cnt"] <= 0){
			fp_setFrogAnimation(frognum, "default");
		}
		
	}

}

function fp_appendToFrog(frogvar, str_id, str_imgpath){
	var window_elem = document.createElement("div");
	window_elem.id = str_id;
	window_elem.className = "frogpet";
	frogvar.appendChild(window_elem);
	window_elem.innerHTML = '<img src='+str_imgpath+'>';
	window_elem.style.position = 'absolute';
}

function fp_makefrog(frogvar, frognum){
	//this frog is now alive
	window["bool_death_frog0"+frognum] = false;
	//set name
	window["str_name_frog0"+String(frognum)] = arr_names[Math.ceil(Math.random()*arr_names.length)-1];
	//populate
	frogvar = document.createElement("div");
	frogvar.id = "frog0"+String(frognum);
	frogvar.className = "frogpet";
	//inner (populate)
	//default animation
	fp_appendToFrog(frogvar, "frog0"+String(frognum)+"_window_frog_default", str_path_img+"/IMG_FROG0"+String(frognum)+"_IDLE.gif");
	//walk animation
	fp_appendToFrog(frogvar, "frog0"+String(frognum)+"_window_frog_walk", str_path_img+"/IMG_FROG0"+String(frognum)+"_WALK.gif");
	//talk animation
	fp_appendToFrog(frogvar, "frog0"+String(frognum)+"_window_frog_talk", str_path_img+"/IMG_FROG0"+String(frognum)+"_TALK.gif");
	//death animation
	fp_appendToFrog(frogvar, "frog0"+String(frognum)+"_window_frog_death", str_path_img+"/IMG_FROG0"+String(frognum)+"_DEATH.gif");
	//window frame
	fp_appendToFrog(frogvar, "frog0"+String(frognum)+"_window_frame", str_path_img+"/IMG_UI_WINDOW.png");
	//various nav/ui
	fp_appendToFrog(frogvar, "frog0"+String(frognum)+"window_close", str_path_img+"/IMG_UI_CLOSE.png");
	fp_appendToFrog(frogvar, "frog0"+String(frognum)+"window_feed", str_path_img+"/IMG_UI_NAV_FEED.png");
	fp_appendToFrog(frogvar, "frog0"+String(frognum)+"window_pet", str_path_img+"/IMG_UI_NAV_PET.png");
	fp_appendToFrog(frogvar, "frog0"+String(frognum)+"window_hug", str_path_img+"/IMG_UI_NAV_HUG.png");
	fp_appendToFrog(frogvar, "frog0"+String(frognum)+"window_comfort", str_path_img+"/IMG_UI_NAV_COMFORT.png");
	//title - frogname
	var window_frogname = document.createElement("div");
	window_frogname.id = "frog0"+String(frognum)+"window_frogname";
	window_frogname.className = "frogpet";
	frogvar.appendChild(window_frogname);
	window_frogname.innerHTML = window["str_name_frog0"+String(frognum)];
	window_frogname.style.position = 'absolute';
	window_frogname.style.font = "14px arial, sans-serif";
	window_frogname.style.color = "black";
	window_frogname.style.top = '4px';
	window_frogname.style.left = '30px';
	
	//append all
	document.getElementsByTagName("body")[0].appendChild(frogvar);

	//after populating, other placements
	var btn_close = document.getElementById("frog0"+String(frognum)+"window_close");
	var btn_feed = document.getElementById("frog0"+String(frognum)+"window_feed");
	var btn_pet = document.getElementById("frog0"+String(frognum)+"window_pet");
	var btn_hug = document.getElementById("frog0"+String(frognum)+"window_hug");
	var btn_comfort = document.getElementById("frog0"+String(frognum)+"window_comfort");

	btn_close.style.top = '4px';
	btn_close.style.left = '4px';
	btn_close.style.cursor = 'pointer';
	
	btn_feed.style.top = '23px';
	btn_feed.style.left = '4px';
	btn_feed.style.cursor = 'pointer';
	
	btn_pet.style.top = '23px';
	btn_pet.style.left = '46px';
	btn_pet.style.cursor = 'pointer';
	
	btn_hug.style.top = '23px';
	btn_hug.style.left = '83px';
	btn_hug.style.cursor = 'pointer';
	
	btn_comfort.style.top = '23px';
	btn_comfort.style.left = '165px';
	btn_comfort.style.cursor = 'pointer';
	
	//nav listeners
	btn_close.addEventListener("click", function(){ close_frog(frogvar,frognum); });
	
	btn_feed.addEventListener("click", function(){ fp_handle_request(frogvar, frognum, "feed") });
	btn_pet.addEventListener("click", function(){ fp_handle_request(frogvar, frognum, "pet") });
	btn_hug.addEventListener("click", function(){ fp_handle_request(frogvar, frognum, "hug") });
	btn_comfort.addEventListener("click", function(){ fp_handle_request(frogvar, frognum, "comfort") });
	
	//style
	frogvar.style.position = 'absolute';
	//random placement
	frogvar.style.top = String(fp_math_randRange(fp_returnDocHeight() / 2 - num_frogHeight / 2 - 100, fp_returnDocHeight() / 2 - num_frogHeight / 2 + 100))+'px';
	frogvar.style.left = String(fp_math_randRange(fp_returnDocWidth() / 2 - num_frogWidth / 2 - 100, fp_returnDocWidth( )/ 2 - num_frogWidth / 2 + 100))+'px';
	frogvar.style.width = String(num_frogWidth)+'px';
	frogvar.style.height = String(num_frogHeight)+'px';
	frogvar.style.background = 'none';
	//hide all except for default animation
	fp_hidethis("frog0"+String(frognum)+"_window_frog_walk");
	fp_hidethis("frog0"+String(frognum)+"_window_frog_talk");
	fp_hidethis("frog0"+String(frognum)+"_window_frog_death");
	//show default
	//fp_showthis("frog0"+String(frognum)+"_window_frog_default");
	
	//intervals
	window["int_frog0"+String(frognum)+"_move"] = setInterval(function(){ frog_actions(frogvar, frognum); } , 100);
}

//optional title screen
//call this instead of init_frogs
//if you want to show the title screen first
function fp_titlescreen(){
	var title_frogpets = document.createElement("div");
	title_frogpets.id = "title_frogpets";
	title_frogpets.className = "frogpet";
	//populate
	//window
	var title_frogpets_window = document.createElement("div");
	title_frogpets_window.id = "title_frogpets_window";
	title_frogpets_window.className = "frogpets";
	title_frogpets.appendChild(title_frogpets_window);
	title_frogpets_window.innerHTML = '<img src='+str_path_img+"/IMG_TITLESCREEN_WINDOW.png"+'>';
	title_frogpets_window.style.position = 'absolute';
	//button close window
	var title_frogpets_btn_close = document.createElement("div");
	title_frogpets_btn_close.id = "title_frogpets_btn_close";
	title_frogpets_btn_close.className = "frogpets";
	title_frogpets.appendChild(title_frogpets_btn_close);
	title_frogpets_btn_close.innerHTML = '<img src='+str_path_img+"/IMG_TITLESCREEN_CLOSE.png"+'>';
	title_frogpets_btn_close.style.position = 'absolute';
	title_frogpets_btn_close.style.top = '4px';
	title_frogpets_btn_close.style.left = '4px';
	title_frogpets_btn_close.style.cursor = 'pointer';
	//give me more!
	var title_frogpets_btn_start = document.createElement("div");
	title_frogpets_btn_start.id = "title_frogpets_btn_start";
	title_frogpets_btn_start.className = "frogpets";
	title_frogpets.appendChild(title_frogpets_btn_start);
	title_frogpets_btn_start.innerHTML = '<img src='+str_path_img+"/IMG_TITLESCREEN_OK.png"+'>';
	title_frogpets_btn_start.style.position = 'absolute';
	title_frogpets_btn_start.style.top = '130px';
	title_frogpets_btn_start.style.left = '100px';
	title_frogpets_btn_start.style.cursor = 'pointer';
	//place
	document.getElementsByTagName("body")[0].appendChild(title_frogpets);
	//style
	title_frogpets.style.position = 'absolute';
	title_frogpets.style.top = String(fp_returnDocHeight() / 2 - 180 / 2) + "px";
	title_frogpets.style.left = String(fp_returnDocWidth() / 2 - 270 / 2) + "px";
	//listener
	//close the window
	title_frogpets_btn_close.addEventListener("click", function(){ document.getElementById("title_frogpets").remove(); });
	//give me more!
	title_frogpets_btn_start.addEventListener("click", function(){ init_frogs(); document.getElementById("title_frogpets").remove(); });
}

//start the frogs
function init_frogs(){
	if(bool_death_frog01){
		fp_makefrog(frog01, 1);
	}
	if(bool_death_frog02){
		fp_makefrog(frog02, 2);
	}
	if(bool_death_frog03){
		fp_makefrog(frog03, 3);
	}
}