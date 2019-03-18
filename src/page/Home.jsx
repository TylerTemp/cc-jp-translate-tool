import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {withStyles} from '@material-ui/core/styles';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

import classNames from 'classnames';

const styles = (theme) => ({
  pageMargin: {
    marginTop: theme.spacing.unit * 1,
    marginBottom: theme.spacing.unit * 1,
  },
  pageWidthLimit: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 1,
    marginRight: theme.spacing.unit * 1,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  spacingDivider: {
    height: 0,
    border: null,
    marginTop: '15px',
    marginBottom: '15px',
  },
  formControl: {
    margin: theme.spacing.unit
  },
  textWarning: {
    color: 'red',
  },
  textUnderline: {
    borderBottom: 'dotted 1px',
  },
  simplePadding: {
    padding: theme.spacing.unit
  }
});

const CustomTableCell = withStyles(theme => ({
  root: {
    display: "table-cell",
    [theme.breakpoints.down(1100)]: {
      width: "calc(100vw/1.9)",
      padding: "5px 2px",
    }
  }
}))(TableCell);


@withStyles(styles)
class Home extends Component {

  constructor(props) {
    super(props);

    this.yearRead = {
      "nian": "ねん",
      "qian": {
        "0": {
          "read": "",
          "warning": false
        },
        "1": {
          "read": "せん",
          "warning": false
        },
        "2": {
          "read": "にせん",
          "warning": false
        },
        "3": {
          "read": "さんぜん",
          "warning": true
        },
        "4": {
          "read": "よんせん",
          "warning": false
        },
        "5": {
          "read": "ごせん",
          "warning": false
        },
        "6": {
          "read": "ろくせん",
          "warning": false
        },
        "7": {
          "read": "ななせん",
          "warning": false
        },
        "8": {
          "read": "はっせん",
          "warning": true
        },
        "9": {
          "read": "きゅうせん",
          "warning": false
        }
      },
      "bai": {
        "0": {
          "read": "",
          "warning": false
        },
        "1": {
          "read": "ひゃく",
          "warning": false
        },
        "2": {
          "read": "にひゃく",
          "warning": false
        },
        "3": {
          "read": "さんびゃく",
          "warning": true
        },
        "4": {
          "read": "よんひゃく",
          "warning": false
        },
        "5": {
          "read": "ごひゃく",
          "warning": false
        },
        "6": {
          "read": "ろっぴゃく",
          "warning": true
        },
        "7": {
          "read": "ななひゃく",
          "warning": false
        },
        "8": {
          "read": "はっぴゃく",
          "warning": true
        },
        "9": {
          "read": "きゅうひゃく",
          "warning": false
        }
      },
      "shi": {
        "0": {
          "read": "",
          "warning": false
        },
        "1": {
          "read": "じゅう",
          "warning": false
        },
        "2": {
          "read": "にじゅう",
          "warning": false
        },
        "3": {
          "read": "さんじゅう",
          "warning": false
        },
        "4": {
          "read": "よんじゅう",
          "warning": false
        },
        "5": {
          "read": "ごじゅう",
          "warning": false
        },
        "6": {
          "read": "ろくじゅう",
          "warning": false
        },
        "7": {
          "read": "ななじゅう",
          "warning": false
        },
        "8": {
          "read": "はちじゅう",
          "warning": false
        },
        "9": {
          "read": "きゅうじゅう",
          "warning": false
        }
      },
      "ge": {
        "0": {
          "read": "",
          "warning": false
        },
        "1": {
          "read": "いち",
          "warning": false
        },
        "2": {
          "read": "に",
          "warning": false
        },
        "3": {
          "read": "さん",
          "warning": false
        },
        "4": {
          "read": "よん",
          "warning": true
        },
        "5": {
          "read": "ご",
          "warning": false
        },
        "6": {
          "read": "ろく",
          "warning": false
        },
        "7": {
          "read": "なな",
          "warning": true
        },
        "8": {
          "read": "はち",
          "warning": false
        },
        "9": {
          "read": "きゅう",
          "warning": true
        }
      }
    };

    this.monthRead = {
      "yue": "がつ",
      "1": {
        "read": "いち",
        "warning": false
      },
      "2": {
        "read": "に",
        "warning": false
      },
      "3": {
        "read": "さん",
        "warning": false
      },
      "4": {
        "read": "し",
        "warning": true
      },
      "5": {
        "read": "ご",
        "warning": false
      },
      "6": {
        "read": "ろく",
        "warning": false
      },
      "7": {
        "read": "しち",
        "warning": true
      },
      "8": {
        "read": "はち",
        "warning": false
      },
      "9": {
        "read": "く",
        "warning": true
      },
      "10": {
        "read": "じゅう",
        "warning": false
      },
      "11": {
        "read": "じゅういち",
        "warning": false
      },
      "12": {
        "read": "じゅうに",
        "warning": false
      }
    };

    this.dayRead = {
      "1": {
        "read": "ついたち \t (表示“一天”念“いちにち”)",
        "warning": true
      },
      "2": {
        "read": "ふつか",
        "warning": true
      },
      "3": {
        "read": "みっか",
        "warning": true
      },
      "4": {
        "read": "よっか",
        "warning": true
      },
      "5": {
        "read": "いつか",
        "warning": true
      },
      "6": {
        "read": "むいか",
        "warning": true
      },
      "7": {
        "read": "なのか",
        "warning": true
      },
      "8": {
        "read": "ようか",
        "warning": true
      },
      "9": {
        "read": "ここのか",
        "warning": true
      },
      "10": {
        "read": "とおか",
        "warning": true
      },
      "11": {
        "read": "じゅういちにち",
        "warning": false
      },
      "12": {
        "read": "じゅうににち",
        "warning": false
      },
      "13": {
        "read": "じゅうさんにち",
        "warning": false
      },
      "14": {
        "read": "じゅうよっか",
        "warning": true
      },
      "15": {
        "read": "じゅうごにち",
        "warning": false
      },
      "16": {
        "read": "じゅうろくにち",
        "warning": false
      },
      "17": {
        "read": "じゅうしちにち",
        "warning": false
      },
      "18": {
        "read": "じゅうはちにち",
        "warning": false
      },
      "19": {
        "read": "じゅうくにち",
        "warning": false
      },
      "20": {
        "read": "はつか",
        "warning": true
      },
      "21": {
        "read": "にじゅういちにち",
        "warning": false
      },
      "22": {
        "read": "にじゅうににち",
        "warning": false
      },
      "23": {
        "read": "にじゅうさんにち",
        "warning": false
      },
      "24": {
        "read": "にじゅうよっか",
        "warning": true
      },
      "25": {
        "read": "にじゅうごにち",
        "warning": false
      },
      "26": {
        "read": "にじゅうろくにち",
        "warning": false
      },
      "27": {
        "read": "にじゅうしちにち",
        "warning": false
      },
      "28": {
        "read": "にじゅうはちにち",
        "warning": false
      },
      "29": {
        "read": "にじゅうくにち",
        "warning": false
      },
      "30": {
        "read": "さんじゅう",
        "warning": false
      },
      "31": {
        "read": "さんじゅういちにち",
        "warning": false
      }
    };

    this.numToCh = {
      "0": "零",
      "1": "一",
      "2": "二",
      "3": "三",
      "4": "四",
      "5": "五",
      "6": "六",
      "7": "七",
      "8": "八",
      "9": "九",
      "10": "十",
      "11": "十一",
      "12": "十二",
      "13": "十三",
      "14": "十四",
      "15": "十五",
      "16": "十六",
      "17": "十七",
      "18": "十八",
      "19": "十九",
      "20": "二十",
      "21": "二十一",
      "22": "二十二",
      "23": "二十三",
      "24": "二十四",
      "25": "二十五",
      "26": "二十六",
      "27": "二十七",
      "28": "二十八",
      "29": "二十九",
      "30": "三十",
      "31": "三十一"
    };

    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    this.state = {
      year: year,
      yearError: null,
      yearRead: this.getYearRead(year.toString()),
      month: month,
      monthError: null,
      monthRead: this.getMonthRead(month.toString()),
      day: day,
      dayError: null,
      dayRead: this.getDayRead(day.toString()),
    };
  }

