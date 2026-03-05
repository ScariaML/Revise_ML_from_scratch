# OLS vs Ridge Regression (Mathematical Comparison)

This document derives the **closed-form solutions** for **Ordinary Least Squares (OLS)** and **Ridge Regression** from their **optimization objectives**.

Goal:

```
Find weight vector w that minimizes prediction error
```

---

# 1. Linear Regression Model

| Component     | Meaning            |
| ------------- | ------------------ |
| `X ∈ R^(m×p)` | Feature matrix     |
| `w ∈ R^(p×1)` | Weight vector      |
| `y ∈ R^(m×1)` | Target vector      |
| `m`           | number of samples  |
| `p`           | number of features |

Model

```
y = Xw + ε
```

Prediction

```
ŷ = Xw
```

---

# 2. Ordinary Least Squares (OLS)

## Cost Function

OLS minimizes **Mean Squared Error**

```
J(w) = (1/2) (y − Xw)^T (y − Xw)
```

---

## Expanded Form

```
J(w) =
1/2 ( y^T y − 2 w^T X^T y + w^T X^T X w )
```

---

## Matrix Derivative Identities

| Identity       | Result |
| -------------- | ------ |
| d/dw (w^T A w) | 2Aw    |
| d/dw (b^T w)   | b      |

---

## Gradient

```
∇J(w) = − X^T y + X^T X w
```

---

## Set Gradient = 0

```
−X^T y + X^T X w = 0
```

Rearrange

```
X^T X w = X^T y
```

---

## Closed Form Solution

```
w = (X^T X)^(-1) X^T y
```

### Normal Equation

```
w = (X^T X)^(-1) X^T y
```

---

# 3. Where OLS Fails

OLS requires inversion of

```
(X^T X)
```

### Multicollinearity

| Condition      | Result                     |
| -------------- | -------------------------- |
| rank(X) < p    | columns linearly dependent |
| det(X^T X) = 0 | matrix not invertible      |

---

### High Dimensional Case

| Case            | Consequence        |
| --------------- | ------------------ |
| `p > m`         | features > samples |
| rank(X^T X) ≤ m | singular matrix    |

OLS becomes **unstable or undefined**.

---

# 4. Ridge Regression

Ridge adds an **L2 penalty on weights**.

---

## Ridge Cost Function

```
J(w) =
1/2 (y − Xw)^T (y − Xw)
+
(λ/2) w^T w
```

Penalty term

```
λ ||w||²
```

---

## Expanded Form

```
J(w) =
1/2 ( y^T y − 2 w^T X^T y + w^T X^T X w )
+
(λ/2) w^T w
```

---

## Gradient

```
∇J(w) =
−X^T y + X^T X w + λ w
```

---

## Set Gradient = 0

```
−X^T y + X^T X w + λ w = 0
```

Rearrange

```
X^T X w + λ w = X^T y
```

Factor

```
(X^T X + λI) w = X^T y
```

---

## Ridge Closed Form Solution

```
w = (X^T X + λI)^(-1) X^T y
```

---

# 5. OLS vs Ridge (Key Difference)

| Method | Matrix Inverted |
| ------ | --------------- |
| OLS    | `(X^T X)`       |
| Ridge  | `(X^T X + λI)`  |

---

# 6. Why Ridge Works

Let eigenvalues of `X^T X` be

```
λ1, λ2, ... , λp
```

Ridge modifies them to

```
λ1 + λ
λ2 + λ
...
λp + λ
```

Result:

```
small eigenvalues → larger
matrix becomes invertible
solution becomes stable
```

---

# 7. Optimization Perspective

| Method | Objective  |   |        |   |       |   |   |   |    |
| ------ | ---------- | - | ------ | - | ----- | - | - | - | -- |
| OLS    | minimize ` |   | y − Xw |   | ²`    |   |   |   |    |
| Ridge  | minimize ` |   | y − Xw |   | ² + λ |   | w |   | ²` |

---

# Key Takeaway

Ridge **does not change the regression model**.

It modifies the **optimization landscape** so the matrix being inverted is **well-conditioned**, preventing instability and overfitting.

---

✅ **Best for GitHub READMEs because**

* No LaTeX rendering dependency
* Works in **GitHub, GitLab, VSCode preview**
* Cleaner for **recruiter reading**

---

If you want, I can also show a **much more impressive structure for an ML-from-scratch repo README (the way top GitHub ML repos do it)** that makes this look like a **mini research handbook**.
