# OLS vs Ridge Regression (Matrix Derivation)

This section derives the **closed-form solutions** for:

* **Ordinary Least Squares (OLS)**
* **Ridge Regression**

by minimizing their **cost functions with respect to the weight vector ( w )**.

---

# 1. Linear Regression Setup

| Symbol                          | Meaning            |
| ------------------------------- | ------------------ |
| (X \in \mathbb{R}^{m \times p}) | Feature matrix     |
| (w \in \mathbb{R}^{p \times 1}) | Weight vector      |
| (y \in \mathbb{R}^{m \times 1}) | Target vector      |
| (m)                             | number of samples  |
| (p)                             | number of features |

Model

$$
y = Xw + \epsilon
$$

Prediction

$$
\hat{y} = Xw
$$

---

# 2. Ordinary Least Squares (OLS)

## Cost Function

OLS minimizes **Mean Squared Error**

$$
J(w) = \frac{1}{2}(y - Xw)^T(y - Xw)
$$

---

## Expand the Quadratic Form

$$
J(w)=\frac{1}{2}(y^Ty - y^TXw - w^TX^Ty + w^TX^TXw)
$$

Since

$$
y^TXw = w^TX^Ty
$$

we obtain

$$
J(w)=\frac{1}{2}(y^Ty - 2w^TX^Ty + w^TX^TXw)
$$

---

## Matrix Derivative Identities

| Expression | Derivative |
| ---------- | ---------- |
| ( w^TAw )  | (2Aw)      |
| ( b^Tw )   | (b)        |

---

## Gradient

$$
\nabla_w J =

* X^Ty + X^TXw
  $$

---

## Set Gradient = 0

$$

* X^Ty + X^TXw = 0
  $$

$$
X^TXw = X^Ty
$$

---

## OLS Closed Form

$$
\boxed{w = (X^TX)^{-1}X^Ty}
$$

This is the **Normal Equation**.

---

# 3. When OLS Fails

OLS requires the inverse of

$$
X^TX
$$

| Problem               | Mathematical Condition | Result             |
| --------------------- | ---------------------- | ------------------ |
| Multicollinearity     | (rank(X) < p)          | (X^TX) singular    |
| High dimensional data | (p > m)                | (rank(X^TX) \le m) |
| Near dependence       | very small eigenvalues | unstable inverse   |

---

# 4. Ridge Regression

Ridge adds **L2 regularization** to penalize large weights.

---

## Ridge Cost Function

$$
J(w)=\frac{1}{2}(y-Xw)^T(y-Xw)+\frac{\lambda}{2}w^Tw
$$

---

## Expand

$$
J(w)=
\frac{1}{2}(y^Ty - 2w^TX^Ty + w^TX^TXw)
+
\frac{\lambda}{2}w^Tw
$$

---

## Gradient

Derivative components:

| Term           | Gradient          |
| -------------- | ----------------- |
| Data loss      | ( -X^Ty + X^TXw ) |
| Regularization | ( \lambda w )     |

Total gradient

$$
\nabla_w J =

* X^Ty + X^TXw + \lambda w
  $$

---

## Set Gradient = 0

$$

* X^Ty + X^TXw + \lambda w = 0
  $$

$$
X^TXw + \lambda w = X^Ty
$$

Factor (w)

$$
(X^TX + \lambda I)w = X^Ty
$$

---

## Ridge Closed Form

$$
\boxed{w = (X^TX + \lambda I)^{-1}X^Ty}
$$

---

# 5. Why Ridge Works

Let eigenvalues of (X^TX) be

$$
\lambda_1,\lambda_2,...,\lambda_p
$$

OLS inversion uses

$$
(X^TX)^{-1}
$$

which becomes unstable when some eigenvalues ≈ 0.

---

## Ridge Eigenvalue Shift

Ridge modifies the matrix:

$$
X^TX + \lambda I
$$

Eigenvalues become

$$
\lambda_i + \lambda
$$

| Effect                     | Result                    |
| -------------------------- | ------------------------- |
| Small eigenvalues increase | matrix becomes invertible |
| Condition number improves  | stable solution           |