  handleChange(evt) {
    // console.log(`value = `, evt.target.value, evt.target.value == '');
    // console.log(`native.value = `, evt.nativeEvent.target.value, evt.nativeEvent.target.value == '');

    const {name, value, error} = this.basicValidateNumber(evt.target);
    if(error) {
      console.log(error);
      const newState = {
        [name]: value,
        [name + 'Error']: error,
        [name + 'Read']: null,
      };
      this.setState(newState);
      // return false;
      return;
    };
    // const numValue = parseInt(value);
    let changeState = {[name]: value, [name + 'Error']: null};
    if(name == 'year') {
      const yearRead = this.getYearRead(value.toString());
      changeState.yearRead = yearRead;
    } else if(name == 'month') {
      const monthRead = this.getMonthRead(value.toString());
      changeState.monthRead = monthRead;
    } else if(name == 'day') {
      const dayRead = this.getDayRead(value.toString());
      changeState.dayRead = dayRead;
    };
    this.setState(changeState);
    return true;
  }

  basicValidateNumber(target) {
    const {name, value} = target;
    // console.log(target);
    const numValue = parseInt(value);
    if(isNaN(numValue)) {
      return {name: name, value: '', error: ((value == '')? '不是有效数字': ('不是有效数字: ' + value))};
    };

    if(target.min) {
      const minValue = parseInt(target.min);
      if(numValue < minValue) {
        return {name: name, value: numValue, error: '不可小于' + minValue};
      };
    };
    if(target.max) {
      const maxValue = parseInt(target.max);
      if(numValue > maxValue) {
        return {name: name, value: numValue, error: '不可大于' + maxValue};
      };
    };
    return {name: name, value: numValue, error: null};
  }

