# 1 페이지에 들어가야함

## 전체 단원
1.  Abstractions
1.  Marks and Channels
1.  Interactive Views
1.  Multivariable Tables
1.  Maps
1.  Color
1.  Aggregation
1.  Networks
1.  Rules of Thumb

# 속성(Attribute)들의 3가지 종류
## Categoriacal attribute
### 종류1: Categorical attribute
* 절대적인(implicit) 순서가 없는 데이터이다.
* 종종 계층적인 구조를 갖을수 있다.
* 카테고리들은 2가지가 같은지 다른지만 구별할 수 있다.
    * 예: 둘다 같은 사과인가? 한개는 오렌지이고 나머지는 사과인가?
* 외부적(external)으로 부여한 순서는 존재할 수 있다.
    * 예: 알파벳 순서대로 과일을 정렬한다.
* 예: 영화 장르, 파일 확장자, 도시 이름, 과일 이름, 동물의 종, 도로 이름, 자동차 모델, 치즈의 종류, 눈의 색깔, 사람 이름, 책의 ISBN, 스타벅스 음료의 크기(Grande, Venti)

## Ordered attribute
* Ordered attribute은 절대적인(implicit) 순서가 있는 데이터이다.
### 종류2: Ordinal attribute
* 숫자적으로 비교와 연산(덧셈, 뺄셈)은 불가능 하지만, 비교가 가능한 순서가 있는 데이터이다.
* 구체적인 단위가 없다.
* 예: 옷의 사이즈(S,M,L), 영화 10순위, **영화 평점**, 은행 대기번호, 계란의 크기(중란, 왕란), 운동선수의 체급, ABCDF로 나타낸 성적, 공룡의 종, 학번, 자동차등록번호, 음료의 이름

### 종류3: Quantitative attribute
* 숫자적으로 비교와 연산(덧셈, 뺄셈)이 가능한 순서가 있는 데이터이다.
* 구체적인 단위가 있다.
* 예: 키(cm), 몸무게(kg), 온도(°C), 주가, 날짜, 버스가 회차하는 횟수(번), 태풍이 2021년도에 일어난 횟수(번), 이빨의 갯수(개), 타이어 공기압(psi), 실업률(%), 요트의 길이(미터), 사람의 평균 몸무게(kg), 뜨거운 물의 온도(°C)

## 표시 (Mark)
* 아이템과 링크를 묘사하는 가장 기본적인 기하학 요소(element)이다.
* 이미지에서 가장 기본적이 시각적 요소(element)이다.
### 표시의 4가지 차원
* 표시(mark)는 필요로 하는 공간적 차원에 따라 4가지로 분류 할수 있다.
#### 0 차원 표시(0 dimensional mark): 점(point)
#### 1 차원 표시(1 dimensional mark): 선분(line)
#### 2 차원 표시(2 dimensional mark): 면적(area)
#### 3 차원 표시(3 dimensional mark): 부피(volume)

## 시각적 채널(Channel)
* 표시(Mark)들의 외형을 조정하는 방법을 시각적 채널이라고 한다.
* 표시의 속성으로 정보를 나타내는 것을 시각적 채널이라고 한다.
### 다양한 시각적 채널
#### 위치적 채널(Spatial position channel)
* 가로의(Horizontal)
* 세로의(Vertical)
* Both
#### 색상적 채널(Color channel)
* 색깔의 이름(Hue)
* 색깔(Hue)의 강도(Saturation)
* 면적을 통과하는 빛의 양(Luminance)
#### 크기적 채널(Size channel)
* 1차원 표시(1d mark)인 경우: 길이(length)
* 2차원 표시(2d mark)인 경우: 면적(area)
* 3차원 표시(3d mark)인 경우: 부피(volume)
#### 움직임적 채널(Motion-oriented channel)
* 표시의 움직임의 방향(Direction of motion)
* 속도(Velocity)
#### 각도적 채널(Angle 또는 Tilt)
#### 휜정도 채널(Curvature)
#### 모양적 채널(Shape)
* 예: 삼각형, 별, 선 등
### 시각적 채널의 종류
* 인간은 2가지 종류의 감각(sensory modality)를 가지고 있다.
#### 존재(Identity) 채널
* 어떤 표시(mark)가 어디에 있는지를 인지할 수 있다.
* 예: 모양, Hue, 움직임

#### 크기(Magnitude) 채널
* 얼마나 많은 양이 있는지 인지할 수 있다.
예: 길이, 면적, 부피, 빛의 양(luminance), 각도, 색깔의 강도(saturation)

### 표시(Mark)의 종류
* 개체(Item, Node)를 상징하는 표시(Mark)
    * 예: 점, 선, 면
* 개체들의 연결을 상징하는 표시(Mark)
    * 연결 표시(Connection Mark): 2개의 개체 사이의 관계를 나타내는 선분 형태의 표시 (line mark)
    * 포함 표시(Containment Mark, Enclosure Mark, Nesting Mark): 개체들을 묶고 계층적으로 나타낼 수 있는 면적 표시(Area mark)

## 표(Table) 7단원
* 표로 정리된 자료(Tabular data)를 배치(arrange)할수 있는 시각적 인코딩 방법 4가지
    * Express value
    * Separate region
    * Order region
    * Align region
* 축의 배치(Spatial axes orientation)
    * 직선의(Rectilinear)
    * 평행의(Parallel)
    * 방사상의(Radial)

## Key와 Value
* Key
    * 개체(item)을 특정할 수 있다.
    * Categorical하거나 Ordinal 할 수 있다.
* Value
    * key에 의존적인 속성이다.
    * Categorical 또는 Ordinal 또는 Quantitative 할 수 있다.
    * Level: Categorical 하거나 Ordinal 속성 중에서 unique한것을 level이라고 부른다.

### 산포도(Scatter plot)
* 가로(horizontal)하고 세로(vertical) 공간 위치 채널과 point 표시(0d mark)를 이용해서 2개의 양적 값(quantitative value) 변수를 인코딩한다.
* 산포도를 이용하는 경우
    * 트렌드를 찾을때
    * outlier를 찾을때
    * 분포(distribution)을 찾을때
    * 상관 관계(correlation)를 찾을때
    * 덩어리(cluster)를 찾을때
* 수백개의 개체(item)까지 나타낼 수 있다.

### Region
* 서로 같은 데이터를 나타내는 영역
* region을 분석 하는 3가지 방법
    * Categorical 속성인 경우: 나누기(Seperation)
    * 순서가 있는 속성인 경우: 정렬(alignment), 순서넣기(ordering)

### 막대표(Bar chart)
* 1개의 categorical key 속성과 1개의 양적 값(quantitative value) 속성을 갖는다.
* 세로(vertical) 위치: 선분 표시(line mark)로 값 속성(value attribute)를 표현해 준다.
* 가로(horizontal) 위치: Key 속성을 나누어 준다.
* 막대표를 이용하는 경우
    * 값을 찾아야 하는 경우
    * 값을 비교해야 하는 경우
* 수백개의 개체(item)까지 나타낼 수 있다. 하지만, 천개의 개체는 표현이 불가능 하다.

### Stacked bar chart
### Stream graph
### Dot/Line chart
### Indexed line chart
### Gantt chart
### Slope graph
### Heat map
### Cluster heat map
### Radial bar chart
### Star plot
### Radar plot
### Pie chart
### Cox comb chart
### Normalized stacked bar chart
### Glyph map
### SPLOM
### Parallel coordinate



## Interactive View 11단원




## Multiple View 12단원




## 지도 8단원



## 네트워크 9단원

## Color 10단원