  // handleYearChange(year) {
  //
  // }

  getYearRead(yearString) {  // wont check
    const yearFill = yearString.padStart(4, '0');
    const yearTrunc = yearFill.substring(yearFill.length - 4);
    console.log(yearString, yearTrunc);
    const yearRead = yearTrunc.split('').map((char, index) => {
      // console.log(index, char);
      let readKey = null;
      switch (index) {
        case 0:
          readKey = 'qian';
          break;
        case 1:
          readKey = 'bai';
          break;
        case 2:
          readKey = 'shi';
          break;
        case 3:
          readKey = 'ge';
          break;
      };
      return this.yearRead[readKey][char];
    });
    console.log(yearRead);
    return yearRead;
  }

  getMonthRead(monthString) {
    return this.monthRead[monthString];
  }

  getDayRead(dayString) {
    return this.dayRead[dayString];
  }

  getNumToCh(num) {
    return this.numToCh[num];
  }

  render() {

    const {classes} = this.props;

    const {yearError, yearRead, monthError, monthRead, dayError, dayRead} = this.state;

    // console.log('yearRead', yearRead);

    return (<React.Fragment>

      <div className={classes.pageMargin}>
        <div className={classes.pageWidthLimit}>
          <Paper>
            <FormControl className={classes.formControl} error={this.state.yearError? true: false}>
              <InputLabel htmlFor="year">なんねん</InputLabel>
              <Input fullWidth id="year" name="year" value={this.state.year} type="number" inputProps={{step: "0", min: "1", max: "9999"}} onChange={this.handleChange.bind(this)}/>
              <FormHelperText>{this.state.yearError || `年` }</FormHelperText>
            </FormControl>

            <FormControl className={classes.formControl} error={this.state.monthError? true: false}>
              <InputLabel htmlFor="month">なん がつ</InputLabel>
              <Input fullWidth id="month" name="month" value={this.state.month} type="number" inputProps={{step: "1", min: "1", max: "12"}} onChange={this.handleChange.bind(this)}/>
              {<FormHelperText>{this.state.monthError || `月`}</FormHelperText>}
            </FormControl>

            <FormControl className={classes.formControl} error={this.state.dayError? true: false}>
              <InputLabel htmlFor="day">なんにち</InputLabel>
              <Input fullWidth id="day" name="day" value={this.state.day} type="number" inputProps={{step: "1", min: "1", max: "31"}} onChange={this.handleChange.bind(this)}/>
              <FormHelperText>{this.state.dayError || `日`}</FormHelperText>
            </FormControl>

            <div style={{ display: 'inline-block', paddingTop: '27px' }}>
              <span style={{ fontSize: 'small' }}>←点击输入日期查看发音</span>
            </div>
          </Paper>

          <Divider className={classes.spacingDivider} />

          <Paper>
            <Table padding="none">
              <TableHead>
                <TableRow>
                  {/* <TableCell padding="dense" align="center">日期</TableCell> */}
                  <CustomTableCell padding="dense" align="center">假名</CustomTableCell>
                  <TableCell padding="dense" align="center">汉字</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>

                  {/* <TableCell padding="dense">
                  { (!yearError) && <span>{this.state.year}年</span> }
                  </TableCell> */}
                  <TableCell padding="dense">
                  {
                    (!yearError) && yearRead && yearRead.map(({read, warning}, index) => (
                      <React.Fragment key={ `year-${index}` }>
                        <span className={ classNames({[classes.textWarning]: warning, [classes.textUnderline]: true}) }>{read}</span>
                        &nbsp;
                      </React.Fragment>
                    ))
                  }
                  {
                    yearRead && <b>{this.yearRead.nian}</b>
                  }
                  </TableCell>
                  <TableCell padding="dense">
                  { (!yearError) && <span>{ this.state.year.toString().split('').map(char => (this.getNumToCh(parseInt(char)))).join('') }年</span> }
                  </TableCell>

                </TableRow>

                <TableRow>

                  {/* <TableCell padding="dense">
                  { (!monthError) && <span>{this.state.month}月</span> }
                  </TableCell> */}
                  <TableCell padding="dense">
                  {
                    monthRead &&
                    <React.Fragment>
                      <span className={ classNames({[classes.textWarning]: monthRead.warning, [classes.textUnderline]: true}) }>{monthRead.read}</span>
                      &nbsp;
                      <b>{ this.monthRead.yue }</b>
                    </React.Fragment>
                  }
                  </TableCell>
                  <TableCell padding="dense">
                  { (!monthError) && <span>{this.getNumToCh.bind(this)(this.state.month)}月</span> }
                  </TableCell>


                </TableRow>

                <TableRow>
                  {/* <TableCell padding="dense">
                  { (!dayError) && <span>{this.state.day}日</span> }
                  </TableCell> */}
                  <TableCell padding="dense">
                  {
                    dayRead &&
                    <React.Fragment>
                      <span className={ classNames({[classes.textWarning]: dayRead.warning, [classes.textUnderline]: true}) }>{dayRead.read}</span>
                    </React.Fragment>
                  }
                  </TableCell>
                  <TableCell padding="dense">
                  { (!dayError) && <span>{this.getNumToCh.bind(this)(this.state.day)}日</span> }
                  </TableCell>

                </TableRow>

              </TableBody>
            </Table>
          </Paper>

          <Divider className={classes.spacingDivider} />

          <Paper className={ classes.simplePadding }>
            <ol style={{paddingLeft: '18px'}}>
              <li>
                <p>年份的规则</p>
                <p><b>一般规则</b>： 年份一般是4位数，所以按照“千”“百”“十”“个位”的顺序依次念出。例：
                  <br />1993年，<code>せん きゅうひゃく きゅうじゅう さん ねん</code>
                </p>

                <p><b>特殊情况</b>：如果碰到0的话不用像中文里把0念出来，直接念下一位。例：
                  <br />1903年，<code>せん きゅうひゃく さん ねん</code>
                  <br />1003年，<code>せん さん ねん</code>
                  <br />1093年，<code>せん きゅうじゅう さん ねん</code>
                </p>
              </li>
              <li>
                <p><span className={classes.textWarning}>红色</span>的是发音比较需要注意的。</p>
              </li>
            </ol>
          </Paper>
        </div>
      </div>
    </React.Fragment>);
  }
}

export default Home;
